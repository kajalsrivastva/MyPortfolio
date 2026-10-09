using System;
using System.ComponentModel.DataAnnotations;

namespace MyPortfolio.DataModel.Model
{
    public class WorkExperienceItem
    {
        [Key]
        public string Id { get; set; } = string.Empty;

        [Required]
        [MaxLength(150)]
        public string Role { get; set; } = string.Empty;

        [Required]
        [MaxLength(150)]
        public string Company { get; set; } = string.Empty;

        [MaxLength(50)]
        public string Period { get; set; } = string.Empty;

        [MaxLength(100)]
        public string Location { get; set; } = string.Empty;

        [MaxLength(50)]
        public string Type { get; set; } = string.Empty;

        public string Summary { get; set; } = string.Empty;

        public string ResponsibilitiesJson { get; set; } = "[]";

        public string TechnologiesJson { get; set; } = "[]";

        public int DisplayOrder { get; set; }
    }
}
