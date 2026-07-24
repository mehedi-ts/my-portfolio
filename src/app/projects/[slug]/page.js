import { projects } from "../../../lib/projects";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { Github } from "../../../components/BrandIcons";
import ScrollReveal from "../../../components/ScrollReveal";

// Generate static pages at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate SEO Metadata dynamically
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }
  
  return {
    title: `${project.title} Case Study | Mehedi Hasan`,
    description: project.shortDesc || project.description,
  };
}

export default async function ProjectDetail({ params }) {
  const resolvedParams = await params;
  const projectIndex = projects.findIndex((p) => p.slug === resolvedParams.slug);
  const project = projects[projectIndex];
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg-main text-text-main text-center space-y-4">
        <h1 className="text-4xl font-black">404 - Project Not Found</h1>
        <Link href="/projects" className="text-primary hover:underline">Return to Projects</Link>
      </div>
    );
  }
  
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  const pullQuote = project.overview.split(". ")[0] + ".";
  const restOfOverview = project.overview.substring(pullQuote.length).trim();

  return (
    <main className="min-h-screen bg-bg-main text-left pb-0 selection:bg-primary/30 selection:text-primary">
      
      {/* Top Bar Navigation */}
      <div className="absolute top-0 left-0 w-full z-50 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center">
          <Link href="/projects" className="group inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-white/70 hover:text-white transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 pb-24">
        
        {/* Full-Bleed Hero Image with Overlay Content */}
        <section className="relative w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-bg-card animate-fade-in-up">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-text-muted">No Image Provided</div>
          )}
          
          {/* Bottom-heavy gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-16 flex flex-col justify-end h-full">
            <div className="space-y-6 max-w-4xl">
              <span className="inline-block px-4 py-1.5 backdrop-blur-md bg-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-white/10 shadow-lg">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tighter drop-shadow-2xl">
                {project.title}
              </h1>
              <p className="text-lg md:text-2xl text-white/80 font-medium max-w-prose leading-relaxed drop-shadow-md">
                {project.shortDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Action Row Below Hero */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-8 md:px-12 animate-fade-in-up animation-delay-100">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-10 py-4 bg-primary text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full flex items-center justify-center gap-3 hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">
              <span>Live Demo</span>
              <ArrowUpRight size={16} />
            </a>
          )}
          
          <div className="flex items-center gap-6">
            {project.githubClient && (
              <a href={project.githubClient} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-text-muted hover:text-text-main transition-colors pb-1 border-b border-transparent hover:border-text-main">
                <Github size={14} />
                <span>Client Repo</span>
              </a>
            )}
            {project.githubServer && (
              <a href={project.githubServer} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-text-muted hover:text-text-main transition-colors pb-1 border-b border-transparent hover:border-text-main">
                <Github size={14} />
                <span>Server Repo</span>
              </a>
            )}
          </div>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid md:grid-cols-12 gap-16 md:gap-20 items-start mt-20 md:mt-32 md:px-12">
          
          {/* Main Content Column (Overview + Features + Challenges) */}
          <div className="md:col-span-8 space-y-20">
            
            {/* Overview */}
            <ScrollReveal>
              <section>
                <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-text-muted mb-8">Overview</h2>
                <div className="text-base md:text-lg text-text-main/80 leading-relaxed max-w-prose space-y-6">
                  <p>
                    <span className="float-left text-5xl font-black text-primary leading-none pr-3 pt-1">
                      {restOfOverview.charAt(0)}
                    </span>
                    {restOfOverview.substring(1).split('\n')[0]}
                  </p>
                  {restOfOverview.split('\n').slice(1).map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Visual Anchor: Pull Quote */}
            <ScrollReveal delay={0.1}>
              <blockquote className="pl-6 border-l-2 border-primary my-16 bg-primary/[0.02] p-8 rounded-r-2xl">
                <p className="text-2xl md:text-3xl font-bold text-text-main leading-tight tracking-tight max-w-prose">
                  "{pullQuote}"
                </p>
              </blockquote>
            </ScrollReveal>

            {/* Key Features (Editorial Numbered List) */}
            <ScrollReveal delay={0.2}>
              <section>
                <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-text-muted mb-12">Key Features</h2>
                <div className="space-y-10">
                  {project.features?.map((feature, idx) => (
                    <div key={idx} className="relative pl-12 md:pl-16">
                      <span className="absolute left-0 top-0 text-3xl md:text-4xl font-black text-text-main/10 select-none leading-none tracking-tighter">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <p className="text-lg text-text-main font-medium leading-relaxed max-w-prose pt-1">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Deep Dive (Challenges) - Distinct Callout */}
            {project.challenges && (
              <ScrollReveal delay={0.3}>
                <section className="pt-8">
                  <div className="relative pl-8 md:pl-12 border-l-4 border-text-main/10 py-2 before:absolute before:left-0 before:top-0 before:w-1 before:h-12 before:bg-primary before:-ml-1">
                    <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-text-main mb-6">Challenges & Learnings</h2>
                    <div className="text-base text-text-muted leading-relaxed max-w-prose font-medium italic">
                      <p>{project.challenges}</p>
                    </div>
                  </div>
                </section>
              </ScrollReveal>
            )}

          </div>

          {/* Sticky Side Info Panel */}
          <aside className="md:col-span-4 sticky top-32">
            <ScrollReveal delay={0.4}>
              <div className="bg-primary/5 rounded-3xl border-l-2 border-primary p-8 space-y-10">
                
                <div className="space-y-3">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted">Category</h3>
                  <p className="text-base font-bold text-text-main">{project.category}</p>
                </div>

                {project.timeline && (
                  <div className="space-y-3">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted">Timeline</h3>
                    <p className="text-base font-bold text-text-main">{project.timeline}</p>
                  </div>
                )}

                <div className="space-y-5">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted">Tech Stack</h3>
                  <div className="flex flex-col gap-3">
                    {project.techIcons?.map((tech) => (
                      <div key={tech.name} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-bg-main flex items-center justify-center border border-border-main/50 shadow-sm shrink-0">
                          <tech.icon className={`w-4 h-4 opacity-90 ${tech.color}`} />
                        </div>
                        <span className="text-sm font-bold text-text-main">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
              </div>
            </ScrollReveal>
          </aside>
          
        </div>
      </div>

      {/* Continuous Split Bottom Navigation Bar */}
      <nav className="mt-20">
        <div className="w-full grid grid-cols-2 divide-x divide-border-main/30 border-t border-border-main/30">
          
          {/* Previous (Left) */}
          <Link href={`/projects/${prevProject.slug}`} className="group relative w-full p-8 md:p-12 lg:p-16 flex items-center justify-start gap-6 bg-bg-card/20 hover:bg-bg-card/60 transition-colors duration-500 overflow-hidden">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shrink-0 border border-border-main/50">
              {prevProject.image ? (
                <img src={prevProject.image} alt={prevProject.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-bg-main text-[8px] text-text-muted uppercase">Prev</div>
              )}
            </div>
            <div className="flex flex-col items-start space-y-2 max-w-[calc(100%-6rem)]">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted flex items-center gap-2 group-hover:-translate-x-1 transition-transform duration-300">
                <ArrowLeft size={12} /> Previous
              </span>
              <h4 className="text-lg md:text-2xl font-bold text-text-main/70 group-hover:text-text-main transition-colors truncate w-full">
                {prevProject.title}
              </h4>
            </div>
          </Link>
          
          {/* Next (Right) */}
          <Link href={`/projects/${nextProject.slug}`} className="group relative w-full p-8 md:p-12 lg:p-16 flex items-center justify-end gap-6 bg-bg-card/20 hover:bg-bg-card/60 transition-colors duration-500 overflow-hidden text-right">
            <div className="flex flex-col items-end space-y-2 max-w-[calc(100%-6rem)]">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted flex items-center justify-end gap-2 group-hover:translate-x-1 transition-transform duration-300">
                Next <ArrowRight size={12} />
              </span>
              <h4 className="text-3xl md:text-5xl font-black text-text-main group-hover:text-primary transition-colors tracking-tighter truncate w-full">
                {nextProject.title}
              </h4>
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shrink-0 border border-border-main/50">
              {nextProject.image ? (
                <img src={nextProject.image} alt={nextProject.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-bg-main text-[8px] text-text-muted uppercase">Next</div>
              )}
            </div>
          </Link>
          
        </div>
      </nav>
      
    </main>
  );
}
