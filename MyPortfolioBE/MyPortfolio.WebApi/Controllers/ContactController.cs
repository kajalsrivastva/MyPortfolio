using MyPortfolio.Services.Abstract;
using MyPortfolio.ViewModel;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace MyPortfolio.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IPortfolioService _portfolioService;

        public ContactController(IPortfolioService portfolioService)
        {
            _portfolioService = portfolioService;
        }

        [HttpPost]
        public async Task<IActionResult> SubmitMessage([FromBody] ContactMessageDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var success = await _portfolioService.SubmitContactMessageAsync(dto);
            if (!success)
                return BadRequest(new { message = "Failed to process contact message. Name, email, and message are required." });

            return Ok(new { success = true, message = "Your contact message has been recorded successfully!" });
        }
    }
}
