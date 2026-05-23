using Houssie.Application;
using Houssie.Application.Interfaces;
using Houssie.Infrastructure;
using Houssie.Infrastructure.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
//builder.Services.AddOpenApi();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy => policy.WithOrigins("http://localhost:5173")
                                        .AllowAnyHeader()
                                        .AllowAnyMethod()
    );
});

builder.Services.AddControllers();

// db connection
builder.Services.AddDbContext<HoussieDbContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
    options.EnableDetailedErrors();
});

// register the services
builder.Services.AddScoped<ITodoService, TodoService>();
builder.Services.AddScoped<ITodoRepository, TodoRepository>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI(options => { options.SwaggerEndpoint("/swagger/v1/swagger.json", "Houssie API v1"); });
}

app.UseCors();
app.UseHttpsRedirection();
app.MapControllers();
app.Run();