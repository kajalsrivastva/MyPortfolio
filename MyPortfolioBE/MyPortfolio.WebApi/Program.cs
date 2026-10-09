using MyPortfolio.Core.Helper;
using MyPortfolio.DataModel.Data;
using MyPortfolio.DataModel.Model.Common;
using MyPortfolio.Repositories.Abstract;
using MyPortfolio.Repositories.Concrete;
using MyPortfolio.Services.Abstract;
using MyPortfolio.Services.Concrete;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Serilog;
using Serilog.Sinks.MSSqlServer;
using System.Collections.ObjectModel;
using System.Data;
using System.Security.Claims;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(
            "http://localhost:5173",
            "http://localhost:3000",
            "http://localhost:3001")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();
builder.Services.AddSwaggerGen(c =>
{
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    });
});
#region Database configuration
// Get database connection string from configuration
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
// Register ApplicationDbContext with SQL Server
builder.Services.AddDbContext<ApplicationDbContext>(opt=>opt.UseSqlServer(connectionString));
#endregion
// Configure ASP.NET Identity (User & Role)
#region Identity
builder.Services.AddIdentity<ApplicationUser,ApplicationRole>()
    // Use Entity Framework for storing Identity data
    .AddEntityFrameworkStores<ApplicationDbContext>()
    // Add default token providers (for reset password, email confirmation, etc.)
    .AddDefaultTokenProviders();
#endregion

#region Serilog
var columnOption = new ColumnOptions();
columnOption.AdditionalColumns = new Collection<SqlColumn>
{
    new SqlColumn {DataType = SqlDbType.NVarChar , ColumnName = "Project"},
    new SqlColumn {DataType = SqlDbType.NVarChar , ColumnName = "ControllerName"},
    new SqlColumn {DataType = SqlDbType.NVarChar , ColumnName = "ActionName"},
    new SqlColumn {DataType = SqlDbType.NVarChar , ColumnName = "AspNetUserId"},
};
var logger = new LoggerConfiguration()
    .MinimumLevel.Error()
    .WriteTo.Console()
    .WriteTo.MSSqlServer(
        connectionString: connectionString,
        sinkOptions: new MSSqlServerSinkOptions
        {
            TableName = "Logs",
            AutoCreateSqlTable = true,
        },
        restrictedToMinimumLevel: Serilog.Events.LogEventLevel.Error,
        columnOptions: columnOption
    )
    .CreateLogger();

Serilog.Debugging.SelfLog.Enable(Console.Error);
Log.Logger = logger;
builder.Host.UseSerilog();
#endregion
#region appsetting map to the C# class
builder.Services.Configure<JWTSettings>(
   builder.Configuration.GetSection("Jwt"));
#endregion
#region Jwt configuration
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        //IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(builder.Configuration["Jwt:Key"])),
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!)),
        RoleClaimType = ClaimTypes.Role   // Maps to the role claim type used in JWT tokens
    };
});
#endregion

#region DI
builder.Services.AddTransient<IAccountsServices,AccountsServices>();
builder.Services.AddTransient<IAccountsRepository,AccountsRepository>();
builder.Services.AddScoped<IPortfolioRepository, PortfolioRepository>();
builder.Services.AddScoped<IPortfolioService, PortfolioService>();
#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowFrontend");
app.UseHttpsRedirection();

app.UseAuthorization();
//seed data configuration
await SeedUsers.SeedDataAsync(app.Services);
app.MapControllers();

app.Run();
