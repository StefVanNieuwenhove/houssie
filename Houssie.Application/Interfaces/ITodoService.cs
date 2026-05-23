using Houssie.Core;
using Houssie.Core.DTOs;

namespace Houssie.Application.Interfaces;

public interface ITodoService
{
    Task<IReadOnlyList<TodoDTO>> GetAllTodos();
    Task<TodoDTO> GetTodoById(Guid id);
    Task<Guid> CreateTodo(CreateTodoDTO todo);
    Task<TodoDTO> UpdateTodo(Guid id, TodoDTO todo);
    Task DeleteTodo(Guid id);
    Task<TodoDTO> CompleteTodo(Guid id);
}