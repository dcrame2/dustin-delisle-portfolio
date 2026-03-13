import AnimateIn from "./AnimateIn";

export default function Skills() {
  const categories = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
      ),
      title: "Sales & Business Development",
      items: [
        "Outside & Inside Sales",
        "Direct Sales",
        "Business Development",
        "Creative Prospecting",
        "Major Account Development",
        "Sales Performance",
      ],
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
      ),
      title: "Leadership & Management",
      items: [
        "Team Management (15+ reports)",
        "P&L Management",
        "Project Management",
        "Coaching & Mentoring",
        "Sales Team Leadership",
      ],
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
      ),
      title: "Relationship & Communication",
      items: [
        "Relationship Building",
        "Client Relations",
        "Negotiation",
        "Interpersonal Skills",
        "Networking",
        "Presentation Skills",
      ],
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
      ),
      title: "Tools & Technology",
      items: [
        "Salesforce CRM",
        "Zoho CRM",
        "Microsoft Office Suite",
        "Data Analysis & Reporting",
      ],
    },
  ];

  return (
    <section id="skills" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimateIn animation="fade-up" className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            Expertise
          </span>
          <h2 className="text-4xl font-bold text-navy md:text-5xl">
            Core Competencies
          </h2>
        </AnimateIn>

        {/* Grid */}
        <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <AnimateIn key={cat.title} animation="scale" delay={i * 120}>
              <div className="h-full rounded-xl border border-gray-100 bg-gray-50 p-6 transition-all hover:border-accent/20 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  {cat.icon}
                </div>
                <h3 className="mb-4 text-lg font-bold text-navy">{cat.title}</h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Certification */}
        <AnimateIn animation="fade-up" delay={500}>
          <div className="flex items-center gap-5 rounded-xl border border-gold/30 bg-gold/5 p-6">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-navy">
                Richardson Consultative Selling
              </h4>
              <p className="text-sm text-gray-500">
                Richardson Sales Performance &bull; Issued June 2021
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
