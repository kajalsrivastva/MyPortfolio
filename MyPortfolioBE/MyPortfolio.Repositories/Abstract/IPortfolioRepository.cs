using MyPortfolio.DataModel.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyPortfolio.Repositories.Abstract
{
    public interface IPortfolioRepository
    {
        Task<List<PortfolioProject>> GetAllProjectsAsync();
        Task<PortfolioProject?> GetProjectByIdAsync(string id);
        Task<List<SkillCategoryItem>> GetAllSkillCategoriesAsync();
        Task<List<WorkExperienceItem>> GetAllExperiencesAsync();
        Task<bool> AddContactMessageAsync(ContactMessage message);
        Task SeedInitialDataIfEmptyAsync();
    }
}
