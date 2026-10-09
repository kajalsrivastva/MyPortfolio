using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyPortfolio.DataModel.Model
{
    public class PortfolioProject
    {
        [Key]
        public string Id { get; set; } = string.Empty;

        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [MaxLength(100)]
        public string Category { get; set; } = string.Empty;

        [MaxLength(100)]
        public string Role { get; set; } = string.Empty;

        [MaxLength(50)]
        public string Period { get; set; } = string.Empty;

        public string Tagline { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        // Serialized JSON or comma-separated tags
        public string TechnologiesJson { get; set; } = "[]";

        public string FeaturesJson { get; set; } = "[]";

        public string ArchitectureHighlightsJson { get; set; } = "[]";

        public bool Featured { get; set; }

        public string GithubUrl { get; set; } = string.Empty;

        public string LiveUrl { get; set; } = string.Empty;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
