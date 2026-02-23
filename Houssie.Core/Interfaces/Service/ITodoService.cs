using Houssie.Core.DTOs;
using Houssie.Core.Models;

namespace Houssie.Core.Interfaces.Service;

public interface ITodoService
{
    Task<IReadOnlyList<Todo>> GetAllTodos();
    Task<Todo?> GetTodoById(Guid id);
    Task<Todo> CreateTodo(TodoDTO todo);
    Task<Todo> UpdateTodo(Guid id, Todo todo);
    Task DeleteTodo(Guid id);
    Task<Todo> CompleteTodo(Guid id);
}