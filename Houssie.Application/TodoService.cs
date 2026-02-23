using Houssie.Application.Interfaces;
using Houssie.Core;
using Houssie.Core.DTOs;
using Houssie.Infrastructure.Interfaces;

namespace Houssie.Application;

public class TodoService : ITodoService
{
    private readonly ITodoRepository _repostory;

    public TodoService(ITodoRepository repository)
    {
        _repostory = repository;
    }

    public async Task<IReadOnlyList<Todo>> GetAllTodos()
    {
        try
        {
            return await _repostory.GetAllTodos();
        }
        catch (Exception e)
        {
            throw new Exception(e.Message);
        }
    }

    public async Task<Todo?> GetTodoById(Guid id)
    {
        throw new NotImplementedException();
    }

    public async Task<Todo> CreateTodo(TodoDTO todo)
    {
        throw new NotImplementedException();
    }

    public async Task<Todo> UpdateTodo(Guid id, Todo todo)
    {
        throw new NotImplementedException();
    }

    public async Task DeleteTodo(Guid id)
    {
        throw new NotImplementedException();
    }

    public async Task<Todo> CompleteTodo(Guid id)
    {
        throw new NotImplementedException();
    }
}