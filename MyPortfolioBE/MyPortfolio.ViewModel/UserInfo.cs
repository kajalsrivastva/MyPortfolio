using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortfolio.ViewModel
{
    public class UserInfo
    {
        public string Id { get; set; }
        public int AppUserId { get; set; }
        public string Email { get; set; } 
        public string UserName { get; set; } 
        public string FirstName { get; set; } 
        public string LastName { get; set; } 
        public string PhoneNumber { get; set; }
        public string[] UserRoles { get; set; }
        public bool IsActive { get; set; }
        public string Token { get; set; }
    }
    public class LoginResponse : BaseResponse
    {
        public UserInfo ResponseData { get; set; }
    }
}
