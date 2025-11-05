import { ExternalLink, Layers, Ruler, Building2, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Aurora Tower',
    tag: 'Commercial',
    image:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop',
    blurb:
      'A mixed-use high-rise with terraced green decks, optimized for daylight and sustainability.',
  },
  {
    title: 'Vanta House',
    tag: 'Residential',
    image:
      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
    blurb:
      'A sculptural private residence embracing shadows, light and tactile materiality.',
  },
  {
    title: 'Nexus Pavilion',
    tag: 'Cultural',
    image:
      'https://images.unsplash.com/photo-1502691876148-a84978e59af8?q=80&w=1600&auto=format&fit=crop',
    blurb:
      'Temporary pavilion celebrating community, technology and adaptive modular systems.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">Featured Work</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">Selected Projects</h2>
          </div>
          <div className="hidden md:flex gap-3 text-white/60">
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
              <Layers className="h-4 w-4" /> Concept
            </span>
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
              <Ruler className="h-4 w-4" /> Planning
            </span>
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
              <Building2 className="h-4 w-4" /> Build
            </span>
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
              <Sparkles className="h-4 w-4" /> Visualization
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-md bg-black/60 px-2 py-1 text-xs">{p.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.blurb}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-white/90 hover:text-white"
                >
                  View details <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
