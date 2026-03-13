import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/90" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <AnimateIn animation="fade-up">
          <span className="mb-3 inline-block rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-light">
            Let&apos;s Connect
          </span>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Ready to Work Together?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-gray-300">
            Whether you&apos;re looking for a driven sales leader or want to
            discuss opportunities in logistics, I&apos;d love to hear from you.
          </p>
        </AnimateIn>

        <AnimateIn animation="fade-up" delay={200}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.linkedin.com/in/dustin-delisle-68b3a5194/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              Connect on LinkedIn
            </a>
            <a
              href="mailto:dustindelisle@email.com"
              className="flex items-center gap-2.5 rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              Send an Email
            </a>
          </div>
        </AnimateIn>

        <AnimateIn animation="fade" delay={400}>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            Greater Chicago Area
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
