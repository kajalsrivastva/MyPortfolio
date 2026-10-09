export const experiences = [
  {
    id: "senior-backend-dev",
    role: "Senior .NET Backend Developer",
    company: "Enterprise Solutions Tech",
    period: "2023 - Present",
    location: "India",
    type: "Full-Time",
    summary:
      "Leading core backend architecture and API development for multi-tenant enterprise ERP systems and high-throughput microservices. Spearheaded database optimization, dynamic multi-tenancy implementation, and automated deployment pipelines.",
    responsibilities: [
      "Architected dynamic multi-tenant database connection management system using custom ASP.NET Core middleware and EF Core DbContext factory.",
      "Designed dynamic Role-Based Access Control (RBAC) authorization framework permitting runtime permissions customization per tenant.",
      "Built automated database provisioning service that programmatically initializes new tenant SQL databases with schema migrations and seed scripts.",
      "Optimized critical database queries using Dapper ORM and SQL Server stored procedures, improving complex reporting execution speed by up to 65%.",
      "Mentored junior developers, reviewed pull requests, and enforced clean architecture guidelines across the backend repository."
    ],
    technologies: ["C#", "ASP.NET Core Web API", "SQL Server", "EF Core", "Dapper", "JWT", "Swagger", "Azure DevOps"]
  },
  {
    id: "dotnet-dev",
    role: "Software Engineer (.NET Developer)",
    company: "LegalTech & Digital Cloud Solutions",
    period: "2021 - 2023",
    location: "India",
    type: "Full-Time",
    summary:
      "Engineered high-concurrency backend services for nation-wide legal booking platforms (Top Indian Lawyers) and educational coaching management software. Built real-time notification channels and third-party payment gateway integrations.",
    responsibilities: [
      "Developed real-time enquiry broadcast channels using ASP.NET Core SignalR for legal service provider matching.",
      "Implemented payment gateway integrations (Razorpay, Stripe) handling automated webhooks, payment verification, and refund workflows.",
      "Created background queue services (IHostedService) for asynchronous SMS (Twilio) and email (SendGrid/Postmark) notifications.",
      "Integrated Serilog structured logging and central exception middleware for real-time monitoring and crash diagnostics.",
      "Collaborated closely with frontend engineers to design clean, predictable JSON REST API contracts."
    ],
    technologies: ["C#", "ASP.NET Core", "SQL Server", "EF Core", "SignalR", "Razorpay", "Twilio", "SendGrid", "Postman"]
  },
  {
    id: "associate-dotnet-dev",
    role: "Associate .NET Developer",
    company: "NextGen Software Systems",
    period: "2020 - 2021",
    location: "India",
    type: "Full-Time",
    summary:
      "Started career building backend business logic, REST APIs, and SQL database schemas for retail POS systems, healthcare plan tools, and telecom recharge utilities.",
    responsibilities: [
      "Wrote robust C# controllers, services, and repository layers following solid object-oriented design principles.",
      "Designed normalized relational database schemas, foreign keys, and indexes in SQL Server.",
      "Implemented atomic transaction handling for financial wallet top-ups (Hot Recharge) preventing data inconsistency during concurrent requests.",
      "Authored unit tests using xUnit to validate core calculation engines and rule validators.",
      "Generated interactive Swagger API documentation for third-party developer integration."
    ],
    technologies: ["C#", "ASP.NET Core Web API", "SQL Server", "LINQ", "RESTful APIs", "Git", "xUnit"]
  }
];

export const experienceStats = [
  { label: "Years of Experience", value: "4+" },
  { label: "Enterprise Projects Delivered", value: "8+" },
  { label: "Tech Stack Focus", value: "C# / ASP.NET Core" },
  { label: "Primary Database", value: "SQL Server" }
];
