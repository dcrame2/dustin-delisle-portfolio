import Image from "next/image";
import AnimateIn from "./AnimateIn";

const experiences = [
  {
    title: "Carrier Sales Zone Manager",
    company: "Spot Freight",
    period: "Feb 2026 – Present",
    location: "Chicago, IL · On-site",
    description:
      "Leading carrier sales operations for the Chicago zone, driving team performance and managing sales strategy at one of the industry's fastest-growing freight brokerages.",
    skills: ["Sales Management", "P&L Management", "Team Leadership"],
    current: true,
  },
  {
    title: "Director – Outside Sales",
    company: "Sethmar Transportation, LLC",
    period: "Sep 2025 – Feb 2026",
    location: "Chicago, IL · Remote",
    description:
      "Directed outside sales initiatives, developing new business relationships and expanding the company's customer portfolio in a competitive logistics market.",
    skills: ["Outside Sales", "Sales Management", "Account Management"],
  },
  {
    title: "Enterprise Account Executive",
    company: "TransLoop",
    period: "Apr 2025 – Sep 2025",
    location: "Chicago, IL · On-site",
    description:
      "Managed enterprise-level client relationships, delivering tailored logistics solutions and driving revenue growth through strategic account development.",
    skills: ["Direct Sales", "Client Relations", "Major Account Development", "CRM"],
  },
  {
    title: "Key Account Manager – Private Fleet",
    company: "RXO, Inc.",
    period: "Sep 2024 – Apr 2025",
    location: "Chicago, IL · Hybrid",
    description:
      "Transitioned seamlessly when RXO acquired Coyote Logistics, continuing to manage key private fleet accounts and drive client retention and growth.",
    skills: ["Sales", "Negotiation", "Relationship Building", "Problem Solving"],
  },
  {
    title: "Account Manager – Private Fleet",
    company: "Coyote Logistics",
    period: "Feb 2021 – Sep 2024",
    location: "Chicago, IL · Remote",
    description:
      "Managed a portfolio of private fleet accounts for nearly four years, consistently exceeding targets and growing client relationships at one of the nation's largest freight brokerages.",
    skills: ["Creative Problem Solving", "Presentation Skills", "Portfolio Growth"],
  },
  {
    title: "Project Manager – UPS Peak Expedited Operations",
    company: "Coyote Logistics",
    period: "Nov 2021 – Dec 2021",
    location: "Seasonal",
    description:
      "Selected to lead peak-season expedited operations for UPS, coordinating team logistics and ensuring seamless execution during the highest-volume shipping period of the year.",
    skills: ["Team Management", "Leadership", "Interpersonal Communication"],
  },
  {
    title: "Account Manager – Carrier Sales",
    company: "Coyote Logistics",
    period: "Aug 2020 – Jan 2021",
    location: "Chicago, IL",
    description:
      "Started my career in carrier sales, building relationships with carriers and developing the foundational skills that have driven my success in logistics.",
    skills: ["Sales", "Creative Prospecting", "Networking"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&q=80"
          alt="Highway logistics"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/92" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimateIn animation="fade-up" className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-light">
            Career Journey
          </span>
          <h2 className="text-4xl font-bold md:text-5xl">
            Professional Experience
          </h2>
        </AnimateIn>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/20 md:left-1/2 md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <AnimateIn
                key={`${exp.company}-${exp.title}`}
                animation={i % 2 === 0 ? "fade-right" : "fade-left"}
                delay={i * 100}
              >
                <div
                  className={`relative flex flex-col md:flex-row ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } md:gap-12`}
                >
                  <div className="absolute left-4 top-2 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white/40 md:left-1/2 md:block">
                    <div
                      className={`h-full w-full rounded-full ${
                        exp.current ? "bg-accent-light" : "bg-white/40"
                      }`}
                    />
                  </div>

                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
                      {exp.current && (
                        <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold">
                          Current Role
                        </span>
                      )}
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-accent-light">
                        {exp.company}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        {exp.period} &bull; {exp.location}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-gray-300">
                        {exp.description}
                      </p>
                      <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-white/15 px-3 py-1 text-xs text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
