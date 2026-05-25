export default function About() {
  const pillars = [
    {
      icon: "✦",
      title: "Community First",
      body: "Rooted in Bedok&apos;s heartland HDB community. A neighbourhood space where everyone belongs.",
    },
    {
      icon: "✦",
      title: "Halal-Friendly",
      body: "A welcoming, inclusive environment for all — proudly catering to Muslim clients and the wider community.",
    },
    {
      icon: "✦",
      title: "Nurturing Young Talent",
      body: "We believe in the next generation. We proudly support aspiring barbers as young as 16.",
    },
    {
      icon: "✦",
      title: "Craft & Consistency",
      body: "148 five-star reviews. Every cut, every fade — executed with precision and care by senior barbers.",
    },
  ];

  return (
    <section id="about" className="section-pad bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <div className="relative">
            <div
              className="aspect-[4/5] rounded-sm bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80')",
              }}
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[#c9a84c]/40 rounded-sm" />
            {/* Featured badge */}
            <div className="absolute top-6 left-6 bg-[#0a0a0a]/90 border border-[#c9a84c]/40 rounded px-4 py-2">
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase font-medium">
                Est. 9 Nov 2021
              </p>
            </div>
          </div>

          {/* Text column */}
          <div>
            <p className="text-[#c9a84c] text-sm tracking-widest uppercase mb-3 font-medium">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f0ece0] mb-6 leading-tight">
              More Than a Haircut.
              <br />
              <span className="text-gold-gradient">A Community.</span>
            </h2>
            <div className="gold-divider mb-8" style={{ margin: "0 0 2rem 0" }} />

            <p className="text-[#b8b0a0] text-base leading-relaxed mb-6">
              Founded in November 2021, The True Barbershop SG was built on one
              simple belief: that great grooming should be accessible, authentic,
              and community-driven. Nestled in the heart of Bedok at 537 Bedok
              North Street 3, we&apos;re a proud heartland barbershop serving
              the families, students, and professionals of East Singapore.
            </p>

            <p className="text-[#b8b0a0] text-base leading-relaxed mb-10">
              Featured in <em className="text-[#c9a84c]">Have Halal Will Travel</em>{" "}
              (December 2021), we&apos;ve grown from a neighbourhood spot into
              one of Bedok&apos;s most-trusted grooming destinations — with a
              perfect 5.0-star rating and 148 reviews to prove it.
            </p>

            {/* Pillars grid */}
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="bg-[#111] border border-[#c9a84c]/15 rounded p-4 card-lift"
                >
                  <span className="text-[#c9a84c] text-lg">{p.icon}</span>
                  <h3 className="font-display font-semibold text-[#f0ece0] mt-1 mb-1 text-sm">
                    {p.title}
                  </h3>
                  <p
                    className="text-[#b8b0a0] text-xs leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p.body }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
