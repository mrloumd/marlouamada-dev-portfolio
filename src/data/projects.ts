import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered SaaS Platform",
    description:
      "A full-stack SaaS platform with AI-driven analytics, real-time dashboards, and multi-tenant architecture. Processes 10k+ events/sec using event-driven microservices.",
    tech: ["Next.js", "Node.js", "AWS Lambda", "MongoDB", "OpenAI API"],
    github: "https://github.com/marlouamada",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Microservices",
    description:
      "Scalable e-commerce backend with independent services for auth, catalog, cart, orders, and payments. Deployed on AWS ECS with CI/CD pipelines.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "AWS ECS"],
    github: "https://github.com/marlouamada",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Real-Time Collaboration Tool",
    description:
      "Notion-like collaborative editor supporting concurrent editing, rich text, file uploads, and team workspaces with granular permissions.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "AWS S3"],
    github: "https://github.com/marlouamada",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    id: 4,
    title: "DevOps Monitoring Dashboard",
    description:
      "Centralized observability platform aggregating logs, metrics, and traces from distributed services with alert management and on-call scheduling.",
    tech: ["Next.js", "Grafana", "Prometheus", "AWS CloudWatch", "TypeScript"],
    github: "https://github.com/marlouamada",
    demo: "https://demo.example.com",
    featured: false,
  },
  {
    id: 5,
    title: "Mobile Banking App",
    description:
      "Cross-platform mobile banking app with biometric auth, real-time notifications, transaction history, and secure fund transfers.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Plaid API", "Stripe"],
    github: "https://github.com/marlouamada",
    demo: "https://demo.example.com",
    featured: false,
  },
  {
    id: 6,
    title: "AI Code Review Bot",
    description:
      "GitHub bot that performs automated code reviews using LLMs — detects bugs, security issues, and suggests improvements on every PR.",
    tech: ["TypeScript", "GitHub Actions", "OpenAI API", "Node.js", "Webhooks"],
    github: "https://github.com/marlouamada",
    demo: "https://demo.example.com",
    featured: false,
  },
];
