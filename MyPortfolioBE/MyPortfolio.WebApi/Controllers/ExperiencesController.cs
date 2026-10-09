using MyPortfolio.Services.Abstract;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace MyPortfolio.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExperiencesController : ControllerBase
    {
        private readonly IPortfolioService _portfolioService;

        public ExperiencesController(IPortfolioService portfolioService)
        {
            _portfolioService = portfolioService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var experiences = await _portfolioService.GetAllExperiencesAsync();
            return Ok(experiences);
        }
    }
}
