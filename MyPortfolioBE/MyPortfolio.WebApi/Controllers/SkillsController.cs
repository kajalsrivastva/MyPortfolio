using MyPortfolio.Services.Abstract;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace MyPortfolio.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SkillsController : ControllerBase
    {
        private readonly IPortfolioService _portfolioService;

        public SkillsController(IPortfolioService portfolioService)
        {
            _portfolioService = portfolioService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var skills = await _portfolioService.GetAllSkillCategoriesAsync();
            return Ok(skills);
        }
    }
}
