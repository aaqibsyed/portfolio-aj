import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  FlaskConical,
  GitBranch,
  Globe2,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  Wrench
} from "lucide-react";

export const profile = {
  name: "Aaqib",
  title: "Software Developer",
  email: "aaqibjaved422@outlook.com",
  location: "Available worldwide",
  availability: ["Open to Full-Time Opportunities", "Available for Freelance Projects"],
  socials: {
    github: "https://github.com/aaqibsyed",
    linkedin: "https://www.linkedin.com/in/aaqibjaved89",
    fiverr: "https://fiverr.com/",
    upwork: "https://upwork.com/",
    freelancer: "https://freelancer.com/",
    whatsapp: "https://wa.me/"
  },
  resumePath: "/Aaqib-Javed-Resume.pdf"
};

export const roles = [
  "Software Developer",
  "Web Developer",
  "AI Enthusiast",
  "Freelance Developer",
  "Open Source Contributor"
];

export const stats = [
  { label: "Projects shipped", value: "18+" },
  { label: "Lighthouse targets", value: "95+" },
  { label: "API workflows", value: "40k+" },
  { label: "Response time focus", value: "<200ms" }
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "ShadCN UI"],
    level: 92
  },
  {
    title: "Backend",
    icon: Terminal,
    skills: ["Node.js", "REST APIs", "Auth", "Webhooks", "Server Actions", "Edge Functions"],
    level: 84
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Supabase", "Redis", "Vector DBs"],
    level: 78
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["Vercel", "AWS Basics", "Storage", "CDN", "Analytics", "Observability"],
    level: 75
  },
  {
    title: "AI",
    icon: BrainCircuit,
    skills: ["RAG", "LLM Apps", "AI Agents", "LangGraph", "MCP", "Prompt Systems"],
    level: 82
  },
  {
    title: "DevOps",
    icon: GitBranch,
    skills: ["GitHub Actions", "CI/CD", "Docker Basics", "Preview Deploys", "Monitoring"],
    level: 72
  },
  {
    title: "Testing",
    icon: FlaskConical,
    skills: ["Playwright", "Unit Tests", "Accessibility QA", "Performance Audits"],
    level: 76
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Figma", "Postman", "VS Code", "Linear", "Notion"],
    level: 88
  }
];

export const exploring = [
  "AI Agents",
  "Agentic AI",
  "LangGraph",
  "MCP",
  "RAG Systems",
  "GraphQL",
  "System Design",
  "Cloud Technologies",
  "LLM Applications"
];

export const techRadar = {
  Using: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "Framer Motion"],
  Learning: ["LangGraph", "MCP", "GraphQL", "System Design", "Cloud Architecture"],
  "Interested In": ["Multi-agent workflows", "Product analytics", "Edge AI", "SaaS billing"]
};

export const projects = [
  {
    title: "AI Portfolio Assistant",
    category: "AI",
    summary: "A RAG chatbot that answers recruiter and client questions from resume, projects, and skills.",
    image:
      "linear-gradient(135deg, rgba(37,99,235,.92), rgba(34,211,238,.86) 52%, rgba(249,115,22,.82))",
    live: "#ai-assistant",
    github: "https://github.com/aaqibsyed",
    tech: ["Next.js", "OpenAI", "Vector DB", "Streaming", "RAG"],
    features: ["Resume Q&A", "Project lookup", "Streaming UI", "Source-aware answers"],
    challenge: "Designed a recruiter-safe knowledge layer that gives confident answers without inventing credentials.",
    result: "Cuts profile review friction and turns the portfolio into a guided interview surface.",
    metrics: ["<1.2s first token", "12 source chunks", "5 recruiter intents"]
  },
  {
    title: "SaaS Analytics Command Center",
    category: "SaaS",
    summary: "A founder dashboard for projects, page views, funnel metrics, and popular portfolio interactions.",
    image:
      "linear-gradient(135deg, rgba(22,163,74,.9), rgba(37,99,235,.86) 48%, rgba(14,165,233,.75))",
    live: "#analytics",
    github: "https://github.com/aaqibsyed",
    tech: ["React", "Charts", "Vercel Analytics", "Edge", "PostgreSQL"],
    features: ["Country distribution", "Popular projects", "Visitor signals", "Exportable summaries"],
    challenge: "Balanced client-facing visuals with fast loading and low-noise metrics.",
    result: "Makes traction, performance, and attention visible to hiring managers and clients.",
    metrics: ["95+ Lighthouse", "8 dashboards", "Realtime-ready"]
  },
  {
    title: "Developer Project Gallery",
    category: "Full Stack",
    summary: "Searchable case-study system with architecture overviews and future project roadmap support.",
    image:
      "linear-gradient(135deg, rgba(249,115,22,.9), rgba(236,72,153,.74) 48%, rgba(37,99,235,.82))",
    live: "#projects",
    github: "https://github.com/aaqibsyed",
    tech: ["Next.js", "Server Components", "MDX-ready", "TypeScript"],
    features: ["Project filtering", "Case study pages", "Architecture notes", "Metric cards"],
    challenge: "Created a structure that can grow with new work without redesigning the homepage.",
    result: "Recruiters can scan quickly while technical interviewers can go deep.",
    metrics: ["6 filters", "Case-study ready", "SEO structured"]
  }
];

export const roadmap = [
  { title: "Micro CRM for Freelancers", type: "Planned SaaS", icon: BriefcaseBusiness },
  { title: "AI Job Description Matcher", type: "AI Idea", icon: Bot },
  { title: "Open Source RAG Kit", type: "Developer Tool", icon: Layers3 },
  { title: "Startup Metrics Studio", type: "Founder Tool", icon: Rocket }
];

export const timeline = [
  {
    year: "2026",
    title: "AI-first software developer portfolio",
    text: "Building recruiter-friendly, client-ready systems with Next.js, RAG, analytics, and 3D interaction."
  },
  {
    year: "2025",
    title: "Freelance and full-stack product work",
    text: "Delivered responsive web apps, dashboards, landing pages, API integrations, and performance improvements."
  },
  {
    year: "2024",
    title: "Open source and production learning",
    text: "Deepened TypeScript, architecture, testing, cloud deployment, and developer tooling practices."
  },
  {
    year: "Now",
    title: "Exploring agentic AI systems",
    text: "Focused on LangGraph, MCP, RAG systems, system design, and reliable LLM application patterns."
  }
];

export const services = [
  { title: "Web Development", icon: Globe2, price: "Custom", text: "Premium product websites and app interfaces." },
  { title: "Full Stack Development", icon: Layers3, price: "Project", text: "Dashboards, APIs, auth, database flows, and deployment." },
  { title: "AI Integrations", icon: BrainCircuit, price: "Scoped", text: "RAG assistants, workflow automation, and LLM app features." },
  { title: "Performance Optimization", icon: ShieldCheck, price: "Audit", text: "Lighthouse, accessibility, SEO, and Core Web Vitals improvements." }
];

export const testimonials = [
  { quote: "A polished collaborator who turns vague requirements into clear software.", name: "Future Client", role: "Founder", rating: 5 },
  { quote: "Strong technical taste, fast iteration, and excellent communication.", name: "Future Lead", role: "Engineering Manager", rating: 5 },
  { quote: "The project felt premium from the first prototype to final delivery.", name: "Future Partner", role: "Product Owner", rating: 5 }
];

export const architectureItems = [
  { title: "RAG Assistant Flow", text: "Resume and project docs -> embeddings -> vector search -> streaming answer with guardrails." },
  { title: "Portfolio App Architecture", text: "Next.js server components, client islands for motion/3D, typed content, analytics, and PWA shell." },
  { title: "Freelance Inquiry System", text: "Form validation, lead routing, Calendly booking, project scope fields, and CRM-ready export." }
];

export const aiAnswers: Record<string, string> = {
  who: "Aaqib is a Software Developer building full-stack web apps, AI integrations, dashboards, and premium portfolio experiences.",
  projects: "His featured work includes an AI portfolio assistant, SaaS analytics dashboard, and a searchable project case-study gallery.",
  technologies: "He works with Next.js, React, TypeScript, Tailwind CSS, Node.js, databases, Vercel, RAG systems, and AI agent tooling.",
  hire: "Yes. Aaqib is open to full-time software roles and freelance projects including web apps, dashboards, AI integrations, landing pages, and API work.",
  contact: "Use the contact form, email Aaqib at aaqibjaved422@outlook.com, or reach him through LinkedIn at linkedin.com/in/aaqibjaved89 and GitHub at github.com/aaqibsyed."
};

export const blogPosts = [
  "Designing portfolio case studies that recruiters actually read",
  "RAG systems for personal websites without hallucinated claims",
  "What I learned building fast dashboards with Next.js"
];

export const contactMethods = [
  "Email",
  "LinkedIn",
  "GitHub",
  "Fiverr",
  "Upwork",
  "Freelancer.com",
  "WhatsApp",
  "Resume"
];

export const commandItems = [
  { label: "View Projects", href: "#projects" },
  { label: "Hire Me", href: "#contact" },
  { label: "Open AI Assistant", href: "#ai-assistant" },
  { label: "GitHub Dashboard", href: "#github" },
  { label: "Services", href: "#services" },
  { label: "Now Page", href: "/now" },
  { label: "Resume", href: "/resume" },
  { label: "Architecture Gallery", href: "/architecture" }
];

export const iconCloud = ["Next", "React", "TS", "AI", "RAG", "DB", "API", "Cloud", "Git"];

export const featureBadges = [
  { label: "RAG ready", icon: BrainCircuit },
  { label: "PWA shell", icon: Sparkles },
  { label: "SEO optimized", icon: Globe2 },
  { label: "Case studies", icon: Layers3 }
];
