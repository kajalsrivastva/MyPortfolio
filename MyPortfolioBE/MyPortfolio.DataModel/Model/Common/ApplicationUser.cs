using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortfolio.DataModel.Model.Common
{
    public class ApplicationUser:IdentityUser
    {
        public bool IsActive { get; set; } = true;
    }
    public class ApplicationRole :IdentityRole { }
}
