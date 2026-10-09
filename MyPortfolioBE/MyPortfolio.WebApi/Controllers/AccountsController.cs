using MyPortfolio.Core.Helper;
using MyPortfolio.Core.Serilog;
using MyPortfolio.DataModel.Model.Common;
using MyPortfolio.Services.Abstract;
using MyPortfolio.Services.Concrete;
using MyPortfolio.ViewModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MyPortfolio.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountsController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IAccountsServices _accountsServices;
        private readonly JWTSettings _jwtSettings;
        public AccountsController(UserManager<ApplicationUser> userManager, IAccountsServices accountsServices, IOptions<JWTSettings> jwtSettings)
        {
            _userManager = userManager;
            _accountsServices = accountsServices;
            _jwtSettings = jwtSettings?.Value;
        }

        [Route("~/api/login")]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginRequestVM login)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    IActionResult response = Unauthorized();
                    login.Email = login.Email.Trim();
                    var res = await AuthenticateUser(login);
                    return Ok(res);
                }
                else
                {
                    return Ok(ModelState);
                }
            }
            catch (Exception ex)
            {
                Serilogs.LogError(SerilogKeywordProject.MyPortfolio, SerilogKeywordController.Accounts, SerilogKeywordAction.Login, null, ex);
                return StatusCode((int)ResponseCodes.Error);
            }
        }

        private async Task<LoginResponse> AuthenticateUser(LoginRequestVM login)
        {
            try
            {
                LoginResponse response = new LoginResponse();

                var result = await _accountsServices.PasswordSignIn(login);
                var userData = await _accountsServices.GetUserInfoByUserName(login.Email);
                if (userData == null)
                {
                    response.ResponseCode = ResponseCodes.InvalidModel;
                    response.ResponseMessage = "User not found";
                    return response;
                }
                if (!userData.IsActive)
                {
                    response.ResponseCode = ResponseCodes.InvalidModel;
                    response.ResponseMessage = SystemMessages.InvalidUser;
                    return response;
                }
                if (result.Item1.Succeeded && userData.IsActive)
                {
                    // Get additional user details from MongoDB User collection
                    //var userDetails = await _accountsServices.GetUserInfoByUserName(login.Email);  //userDetails;

                    userData.Token = GenerateJSONWebToken(login, userData.UserRoles.ToArray(), userData);

                    response.ResponseData = userData;
                    response.ResponseCode = ResponseCodes.Success;
                    response.ResponseMessage = SystemMessages.UserLoginSuccessfully;
                }
                else
                {
                    response.ResponseCode = ResponseCodes.InvalidModel;
                    response.ResponseMessage = SystemMessages.InvalidEmailPassword;
                }

                return response;
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        private string GenerateJSONWebToken(LoginRequestVM login, string[] roles, UserInfo userData)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSettings.Key));

            var claims = new List<Claim>
            {
               new Claim(JwtRegisteredClaimNames.Sub, userData.Id),
               new Claim(JwtRegisteredClaimNames.Email, login.Email ?? null),
               new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };
            // ✅ Add Roles
            if (roles != null)
            {
                foreach (var role in roles)
                {
                    claims.Add(new Claim(ClaimTypes.Role, role));
                }
            }

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _jwtSettings.Issuer,
                audience: _jwtSettings.Audience,
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(_jwtSettings.TokenExpiry_Minutes),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
