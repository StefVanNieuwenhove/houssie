using Houssie.Api.Controllers;
using Houssie.Application.Interfaces;
using Houssie.Core.DTOs;
using Houssie.Core.Exceptions;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace Houssie.Test;

public class TodoControllerTest
{
    private readonly Mock<ITodoService> _service;
    private readonly TodoController _controller;

    public TodoControllerTest()
    {
        _service = new Mock<ITodoService>();
        _controller = new TodoController(_service.Object);
    }

    // Get /api/todo
    [Fact]
    public async Task GetTodos_ReturnsOk()
    {
        var todos = new List<TodoDTO>
        {
            new TodoDTO { Id = Guid.NewGuid(), Name = "Test", DueDate = DateTime.UtcNow },
        };

        _service.Setup(x => x.GetAllTodos(false)).ReturnsAsync(todos);
        
        var result = await _controller.GetTodos(false);
        
        var ok = Assert.IsType<OkObjectResult>(result.Result);
        Assert.Equal(todos, ok.Value);
    }
    
    [Fact]
    public async Task GetTodos_ServiceThrows_Returns500()
    {
        _service.Setup(s => s.GetAllTodos(false)).ThrowsAsync(new Exception("boom"));

        var result = await _controller.GetTodos(false);

        var obj = Assert.IsType<ObjectResult>(result.Result);
        Assert.Equal(500, obj.StatusCode);
    }
    
    // Get /api/todo/id
    [Fact]
    public async Task GetTodo_ValidId_ReturnsOk()
    {
        var id = Guid.NewGuid();
        var todo = new TodoDTO { Id = id, Name = "Test" };

        _service.Setup(s => s.GetTodoById(id)).ReturnsAsync(todo);

        var result = await _controller.GetTodo(id.ToString());

        var ok = Assert.IsType<OkObjectResult>(result.Result);
        Assert.Equal(todo, ok.Value);
    }

    [Fact]
    public async Task GetTodo_InvalidGuid_ReturnsBadRequest()
    {
        var result = await _controller.GetTodo("not-a-guid");

        var bad = Assert.IsType<BadRequestObjectResult>(result.Result);
        Assert.Equal("Invalid id", bad.Value);
    }

    [Fact]
    public async Task GetTodo_NotFound_Returns404()
    {
        var id = Guid.NewGuid();

        _service.Setup(s => s.GetTodoById(id))
            .ThrowsAsync(new NotFoundException("not found"));

        var result = await _controller.GetTodo(id.ToString());

        var notFound = Assert.IsType<NotFoundObjectResult>(result.Result);
        Assert.Equal("not found", notFound.Value);
    }

    [Fact]
    public async Task GetTodo_ServiceThrows_Returns500()
    {
        var id = Guid.NewGuid();

        _service.Setup(s => s.GetTodoById(id)).ThrowsAsync(new Exception());

        var result = await _controller.GetTodo(id.ToString());

        var obj = Assert.IsType<ObjectResult>(result.Result);
        Assert.Equal(500, obj.StatusCode);
    }
    
    // Post api/todo
    [Fact]
    public async Task CreateTodo_Valid_ReturnsCreated()
    {
        var dto = new CreateTodoDTO { Name = "New Todo" };
        var newId = Guid.NewGuid();

        _service.Setup(s => s.CreateTodo(dto)).ReturnsAsync(newId);

        var result = await _controller.CreateTodo(dto);

        var created = Assert.IsType<CreatedAtActionResult>(result.Result);
        Assert.Equal(nameof(TodoController.GetTodo), created.ActionName);
        Assert.Equal(dto, created.Value);
    }

    [Fact]
    public async Task CreateTodo_InvalidModel_ReturnsBadRequest()
    {
        var dto = new CreateTodoDTO();
        _controller.ModelState.AddModelError("Name", "Required");

        var result = await _controller.CreateTodo(dto);

        Assert.IsType<BadRequestObjectResult>(result.Result);
    }

    [Fact]
    public async Task CreateTodo_ArgumentException_ReturnsBadRequest()
    {
        var dto = new CreateTodoDTO { Name = "Test" };

        _service.Setup(s => s.CreateTodo(dto))
            .ThrowsAsync(new ArgumentException("bad"));

        var result = await _controller.CreateTodo(dto);

        var bad = Assert.IsType<BadRequestObjectResult>(result.Result);
        Assert.Equal("bad", bad.Value);
    }

    [Fact]
    public async Task CreateTodo_ServiceThrows_Returns500()
    {
        var dto = new CreateTodoDTO { Name = "Test" };

        _service.Setup(s => s.CreateTodo(dto)).ThrowsAsync(new Exception());

        var result = await _controller.CreateTodo(dto);

        var obj = Assert.IsType<ObjectResult>(result.Result);
        Assert.Equal(500, obj.StatusCode);
    }
    
    // Put api/todo/id
    [Fact]
    public async Task UpdateTodo_Valid_ReturnsOk()
    {
        var id = Guid.NewGuid();
        var dto = new TodoDTO { Id = id, Name = "Updated" };

        _service.Setup(s => s.UpdateTodo(id, dto)).ReturnsAsync(dto);

        var result = await _controller.UpdateTodo(dto, id.ToString());

        var ok = Assert.IsType<OkObjectResult>(result.Result);
        Assert.Equal(dto, ok.Value);
    }

    [Fact]
    public async Task UpdateTodo_InvalidModel_ReturnsBadRequest()
    {
        var dto = new TodoDTO();
        _controller.ModelState.AddModelError("Name", "Required");

        var result = await _controller.UpdateTodo(dto, Guid.NewGuid().ToString());

        Assert.IsType<BadRequestObjectResult>(result.Result);
    }

    [Fact]
    public async Task UpdateTodo_InvalidGuid_ReturnsBadRequest()
    {
        var dto = new TodoDTO();

        var result = await _controller.UpdateTodo(dto, "not-a-guid");

        var bad = Assert.IsType<BadRequestObjectResult>(result.Result);
        Assert.Equal("Invalid id", bad.Value);
    }

    [Fact]
    public async Task UpdateTodo_NotFound_Returns404()
    {
        var id = Guid.NewGuid();
        var dto = new TodoDTO { Id = id };

        _service.Setup(s => s.UpdateTodo(id, dto))
            .ThrowsAsync(new NotFoundException("missing"));

        var result = await _controller.UpdateTodo(dto, id.ToString());

        var notFound = Assert.IsType<NotFoundObjectResult>(result.Result);
        Assert.Equal("missing", notFound.Value);
    }

    [Fact]
    public async Task UpdateTodo_ServiceThrows_Returns500()
    {
        var id = Guid.NewGuid();
        var dto = new TodoDTO { Id = id };

        _service.Setup(s => s.UpdateTodo(id, dto)).ThrowsAsync(new Exception());

        var result = await _controller.UpdateTodo(dto, id.ToString());

        var obj = Assert.IsType<ObjectResult>(result.Result);
        Assert.Equal(500, obj.StatusCode);
    }
    
    // Delete api/todo/id
    [Fact]
    public async Task DeleteTodo_Valid_ReturnsNoContent()
    {
        var id = Guid.NewGuid();

        var result = await _controller.DeleteTodo(id.ToString());

        Assert.IsType<NoContentResult>(result);
    }

    [Fact]
    public async Task DeleteTodo_InvalidGuid_ReturnsBadRequest()
    {
        var result = await _controller.DeleteTodo("not-a-guid");

        var bad = Assert.IsType<BadRequestObjectResult>(result);
        Assert.Equal("Invalid id", bad.Value);
    }

    [Fact]
    public async Task DeleteTodo_NotFound_Returns404()
    {
        var id = Guid.NewGuid();

        _service.Setup(s => s.DeleteTodo(id))
            .ThrowsAsync(new NotFoundException("missing"));

        var result = await _controller.DeleteTodo(id.ToString());

        var notFound = Assert.IsType<NotFoundObjectResult>(result);
        Assert.Equal("missing", notFound.Value);
    }

    [Fact]
    public async Task DeleteTodo_ServiceThrows_Returns500()
    {
        var id = Guid.NewGuid();

        _service.Setup(s => s.DeleteTodo(id)).ThrowsAsync(new Exception());

        var result = await _controller.DeleteTodo(id.ToString());

        var obj = Assert.IsType<ObjectResult>(result);
        Assert.Equal(500, obj.StatusCode);
    }
}