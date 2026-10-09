using System;
using System.Collections.Generic;

namespace MyPortfolio.ViewModel
{
    public class ProjectDto
    {
        public string Id { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string Period { get; set; } = string.Empty;
        public string Tagline { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<string> Technologies { get; set; } = new();
        public List<string> Features { get; set; } = new();
        public List<ArchitectureHighlightDto> ArchitectureHighlights { get; set; } = new();
        public bool Featured { get; set; }
        public string GithubUrl { get; set; } = string.Empty;
        public string LiveUrl { get; set; } = string.Empty;
    }

    public class ArchitectureHighlightDto
    {
        public string Title { get; set; } = string.Empty;
        public string Details { get; set; } = string.Empty;
    }

    public class SkillCategoryDto
    {
        public string Id { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string Icon { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<SkillItemDto> Skills { get; set; } = new();
    }

    public class SkillItemDto
    {
        public string Name { get; set; } = string.Empty;
        public string Level { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
    }

    public class ExperienceDto
    {
        public string Id { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string Company { get; set; } = string.Empty;
        public string Period { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public string Summary { get; set; } = string.Empty;
        public List<string> Responsibilities { get; set; } = new();
        public List<string> Technologies { get; set; } = new();
    }

    public class ContactMessageDto
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
    }
}
