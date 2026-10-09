export const projects = [
  {
    id: "erp-management",
    title: "ERP Management System",
    category: "Enterprise Application",
    role: "Backend .NET Developer",
    period: "2023 - Present",
    tagline: "Enterprise ERP backend with tenant-aware database connectivity and dynamic access control.",
    description:
      "A high-performance enterprise ERP system designed for multi-tenant organizations. Features dynamic tenant database switching, automated tenant provisioning, granular role-based authorization, and high-throughput data processing using ASP.NET Core Web API and Dapper/EF Core hybrid ORM strategy.",
    technologies: [
      "C#",
      "ASP.NET Core Web API",
      "EF Core",
      "SQL Server",
      "Dapper",
      "JWT",
      "Serilog",
      "Swagger"
    ],
    features: [
      "Tenant Resolution Middleware: Dynamically resolves incoming tenant request context from headers or domain claims.",
      "Hybrid DB Connection Strategy: Supports shared single-database multi-tenancy and dedicated tenant database switching.",
      "Automated DB Provisioning: Automatic creation and migration of new tenant databases with seed data during onboarding.",
      "Dynamic RBAC & Permission Matrix: Granular API authorization based on client-defined custom role permission sets.",
      "High-Performance Stored Procedures: Dapper integration for complex reports and bulk data calculation logic.",
      "Audit Logging & Exception Handling: Centralized exception middleware and audit tracking across all business operations."
    ],
    architectureHighlights: [
      {
        title: "Tenant Database Resolver",
        details: "Custom IDbContextFactory implementation reading tenant connection strings from encrypted configuration/cache."
      },
      {
        title: "Dynamic Authorization Handler",
        details: "Custom ASP.NET Core IAuthorizationHandler evaluating runtime permissions for flexible enterprise user groups."
      }
    ],
    featured: true,
    githubUrl: "https://github.com",
    liveUrl: ""
  },
  {
    id: "top-indian-lawyers",
    title: "Top Indian Lawyers",
    category: "Legal Services Platform",
    role: "Backend .NET Developer",
    period: "2022 - 2023",
    tagline: "A scalable legal services platform supporting lawyer discovery, real-time enquiries and consultation appointments.",
    description:
      "Engineered backend RESTful microservices for a nationwide lawyer platform. Built automated appointment scheduling workflows, real-time consultation enquiry broadcast systems using SignalR, and notification pipelines.",
    technologies: [
      "C#",
      "ASP.NET Core Web API",
      "SQL Server",
      "EF Core",
      "SignalR",
      "SendGrid",
      "Twilio API"
    ],
    features: [
      "Lawyer Discovery & Filtering APIs: Fast, indexed location & specialization search queries.",
      "Enquiry & Appointment Workflows: State-driven booking lifecycle with real-time status updates.",
      "Broadcast System (SignalR): Instant consultation alerts pushed to available legal professionals.",
      "SMS & Email Notifications: Integrated Twilio and SendGrid for appointment reminders and OTP verification.",
      "Secure Document Attachments: Cloud file storage integration for case files and client documents."
    ],
    architectureHighlights: [
      {
        title: "Real-time Hubs",
        details: "SignalR hubs handling high-concurrency client updates and lawyer notifications."
      },
      {
        title: "Background Queue Processing",
        details: "IHostedService background tasks for sending asynchronous email/SMS notifications without blocking API threads."
      }
    ],
    featured: true,
    githubUrl: "https://github.com",
    liveUrl: ""
  },
  {
    id: "coaching-center-management",
    title: "Coaching Center Management System",
    category: "Enterprise Application",
    role: "Backend .NET Developer",
    period: "2022",
    tagline: "Comprehensive educational institution platform for student enrollment, batch scheduling, fee management, and performance tracking.",
    description:
      "Developed secure backend APIs to streamline multi-branch coaching center operations. Handled student registrations, automated fee installment generation, attendance logs, and exam report generation.",
    technologies: [
      "C#",
      "ASP.NET Core Web API",
      "SQL Server",
      "EF Core",
      "LINQ",
      "Razorpay API",
      "JWT"
    ],
    features: [
      "Multi-Branch Data Isolation: Branch-wise data scoping and centralized administrative reporting.",
      "Fee Management Engine: Automated installment calculation, due date notifications, and receipt generation.",
      "Payment Gateway Integration: Secure Razorpay payment webhook handling for online fee payments.",
      "Attendance & Batch Scheduling: Timetable conflict detection and attendance tracking APIs.",
      "Student Performance Analytics: Stored procedures generating branch and student ranking statistics."
    ],
    architectureHighlights: [
      {
        title: "Payment Webhooks",
        details: "Idempotent Webhook handlers validating digital signatures and updating fee statuses safely."
      }
    ],
    featured: true,
    githubUrl: "https://github.com",
    liveUrl: ""
  },
  {
    id: "restomanager",
    title: "RestoManager — Restaurant Management System",
    category: "Hospitality & POS",
    role: "Backend .NET Developer",
    period: "2021 - 2022",
    tagline: "Real-time POS and kitchen order management backend system with inventory tracking.",
    description:
      "Built resilient backend architecture for restaurant operations including table reservation management, real-time Kitchen Display System (KDS) communication, dynamic menu pricing, and stock inventory tracking.",
    technologies: [
      "C#",
      "ASP.NET Core Web API",
      "SQL Server",
      "Dapper",
      "SignalR",
      "JWT"
    ],
    features: [
      "Kitchen Display Communication: Immediate order push to kitchen stations via SignalR channels.",
      "Table & Order Management: Real-time table status tracking, order modifications, and bill splitting APIs.",
      "Stock & Inventory Management: Auto-deduction of raw ingredients based on menu item recipes upon order placement.",
      "Daily Sales & Audit Reports: Fast Dapper queries generating end-of-day sales summaries and tax breakdowns."
    ],
    architectureHighlights: [
      {
        title: "Fast Query Engine",
        details: "Dapper ORM mapping complex POS receipts and inventory stock joins with sub-millisecond execution times."
      }
    ],
    featured: false,
    githubUrl: "https://github.com",
    liveUrl: ""
  },
  {
    id: "family-health-choice",
    title: "Family Health Choice",
    category: "Healthcare",
    role: "Backend .NET Developer",
    period: "2021",
    tagline: "Healthcare subscription plan platform for family insurance quotes and provider discovery.",
    description:
      "Engineered backend REST APIs for health insurance coverage calculation, family plan customization, provider network search, and member portal authentication.",
    technologies: [
      "C#",
      "ASP.NET Core",
      "SQL Server",
      "EF Core",
      "REST APIs",
      "Postmark"
    ],
    features: [
      "Dynamic Premium Calculation Engine: Algorithm calculating health plan quotes based on age, tier, and coverage.",
      "Provider Network Search API: Geospatial and category search for nearby hospitals and clinics.",
      "Secure Member Enrollment: Encrypted personal identification and HIPAA-compliant data access control.",
      "Automated Claims Processing Trigger: Email notification pipeline for claim status changes."
    ],
    architectureHighlights: [
      {
        title: "Rule-Based Calculation Engine",
        details: "Clean architecture pattern separating pricing business rules from API controller logic."
      }
    ],
    featured: false,
    githubUrl: "https://github.com",
    liveUrl: ""
  },
  {
    id: "hot-recharge",
    title: "Hot Recharge",
    category: "Fintech & Telecom",
    role: "Backend .NET Developer",
    period: "2020 - 2021",
    tagline: "High-volume digital telecom top-up and bill payment utility backend.",
    description:
      "Developed transaction processing APIs for mobile recharges, utility bill payments, and agent wallet management. Built strict transactional guarantees and integration with 3rd-party telecom vendor APIs.",
    technologies: [
      "C#",
      "ASP.NET Core Web API",
      "SQL Server",
      "LINQ",
      "RESTful Integrations",
      "Serilog"
    ],
    features: [
      "Wallet & Balance Management: Atomic database transactions for credit/debit operations to prevent double-spending.",
      "Vendor API Integration: Resilient HTTP client wrappers with Polly retry policies for 3rd-party top-up gateways.",
      "Commission Distribution Engine: Automated agent commission calculation on every successful transaction.",
      "Transaction Status Reconciliation: Background jobs querying vendor endpoints for pending transactions."
    ],
    architectureHighlights: [
      {
        title: "Atomic Transactions",
        details: "SQL Server isolation levels and transaction locks preventing concurrent balance state issues."
      }
    ],
    featured: false,
    githubUrl: "https://github.com",
    liveUrl: ""
  },
  {
    id: "custom-clothing-order",
    title: "Custom Clothing Order Platform",
    category: "E-Commerce",
    role: "Backend Developer",
    period: "2020",
    tagline: "Custom apparel design and order processing engine with dynamic quote generation.",
    description:
      "Created backend services for custom garment ordering, size specifications, fabric catalog search, and multi-currency payment checkout integrations (Stripe, Mollie).",
    technologies: [
      "C#",
      "ASP.NET Core",
      "SQL Server",
      "EF Core",
      "Stripe API",
      "Mollie API"
    ],
    features: [
      "Custom Measurement Matrix APIs: Validation rules for tailored clothing specifications.",
      "Multi-Currency Checkout: Integration with Stripe & Mollie APIs for cross-border transactions.",
      "Order Production Tracking: Workflow status transitions from Design -> Tailoring -> Quality -> Dispatch.",
      "Catalog & Inventory Management: Fabric inventory and pricing matrix backend APIs."
    ],
    architectureHighlights: [
      {
        title: "Multi-Gateway Payment Factory",
        details: "Strategy design pattern enabling seamless selection between Stripe and Mollie gateways."
      }
    ],
    featured: false,
    githubUrl: "https://github.com",
    liveUrl: ""
  },
  {
    id: "mindset",
    title: "Mindset",
    category: "EdTech & Personal Growth",
    role: "Backend Developer",
    period: "2020",
    tagline: "Interactive goal-tracking and habit development API platform.",
    description:
      "Built lightweight microservices for user habit tracking, daily goals assessment, push notification schedules, and progress streak calculations.",
    technologies: [
      "C#",
      "ASP.NET Core Web API",
      "SQL Server",
      "EF Core",
      "JWT Authentication"
    ],
    features: [
      "Streak & Goal Engine: Calculations determining continuous user activity streaks.",
      "Notification Scheduler: Background jobs pushing daily goal reminders.",
      "Progress Dashboard Analytics: Aggregated statistics of user completion rates."
    ],
    architectureHighlights: [
      {
        title: "Caching Layer",
        details: "In-memory caching of daily quotes and goal definitions to reduce database queries."
      }
    ],
    featured: false,
    githubUrl: "https://github.com",
    liveUrl: ""
  }
];
