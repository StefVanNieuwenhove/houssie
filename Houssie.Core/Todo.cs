using System.ComponentModel.DataAnnotations;

namespace Houssie.Core;

public class Todo
{
    public Guid Id { get; set; } =  Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public bool? IsComplete { get; set; } = false;
    public bool IsDeleted { get; set; } = false;
    [DataType(DataType.Date)] public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;
    [DataType(DataType.Date)] public DateTime UpdatedAt { get; private set; } = DateTime.UtcNow;
    [DataType(DataType.Date)] public DateTime DueDate { get; private set; } = DateTime.UtcNow;

    public Todo() {}
    
    public Todo(string name, string description, DateTime dueDate)
    {
        Name = name;
        Description = description;
        SetDueDate(dueDate);
        SetCreatedAt();
        SetUpdatedAt();
    }

    private void SetCreatedAt()
    {
        if (CreatedAt.Kind == DateTimeKind.Unspecified)
        {
            CreatedAt = DateTime.SpecifyKind(CreatedAt, DateTimeKind.Utc);
        }
        CreatedAt = CreatedAt.ToUniversalTime();
    }

    public void SetUpdatedAt()
    {
        if (UpdatedAt.Kind == DateTimeKind.Unspecified)
        {
            UpdatedAt = DateTime.SpecifyKind(UpdatedAt, DateTimeKind.Utc);
        }
        UpdatedAt = UpdatedAt.ToUniversalTime();
    }

    public void SetDueDate(DateTime dueDate)
    {
        // Force UTC if unspecified
        if (dueDate.Kind == DateTimeKind.Unspecified)
        {
            dueDate = DateTime.SpecifyKind(dueDate, DateTimeKind.Utc);
        }

        dueDate = dueDate.ToUniversalTime();

        if (DateOnly.FromDateTime(dueDate) < DateOnly.FromDateTime(DateTime.UtcNow))
        {
            throw new ArgumentException("Due date can not be in the past");
        }

        DueDate = dueDate;
    }
}