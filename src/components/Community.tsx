import Image from "next/image";
import AnimateIn from "./AnimateIn";

const volunteering = [
  {
    title: "Volunteer",
    org: "Orphans of the Storm Animal Shelter",
    period: "Jan 2013 – Jan 2023 · 10 years",
    description:
      "Long-time volunteer contributing to animal welfare through hands-on work: built a dog enrichment park from an empty lot, walked dogs on weekends, coordinated play groups, and photographed new arrivals to promote adoption on social media.",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    imageAlt: "Dog at shelter",
  },
  {
    title: "Donation Organizer",
    org: "Goodwill Industries International",
    period: "Jan 2017 – Jun 2018 · 1.5 years",
    description:
      "Organized and sorted donations to support social services, helping ensure items reached those in need efficiently and effectively.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80",
    imageAlt: "Community service",
  },
];

export default function Community() {
  return (
    <section id="community" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimateIn animation="fade-up" className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            Giving Back
          </span>
          <h2 className="text-4xl font-bold text-navy md:text-5xl">
            Community Involvement
          </h2>
        </AnimateIn>

        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          {volunteering.map((vol, i) => (
            <AnimateIn key={vol.org} animation="fade-up" delay={i * 150}>
              <div className="h-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={vol.image}
                    alt={vol.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy">{vol.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent">
                    {vol.org}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-400">{vol.period}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {vol.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
