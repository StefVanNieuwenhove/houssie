using System.ComponentModel.DataAnnotations;

namespace Houssie.Core.DTOs;

public class TodoDTO
{
    public Guid Id { get; set; } 
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public bool IsDone { get; set; } = false;
    [DataType(DataType.Date)] public DateTime DueDate { get; set; } = DateTime.Today + TimeSpan.FromDays(1);
}