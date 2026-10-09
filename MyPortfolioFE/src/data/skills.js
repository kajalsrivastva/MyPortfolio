export const skillCategories = [
  {
    id: "backend",
    category: "Backend Development",
    icon: "Server",
    description: "Core server-side development, high-throughput REST APIs, and microservices in C# and .NET Core.",
    skills: [
      { name: "C#", level: "Expert", description: "Async/await, LINQ, Generics, Memory optimization" },
      { name: "ASP.NET Core Web API", level: "Expert", description: "RESTful architecture, custom middleware, action filters" },
      { name: "REST APIs", level: "Expert", description: "API design, status codes, OpenAPI specs, versioning" },
      { name: "Background Services", level: "Advanced", description: "IHostedService, BackgroundWorker, scheduled jobs" },
      { name: "Microservices Architecture", level: "Advanced", description: "Service decomposition, API Gateways, decoupled components" }
    ]
  },
  {
    id: "database",
    category: "Database & ORM",
    icon: "Database",
    description: "Relational database design, query optimization, high-performance ORMs and stored procedures.",
    skills: [
      { name: "SQL Server", level: "Expert", description: "Complex queries, indexing, stored procedures, execution plan tuning" },
      { name: "Entity Framework Core", level: "Expert", description: "Code First, Migrations, Fluent API, Change Tracker" },
      { name: "Dapper ORM", level: "Expert", description: "High-performance micro-ORM, raw SQL mapping, fast bulk reads" },
      { name: "LINQ to Entities", level: "Expert", description: "Optimized expression trees, IQueryable deferred execution" },
      { name: "MongoDB", level: "Intermediate", description: "Document databases, aggregations, BSON schemas" }
    ]
  },
  {
    id: "security",
    category: "Security & Authentication",
    icon: "ShieldCheck",
    description: "Enterprise-grade identity management, token-based authentication, and dynamic authorization.",
    skills: [
      { name: "JWT Authentication", level: "Expert", description: "Token generation, refresh token rotation, claim signing" },
      { name: "Authorization Policies", level: "Expert", description: "Custom IAuthorizationHandler, requirement evaluation" },
      { name: "Role-Based Access Control (RBAC)", level: "Expert", description: "Dynamic permissions matrix, hierarchical roles" },
      { name: "Data Protection & Encryption", level: "Advanced", description: "Hashing algorithms, secret management, connection encryption" }
    ]
  },
  {
    id: "architecture",
    category: "Architecture & Design Patterns",
    icon: "Cpu",
    description: "Scalable enterprise patterns, tenant isolation, dependency injection, and clean code principles.",
    skills: [
      { name: "Multi-Tenancy Architecture", level: "Expert", description: "Tenant resolution middleware, dedicated/shared DB connections" },
      { name: "Clean Architecture", level: "Advanced", description: "Domain-Driven Design (DDD), Separation of Concerns" },
      { name: "Repository & Unit of Work", level: "Expert", description: "Data access abstraction, testable persistence layers" },
      { name: "Dependency Injection", level: "Expert", description: "Service lifetimes (Transient, Scoped, Singleton), DI containers" },
      { name: "Automated DB Provisioning", level: "Advanced", description: "Programmatic database generation & migration scripts" }
    ]
  },
  {
    id: "integrations",
    category: "Third-Party Integrations",
    icon: "Plug",
    description: "Connecting enterprise backend with real-time web sockets, payment gateways, and communications.",
    skills: [
      { name: "SignalR", level: "Advanced", description: "Real-time hubs, websocket broadcasts, live notifications" },
      { name: "Payment Gateways", level: "Advanced", description: "Razorpay, Stripe, Mollie webhook handling & API integration" },
      { name: "Email & SMS Services", level: "Advanced", description: "SendGrid, Postmark, Twilio SMS & OTP notifications" }
    ]
  },
  {
    id: "frontend",
    category: "Frontend & Full-stack Synergy",
    icon: "Layout",
    description: "Modern web frontend understanding to seamlessly collaborate with UI teams and build end-to-end features.",
    skills: [
      { name: "React.js", level: "Hands-on", description: "Component state, React Hooks, Router, API fetching" },
      { name: "Next.js", level: "Working Knowledge", description: "SSR basics, routing, frontend API integration" },
      { name: "Tailwind CSS", level: "Hands-on", description: "Utility-first styling, dark mode UI, responsive design" },
      { name: "JavaScript / ES6+", level: "Intermediate", description: "Async/await, Promises, DOM, Fetch API" }
    ]
  },
  {
    id: "tools",
    category: "Tools & DevOps",
    icon: "Wrench",
    description: "Developer tooling, API documentation, logging framework, and continuous delivery tools.",
    skills: [
      { name: "Swagger / OpenAPI", level: "Expert", description: "API documentation, schema annotations, security definitions" },
      { name: "Serilog & Logging", level: "Advanced", description: "Structured logging, sink configuration, error diagnostics" },
      { name: "GitHub Actions / CI-CD", level: "Intermediate", description: "Automated build workflows, testing, deployment triggers" },
      { name: "Azure DevOps & Docker", level: "Working Knowledge", description: "Build pipelines, containerization, Azure App Services" },
      { name: "Postman", level: "Expert", description: "API collection creation, automated testing scripts, environment variables" }
    ]
  }
];
