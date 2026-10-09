using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortfolio.DataModel.Model.Common
{
    public class BaseDBModel
    {
        [MaxLength(450)]
        public string CreatedUserId { get; set; }
        public ApplicationUser CreatedUser { get; set; }
        public DateTime CreatedDate { get; set; }
        [MaxLength(450)]
        public string ModifiedUserId { get; set; }
        public ApplicationUser ModifiedUser { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public bool IsActive { get; set; } = true;

    }
}
