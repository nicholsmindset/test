export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1600&q=80')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]" />

      {/* Barber pole accent — left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-3 barber-pole opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto fade-up">
        {/* Rating badge */}
        <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/40 rounded-full px-4 py-1.5 mb-8">
          <span className="text-[#c9a84c] text-sm">★★★★★</span>
          <span className="text-[#f0ece0] text-sm font-medium">
            5.0 · 148 Reviews on Fresha
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
          <span className="text-gold-gradient">The True</span>
          <br />
          <span className="text-[#f0ece0]">Barbershop SG</span>
        </h1>

        <p className="text-[#b8b0a0] text-lg md:text-xl tracking-widest uppercase mb-4 font-light">
          — Bedok, Singapore —
        </p>

        <div className="gold-divider mb-8" />

        <p className="font-display text-2xl md:text-3xl italic text-[#e8c96a] mb-10">
          &ldquo;Walk in with trust and walk out with confidence&rdquo;
        </p>

        <p className="text-[#b8b0a0] text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Bedok&apos;s premier community barbershop. Halal-friendly · Senior
          barbers · Walk-ins welcome. Open daily 12PM–10PM.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.fresha.com/a/the-true-barbershop-singapore-537-bedok-north-street-3-kmg1yhgr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] font-semibold text-sm tracking-widest uppercase rounded hover:bg-[#e8c96a] transition-colors"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-[#c9a84c]/60 text-[#c9a84c] font-semibold text-sm tracking-widest uppercase rounded hover:bg-[#c9a84c]/10 transition-colors"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#c9a84c]/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#c9a84c]/60 to-transparent" />
      </div>
    </section>
  );
}
