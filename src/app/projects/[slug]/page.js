import { projects } from "../../../lib/projects";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { Github } from "../../../components/BrandIcons";

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

  // Extract a sentence for the pull quote (first sentence of overview)
  const pullQuote = project.overview.split(". ")[0] + ".";
  // The rest of the overview
  const restOfOverview = project.overview.substring(pullQuote.length).trim();

  return (
    <main className="min-h-screen bg-bg-main text-left pb-24 selection:bg-primary/30 selection:text-primary">
      
      {/* Minimal Navigation Header */}
      <div className="pt-8 pb-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center">
          <Link href="/projects" className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-text-main transition-colors">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-12 md:pt-16 pb-24">
        
        {/* Editorial Header */}
        <header className="max-w-4xl space-y-8 animate-fade-in-up mb-16">
          <span className="inline-block px-3 py-1 bg-text-main/5 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black text-text-main leading-[0.95] tracking-tighter">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-text-muted font-medium max-w-prose leading-relaxed">
            {project.shortDesc}
          </p>
        </header>

        {/* Hero Image */}
        <section className="animate-fade-in-up animation-delay-100 mb-20 md:mb-32">
          <div className="w-full aspect-[16/10] md:aspect-[21/9] rounded-xl overflow-hidden bg-bg-card relative">
            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-text-muted">No Image Provided</div>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-8 mt-10">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-10 py-4 bg-primary text-white text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-orange-600 transition-colors">
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
        </section>

        {/* Asymmetric Grid Layout */}
        <div className="grid md:grid-cols-12 gap-16 md:gap-24 items-start">
          
          {/* Left Column (Wider): Narrative */}
          <div className="md:col-span-8 space-y-24">
            
            {/* Overview */}
            <section>
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-text-main mb-8">Overview</h2>
              <div className="text-base md:text-lg text-text-muted leading-relaxed max-w-prose space-y-6">
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

            {/* Visual Anchor: Pull Quote */}
            <blockquote className="pl-6 border-l-2 border-primary my-16">
              <p className="text-2xl md:text-3xl font-bold text-text-main leading-tight tracking-tight max-w-prose">
                "{pullQuote}"
              </p>
            </blockquote>

            {/* Key Features (Editorial Numbered List) */}
            <section>
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-text-main mb-12">Key Capabilities</h2>
              <div className="space-y-8">
                {project.features?.map((feature, idx) => (
                  <div key={idx} className="relative pl-12 md:pl-16">
                    <span className="absolute left-0 top-0 text-3xl md:text-4xl font-black text-text-main/10 select-none leading-none">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="text-lg text-text-main font-medium leading-relaxed max-w-prose pt-1">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Deep Dive (Challenges) */}
            {project.challenges && (
              <section className="pt-12 border-t border-border-main/50">
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-text-main mb-8">Deep Dive</h2>
                <div className="text-base text-text-muted leading-relaxed max-w-prose">
                  <p>{project.challenges}</p>
                </div>
              </section>
            )}

          </div>

          {/* Right Column (Narrower): Project Meta Sidebar */}
          <aside className="md:col-span-4 sticky top-24 pt-8 md:pt-0 md:pl-10 md:border-l border-border-main/50 space-y-12">
            
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

            <div className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted">Technology Stack</h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-text-main leading-loose">
                {project.techIcons?.map((tech, idx) => (
                  <span key={tech.name} className="flex items-center">
                    {tech.name}
                    {idx !== project.techIcons.length - 1 && (
                      <span className="mx-2 text-text-muted/40 font-black">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            
          </aside>
          
        </div>
      </div>

      {/* Editorial Navigation Footer */}
      <nav className="border-t border-border-main/30 bg-bg-card/30">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Previous */}
            <div className="w-full md:w-1/3 flex flex-col items-start space-y-4 text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted flex items-center gap-2">
                <ArrowLeft size={12} /> Previous Project
              </span>
              <Link href={`/projects/${prevProject.slug}`} className="group relative block w-full max-w-xs">
                <h4 className="text-xl md:text-2xl font-bold text-text-muted group-hover:text-text-main transition-colors truncate">
                  {prevProject.title}
                </h4>
              </Link>
            </div>

            {/* Vertical Divider (Desktop) */}
            <div className="hidden md:block w-[1px] h-24 bg-border-main/30" />
            
            {/* Next (Prominent) */}
            <div className="w-full md:w-1/2 flex flex-col items-start md:items-end space-y-4 text-left md:text-right">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted flex items-center justify-start md:justify-end gap-2">
                Next Project <ArrowRight size={12} />
              </span>
              <Link href={`/projects/${nextProject.slug}`} className="group block w-full">
                <h4 className="text-3xl md:text-5xl font-black text-text-main group-hover:text-primary transition-colors tracking-tight truncate">
                  {nextProject.title}
                </h4>
              </Link>
            </div>
            
          </div>
        </div>
      </nav>
      
    </main>
  );
}
