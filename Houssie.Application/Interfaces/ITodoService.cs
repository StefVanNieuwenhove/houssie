using Houssie.Core;
using Houssie.Core.DTOs;

namespace Houssie.Application.Interfaces;

public interface ITodoService
{
    Task<IReadOnlyList<Todo>> GetAllTodos();
    Task<Todo?> GetTodoById(Guid id);
    Task<Todo> CreateTodo(TodoDTO todo);
    Task<Todo> UpdateTodo(Guid id, Todo todo);
    Task DeleteTodo(Guid id);
    Task<Todo> CompleteTodo(Guid id);
}