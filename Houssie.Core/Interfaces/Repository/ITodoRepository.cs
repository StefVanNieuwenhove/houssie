using Houssie.Core.Models;

namespace Houssie.Core.Interfaces.Repository;

public interface ITodoRepository
{
    Task<IReadOnlyList<Todo>> GetAllTodos();
    Task<Todo?> GetTodoById(Guid id);
    Task CreateTodo(Todo todo);
    Task UpdateTodo(Todo todo);
    Task DeleteTodo(Guid id);
    Task<bool> ExistsTodo(Guid id);
}