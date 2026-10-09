using MyPortfolio.DataModel.Model;
using MyPortfolio.DataModel.Model.Common;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortfolio.DataModel.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, string>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        
        public DbSet<AppUsers> AppUsers { get; set; }
        public DbSet<PortfolioProject> PortfolioProjects { get; set; }
        public DbSet<SkillCategoryItem> SkillCategories { get; set; }
        public DbSet<WorkExperienceItem> WorkExperiences { get; set; }
        public DbSet<ContactMessage> ContactMessages { get; set; }
    }
}
