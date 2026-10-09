using MyPortfolio.Services.Abstract;
using MyPortfolio.ViewModel;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace MyPortfolio.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly IPortfolioService _portfolioService;

        public ProjectsController(IPortfolioService portfolioService)
        {
            _portfolioService = portfolioService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var projects = await _portfolioService.GetAllProjectsAsync();
            return Ok(projects);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            var project = await _portfolioService.GetProjectByIdAsync(id);
            if (project == null)
                return NotFound(new { message = $"Project with ID '{id}' was not found." });

            return Ok(project);
        }
    }
}
