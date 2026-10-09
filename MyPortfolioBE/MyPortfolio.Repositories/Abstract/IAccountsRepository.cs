using MyPortfolio.ViewModel;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortfolio.Repositories.Abstract
{
    public interface IAccountsRepository
    {
        Task<SignInResult> PasswordSignIn(LoginRequestVM login);
        Task<UserInfo> GetUserInfoByUserName(string email);
    }
}
