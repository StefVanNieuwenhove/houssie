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
            var todos =  await _context.Todos.OrderBy(x => x.DueDate).ToListAsync();
            return todos.OrderBy(x => x.DueDate).ThenBy(x => x.Name).ToList();
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
        try
        {
            return await _context.Todos.FindAsync(id);
        }
        catch (DbException ex)
        {
            Console.WriteLine(ex.Message);
            throw ex;
        } 
        catch (Exception ex)
        {
            throw new Exception($"TodoRepository - GetTodoById({id})", ex);
        }
    }

    public async Task<Guid> CreateTodo(Todo todo)
    {
        try
        {
            if (todo == null)
            {
                throw new Exception("Todo is null");
            }
            
            await _context.Todos.AddAsync(todo);
            await _context.SaveChangesAsync();

            return todo.Id;
        }
        catch (DbException ex)
        {
            Console.WriteLine(ex.Message);
            throw ex;
        }
        catch (Exception ex)
        {
            throw new Exception($"TodoRepository - CreateTodo()", ex);
        }
    }

    public async Task UpdateTodo(Todo todo)
    {
        try
        {
            if (todo == null)
            {
                throw new Exception("Todo is null");
            }
            
            _context.Todos.Update(todo);
            await _context.SaveChangesAsync();
        }
        catch (DbException ex)
        {
            Console.WriteLine(ex.Message);
            throw ex;
        } catch (Exception ex)
        {
            throw new Exception($"TodoRepository - UpdateTodo()", ex);
        }
    }

    public async Task DeleteTodo(Todo todo)
    {
        try
        {
            if (todo == null)
            {
                throw new Exception("Todo is null");
            }
            
            _context.Todos.Remove(todo);
            await _context.SaveChangesAsync();
        }
        catch (DbException ex)
        {
            Console.WriteLine(ex.Message);
            throw ex;
        } catch (Exception ex)
        {
            throw new Exception($"TodoRepository - DeleteTodo()", ex);
        }
    }
}