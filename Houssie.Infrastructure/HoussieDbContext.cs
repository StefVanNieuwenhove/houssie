using Houssie.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Houssie.Infrastructure;

public class HoussieDbContext : DbContext
{
    public HoussieDbContext(DbContextOptions<HoussieDbContext> options) : base(options)
    {
    }

    public DbSet<Todo> Todos => Set<Todo>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Todo>().HasKey(p => p.Id);
        modelBuilder.Entity<Todo>().Property(p => p.Id).ValueGeneratedOnAdd();
        modelBuilder.Entity<Todo>().Property(x => x.Description).IsRequired(false);
    }
}