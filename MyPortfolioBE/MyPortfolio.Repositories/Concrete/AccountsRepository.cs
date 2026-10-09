using MyPortfolio.Core.Helper;
using MyPortfolio.DataModel.Data;
using MyPortfolio.DataModel.Model;
using MyPortfolio.DataModel.Model.Common;
using MyPortfolio.Repositories.Abstract;
using MyPortfolio.ViewModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortfolio.Repositories.Concrete
{
    public class AccountsRepository : IAccountsRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        public AccountsRepository(ApplicationDbContext context, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<UserInfo> GetUserInfoByUserName(string email)
        {

            var userData = new UserInfo();
            var normalizedEmail = email.Trim().ToLower();
            var user = await _userManager.FindByEmailAsync(normalizedEmail);
            var userDetails = await _context.AppUsers.FirstOrDefaultAsync(a => a.IsActive && a.AspNetUserId == user.Id);

            var roles = await _userManager.GetRolesAsync(user);

            if (roles.Contains(Roles.Admin.ToString())
                    || roles.Contains(Roles.Lawyer.ToString())
                    || roles.Contains(Roles.User.ToString())
                )
            {
                userData.UserName = user.UserName;
                userData.Email = user.Email;
                userData.Id = user.Id;
                userData.AppUserId = userDetails != null ? userDetails.Id : 0;
                userData.UserRoles = roles.ToArray();
                userData.IsActive = user.IsActive;
                userData.FirstName = userDetails != null ? userDetails.FirstName : null;
                userData.LastName = userDetails != null ? userDetails.LastName : null;
                userData.PhoneNumber = user.PhoneNumber;
            };
            return userData;
        }
        
       public async Task<SignInResult> PasswordSignIn(LoginRequestVM login)
        {
            var user = await _userManager.FindByEmailAsync(login.Email.Trim());
            if (user == null)
            {
                return SignInResult.Failed;
            }

            // Use SignInManager to check password
            var result = await _signInManager.CheckPasswordSignInAsync(user, login.Password, lockoutOnFailure: false);
            return result;
        }
    }
}
