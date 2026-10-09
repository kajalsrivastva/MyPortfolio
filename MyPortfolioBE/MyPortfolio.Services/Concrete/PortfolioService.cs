using MyPortfolio.DataModel.Model;
using MyPortfolio.Repositories.Abstract;
using MyPortfolio.Services.Abstract;
using MyPortfolio.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace MyPortfolio.Services.Concrete
{
    public class PortfolioService : IPortfolioService
    {
        private readonly IPortfolioRepository _repository;
        private readonly JsonSerializerOptions _jsonOptions;

        public PortfolioService(IPortfolioRepository repository)
        {
            _repository = repository;
            _jsonOptions = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
        }

        public async Task<List<ProjectDto>> GetAllProjectsAsync()
        {
            var entities = await _repository.GetAllProjectsAsync();
            return entities.Select(MapToProjectDto).ToList();
        }

        public async Task<ProjectDto?> GetProjectByIdAsync(string id)
        {
            var entity = await _repository.GetProjectByIdAsync(id);
            return entity == null ? null : MapToProjectDto(entity);
        }

        public async Task<List<SkillCategoryDto>> GetAllSkillCategoriesAsync()
        {
            var entities = await _repository.GetAllSkillCategoriesAsync();
            return entities.Select(e => new SkillCategoryDto
            {
                Id = e.Id,
                Category = e.Category,
                Icon = e.Icon,
                Description = e.Description,
                Skills = JsonSerializer.Deserialize<List<SkillItemDto>>(e.SkillsJson, _jsonOptions) ?? new()
            }).ToList();
        }

        public async Task<List<ExperienceDto>> GetAllExperiencesAsync()
        {
            var entities = await _repository.GetAllExperiencesAsync();
            return entities.Select(e => new ExperienceDto
            {
                Id = e.Id,
                Role = e.Role,
                Company = e.Company,
                Period = e.Period,
                Location = e.Location,
                Type = e.Type,
                Summary = e.Summary,
                Responsibilities = JsonSerializer.Deserialize<List<string>>(e.ResponsibilitiesJson, _jsonOptions) ?? new(),
                Technologies = JsonSerializer.Deserialize<List<string>>(e.TechnologiesJson, _jsonOptions) ?? new()
            }).ToList();
        }

        public async Task<bool> SubmitContactMessageAsync(ContactMessageDto dto)
        {
            if (string.IsNullOrWhiteSpace(dto.Name) || string.IsNullOrWhiteSpace(dto.Email) || string.IsNullOrWhiteSpace(dto.Message))
                return false;

            var entity = new ContactMessage
            {
                Name = dto.Name,
                Email = dto.Email,
                Subject = dto.Subject,
                Message = dto.Message,
                SubmittedAt = DateTime.UtcNow
            };

            return await _repository.AddContactMessageAsync(entity);
        }

        private ProjectDto MapToProjectDto(PortfolioProject e)
        {
            return new ProjectDto
            {
                Id = e.Id,
                Title = e.Title,
                Category = e.Category,
                Role = e.Role,
                Period = e.Period,
                Tagline = e.Tagline,
                Description = e.Description,
                Technologies = JsonSerializer.Deserialize<List<string>>(e.TechnologiesJson, _jsonOptions) ?? new(),
                Features = JsonSerializer.Deserialize<List<string>>(e.FeaturesJson, _jsonOptions) ?? new(),
                ArchitectureHighlights = JsonSerializer.Deserialize<List<ArchitectureHighlightDto>>(e.ArchitectureHighlightsJson, _jsonOptions) ?? new(),
                Featured = e.Featured,
                GithubUrl = e.GithubUrl,
                LiveUrl = e.LiveUrl
            };
        }
    }
}
