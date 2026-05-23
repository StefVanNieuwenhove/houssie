using System.ComponentModel.DataAnnotations;

namespace Houssie.Core.DTOs;

public class CreateTodoDTO
{
    [Required] [StringLength(100)] public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    [DataType(DataType.Date)] public DateTime DueDate { get; set; } = DateTime.Today + TimeSpan.FromDays(1);
}