import AnimateIn from "./AnimateIn";

export default function Education() {
  const schools = [
    {
      name: "Illinois State University",
      degree: "Bachelor of Science",
      major: "Sales, Distribution & Marketing Operations",
      period: "2015 – 2020",
      badges: ["GPA: 3.7", "Dean's List", "Club Baseball"],
    },
    {
      name: "Irvine Valley College",
      degree: "Associate's Degree",
      major: "Business Administration & Management",
      period: "2016 – 2017",
      badges: ["GPA: 4.0", "Varsity Baseball"],
    },
  ];

  return (
    <section id="education" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimateIn animation="fade-up" className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            Education
          </span>
          <h2 className="text-4xl font-bold text-navy md:text-5xl">
            Academic Background
          </h2>
        </AnimateIn>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {schools.map((school, i) => (
            <AnimateIn key={school.name} animation="fade-up" delay={i * 150}>
              <div className="h-full rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 0 3 3 6 3s6-3 6-3v-5" /></svg>
                </div>
                <h3 className="text-xl font-bold text-navy">{school.name}</h3>
                <p className="mt-1 text-sm font-semibold text-accent">
                  {school.degree}
                </p>
                <p className="mt-0.5 text-sm text-gray-500">{school.major}</p>
                <p className="mt-1 text-xs text-gray-400">{school.period}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {school.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-navy"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
