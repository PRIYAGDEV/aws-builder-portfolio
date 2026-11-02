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
    title: "CS Undergrad & Cloud Builder",
    superpowerTitle: "Serverless Architecture & Scale-to-Zero Systems",
    tagline: "I break things, fix them on AWS, and try very hard to never pay for an idle server.",
    location: "Global / Remote",
    status: "Looking for 2026/2027 Software Engineering & Cloud Internships",
    bio: "Hey! I'm Priyag, a Computer Science student who fell into the AWS rabbit hole after accidentally leaving an EC2 VM running overnight and getting a surprise bill. That $4 mistake changed my trajectory: I became fascinated by serverless architecture. If nobody is visiting your app, your cloud bill should be $0. Today, I spend my free time building event-driven microservices, experimenting with Amazon Bedrock AI agents, and pushing AWS Free Tier limits.",
    awsRegion: "us-east-1",
    githubUrl: "https://github.com/PRIYAGDEV",
    linkedinUrl: "https://linkedin.com",
    email: "builder@example.com",
  },

  superpowers: [
    {
      id: "serverless",
      title: "Event-Driven Serverless",
      iconName: "Zap",
      tagline: "High throughput, $0 idle bill",
      description: "Lambda + API Gateway + DynamoDB. Fast cold starts, automated scaling from 0 to thousands of requests, and no physical servers to manage at 2 AM.",
      statLabel: "Idle Resource Cost",
      statValue: "$0.00 / month",
      color: "from-amber-400 to-orange-500",
      bgGlow: "rgba(245, 158, 11, 0.15)",
    },
    {
      id: "genai",
      title: "Practical Bedrock AI",
      iconName: "BrainCircuit",
      tagline: "AI that actually solves real problems",
      description: "Building tool-calling workflows and RAG retrieval using Amazon Bedrock and Claude 3.5. Focused on latency, prompt caching, and keeping hallucination near zero.",
      statLabel: "Response Flow",
      statValue: "Sub-second RAG",
      color: "from-purple-400 to-indigo-500",
      bgGlow: "rgba(168, 85, 247, 0.15)",
    },
    {
      id: "fullstack",
      title: "Fast Frontends on Amplify",
      iconName: "Layers",
      tagline: "Snappy TTFB everywhere in the world",
      description: "React 19 + TypeScript + Vite. Deployed globally with AWS Amplify Hosting so users get cached edge responses with low latency regardless of geography.",
      statLabel: "Edge Caching",
      statValue: "Global CloudFront",
      color: "from-cyan-400 to-blue-500",
      bgGlow: "rgba(6, 182, 212, 0.15)",
    },
    {
      id: "security",
      title: "Pragmatic Cloud Security",
      iconName: "ShieldCheck",
      tagline: "Least-privilege by habit, not afterthought",
      description: "Writing scoped IAM roles, KMS encrypted storage, and CloudWatch alert triggers so I don't wake up to unexpected access logs or leaked API tokens.",
      statLabel: "IAM Posture",
      statValue: "Strict Scoping",
      color: "from-emerald-400 to-teal-500",
      bgGlow: "rgba(16, 185, 129, 0.15)",
    },
  ] as Superpower[],

  projects: [
    {
      id: "superpower-portfolio",
      title: "Interactive AWS Architecture & Stress Simulator",
      description: "A real-time interactive browser simulator showing how AWS serverless handles traffic scaling from 500 to 100,000 req/sec with packet animations.",
      longDescription: "Built for the AWS Student Builder Challenge. Instead of creating another static resume, I built a hands-on simulator where visitors can test incoming traffic load, simulate an 85K DDoS burst, and watch real-time latency, Lambda scaling, and estimated serverless costs update dynamically.",
      technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4"],
      awsServices: ["AWS Amplify Hosting", "Amazon CloudFront", "Agent Toolkit for AWS"],
      githubUrl: "https://github.com/PRIYAGDEV/aws-builder-portfolio",
      liveUrl: "https://main.d2jcmz0962zyy.amplifyapp.com",
      featured: true,
      metrics: "Live on AWS Amplify Hosting",
    },
    {
      id: "cloudpulse-ai",
      title: "Bedrock Log Anomaly Explainer",
      description: "A serverless function that parses CloudWatch error logs, uses Amazon Bedrock to explain the root cause in plain English, and pings a webhook.",
      longDescription: "Created to solve my own debugging headaches. When a Lambda function errors out, this automated pipeline feeds the CloudWatch stack trace into Amazon Bedrock, gets an actionable 2-sentence fix, and delivers it to Discord.",
      technologies: ["Python", "AWS SDK (boto3)", "FastAPI", "Docker"],
      awsServices: ["Amazon Bedrock", "AWS Lambda", "Amazon CloudWatch", "Amazon SNS"],
      githubUrl: "https://github.com/PRIYAGDEV",
      liveUrl: "https://builder.aws.com",
      featured: true,
      metrics: "Tested with 50+ real stack traces",
    },
    {
      id: "event-stream-hub",
      title: "Serverless Event Telemetry Pipeline",
      description: "An experimental telemetry ingestion pipeline using EventBridge rules and DynamoDB to store and filter concurrent sensor data.",
      longDescription: "A hands-on learning project to explore event-driven decoupling. I simulated concurrent IoT device payloads, routed them through Amazon EventBridge rules, and persisted the records in DynamoDB with a 30-day TTL to avoid storage bloat.",
      technologies: ["Node.js", "TypeScript", "DynamoDB SDK"],
      awsServices: ["Amazon EventBridge", "AWS Lambda", "Amazon DynamoDB", "Amazon S3"],
      githubUrl: "https://github.com/PRIYAGDEV",
      featured: false,
      metrics: "Simulated 5,000+ test events",
    },
    {
      id: "secure-auth-vault",
      title: "Cognito Auth & Session Handler",
      description: "A clean authentication demo exploring AWS Cognito user pools, JWT token verification, and refresh flows in a modern single-page app.",
      longDescription: "Built to truly understand how OAuth2 and JWT authorization work under the hood on AWS. Covers sign-up verification codes, token refresh rotation, and protected API routes.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      awsServices: ["AWS Cognito", "Amazon API Gateway"],
      githubUrl: "https://github.com/PRIYAGDEV",
      featured: false,
      metrics: "End-to-end OAuth2 & JWT flows",
    },
  ] as Project[],

  skillCategories: [
    {
      category: "AWS & Cloud",
      icon: "Cloud",
      skills: [
        { name: "AWS Amplify Hosting", level: 95, highlight: true },
        { name: "AWS Lambda (Serverless)", level: 90, highlight: true },
        { name: "Amazon Bedrock (GenAI)", level: 85, highlight: true },
        { name: "Amazon DynamoDB", level: 85 },
        { name: "API Gateway & CloudFront", level: 88 },
        { name: "CloudWatch & IAM", level: 85 },
      ],
    },
    {
      category: "Frontend Development",
      icon: "Code2",
      skills: [
        { name: "React 19 & TypeScript", level: 95, highlight: true },
        { name: "Tailwind CSS v4", level: 92, highlight: true },
        { name: "Vite & Modern Tooling", level: 90 },
        { name: "Responsive UI & Accessibility", level: 88 },
        { name: "State Management", level: 85 },
      ],
    },
    {
      category: "Backend & Scripting",
      icon: "Terminal",
      skills: [
        { name: "Python & Node.js", level: 90, highlight: true },
        { name: "REST APIs & JSON", level: 90 },
        { name: "SQL & NoSQL Modeling", level: 85 },
        { name: "Git & GitHub CLI", level: 92 },
        { name: "PowerShell & Linux Bash", level: 85 },
      ],
    },
    {
      category: "Developer Tools",
      icon: "Cpu",
      skills: [
        { name: "Agent Toolkit for AWS", level: 90, highlight: true },
        { name: "AWS CLI v2", level: 88, highlight: true },
        { name: "GitHub Actions CI/CD", level: 85 },
        { name: "Docker Basics", level: 80 },
      ],
    },
  ] as SkillCategory[],

  milestones: [
    {
      year: "2026",
      title: "AWS Student Builder Challenge",
      organization: "Amazon Web Services",
      description: "Built and deployed an interactive serverless traffic simulator & portfolio hosted globally on AWS Amplify.",
      badge: "Hackathon Entry",
    },
    {
      year: "2026",
      title: "AWS Community Builders Program",
      organization: "AWS Builder Center",
      description: "Active community learner on the waitlist, following cloud builder technical sessions, blogs, and reference architectures.",
      badge: "Waitlist / Active Learner",
    },
    {
      year: "2026",
      title: "AWS Certified Cloud Practitioner (In Prep)",
      organization: "AWS Certification Journey",
      description: "Targeting foundational certification to validate core infrastructure, security groups, IAM scoping, and billing models.",
      badge: "In Progress",
    },
    {
      year: "2025 - Present",
      title: "B.S. in Computer Science",
      organization: "Undergraduate Studies",
      description: "Taking coursework in distributed systems, computer networks, data structures, and database design.",
      badge: "Student",
    },
    {
      year: "2025",
      title: "First Serverless Pipeline Built",
      organization: "Hands-on Project",
      description: "Tied together React, API Gateway, Lambda, and DynamoDB for the first time without provisioning a single EC2 instance.",
      badge: "First Serverless Build",
    },
  ],
};
