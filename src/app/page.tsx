import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/Buttons";
import { projects } from "@/data/projects";
import { ArrowRight, Zap, Cloud, Brain } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Backend Engineering",
    description:
      "High-performance APIs, serverless architectures, and scalable backend systems using Node.js, NestJS, and Express.",
  },
  {
    icon: Cloud,
    title: "AWS Cloud & DevOps",
    description:
      "Production infrastructure on AWS — Lambda, API Gateway, DynamoDB, S3, Cognito, SQS/SNS, and CI/CD pipelines via Amplify.",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description:
      "Building intelligent applications and SaaS tools powered by AI — from integrations to custom backend pipelines.",
  },
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />

      {/* What I do */}
      <section className="py-24 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-light mb-3">
              What I Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
              Building for scale, designed for users
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-brand/30 transition-colors h-full">
                    <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-brand-light" />
                    </div>
                    <h3 className="font-semibold text-zinc-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-light mb-3">
                Featured Work
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
                Selected Projects
              </h2>
            </div>
            <Button
              href="/projects"
              variant="outline"
              className="hidden sm:inline-flex group"
            >
              All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          <div className="mt-8 flex sm:hidden">
            <Button href="/projects" variant="outline" className="w-full group">
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative rounded-2xl bg-gradient-to-br from-brand/20 via-zinc-900 to-brand-dark/10 border border-brand/20 p-10 sm:p-14 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent rounded-2xl" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 mb-4 tracking-tight">
                  Let&apos;s build something great
                </h2>
                <p className="text-zinc-400 mb-8 max-w-xl mx-auto leading-relaxed">
                  I&apos;m open to full-time roles, freelance contracts, and
                  interesting technical collaborations.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button href="/contact" size="lg">
                    Get In Touch
                  </Button>
                  <Button href="/about" variant="outline" size="lg">
                    Learn More About Me
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
