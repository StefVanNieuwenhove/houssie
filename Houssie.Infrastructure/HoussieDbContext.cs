using Houssie.Core;
using Microsoft.EntityFrameworkCore;

namespace Houssie.Infrastructure;

public class HoussieDbContext : DbContext
{
    public HoussieDbContext(DbContextOptions<HoussieDbContext> options) : base(options)
    {
    }

    public DbSet<Todo> Todos => Set<Todo>();
}