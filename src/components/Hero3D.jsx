import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="home" className="relative pt-16 bg-black text-white">
      <div className="relative w-full" style={{ height: '80vh' }}>
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />

        <div className="absolute inset-0 flex items-center">
          <div className="pointer-events-auto mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">JZB STUDIOZ</p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Future-forward architecture for bold brands & places
              </h1>
              <p className="mt-4 text-white/70 max-w-xl">
                We craft distinctive spaces where form, function and emotion meet—merging precision with an innovative 3D visual language.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition"
                >
                  Explore Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3 font-medium hover:bg-white/20 transition"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
