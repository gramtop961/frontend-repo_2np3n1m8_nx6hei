import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">Let’s build</p>
            <h3 className="mt-2 text-3xl font-semibold">Have a site or vision in mind?</h3>
            <p className="mt-3 text-white/70 max-w-prose">
              Tell us about your goals and constraints. We’ll return with a thoughtful, design-forward approach and a clear roadmap.
            </p>
            <a
              href="mailto:hello@jzbstudioz.com"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <a href="mailto:hello@jzbstudioz.com" className="font-medium hover:underline">
                    hello@jzbstudioz.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-white/60">Phone</p>
                  <a href="tel:+1234567890" className="font-medium hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-white/60">Studio</p>
                  <p className="font-medium">1200 Horizon Ave, Suite 9, New York, NY</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} JZB STUDIOZ. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#studio" className="hover:text-white">Studio</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
