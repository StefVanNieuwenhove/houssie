using Houssie.Application.Interfaces;
using Houssie.Core;
using Microsoft.AspNetCore.Mvc;

namespace Houssie.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TodoController : ControllerBase
{
    private readonly ITodoService _service;

    public TodoController(ITodoService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<ActionResult<List<Todo>>> GetTodos()
    {
        try
        {
            var todos = await _service.GetAllTodos();
            Console.WriteLine(todos);
            return Ok(todos);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return StatusCode(StatusCodes.Status500InternalServerError, "Failed To fetch all the todos");
        }
    }
}