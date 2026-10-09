using System;
using System.ComponentModel.DataAnnotations;

namespace MyPortfolio.DataModel.Model
{
    public class SkillCategoryItem
    {
        [Key]
        public string Id { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Category { get; set; } = string.Empty;

        [MaxLength(50)]
        public string Icon { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        // JSON string storing skill items list
        public string SkillsJson { get; set; } = "[]";

        public int DisplayOrder { get; set; }
    }
}
