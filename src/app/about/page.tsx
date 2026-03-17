import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/Buttons";
import { ArrowRight, MapPin, Calendar, ExternalLink } from "lucide-react";

const skills = {
  "Backend Engineering": [
    "Node.js",
    "NestJS",
    "Express.js",
    "REST API",
    "GraphQL",
    "API Design & Optimization",
  ],
  "Frontend Development": [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux",
    "Zustand",
  ],
  "Cloud & DevOps": [
    "AWS Lambda",
    "API Gateway",
    "DynamoDB",
    "S3",
    "Cognito",
    "SQS / SNS",
    "SES",
    "Amplify",
    "CI/CD",
    "Docker",
    "Nginx",
    "PM2",
  ],
  "Database & Storage": ["MongoDB", "DynamoDB", "MySQL"],
  Languages: ["JavaScript", "TypeScript", "PHP", "Python", "C / C++"],
  "Tools & Monitoring": [
    "Git / GitHub / Bitbucket",
    "Sentry",
    "Postman / Swagger",
  ],
};

const strengths = [
  "Designing scalable backend architectures using serverless and cloud-native solutions",
  "Optimizing APIs and database queries for performance and reliability",
  "Implementing CI/CD pipelines for automated and stable deployments",
  "Monitoring and debugging production systems using observability tools",
  "Translating business requirements into efficient technical solutions",
];

const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "Wilson Works Trading Inc.",
    period: "July 2025 – Present",
    type: "Remote",
    bullets: [
      "Led development of multiple interconnected web applications for internal and public users.",
      "Built backend services using Node.js and serverless architecture with NestJS.",
      "Improved API response times by up to 20% while maintaining system reliability and security.",
      "Designed and managed CI/CD pipelines using AWS Amplify for automated deployments.",
      "Utilized AWS services (Lambda, API Gateway, DynamoDB, S3, Cognito, SQS, SNS) for scalable architecture.",
      "Implemented monitoring using Sentry to track and resolve system issues efficiently.",
    ],
  },
  {
    role: "Senior Full Stack Developer",
    company: "Blue Hive Inc.",
    period: "Nov 2022 – Present",
    type: "Remote",
    bullets: [
      "Developed and maintained MERN stack applications with optimized backend performance.",
      "Migrated legacy PHP systems to Node.js, improving scalability and maintainability.",
      "Managed AWS infrastructure including EC2, Lambda, and DynamoDB.",
      "Reduced server response times by up to 25% through backend optimization.",
      "Collaborated directly with clients to implement features and resolve production issues.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "CloudSwyft Global Systems Inc.",
    period: "Internship",
    type: "",
    bullets: [
      "Built scalable applications using Python (Django).",
      "Improved application performance and maintainability.",
      "Collaborated with senior developers and participated in code reviews.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-light mb-4">
              About Me
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-50 tracking-tight mb-6">
              Building software that{" "}
              <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
                actually matters
              </span>
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Iloilo City, Philippines
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> 3+ years experience
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Bio + CTA */}
      <section className="py-20 border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <h2 className="text-xl font-semibold text-zinc-100 mb-4">
                Who I am
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  A{" "}
                  <span className="text-zinc-200">
                    Senior Full Stack Developer
                  </span>{" "}
                  with 3+ years of professional experience, focused on backend
                  engineering, cloud infrastructure, and building systems that
                  are reliable and production-ready.
                </p>
                <p>
                  I work primarily with{" "}
                  <span className="text-zinc-200">
                    Node.js, NestJS, and AWS
                  </span>{" "}
                  — designing APIs, serverless architectures, and cloud-native
                  solutions that scale. I&apos;m also comfortable across the
                  full stack, from React frontends to database design.
                </p>
                <p>
                  Outside of work, I&apos;m currently exploring{" "}
                  <span className="text-zinc-200">AI-powered applications</span>{" "}
                  and advanced system design patterns.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <Button href="/contact" size="md">
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-xl font-semibold text-zinc-100 mb-4">
                Quick stats
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Years experience", value: "3+" },
                  { label: "Technologies", value: "30+" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 rounded-xl bg-zinc-900 border border-zinc-800"
                  >
                    <div className="text-2xl font-bold text-brand-light mb-1">
                      {stat.value}
                    </div>
                    <div className="text-zinc-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-light mb-3">
              Skills
            </p>
            <h2 className="text-3xl font-bold text-zinc-50 tracking-tight">
              Technical toolkit
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], i) => (
              <AnimatedSection key={category} delay={i * 0.07}>
                <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 h-full">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-light mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-800 border border-zinc-700/60 text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-light mb-3">
              Experience
            </p>
            <h2 className="text-3xl font-bold text-zinc-50 tracking-tight">
              Where I&apos;ve worked
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {experience.map((job, i) => (
              <AnimatedSection key={job.company} delay={i * 0.1}>
                <div className="relative pl-6 border-l-2 border-zinc-800 hover:border-brand/50 transition-colors duration-300">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-brand" />
                  <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
                      <h3 className="font-semibold text-zinc-100">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 shrink-0">
                        {job.type && (
                          <span className="text-xs text-zinc-600 bg-zinc-800 px-2 py-0.5 rounded">
                            {job.type}
                          </span>
                        )}
                        <span className="text-xs text-zinc-500 font-mono">
                          {job.period}
                        </span>
                      </div>
                    </div>
                    <p className="text-brand-light text-sm font-medium mb-3">
                      {job.company}
                    </p>
                    <ul className="space-y-1.5">
                      {job.bullets.map((bullet, bi) => (
                        <li
                          key={bi}
                          className="flex items-start gap-2 text-zinc-500 text-sm leading-relaxed"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-brand/60 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Engineering Strengths */}
      <section className="py-20 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-light mb-3">
              Strengths
            </p>
            <h2 className="text-3xl font-bold text-zinc-50 tracking-tight">
              Engineering strengths
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Working On */}
      <section className="py-20 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-light mb-3">
              Right Now
            </p>
            <h2 className="text-3xl font-bold text-zinc-50 tracking-tight">
              What I&apos;m currently working on
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              "Building AI-powered applications and SaaS tools",
              "Exploring advanced backend architectures and system design",
              "Enhancing cloud-native development using AWS",
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 h-full">
                  <div className="w-2 h-2 rounded-full bg-brand mb-3" />
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
