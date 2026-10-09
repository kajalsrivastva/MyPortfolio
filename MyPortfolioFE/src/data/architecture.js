export const multiTenancyArchitecture = {
  title: "Multi-Tenancy Enterprise ERP Architecture",
  subtitle: "A deep dive into building tenant-aware connection resolution, dynamic RBAC authorization, and automated DB provisioning in C# .NET.",
  overview:
    "Enterprise clients demand isolation, scalability, and strict security boundaries. This architecture decouples tenant context from business logic, allowing seamless switching between shared multi-tenant databases and dedicated high-security single-tenant databases without altering business service code.",
  pillars: [
    {
      id: "tenant-resolution",
      title: "1. Request Context & Tenant Resolution",
      subtitle: "Insulating Tenant Identification at Request Boundary",
      description:
        "Every incoming HTTP request passes through a lightweight custom `TenantResolverMiddleware`. The middleware extracts the `Tenant-ID` header or claim from the decrypted JWT payload, validates tenant status against Redis/In-Memory Cache, and registers `ITenantContext` into the Request Dependency Injection container (Scoped lifetime).",
      features: [
        "Zero performance penalty with cached tenant metadata lookup",
        "Fallback mechanisms for custom subdomains (e.g., `clienta.erp.com`)",
        "Automatic rejection of suspended or inactive tenant API calls"
      ],
      codeSnippet: `// Custom Tenant Resolver Middleware
public class TenantResolverMiddleware
{
    private readonly RequestDelegate _next;

    public TenantResolverMiddleware(RequestDelegate next) => _next = next;

    public async Task InvokeAsync(HttpContext context, ITenantService tenantService, ITenantSetter tenantSetter)
    {
        var tenantKey = context.Request.Headers["X-Tenant-ID"].FirstOrDefault()
            ?? context.User.FindFirst("tenant_id")?.Value;

        if (!string.IsNullOrEmpty(tenantKey))
        {
            var tenantInfo = await tenantService.GetTenantAsync(tenantKey);
            if (tenantInfo != null && tenantInfo.IsActive)
            {
                tenantSetter.SetCurrentTenant(tenantInfo);
            }
            else
            {
                context.Response.StatusCode = StatusCodes.Status403Forbidden;
                await context.Response.WriteAsync("Invalid or suspended tenant context.");
                return;
            }
        }

        await _next(context);
    }
}`
    },
    {
      id: "connection-resolver",
      title: "2. Tenant-Aware Database Connectivity",
      subtitle: "Hybrid Isolated & Shared Connection Factory",
      description:
        "Instead of hardcoding database strings in `appsettings.json`, EF Core DbContext uses a dynamic connection factory. Based on tenant strategy configuration, the connection resolver injects either a shared database connection with SQL Query Filters (`WHERE TenantId = @TenantId`) or a dedicated tenant SQL database connection string.",
      features: [
        "EF Core Global Query Filters automatically attached for shared tenant tables",
        "Encrypted tenant connection strings stored securely in Azure Key Vault / Database",
        "Connection Pooling optimized across active tenant databases"
      ],
      codeSnippet: `// Dynamic Tenant DbContext Factory
public class TenantDbContextFactory : IDbContextFactory<AppDbContext>
{
    private readonly ITenantContext _tenantContext;
    private readonly IConfiguration _config;

    public TenantDbContextFactory(ITenantContext tenantContext, IConfiguration config)
    {
        _tenantContext = tenantContext;
        _config = config;
    }

    public AppDbContext CreateDbContext()
    {
        var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();
        
        // Pick Connection String based on Tenant Isolation Level
        string connectionString = _tenantContext.CurrentTenant.IsIsolated
            ? _tenantContext.CurrentTenant.ConnectionString
            : _config.GetConnectionString("SharedDefaultDb");

        optionsBuilder.UseSqlServer(connectionString);
        return new AppDbContext(optionsBuilder.Options, _tenantContext);
    }
}`
    },
    {
      id: "dynamic-rbac",
      title: "3. Dynamic RBAC & Permission Matrix",
      subtitle: "Granular Runtime Authorization Beyond Fixed Roles",
      description:
        "Hardcoded `[Authorize(Roles = 'Admin')]` breaks down when enterprise tenants create custom administrative roles (e.g. 'Finance Auditor', 'HR Regional Lead'). We built a permission claim system evaluated dynamically by ASP.NET Core `IAuthorizationHandler`.",
      features: [
        "Bitmask / Permission string matrix (`Permissions.Employees.Create`, `Permissions.Reports.Export`)",
        "Tenant-level custom role definitions saved in DB without code deployment",
        "Custom Authorize attribute `[HasPermission('Permissions.ERP.Manage')]`"
      ],
      codeSnippet: `// Custom Permission Requirement Handler
public class PermissionAuthorizationHandler : AuthorizationHandler<PermissionRequirement>
{
    private readonly IUserPermissionService _permissionService;

    public PermissionAuthorizationHandler(IUserPermissionService permissionService)
    {
        _permissionService = permissionService;
    }

    protected override async Task HandleRequirementAsync(
        AuthorizationHandlerContext context, 
        PermissionRequirement requirement)
    {
        var userId = context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(userId)) return;

        var userPermissions = await _permissionService.GetUserPermissionsAsync(userId);
        if (userPermissions.Contains(requirement.Permission))
        {
            context.Succeed(requirement);
        }
    }
}`
    },
    {
      id: "auto-provisioning",
      title: "4. Automatic Database Provisioning",
      subtitle: "Zero-Touch Tenant Onboarding Engine",
      description:
        "When a new organization signs up for the ERP, an asynchronous background pipeline provisions a fresh database, executes EF Core Schema Migrations, deploys Dapper Stored Procedures, and seeds default admin accounts and master reference tables.",
      features: [
        "Programmatic database creation via SQL Management APIs / EF Core `.Migrate()`",
        "Dapper script runner for high-speed stored procedure deployment",
        "Idempotent database initialization with step-by-step transaction logs"
      ],
      codeSnippet: `// Automated Provisioning Service
public async Task<bool> ProvisionNewTenantDatabaseAsync(TenantOnboardingDto dto)
{
    string tenantDbName = $"ERP_Tenant_{dto.TenantSlug}";
    string masterConnStr = _config.GetConnectionString("MasterDb");

    // Step 1: Create Database physically
    await _dbProvisioner.CreatePhysicalDatabaseAsync(masterConnStr, tenantDbName);

    // Step 2: Apply EF Core Migrations
    var tenantConnStr = BuildConnectionString(tenantDbName);
    using var dbContext = _factory.CreateForConnectionString(tenantConnStr);
    await dbContext.Database.MigrateAsync();

    // Step 3: Run Dapper Stored Procedure & Master Data Seeding Scripts
    await _seedService.ExecuteStoredProcedureScriptsAsync(tenantConnStr);
    await _seedService.SeedDefaultTenantAdminAsync(tenantConnStr, dto.AdminEmail);

    return true;
}`
    }
  ]
};
