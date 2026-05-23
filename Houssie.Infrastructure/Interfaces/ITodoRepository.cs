using Houssie.Core;

namespace Houssie.Infrastructure.Interfaces;

public interface ITodoRepository
{
    Task<IReadOnlyList<Todo>> GetAllTodos(bool? active = false);
    Task<Todo?> GetTodoById(Guid id);
    Task<Guid> CreateTodo(Todo todo);
    Task UpdateTodo(Todo todo);
    Task DeleteTodo(Todo todo);
}