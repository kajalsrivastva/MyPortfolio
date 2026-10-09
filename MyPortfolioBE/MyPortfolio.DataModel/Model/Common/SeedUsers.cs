using MyPortfolio.Core.Helper;
using MyPortfolio.DataModel.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortfolio.DataModel.Model.Common
{
    public class SeedUsers
    {
        public static async Task SeedDataAsync(IServiceProvider serviceProvider)
        {
            using var scope = serviceProvider.CreateScope();
            var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<ApplicationRole>>();
            var userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

            //seed roles using description attribute
            foreach (Roles role in Enum.GetValues(typeof(Roles))){
                var roleName = EnumHelper.GetEnumDescription(role);
                if (!await roleManager.RoleExistsAsync(roleName))
                {
                    await roleManager.CreateAsync(new ApplicationRole { Name = roleName });
                }
            }

            //Seed default users 
            var adminEmail = "support@yopmail.com";
            var adminUser = await userManager.FindByEmailAsync(adminEmail);
            if (adminUser == null)
            {
                var user = new ApplicationUser
                {
                    UserName = adminEmail,
                    Email = adminEmail,
                    EmailConfirmed = true,
                    IsActive = true,
                    PhoneNumber = "1234567890"
                };
                var result = await userManager.CreateAsync(user, "Admin@123");
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(user, EnumHelper.GetEnumDescription(Roles.Admin));
                    var appUsers = new AppUsers()
                    {
                        FirstName = "Support",
                        LastName = "Admin",
                        AspNetUserId = user.Id,
                        IsActive = true,
                        CreatedDate = DateTime.Now
                    };
                    context.AppUsers.Add(appUsers);
                    await context.SaveChangesAsync(); 
                }
            }
        }
    }
}
