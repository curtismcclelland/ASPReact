using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ASPReact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactUsController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<ContactUsController> _logger;

        public ContactUsController(ILogger<ContactUsController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Post([FromBody] MessagePost messagePost)
        {
            var successMessage = "";
            BadRequestObjectResult responsemessage1;
            OkObjectResult responsemessage2;

            if (messagePost.Name == "" || messagePost.Email == "" || messagePost.Subject == "" || messagePost.Message == "")
            {
                successMessage = "fail";
                responsemessage1 = BadRequest("Empty Field!");
                return responsemessage1;
            }
            else
            {
                successMessage = "success";
                responsemessage2 = Ok("Good to go!");
                return responsemessage2;
            }

            
            //return Ok(messagePost);
            //return messagePost;

            //return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            //{
            //    Date = DateTime.Now.AddDays(index),
            //    TemperatureC = rng.Next(-20, 55),
            //    Summary = Summaries[rng.Next(Summaries.Length)]
            //})
            //.ToArray();
        }
    }
}
