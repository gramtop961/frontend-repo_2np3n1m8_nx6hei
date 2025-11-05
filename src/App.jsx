import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero3D />
        <section id="studio" className="relative bg-black py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">Our Practice</p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">Design-led. Data-aware. Human-centered.</h2>
                <p className="mt-4 text-white/70">
                  JZB STUDIOZ is an architecture studio dedicated to crafting timeless, progressive spaces. We combine rigorous research, digital craft, and material sensitivity to deliver work that performs as beautifully as it looks.
                </p>
                <ul className="mt-6 grid gap-3 text-white/80">
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" /> Concept development and narrative</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" /> Planning, approvals and project leadership</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" /> Visualization, BIM and fabrication-ready documentation</li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <img
                  src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop"
                  alt="Studio Process"
                  className="w-full h-[360px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
