using MyPortfolio.DataModel.Data;
using MyPortfolio.DataModel.Model;
using MyPortfolio.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace MyPortfolio.Repositories.Concrete
{
    public class PortfolioRepository : IPortfolioRepository
    {
        private readonly ApplicationDbContext _context;

        public PortfolioRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<PortfolioProject>> GetAllProjectsAsync()
        {
            await SeedInitialDataIfEmptyAsync();
            return await _context.PortfolioProjects
                .OrderByDescending(p => p.Featured)
                .ThenBy(p => p.Title)
                .ToListAsync();
        }

        public async Task<PortfolioProject?> GetProjectByIdAsync(string id)
        {
            await SeedInitialDataIfEmptyAsync();
            return await _context.PortfolioProjects
                .FirstOrDefaultAsync(p => p.Id.ToLower() == id.ToLower());
        }

        public async Task<List<SkillCategoryItem>> GetAllSkillCategoriesAsync()
        {
            await SeedInitialDataIfEmptyAsync();
            return await _context.SkillCategories
                .OrderBy(s => s.DisplayOrder)
                .ToListAsync();
        }

        public async Task<List<WorkExperienceItem>> GetAllExperiencesAsync()
        {
            await SeedInitialDataIfEmptyAsync();
            return await _context.WorkExperiences
                .OrderBy(e => e.DisplayOrder)
                .ToListAsync();
        }

        public async Task<bool> AddContactMessageAsync(ContactMessage message)
        {
            _context.ContactMessages.Add(message);
            var result = await _context.SaveChangesAsync();
            return result > 0;
        }

        public async Task SeedInitialDataIfEmptyAsync()
        {
            try
            {
                if (!await _context.PortfolioProjects.AnyAsync())
                {
                    var projects = GetInitialProjects();
                    await _context.PortfolioProjects.AddRangeAsync(projects);
                }

                if (!await _context.SkillCategories.AnyAsync())
                {
                    var skills = GetInitialSkills();
                    await _context.SkillCategories.AddRangeAsync(skills);
                }

                if (!await _context.WorkExperiences.AnyAsync())
                {
                    var experiences = GetInitialExperiences();
                    await _context.WorkExperiences.AddRangeAsync(experiences);
                }

                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {
                // In-memory or initial DB fallback safeguard
            }
        }

        private List<PortfolioProject> GetInitialProjects()
        {
            return new List<PortfolioProject>
            {
                new PortfolioProject
                {
                    Id = "erp-management",
                    Title = "ERP Management System",
                    Category = "Enterprise Application",
                    Role = "Backend .NET Developer",
                    Period = "2023 - Present",
                    Tagline = "Enterprise ERP backend with tenant-aware database connectivity and dynamic access control.",
                    Description = "A high-performance enterprise ERP system designed for multi-tenant organizations. Features dynamic tenant database switching, automated tenant provisioning, granular role-based authorization, and high-throughput data processing using ASP.NET Core Web API and Dapper/EF Core hybrid ORM strategy.",
                    TechnologiesJson = JsonSerializer.Serialize(new[] { "C#", "ASP.NET Core Web API", "EF Core", "SQL Server", "Dapper", "JWT", "Serilog", "Swagger" }),
                    FeaturesJson = JsonSerializer.Serialize(new[]
                    {
                        "Tenant Resolution Middleware: Dynamically resolves incoming tenant request context from headers or domain claims.",
                        "Hybrid DB Connection Strategy: Supports shared single-database multi-tenancy and dedicated tenant database switching.",
                        "Automated DB Provisioning: Automatic creation and migration of new tenant databases with seed data during onboarding.",
                        "Dynamic RBAC & Permission Matrix: Granular API authorization based on client-defined custom role permission sets.",
                        "High-Performance Stored Procedures: Dapper integration for complex reports and bulk data calculation logic.",
                        "Audit Logging & Exception Handling: Centralized exception middleware and audit tracking across all business operations."
                    }),
                    ArchitectureHighlightsJson = JsonSerializer.Serialize(new[]
                    {
                        new { Title = "Tenant Database Resolver", Details = "Custom IDbContextFactory implementation reading tenant connection strings from encrypted configuration/cache." },
                        new { Title = "Dynamic Authorization Handler", Details = "Custom ASP.NET Core IAuthorizationHandler evaluating runtime permissions for flexible enterprise user groups." }
                    }),
                    Featured = true
                },
                new PortfolioProject
                {
                    Id = "top-indian-lawyers",
                    Title = "Top Indian Lawyers",
                    Category = "Legal Services Platform",
                    Role = "Backend .NET Developer",
                    Period = "2022 - 2023",
                    Tagline = "A scalable legal services platform supporting lawyer discovery, real-time enquiries and consultation appointments.",
                    Description = "Engineered backend RESTful microservices for a nationwide lawyer platform. Built automated appointment scheduling workflows, real-time consultation enquiry broadcast systems using SignalR, and notification pipelines.",
                    TechnologiesJson = JsonSerializer.Serialize(new[] { "C#", "ASP.NET Core Web API", "SQL Server", "EF Core", "SignalR", "SendGrid", "Twilio API" }),
                    FeaturesJson = JsonSerializer.Serialize(new[]
                    {
                        "Lawyer Discovery & Filtering APIs: Fast, indexed location & specialization search queries.",
                        "Enquiry & Appointment Workflows: State-driven booking lifecycle with real-time status updates.",
                        "Broadcast System (SignalR): Instant consultation alerts pushed to available legal professionals.",
                        "SMS & Email Notifications: Integrated Twilio and SendGrid for appointment reminders and OTP verification."
                    }),
                    ArchitectureHighlightsJson = JsonSerializer.Serialize(new[]
                    {
                        new { Title = "Real-time Hubs", Details = "SignalR hubs handling high-concurrency client updates and lawyer notifications." }
                    }),
                    Featured = true
                },
                new PortfolioProject
                {
                    Id = "coaching-center-management",
                    Title = "Coaching Center Management System",
                    Category = "Enterprise Application",
                    Role = "Backend .NET Developer",
                    Period = "2022",
                    Tagline = "Comprehensive educational institution platform for student enrollment, batch scheduling, fee management, and performance tracking.",
                    Description = "Developed secure backend APIs to streamline multi-branch coaching center operations. Handled student registrations, automated fee installment generation, attendance logs, and exam report generation.",
                    TechnologiesJson = JsonSerializer.Serialize(new[] { "C#", "ASP.NET Core Web API", "SQL Server", "EF Core", "LINQ", "Razorpay API", "JWT" }),
                    FeaturesJson = JsonSerializer.Serialize(new[]
                    {
                        "Multi-Branch Data Isolation: Branch-wise data scoping and centralized administrative reporting.",
                        "Fee Management Engine: Automated installment calculation, due date notifications, and receipt generation.",
                        "Payment Gateway Integration: Secure Razorpay payment webhook handling for online fee payments."
                    }),
                    ArchitectureHighlightsJson = JsonSerializer.Serialize(new[]
                    {
                        new { Title = "Payment Webhooks", Details = "Idempotent Webhook handlers validating digital signatures and updating fee statuses safely." }
                    }),
                    Featured = true
                },
                new PortfolioProject
                {
                    Id = "restomanager",
                    Title = "RestoManager — Restaurant Management System",
                    Category = "Hospitality & POS",
                    Role = "Backend .NET Developer",
                    Period = "2021 - 2022",
                    Tagline = "Real-time POS and kitchen order management backend system with inventory tracking.",
                    Description = "Built resilient backend architecture for restaurant operations including table reservation management, real-time Kitchen Display System (KDS) communication, dynamic menu pricing, and stock inventory tracking.",
                    TechnologiesJson = JsonSerializer.Serialize(new[] { "C#", "ASP.NET Core Web API", "SQL Server", "Dapper", "SignalR", "JWT" }),
                    FeaturesJson = JsonSerializer.Serialize(new[]
                    {
                        "Kitchen Display Communication: Immediate order push to kitchen stations via SignalR channels.",
                        "Table & Order Management: Real-time table status tracking, order modifications, and bill splitting APIs.",
                        "Stock & Inventory Management: Auto-deduction of raw ingredients based on menu item recipes upon order placement."
                    }),
                    Featured = false
                }
            };
        }

        private List<SkillCategoryItem> GetInitialSkills()
        {
            return new List<SkillCategoryItem>
            {
                new SkillCategoryItem
                {
                    Id = "backend",
                    Category = "Backend Development",
                    Icon = "Server",
                    Description = "Core server-side development, high-throughput REST APIs, and microservices in C# and .NET Core.",
                    SkillsJson = JsonSerializer.Serialize(new[]
                    {
                        new { name = "C#", level = "Expert", description = "Async/await, LINQ, Generics, Memory optimization" },
                        new { name = "ASP.NET Core Web API", level = "Expert", description = "RESTful architecture, custom middleware, action filters" },
                        new { name = "REST APIs", level = "Expert", description = "API design, status codes, OpenAPI specs, versioning" },
                        new { name = "Background Services", level = "Advanced", description = "IHostedService, BackgroundWorker, scheduled jobs" }
                    }),
                    DisplayOrder = 1
                },
                new SkillCategoryItem
                {
                    Id = "database",
                    Category = "Database & ORM",
                    Icon = "Database",
                    Description = "Relational database design, query optimization, high-performance ORMs and stored procedures.",
                    SkillsJson = JsonSerializer.Serialize(new[]
                    {
                        new { name = "SQL Server", level = "Expert", description = "Complex queries, indexing, stored procedures, execution plan tuning" },
                        new { name = "Entity Framework Core", level = "Expert", description = "Code First, Migrations, Fluent API, Change Tracker" },
                        new { name = "Dapper ORM", level = "Expert", description = "High-performance micro-ORM, raw SQL mapping, fast bulk reads" }
                    }),
                    DisplayOrder = 2
                },
                new SkillCategoryItem
                {
                    Id = "architecture",
                    Category = "Architecture & Design Patterns",
                    Icon = "Cpu",
                    Description = "Scalable enterprise patterns, tenant isolation, dependency injection, and clean code principles.",
                    SkillsJson = JsonSerializer.Serialize(new[]
                    {
                        new { name = "Multi-Tenancy Architecture", level = "Expert", description = "Tenant resolution middleware, dedicated/shared DB connections" },
                        new { name = "Clean Architecture", level = "Advanced", description = "Domain-Driven Design (DDD), Separation of Concerns" },
                        new { name = "Dependency Injection", level = "Expert", description = "Service lifetimes (Transient, Scoped, Singleton), DI containers" }
                    }),
                    DisplayOrder = 3
                }
            };
        }

        private List<WorkExperienceItem> GetInitialExperiences()
        {
            return new List<WorkExperienceItem>
            {
                new WorkExperienceItem
                {
                    Id = "senior-backend-dev",
                    Role = "Senior .NET Backend Developer",
                    Company = "Enterprise Solutions Tech",
                    Period = "2023 - Present",
                    Location = "India",
                    Type = "Full-Time",
                    Summary = "Leading core backend architecture and API development for multi-tenant enterprise ERP systems and high-throughput microservices.",
                    ResponsibilitiesJson = JsonSerializer.Serialize(new[]
                    {
                        "Architected dynamic multi-tenant database connection management system using custom ASP.NET Core middleware and EF Core DbContext factory.",
                        "Designed dynamic Role-Based Access Control (RBAC) authorization framework permitting runtime permissions customization per tenant.",
                        "Built automated database provisioning service that programmatically initializes new tenant SQL databases.",
                        "Optimized critical database queries using Dapper ORM and SQL Server stored procedures."
                    }),
                    TechnologiesJson = JsonSerializer.Serialize(new[] { "C#", "ASP.NET Core Web API", "SQL Server", "EF Core", "Dapper", "JWT", "Swagger" }),
                    DisplayOrder = 1
                },
                new WorkExperienceItem
                {
                    Id = "dotnet-dev",
                    Role = "Software Engineer (.NET Developer)",
                    Company = "LegalTech & Digital Cloud Solutions",
                    Period = "2021 - 2023",
                    Location = "India",
                    Type = "Full-Time",
                    Summary = "Engineered high-concurrency backend services for nation-wide legal booking platforms and educational coaching management software.",
                    ResponsibilitiesJson = JsonSerializer.Serialize(new[]
                    {
                        "Developed real-time enquiry broadcast channels using ASP.NET Core SignalR.",
                        "Implemented payment gateway integrations (Razorpay, Stripe) handling automated webhooks.",
                        "Created background queue services (IHostedService) for asynchronous SMS and email notifications."
                    }),
                    TechnologiesJson = JsonSerializer.Serialize(new[] { "C#", "ASP.NET Core", "SQL Server", "EF Core", "SignalR", "Razorpay" }),
                    DisplayOrder = 2
                }
            };
        }
    }
}
