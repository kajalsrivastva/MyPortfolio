using MyPortfolio.ViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyPortfolio.Services.Abstract
{
    public interface IPortfolioService
    {
        Task<List<ProjectDto>> GetAllProjectsAsync();
        Task<ProjectDto?> GetProjectByIdAsync(string id);
        Task<List<SkillCategoryDto>> GetAllSkillCategoriesAsync();
        Task<List<ExperienceDto>> GetAllExperiencesAsync();
        Task<bool> SubmitContactMessageAsync(ContactMessageDto dto);
    }
}
