import Image from "next/image";
import AnimateIn from "./AnimateIn";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimateIn animation="fade-up" className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            About Me
          </span>
          <h2 className="text-4xl font-bold text-navy md:text-5xl">
            Driven by Results,<br />Powered by Relationships
          </h2>
        </AnimateIn>

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Text */}
          <div>
            <AnimateIn animation="fade-right" delay={100}>
              <p className="mb-5 text-lg font-medium leading-relaxed text-navy">
                I am a highly motivated individual working in the logistics
                brokerage industry with 6+ years of experience at
                industry-leading brokerages.
              </p>
            </AnimateIn>
            <AnimateIn animation="fade-right" delay={200}>
              <p className="mb-5 text-base leading-relaxed text-gray-600">
                I have worked on both sides of the aisle&mdash;from carrier sales
                to customer sales. My go-getter mentality is backed by a proven
                track record of high goal attainment and rapid portfolio growth.
              </p>
            </AnimateIn>
            <AnimateIn animation="fade-right" delay={300}>
              <p className="mb-8 text-base leading-relaxed text-gray-600">
                Proficient in Salesforce, Zoho CRM systems, and Microsoft Office,
                I bring both the technical know-how and the interpersonal skills
                needed to build lasting business relationships. With experience
                managing teams of up to 15 direct reports, I&apos;ve driven sales
                performance and managed team P&amp;Ls at every stage of my career.
              </p>
            </AnimateIn>

            {/* Highlights */}
            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  ),
                  title: "Carrier & Customer Sales",
                  desc: "Full-spectrum logistics expertise across both sides of the brokerage",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  ),
                  title: "Team Leadership",
                  desc: "Managed teams of up to 15 direct reports",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>
                  ),
                  title: "P&L Management",
                  desc: "Driving profitable growth and sales performance",
                },
              ].map((item, i) => (
                <AnimateIn key={item.title} animation="fade-right" delay={400 + i * 100}>
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

          {/* Image */}
          <AnimateIn animation="fade-left" delay={200} duration={900}>
            <div className="relative h-[480px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="Professional workspace"
                fill
                className="object-cover"
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
