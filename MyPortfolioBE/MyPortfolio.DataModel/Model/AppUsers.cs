using MyPortfolio.DataModel.Model.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortfolio.DataModel.Model
{
    public class AppUsers:BaseDBModel
    {
        [Key]
        public int Id { get; set; }
        public string AspNetUserId { get; set; }
        public ApplicationUser AspNetUser { get; set; }
        [MaxLength(100)]
        public string FirstName { get; set; }
        [MaxLength(100)]
        public string LastName { get; set; }
        public int? LawyerExperience { get; set; }
        public string ImageUrl { get; set; }
        public string LinkedinUrl { get; set; }
        public string IsVerified { get; set; }
    }
}
