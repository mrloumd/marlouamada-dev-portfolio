import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-light mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-50 tracking-tight mb-4">
              Projects
            </h1>
            <p className="text-zinc-400 max-w-xl leading-relaxed">
              A selection of production applications and personal projects. Each one
              built to solve a real problem with clean, maintainable code.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20 border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="text-xl font-semibold text-zinc-100">
              Featured Projects
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="text-xl font-semibold text-zinc-100">Other Projects</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {other.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
