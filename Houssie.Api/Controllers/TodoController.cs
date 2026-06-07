using Houssie.Application.Interfaces;
using Houssie.Core.DTOs;
using Houssie.Core.Exceptions;
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
    public async Task<ActionResult<List<TodoDTO>>> GetTodos(bool? active = false)
    {
        try
        {
            var todos = await _service.GetAllTodos(active);
            return Ok(todos);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return StatusCode(StatusCodes.Status500InternalServerError, "Failed to fetch all the todos");
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<TodoDTO>> GetTodo(string id)
    {
        try
        {
            var todo = await _service.GetTodoById(ValidateGuidId(id));
            return Ok(todo);
        }
        catch (InvalidIdException ex)
        {
            Console.WriteLine(ex.Message);
            return BadRequest(ex.Message);
        }
        catch (NotFoundException ex)
        {
            Console.WriteLine(ex.Message);
            return NotFound(ex.Message);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return StatusCode(StatusCodes.Status500InternalServerError, $"Failed to fetch the todo with id: {id}");
        }
    }
    

    [HttpPost]
    public async Task<ActionResult<TodoDTO>> CreateTodo([FromBody] CreateTodoDTO dto)
    {
        try
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            Guid id = await _service.CreateTodo(dto);
            return CreatedAtAction(nameof(GetTodo), new { id }, dto);
        }
        catch (ArgumentException ex)
        {
            Console.WriteLine(ex.Message);
            return BadRequest(ex.Message);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return StatusCode(StatusCodes.Status500InternalServerError, "Failed to create a todo");
        }
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<TodoDTO>> UpdateTodo([FromBody] TodoDTO dto, string id)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var todo = await _service.UpdateTodo(ValidateGuidId(id), dto);
            return Ok(dto);
        }
        catch (InvalidIdException ex)
        {
            Console.WriteLine(ex.Message);
            return BadRequest(ex.Message);
        }
        catch (NotFoundException ex)
        {
            Console.WriteLine(ex.Message);
            return NotFound(ex.Message);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return StatusCode(StatusCodes.Status500InternalServerError, "Failed to update the todo");
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteTodo(string id)
    {
        try
        {
            await _service.DeleteTodo(ValidateGuidId(id));
            return NoContent();
        }
        catch (InvalidIdException ex)
        {
            Console.WriteLine(ex.Message);
            return BadRequest(ex.Message);
        }
        catch (NotFoundException ex)
        {
            Console.WriteLine(ex.Message);
            return NotFound(ex.Message);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return StatusCode(StatusCodes.Status500InternalServerError, "Failed to delete the todo");
        }
    }
    
    private Guid ValidateGuidId(string id)
    {
        if (string.IsNullOrWhiteSpace(id) ||
            !Guid.TryParse(id, out Guid guid) ||
            guid == Guid.Empty)
        {
            throw new InvalidIdException("Invalid Id");
        } 
        
        return guid;
    }
}