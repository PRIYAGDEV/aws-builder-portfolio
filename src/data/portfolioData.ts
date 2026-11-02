export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  awsServices: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface Superpower {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  statLabel: string;
  statValue: string;
  color: string;
  bgGlow: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Priyag",
    title: "Cloud & AI Software Engineer",
    superpowerTitle: "Architect of Serverless Intelligence",
    tagline: "Building resilient cloud systems and autonomous AI solutions at hyperscale.",
    location: "Global / Remote",
    status: "Open to Internships & New Grad Roles (2026/2027)",
    bio: "Passionate computer science student and cloud builder specializing in modern distributed systems, AWS serverless architectures, and generative AI agents. Driven by turning complex backend challenges into elegant, highly available, user-centric software.",
    awsRegion: "us-east-1",
    githubUrl: "https://github.com/PRIYAGDEV",
    linkedinUrl: "https://linkedin.com",
    email: "builder@example.com",
  },

  superpowers: [
    {
      id: "serverless",
      title: "Serverless Autoscaling",
      iconName: "Zap",
      tagline: "From 0 to 100K RPS with Zero Cold-Start Stress",
      description: "Designing event-driven architectures using AWS Lambda, API Gateway, DynamoDB, and EventBridge with sub-15ms execution latency and automatic scale-to-zero economics.",
      statLabel: "Traffic Resilience",
      statValue: "99.99% Uptime",
      color: "from-amber-400 to-orange-500",
      bgGlow: "rgba(245, 158, 11, 0.15)",
    },
    {
      id: "genai",
      title: "Agentic AI & Bedrock RAG",
      iconName: "BrainCircuit",
      tagline: "Context-Aware Autonomous Reasoning",
      description: "Harnessing Amazon Bedrock, Knowledge Bases, Claude 3.5, and vector embeddings to deliver multi-turn agentic workflows, conversational intelligence, and enterprise-grade retrieval.",
      statLabel: "Query Precision",
      statValue: "Sub-second RAG",
      color: "from-purple-400 to-indigo-500",
      bgGlow: "rgba(168, 85, 247, 0.15)",
    },
    {
      id: "fullstack",
      title: "Modern Edge Web Architecture",
      iconName: "Layers",
      tagline: "Sub-Second Global TTFB with AWS Amplify",
      description: "Crafting fluid, accessible frontends using React 19, TypeScript, and Tailwind CSS, deployed instantly worldwide via AWS Amplify Hosting and CloudFront edge points of presence.",
      statLabel: "Global Latency",
      statValue: "<40ms Edge TTFB",
      color: "from-cyan-400 to-blue-500",
      bgGlow: "rgba(6, 182, 212, 0.15)",
    },
    {
      id: "security",
      title: "Zero-Trust Cloud Governance",
      iconName: "ShieldCheck",
      tagline: "Hardened Least-Privilege by Design",
      description: "Enforcing rigorous IAM governance, AWS WAF rate-limiting, encrypted data-at-rest with KMS, and automated audit checks for rock-solid security postures.",
      statLabel: "Security Posture",
      statValue: "Strict Least-Privilege",
      color: "from-emerald-400 to-teal-500",
      bgGlow: "rgba(16, 185, 129, 0.15)",
    },
  ] as Superpower[],

  projects: [
    {
      id: "cloudpulse-ai",
      title: "CloudPulse AI — Autonomous Cloud Healing Agent",
      description: "An autonomous agent that monitors AWS CloudWatch telemetry, diagnoses performance anomalies using Amazon Bedrock, and automatically generates corrective CDK patches.",
      longDescription: "CloudPulse AI integrates directly with AWS CloudWatch alarms and AWS Health events. When an infrastructure bottleneck or elevated error rate is detected, the agent analyzes runtime logs using Claude 3 on Amazon Bedrock, diagnoses the root cause, and generates pull requests or automated rollback proposals.",
      technologies: ["React 19", "TypeScript", "Python", "FastAPI"],
      awsServices: ["Amazon Bedrock", "AWS Lambda", "Amazon CloudWatch", "AWS Amplify Hosting", "Amazon DynamoDB"],
      githubUrl: "https://github.com/PRIYAGDEV",
      liveUrl: "https://builder.aws.com",
      featured: true,
      metrics: "Reduced MTTR by 68% in stress tests",
    },
    {
      id: "superpower-portfolio",
      title: "Interactive Superpower Portfolio & AWS Simulator",
      description: "A developer portfolio featuring an interactive real-time AWS Cloud Architecture Simulator and interactive Cloud CLI.",
      longDescription: "Built for the AWS Student Builder Challenge. It showcases a live packet-simulation engine modeling traffic flow through Route 53, CloudFront, Amplify Hosting, API Gateway, Lambda, and DynamoDB under dynamic simulated stress loads.",
      technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4"],
      awsServices: ["AWS Amplify Hosting", "AWS CLI", "Agent Toolkit for AWS", "CloudFront"],
      githubUrl: "https://github.com/PRIYAGDEV",
      liveUrl: "#",
      featured: true,
      metrics: "100/100 Lighthouse Performance score",
    },
    {
      id: "event-stream-hub",
      title: "OmniStream — Serverless Event Pipeline",
      description: "High-throughput serverless telemetry processing pipeline handling streaming IoT metrics with real-time fan-out.",
      longDescription: "Architected using Amazon EventBridge and AWS Kinesis Data Streams for parallel ingestion. Events are filtered and processed by concurrent Lambda functions, written to DynamoDB Global Tables, and broadcast via WebSockets to client dashboards.",
      technologies: ["Node.js", "TypeScript", "WebSocket API", "Tailwind CSS"],
      awsServices: ["Amazon EventBridge", "AWS Lambda", "Amazon DynamoDB", "Amazon S3", "Amazon SNS"],
      githubUrl: "https://github.com/PRIYAGDEV",
      featured: false,
      metrics: "Processed 5M+ simulated daily events with $0 idle cost",
    },
    {
      id: "secure-auth-vault",
      title: "CloudVault — Zero-Trust Credential Broker",
      description: "Cryptographically verifiable credential vault enforcing short-lived session grants with AWS Cognito and KMS.",
      longDescription: "Implements strict least-privilege token exchange for distributed microservices. Generates ephemeral access tokens verified via asymmetric KMS signatures with automated auditing and anomaly detection.",
      technologies: ["Go", "React", "PostgreSQL", "Docker"],
      awsServices: ["AWS Cognito", "AWS KMS", "AWS Secrets Manager", "AWS WAF"],
      githubUrl: "https://github.com/PRIYAGDEV",
      featured: false,
      metrics: "Zero leaked credentials across 500+ integration runs",
    },
  ] as Project[],

  skillCategories: [
    {
      category: "Cloud & AWS Ecosystem",
      icon: "Cloud",
      skills: [
        { name: "AWS Amplify Hosting", level: 95, highlight: true },
        { name: "AWS Lambda (Serverless)", level: 90, highlight: true },
        { name: "Amazon Bedrock (GenAI)", level: 88, highlight: true },
        { name: "Amazon DynamoDB", level: 85 },
        { name: "API Gateway & CloudFront", level: 88 },
        { name: "IAM & CloudWatch", level: 85 },
      ],
    },
    {
      category: "Frontend & Full-Stack",
      icon: "Code2",
      skills: [
        { name: "React 19 & Next.js", level: 95, highlight: true },
        { name: "TypeScript / JavaScript", level: 92, highlight: true },
        { name: "Tailwind CSS & Modern UI", level: 90 },
        { name: "State Management & Vite", level: 90 },
        { name: "REST & GraphQL APIs", level: 85 },
      ],
    },
    {
      category: "Backend & Systems",
      icon: "Terminal",
      skills: [
        { name: "Node.js & Python", level: 90, highlight: true },
        { name: "FastAPI & Express", level: 85 },
        { name: "Distributed Systems", level: 82 },
        { name: "SQL & NoSQL Modeling", level: 85 },
        { name: "Docker & Containerization", level: 80 },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: "Cpu",
      skills: [
        { name: "Git & GitHub Actions CI/CD", level: 92, highlight: true },
        { name: "Agent Toolkit for AWS", level: 88, highlight: true },
        { name: "AWS CLI v2 & MCP Servers", level: 85 },
        { name: "Linux / PowerShell Scripting", level: 85 },
      ],
    },
  ] as SkillCategory[],

  milestones: [
    {
      year: "2026",
      title: "AWS Student Builder Challenge Participant",
      organization: "Amazon Web Services",
      description: "Built and deployed this interactive superpower portfolio on AWS Amplify Hosting using the Agent Toolkit for AWS.",
      badge: "Hackathon Finalist",
    },
    {
      year: "2026",
      title: "AWS Certified Cloud Practitioner Candidate",
      organization: "AWS Training & Certification",
      description: "Preparing foundational mastery in cloud architecture, security compliance, pricing models, and core services.",
      badge: "In Progress",
    },
    {
      year: "2025 - Present",
      title: "B.S. in Computer Science",
      organization: "University of Technology",
      description: "Focusing on Distributed Computing, Cloud Systems, Algorithms, and Artificial Intelligence.",
      badge: "Dean's Honor List",
    },
    {
      year: "2025",
      title: "Open Source Contributor & Cloud Fellow",
      organization: "Developer Community",
      description: "Authored reusable serverless templates and automated deployment scripts for modern cloud developers.",
      badge: "Open Source",
    },
  ],
};
