using MyPortfolio.ViewModel;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortfolio.Services.Abstract
{
    public interface IAccountsServices
    {
        Task<Tuple<SignInResult, bool>> PasswordSignIn(LoginRequestVM login);
        Task<UserInfo> GetUserInfoByUserName(string username);
    }
}
