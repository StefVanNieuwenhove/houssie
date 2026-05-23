using Houssie.Application.Interfaces;
using Houssie.Core;
using Houssie.Core.DTOs;
using Houssie.Core.Exceptions;
using Houssie.Infrastructure.Interfaces;

namespace Houssie.Application;

public class TodoService : ITodoService
{
    private readonly ITodoRepository _repostory;

    public TodoService(ITodoRepository repository)
    {
        _repostory = repository;
    }

    public async Task<IReadOnlyList<TodoDTO>> GetAllTodos(bool? active = false)
    {
        try
        {
            var todos =  await _repostory.GetAllTodos(active);
            return todos.Select(MapToDTO).ToList();
        }
        catch (Exception ex)
        {
            throw;
        }
    }

    public async Task<TodoDTO> GetTodoById(Guid id)
    {
        try
        {
            var todo = await _repostory.GetTodoById(id);

            if (todo == null)
            {
                throw new NotFoundException("Todo with id: " + id + " does not exist");
            }
            return MapToDTO(todo);
        }
        catch (Exception ex)
        {
            throw;
        }
    }

    public async Task<Guid> CreateTodo(CreateTodoDTO dto)
    {
        try
        {
            Todo todo = new Todo(dto.Name, dto.Description, dto.DueDate);
            return await _repostory.CreateTodo(todo);
        }
        catch (Exception ex)
        {
            throw;
        }
    }

    public async Task<TodoDTO> UpdateTodo(Guid id, TodoDTO dto)
    {
        try
        {
            if (!id.Equals(dto.Id))
            {
                throw new Exception("Id mismatch");
            }
            
            var todo = await _repostory.GetTodoById(id);

            if (todo == null)
            {
                throw new NotFoundException("Todo with id: " + id + " does not exist");
            }
            
            todo.Name = dto.Name;
            todo.Description = dto.Description;
            todo.IsComplete = dto.IsDone;
            todo.SetDueDate(dto.DueDate);
            todo.SetUpdatedAt();

            await _repostory.UpdateTodo(todo);
            return dto;
        }
        catch (Exception ex)
        {
            throw;
        }
    }

    public async Task DeleteTodo(Guid id)
    {
        try
        {
            var todo = await _repostory.GetTodoById(id);

            if (todo == null)
            {
                throw new NotFoundException("Todo with id: " + id + " does not exist");
            }
            
            await _repostory.DeleteTodo(todo);
        }
        catch (Exception ex)
        {
            throw;
        }
    }

    public async Task<TodoDTO> CompleteTodo(Guid id)
    {
        try
        {
            var todo = await _repostory.GetTodoById(id);

            if (todo == null)
            {
                throw new Exception("Todo with id: " + id + " does not exist");
            }
            
            todo.IsComplete = true;
            todo.SetUpdatedAt();

            await _repostory.UpdateTodo(todo);
            return MapToDTO(todo);
        }
        catch (Exception ex)
        {
            throw;
        }
    }

    private TodoDTO MapToDTO(Todo todo)
    {
        return new TodoDTO
        {
            Id = todo.Id,
            Name = todo.Name,
            Description = todo.Description,
            IsDone = todo.IsComplete,
            DueDate = todo.DueDate
        };
    }
}