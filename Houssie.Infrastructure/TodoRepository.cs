using System.Data.Common;
using Houssie.Core;
using Houssie.Infrastructure.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Houssie.Infrastructure;

public class TodoRepository : ITodoRepository
{
    private readonly HoussieDbContext _context;

    public TodoRepository(HoussieDbContext context)
    {
        _context = context;
    }
    
    public async Task<IReadOnlyList<Todo>> GetAllTodos()
    {
        try
        {
            return await _context.Todos.OrderBy(x => x.DueDate).ToListAsync();
        }
        catch (DbException ex)
        {
            Console.WriteLine(ex.Message);
            throw ex;
        }
        catch (Exception ex)
        {
            throw new Exception("TodoRepository - GetAllTodos()", ex);
        }
    }

    public async Task<Todo?> GetTodoById(Guid id)
    {
        throw new NotImplementedException();
    }

    public async Task CreateTodo(Todo todo)
    {
        throw new NotImplementedException();
    }

    public async Task UpdateTodo(Todo todo)
    {
        throw new NotImplementedException();
    }

    public async Task DeleteTodo(Guid id)
    {
        throw new NotImplementedException();
    }

    public async Task<bool> ExistsTodo(Guid id)
    {
        throw new NotImplementedException();
    }
}