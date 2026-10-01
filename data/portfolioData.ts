export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  project: string;
  projectSubtitle: string;
  metrics: { value: string; label: string }[];
  overview: string[];
  challenges: string[];
  architecturePoints: string[];
  impactPoints: string[];
}

export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  period?: string;
  role: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  problem: string;
  architecture: {
    title: string;
    description: string;
    components: { name: string; role: string; tech: string }[];
  };
  contributions: string[];
  performance?: {
    highlight: string;
    points: string[];
  };
  identitySecurity?: {
    highlight: string;
    points: string[];
  };
  observability?: {
    highlight: string;
    points: string[];
  };
  streamingPipeline?: {
    highlight: string;
    points: string[];
  };
  aiWorkflow?: {
    highlight: string;
    points: string[];
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface HelpServiceItem {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Neel Shah',
    shortName: 'NS',
    role: 'Backend & Distributed Systems Engineer',
    headline: 'Building scalable backend systems, enterprise identity platforms, and AI-powered business workflows.',
    location: 'Ahmedabad, India',
    status: 'AVAILABLE FOR OPPORTUNITIES',
    statusColor: 'emerald',
    experienceYears: 'July 2022 – Present',
    bio: 'I build scalable backend systems, enterprise identity platforms, high-throughput applications, and AI-enabled business workflows using Java 21, Spring Boot 3, and modern cloud infrastructure. My work centers on distributed systems design, multi-tenant authorization, SCIM 2.0 lifecycle management, and high-performance database optimization.',
    aboutAiStatement:
      'My recent engineering work also includes integrating LLMs into enterprise workflows, including knowledge-based customer support automation, intelligent email classification, automated response generation and Jira-based issue routing.',
    progressionSummary:
      'I started my engineering career in frontend and cross-platform development and gradually moved deeper into backend engineering, distributed systems and enterprise identity infrastructure.',
    progressionSteps: [
      { year: '2022', title: 'Frontend Development', stack: 'React / React Native' },
      { year: '2023', title: 'Full-Stack Engineering', stack: 'Java + Spring Boot' },
      { year: '2024', title: 'Backend Systems & Microservices', stack: 'REST APIs / Caching / Concurrency' },
      { year: '2025+', title: 'IAM / SCIM / SSO Infrastructure', stack: 'Azure AD B2C / Entra ID / SCIM 2.0' },
      { year: 'Present', title: 'Backend & Distributed Systems', stack: 'High-Throughput / Multi-Tenancy / AI Workflows' },
    ],
  },

  socials: {
    email: 'shahneel20135@gmail.com',
    linkedin: 'https://www.linkedin.com/in/neel-shah-215099192/',
    github: 'https://github.com/Neelshah768',
    resumeUrl: '/NeelShah_CV.pdf',
  },

  heroStack: [
    'Java 21',
    'Spring Boot 3',
    'Microservices',
    'Distributed Systems',
    'IAM / SCIM 2.0',
    'SAML / SSO',
    'AWS',
    'Azure',
    'AI Integration',
    'Gemini API',
  ],

  verifiedMetrics: [
    {
      value: '1M+',
      label: 'ACTIVE USERS',
      detail: 'Enterprise users authenticated and managed across multi-tenant environments',
    },
    {
      value: '100+',
      label: 'ORGANIZATIONS',
      detail: 'Enterprise organizations onboarded with tenant isolation and custom policies',
    },
    {
      value: '13',
      label: 'SAAS PRODUCTION ENVIRONMENTS',
      detail: 'Independently scaled and monitored production environments',
    },
    {
      value: '50%+',
      label: 'API RESPONSE TIME IMPROVEMENT',
      detail: 'Achieved via SQL N+1 resolution, indexing optimization, and Datadog APM tracing',
    },
  ],

  experience: [
    {
      company: 'Promethean Tech',
      role: 'Software Engineer — Backend & Distributed Systems',
      period: 'July 2022 – Present',
      location: 'Ahmedabad, India',
      project: '73Strings',
      projectSubtitle: 'Enterprise Multi-Tenant Authorization Platform',
      metrics: [
        { value: '1M+', label: 'Active Users' },
        { value: '100+', label: 'Organizations' },
        { value: '13', label: 'Production Environments' },
        { value: '50%+', label: 'Latency Reduction' },
      ],
      overview: [
        'Architected and led backend microservices for User Access Management (UAM), SCIM 2.0 provisioning, and enterprise task scheduling.',
        'Engineered a SCIM 2.0 auto-provisioning microservice using Java 21 and Spring Boot 3 for real-time user lifecycle synchronization.',
        'Automated enterprise SAML SSO onboarding using Azure AD B2C custom policy XML generation and Microsoft Graph API.',
        'Mentored junior engineers and handled direct technical communication with enterprise clients for production issue diagnosis and resolution.',
      ],
      challenges: [
        'Eliminating persistent SQL N+1 query patterns across complex nested authorization models in a multi-tenant database.',
        'Orchestrating high-volume entity authorization copying across organizations without blocking database connections.',
        'Streaming large-scale audit compliance events without causing Elasticsearch memory pressure or API degradation.',
        'Harmonizing disparate identity provider attributes across Microsoft Entra ID, Okta, PingOne, and Google Identity.',
      ],
      architecturePoints: [
        'Decoupled monolithic services into domain-aligned microservices (UAM, SCIM, and Scheduler) communicating via structured REST and Redis pub/sub.',
        'Constructed custom Azure AD B2C policy XML generator paired with Microsoft Graph API for automated tenant federation.',
        'Deployed Spring Scheduler with ShedLock distributed locking to guarantee single-instance execution across multi-node clusters.',
        'Engineered multi-threaded direct SQL query execution paired with Redis caching for high-speed permission graph duplication.',
      ],
      impactPoints: [
        'Reduced API response times by over 50% through query elimination, strategic composite indexing, and Datadog APM bottleneck tracing.',
        'Streamed audit data from Elasticsearch to customer AWS S3 buckets in 10,000-record batches for seamless Splunk SIEM ingestion.',
        'Zero downtime tenant federation across 100+ organizations with automated SAML 2.0 and SCIM 2.0 provisioning.',
      ],
    },
  ],

  caseStudies: {
    seventyThreeStrings: {
      id: '73strings',
      title: '73Strings',
      subtitle: 'Enterprise Multi-Tenant Authorization Platform',
      tagline: 'Enterprise-grade authorization and identity infrastructure supporting large-scale multi-tenant environments.',
      period: 'July 2022 – Present',
      role: 'Backend & Distributed Systems Engineer',
      metrics: [
        { value: '1M+', label: 'Active Users' },
        { value: '100+', label: 'Organizations' },
        { value: '13', label: 'Production Environments' },
        { value: '50%+', label: 'Latency Reduction' },
      ],
      tags: [
        'Java 21',
        'Spring Boot 3',
        'Microservices',
        'SCIM 2.0',
        'Azure AD B2C',
        'Microsoft Entra ID',
        'Okta',
        'PingOne',
        'Redis',
        'Elasticsearch',
        'AWS S3',
        'Datadog',
        'Splunk',
      ],
      problem:
        'Global financial and enterprise institutions operating on 73Strings required strict multi-tenant data isolation, instant identity federation with external identity providers (Entra ID, Okta, PingOne), and continuous compliance audit export—all while handling high-throughput authorization checks under tight latency SLAs.',
      architecture: {
        title: 'Multi-Tier Identity & Distributed Data Architecture',
        description:
          'Requests ingress through enterprise IdPs into the Spring Boot 3 identity services layer (UAM, SCIM 2.0, Scheduler), backed by multi-tenant MySQL, Redis caching, Elasticsearch for audit indexing, and AWS S3 batch export for customer Splunk ingestion.',
        components: [
          { name: 'IdP Federation Layer', role: 'SAML 2.0 / OIDC Identity Ingress', tech: 'Azure AD B2C, Entra ID, Okta, PingOne' },
          { name: 'SCIM 2.0 Microservice', role: 'Auto-Provisioning & Lifecycle Sync', tech: 'Java 21, Spring Boot 3, REST' },
          { name: 'UAM Microservice', role: 'User Access & Policy Authorization', tech: 'Spring Security, JPA, Redis' },
          { name: 'Distributed Scheduler', role: 'Clustered Job Execution & Sync', tech: 'Spring Scheduler, ShedLock' },
          { name: 'Data Storage Tier', role: 'Multi-Tenant Relational & Cache Tier', tech: 'MySQL, Redis' },
          { name: 'Audit Streaming Pipeline', role: 'Compliance Event Ingestion & Batching', tech: 'Elasticsearch, AWS S3, Splunk' },
        ],
      },
      contributions: [
        'Architected and led backend microservices for UAM, SCIM 2.0, and Scheduler using Java 21 and Spring Boot 3.',
        'Engineered an enterprise SCIM 2.0 auto-provisioning microservice that synchronizes user lifecycle changes in real time from Okta, Entra ID, and PingOne.',
        'Automated enterprise SAML SSO onboarding by programmatically generating Azure AD B2C custom policy XML files and integrating with Microsoft Graph API.',
        'Eliminated SQL N+1 queries across complex permission hierarchies, reducing API response times by over 50%.',
        'Designed high-volume entity authorization copying using multi-threaded direct SQL execution and Redis cache invalidation.',
        'Built an automated security audit pipeline streaming Elasticsearch compliance logs to customer AWS S3 buckets in 10,000-record chunks for Splunk ingestion.',
        'Configured ShedLock distributed locking on Spring Scheduler tasks to eliminate race conditions in multi-instance SaaS clusters.',
      ],
      performance: {
        highlight: '50%+ API Response Time Reduction',
        points: [
          'Pinpointed high-latency bottlenecks using Datadog APM distributed tracing down to individual database query spans.',
          'Eliminated redundant SQL N+1 queries by replacing iterative ORM fetching with targeted JOIN FETCH and batch projections.',
          'Added composite indices on high-cardinality multi-tenant tenant_id and permission lookup columns.',
          'Implemented multi-threaded direct SQL execution for bulk permission cloning, eliminating ORM overhead during organization onboarding.',
          'Introduced Redis distributed caching for frequently evaluated permission trees with atomic cache invalidation.',
        ],
      },
      identitySecurity: {
        highlight: 'Full Identity Federation & SCIM 2.0 Lifecycle',
        points: [
          'Engineered SCIM 2.0 compliance endpoints (GET/POST/PUT/PATCH/DELETE for /Users and /Groups) according to RFC 7643/7644.',
          'Integrated Microsoft Entra ID, Okta, PingOne, and Google Identity via Azure AD B2C federation.',
          'Automated SAML metadata exchange and custom policy XML deployment via Microsoft Graph API, removing manual onboarding friction.',
          'Enforced role-based and attribute-based access control (RBAC/ABAC) across all 13 production environments.',
        ],
      },
      observability: {
        highlight: 'Batch Audit Streaming to Customer SIEM',
        points: [
          'Designed a compliance audit pipeline that indexes security events in Elasticsearch in near real-time.',
          'Batched export jobs running via ShedLock-guarded Spring Schedulers to extract 10,000-record slices without memory bloat.',
          'Streamed audit batches to customer-designated AWS S3 buckets using AWS STS temporary credentials.',
          'Configured Splunk ingestion schemas, enabling enterprise clients to perform continuous SOC2 and ISO compliance monitoring.',
        ],
      },
    },

    livcast: {
      id: 'livcast',
      title: 'Livcast',
      subtitle: 'Multi-Platform Live Video Streaming Platform',
      tagline: 'Full-stack live video broadcast infrastructure with automated transcoding and concurrent multi-destination RTMP delivery.',
      role: 'Full-Stack & Systems Engineer',
      metrics: [
        { value: '3', label: 'Concurrent RTMP Targets' },
        { value: '100%', label: 'Automated Transcoding' },
        { value: 'S3', label: 'Multipart Video Chunking' },
        { value: 'Low', label: 'Latency Dispatch' },
      ],
      tags: [
        'React Native',
        'Java Spring Boot',
        'FFmpeg',
        'RTMP',
        'WebSockets',
        'AWS S3',
        'JWT',
        'Razorpay',
        'Stripe',
      ],
      problem:
        'Broadcasters and creators required a seamless system to schedule, process, and stream pre-recorded and live video feeds simultaneously to multiple social and streaming platforms (YouTube, Facebook, Twitch) without incurring expensive cloud transcoding latency or bandwidth drops on mobile devices.',
      architecture: {
        title: 'Mobile-to-Cloud Video Ingestion & RTMP Distribution Pipeline',
        description:
          'React Native mobile client uploads chunked media to AWS S3; Spring Boot backend orchestrates FFmpeg transcoding workers, schedules broadcasts, and streams out via RTMP to destination platforms.',
        components: [
          { name: 'Mobile Broadcast App', role: 'Cross-Platform Client & Control Center', tech: 'React Native, Redux, WebSockets' },
          { name: 'Spring Boot API Gateway', role: 'Authentication, Scheduling & Job Dispatch', tech: 'Java, Spring Boot, Spring Security' },
          { name: 'Media Processing Engine', role: 'Automated Video Transcoding & Packaging', tech: 'FFmpeg, Background Workers' },
          { name: 'RTMP Stream Dispatcher', role: 'Concurrent Multi-Stream Egress', tech: 'RTMP Protocols (YouTube, Facebook, Twitch)' },
          { name: 'Storage & Upload Tier', role: 'Multipart Chunked Media Storage', tech: 'AWS S3, S3 Presigned URLs' },
          { name: 'Billing & Monetization', role: 'Tiered Subscription & Gateway Integration', tech: 'Stripe, Razorpay, Webhook Handlers' },
        ],
      },
      contributions: [
        'Engineered a cross-platform mobile application in React Native coupled with a high-throughput Java Spring Boot backend.',
        'Integrated automated FFmpeg pipelines for video transcoding, bitrate normalization, and low-latency pre-recorded video scheduling.',
        'Architected concurrent RTMP streaming delivery dispatching video feeds simultaneously to YouTube, Facebook, and Twitch.',
        'Implemented chunked multipart uploads directly to AWS S3, ensuring reliable media ingestion even over unstable mobile network conditions.',
        'Designed cursor-based pagination and real-time WebSocket notifications for live broadcast health and status updates.',
        'Integrated secure payment processing and subscription management using Stripe and Razorpay with idempotent webhook processing.',
      ],
      streamingPipeline: {
        highlight: 'Automated FFmpeg & RTMP Multiplexing',
        points: [
          'Media Ingestion: Supports direct camera feed as well as link-based media ingestion into AWS S3.',
          'Automated Transcoding: Pre-processes uploaded videos using FFmpeg to normalize resolution, audio codec, and keyframe intervals.',
          'Scheduling Engine: Accurate timestamp-triggered workers that launch live streams automatically at scheduled times.',
          'Multi-Destination RTMP: Simultaneous broadcast to Facebook, YouTube, and Twitch servers with zero local mobile re-encoding burden.',
        ],
      },
      performance: {
        highlight: 'Robust Mobile & Backend Concurrency',
        points: [
          'Engineered chunked S3 upload handlers with resume capability for large video files.',
          'Reduced API payload sizes with cursor-based pagination for high-volume broadcast logs and media assets.',
          'Maintained low-overhead WebSocket duplex communication for real-time stream bitrate, dropped-frame metrics, and viewer counts.',
          'Enforced stateless JWT authentication and decoupled background processing via asynchronous workers.',
        ],
      },
    },

    aiCustomerSupport: {
      id: 'ai-customer-support',
      title: 'AI-Powered Customer Support Automation',
      subtitle: 'Intelligent Email Processing, Knowledge-Based Response Generation and Automated Issue Routing',
      tagline:
        'An AI-powered customer support automation system that continuously processes incoming customer emails, identifies their intent and relevance, uses a knowledge base to generate relevant responses through Google Gemini, and automatically routes unresolved issues through Jira.',
      role: 'Backend & Systems Automation Engineer',
      metrics: [
        { value: 'Dual-Path', label: 'Resolution Engine' },
        { value: 'Zero', label: 'Hallucination Policy' },
        { value: 'Continuous', label: 'Mailbox Ingestion' },
        { value: 'Jira API', label: 'Issue Routing' },
      ],
      tags: [
        'Google Gemini API',
        'LLM Workflow Automation',
        'Knowledge Base',
        'AI Classification',
        'Intent Detection',
        'Email Automation',
        'Jira Integration',
        'Backend Services',
      ],
      problem:
        'Customer support organizations face high volumes of unstructured incoming emails that require rapid triage, intent identification, factual answering from company knowledge, and reliable routing to specialized human teams when queries cannot be answered with high confidence.',
      architecture: {
        title: 'Data → Processing → Decision → Action Pipeline',
        description:
          'A reliable backend automation pipeline that ingests emails, performs intent classification, verifies knowledge base coverage, and cleanly bifurcates execution into automated response generation via Google Gemini or immediate customer acknowledgment and Jira issue assignment.',
        components: [
          { name: 'Email Monitor & Processor', role: 'Continuous Mailbox Polling & Sanitization', tech: 'IMAP / Webhook Workers' },
          { name: 'AI Classification Engine', role: 'Intent Detection & Relevance Scoring', tech: 'Google Gemini API' },
          { name: 'Knowledge Base Layer', role: 'Verified Ground-Truth Context Retrieval', tech: 'Structured Knowledge Base' },
          { name: 'Response Generation Engine', role: 'Context-Constrained Reply Synthesis', tech: 'Google Gemini API' },
          { name: 'Human Handoff & Jira Gateway', role: 'Escalation & Department Assignment', tech: 'Jira REST API' },
          { name: 'Email Dispatcher', role: 'Customer Response & Acknowledgement Delivery', tech: 'SMTP / Transactional Email' },
        ],
      },
      contributions: [
        'Engineered an end-to-end backend automation pipeline continuously monitoring support mailboxes and processing incoming message payloads.',
        'Integrated Google Gemini for zero-shot email classification, urgency categorization, and intent detection.',
        'Designed knowledge-grounded response generation that strictly forbids hallucination: if knowledge is insufficient, execution deterministically switches to human escalation.',
        'Built automated Jira REST API integration that generates structured tickets with customer metadata, intent summary, and team routing tags.',
        'Implemented dual-path transactional email dispatch delivering finalized answers or immediate ticket-reference acknowledgments to customers.',
      ],
      aiWorkflow: {
        highlight: 'Responsible Knowledge-Grounded Decision Branch',
        points: [
          'Path A (Knowledge Sufficient): Email Received → Intent Classified → Knowledge Matched → Gemini Synthesizes Response → Automated Reply Sent.',
          'Path B (Knowledge Insufficient): Email Received → Intent Classified → Knowledge Insufficient → Immediate Customer Acknowledgement Sent → Jira Ticket Created → Routed to Responsible Team.',
          'Zero Blind Generation: The workflow never generates speculative answers to unresolved or unsupported customer requests.',
        ],
      },
    },
  },

  capabilities: [
    {
      number: '01',
      title: 'BACKEND SYSTEMS',
      description: 'Scalable Java 21 and Spring Boot 3 APIs, services, and backend platforms engineered for high throughput and maintainability.',
      technologies: ['Java 21', 'Spring Boot 3', 'Spring Security', 'Spring Data JPA', 'RESTful APIs', 'WebSockets'],
    },
    {
      number: '02',
      title: 'DISTRIBUTED SYSTEMS',
      description: 'Microservices architecture, distributed caching, concurrency control, system design, and database performance optimization.',
      technologies: ['Microservices', 'Redis Caching', 'Elasticsearch', 'Concurrency', 'SQL Optimization', 'LLD & System Design'],
    },
    {
      number: '03',
      title: 'IDENTITY & ACCESS',
      description: 'Enterprise SSO federation, SCIM 2.0 lifecycle automation, SAML 2.0, OAuth2, JWT, and multi-tenant authorization infrastructure.',
      technologies: ['SCIM 2.0', 'Azure AD B2C', 'Microsoft Entra ID', 'Okta', 'PingOne', 'SAML 2.0', 'OAuth2 / JWT'],
    },
    {
      number: '04',
      title: 'CLOUD & INFRASTRUCTURE',
      description: 'Production cloud deployments on AWS and Azure with secure storage, distributed locking, and enterprise SIEM observability pipelines.',
      technologies: ['AWS S3', 'AWS STS', 'Azure', 'ShedLock', 'Datadog APM', 'Splunk SIEM'],
    },
    {
      number: '05',
      title: 'FULL-STACK APPLICATIONS',
      description: 'Production-grade cross-platform mobile and web applications with React, React Native, and TypeScript backed by resilient backend services.',
      technologies: ['React', 'React Native', 'TypeScript', 'Redux', 'RTMP Streaming', 'Payment Gateways'],
    },
    {
      number: '06',
      title: 'AI-ENABLED ENGINEERING',
      description: 'Integrating LLMs into backend workflows, knowledge-based automation, intelligent classification, response generation and issue routing.',
      technologies: ['Google Gemini API', 'LLM Workflow Automation', 'Knowledge Base Q&A', 'AI Classification', 'Jira Integration', 'Backend Services'],
    },
  ],

  skillsByCategory: [
    {
      title: 'BACKEND',
      description: 'Enterprise runtime, application frameworks, and API protocols',
      skills: [
        'Java 21',
        'Spring Boot 3',
        'Spring Security',
        'Spring Data JPA',
        'REST APIs',
        'Microservices',
        'WebSockets',
      ],
    },
    {
      title: 'DISTRIBUTED SYSTEMS',
      description: 'Caching, search, concurrency, and architecture patterns',
      skills: [
        'Redis',
        'Elasticsearch',
        'Caching Strategies',
        'Concurrency Control',
        'Performance Optimization',
        'Multi-Tenancy',
        'System Design',
        'Low-Level Design (LLD)',
      ],
    },
    {
      title: 'IDENTITY & SECURITY',
      description: 'Protocols, standards, and enterprise identity providers',
      skills: [
        'SCIM 2.0',
        'SAML 2.0',
        'OAuth2',
        'JWT',
        'Azure AD B2C',
        'Microsoft Entra ID',
        'Okta',
        'PingOne',
      ],
    },
    {
      title: 'CLOUD & DEVOPS',
      description: 'Infrastructure, object storage, and observability pipelines',
      skills: [
        'AWS',
        'AWS S3',
        'AWS STS',
        'Azure',
        'Splunk',
        'Datadog APM',
        'ShedLock',
      ],
    },
    {
      title: 'DATABASE',
      description: 'Relational data modeling, indexing, and query tuning',
      skills: ['MySQL', 'Query Tuning', 'N+1 Elimination', 'Index Optimization'],
    },
    {
      title: 'FRONTEND & MOBILE',
      description: 'Supporting full-stack and mobile client engineering',
      skills: ['React', 'React Native', 'TypeScript', 'Redux', 'JavaScript'],
    },
    {
      title: 'AI / LLM',
      description: 'LLM workflow automation and backend AI integrations',
      skills: [
        'Google Gemini API',
        'LLM-based Workflow Automation',
        'Knowledge-Base Q&A',
        'AI Classification',
        'Intent Detection',
        'Response Generation',
        'Jira Workflow Automation',
      ],
    },
  ],

  whatICanHelpWith: [
    {
      title: 'BACKEND DEVELOPMENT',
      subtitle: 'Robust Enterprise APIs & Platforms',
      description:
        'Architecting, writing, and refactoring production-grade Java 21 / Spring Boot 3 microservices with clean domain design, robust test suites, and high throughput.',
      highlights: ['Enterprise REST APIs', 'Spring Boot 3 Microservices', 'High-concurrency data models'],
    },
    {
      title: 'IDENTITY ENGINEERING',
      subtitle: 'SSO, SCIM & Access Governance',
      description:
        'Designing end-to-end enterprise authentication and authorization architectures, SCIM 2.0 provisioning workflows, and custom SAML SSO tenant onboarding.',
      highlights: ['SCIM 2.0 auto-provisioning', 'Azure AD B2C / Entra ID / Okta', 'Multi-tenant authorization models'],
    },
    {
      title: 'SYSTEM MODERNIZATION',
      subtitle: 'Monolith to Microservices & Performance',
      description:
        'Deconstructing legacy monolithic codebases into resilient microservices, eliminating database bottlenecks, and tuning query execution for massive latency gains.',
      highlights: ['50%+ API latency reduction', 'SQL N+1 query elimination', 'Redis caching and ShedLock coordination'],
    },
    {
      title: 'CLOUD BACKEND',
      subtitle: 'Cloud Storage & Compliance Pipelines',
      description:
        'Engineering cloud infrastructure integrations across AWS and Azure, S3 batch export pipelines, and SIEM observability integrations for Splunk and Datadog.',
      highlights: ['AWS S3 batch streaming', 'Datadog APM instrumentation', 'Compliance audit ingestion'],
    },
    {
      title: 'AI WORKFLOW INTEGRATION',
      subtitle: 'LLM-Powered Business Processes',
      description:
        'Integrating Google Gemini into production backend services for knowledge-grounded processing, structured classification, and automated Jira ticket escalation.',
      highlights: ['Gemini API integration', 'Zero-hallucination workflow routing', 'Jira REST API ticket automation'],
    },
    {
      title: 'FULL-STACK PRODUCTS',
      subtitle: 'Cross-Platform Clients & Real-Time Sync',
      description:
        'Building high-performance client applications using React, React Native, and WebSockets that interface seamlessly with enterprise backend platforms.',
      highlights: ['React & React Native', 'Real-time WebSocket protocols', 'End-to-end type safety'],
    },
  ],

  contact: {
    heading: "LET'S BUILD SOMETHING USEFUL.",
    subheading:
      "Whether you're hiring for a backend engineering role, looking for technical collaboration, or have a product that needs engineering help, I'd be happy to talk.",
    opportunityTypes: [
      'Full-time opportunity',
      'Contract opportunity',
      'Freelance / project',
      'Technical collaboration',
      'Other',
    ],
  },
};
