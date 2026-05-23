using Houssie.Core;

namespace Houssie.Infrastructure.Interfaces;

public interface ITodoRepository
{
    Task<IReadOnlyList<Todo>> GetAllTodos();
    Task<Todo?> GetTodoById(Guid id);
    Task<Guid> CreateTodo(Todo todo);
    Task UpdateTodo(Todo todo);
    Task DeleteTodo(Todo todo);
}