const reviews = [
  {
    name: "Haziq R.",
    rating: 5,
    text: "Jufri is hands down the best barber in Bedok. Consistent every single time — skin fade is always clean and sharp. Will never go anywhere else.",
    barber: "Jufri",
    date: "April 2026",
  },
  {
    name: "Danial A.",
    rating: 5,
    text: "Came in for a fade and beard trim. Aiman took his time, understood exactly what I wanted, and delivered. The atmosphere here is just different — so chill.",
    barber: "Aiman",
    date: "March 2026",
  },
  {
    name: "Iskandar M.",
    rating: 5,
    text: "Brought my son here for his first fade. Simple was so patient and great with him. My boy can't stop looking in the mirror. True barbershop indeed!",
    barber: "Simple",
    date: "March 2026",
  },
  {
    name: "Syafiq L.",
    rating: 5,
    text: "Afiq really knows his craft. High fade with a textured top — always on point. The shop has a great vibe and the team genuinely cares.",
    barber: "Afiq",
    date: "February 2026",
  },
  {
    name: "Izzat H.",
    rating: 5,
    text: "Best heartland barbershop in East Singapore. No pretension, just great cuts. Mush gave me a clean taper that my colleagues keep complimenting.",
    barber: "Mush",
    date: "February 2026",
  },
  {
    name: "Firdaus K.",
    rating: 5,
    text: "Yan's blade work is incredible. I've been to expensive barbers in town and nothing beats the quality here at a fraction of the price. Loyal customer.",
    barber: "Yan",
    date: "January 2026",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="section-pad bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-sm tracking-widest uppercase mb-3 font-medium">
            What They Say
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f0ece0] mb-4">
            148 Reviews.{" "}
            <span className="text-gold-gradient">All Five Stars.</span>
          </h2>
          <div className="gold-divider mb-6" />

          {/* Rating display */}
          <div className="inline-flex flex-col items-center bg-[#111] border border-[#c9a84c]/30 rounded-sm px-10 py-6 mt-2">
            <span className="font-display text-6xl font-bold text-[#c9a84c] leading-none">
              5.0
            </span>
            <span className="text-[#e8c96a] text-2xl tracking-widest mt-1">
              ★★★★★
            </span>
            <span className="text-[#b8b0a0] text-sm mt-2">
              148 verified reviews on Fresha
            </span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-[#111] border border-[#1e1e1e] rounded p-6 flex flex-col card-lift hover:border-[#c9a84c]/30"
            >
              {/* Stars */}
              <span className="text-[#c9a84c] text-sm tracking-widest mb-3">
                {"★".repeat(r.rating)}
              </span>

              {/* Quote */}
              <p className="text-[#d0c8b8] text-sm leading-relaxed flex-1 mb-4">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center border-t border-[#1e1e1e] pt-4">
                <div>
                  <p className="text-[#f0ece0] text-sm font-semibold">{r.name}</p>
                  <p className="text-[#c9a84c] text-xs">
                    via Barber{" "}
                    <span className="font-semibold">{r.barber}</span>
                  </p>
                </div>
                <span className="text-[#b8b0a0] text-xs">{r.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Fresha CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.fresha.com/a/the-true-barbershop-singapore-537-bedok-north-street-3-kmg1yhgr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#c9a84c] text-sm hover:text-[#e8c96a] transition-colors underline-offset-4 hover:underline"
          >
            Read all 148 reviews on Fresha →
          </a>
        </div>
      </div>
    </section>
  );
}
