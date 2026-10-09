using MyPortfolio.DataModel.Model.Common;
using MyPortfolio.Repositories.Abstract;
using MyPortfolio.Services.Abstract;
using MyPortfolio.ViewModel;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortfolio.Services.Concrete
{
    public class AccountsServices : IAccountsServices
    {
        private readonly IAccountsRepository _accountsRepository;
        private readonly UserManager<ApplicationUser> _userManager;
        public AccountsServices(IAccountsRepository accountsRepository,UserManager<ApplicationUser> userManager)
        {
            _accountsRepository = accountsRepository;
            _userManager = userManager;
        }

        public async Task<UserInfo> GetUserInfoByUserName(string email)
        {
            var result = await _accountsRepository.GetUserInfoByUserName(email);
            return result;
        }

        public async Task<Tuple<SignInResult, bool>> PasswordSignIn(LoginRequestVM login)
        {
            var signInResult = await _accountsRepository.PasswordSignIn(login);
            var user = await _userManager.FindByEmailAsync(login.Email.Trim());

            if (user == null) return Tuple.Create(SignInResult.Failed, false);

            var isActive = user.IsActive &&
                           (!user.LockoutEnabled || (user.LockoutEnd == null || user.LockoutEnd <= DateTimeOffset.UtcNow));

            return Tuple.Create(signInResult, isActive);
        }
    }
}
