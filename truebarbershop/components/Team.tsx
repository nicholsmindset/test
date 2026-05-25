const barbers = [
  {
    name: "Afiq",
    role: "Senior Barber",
    specialty: "High fades · Skin fades",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Mush",
    role: "Senior Barber",
    specialty: "Textured cuts · Scissor work",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Yan",
    role: "Senior Barber",
    specialty: "Mid fades · Beard shaping",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Simple",
    role: "Senior Barber",
    specialty: "Classic cuts · Junior cuts",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80",
  },
  {
    name: "Jufri",
    role: "Senior Barber",
    specialty: "Fades · Line-ups · Beard trims",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
  {
    name: "Aiman",
    role: "Senior Barber",
    specialty: "Modern styles · Tertiary cuts",
    img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&q=80",
  },
];

export default function Team() {
  return (
    <section id="team" className="section-pad bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-sm tracking-widest uppercase mb-3 font-medium">
            The Team
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f0ece0] mb-4">
            Meet Your <span className="text-gold-gradient">Barbers</span>
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-[#b8b0a0] max-w-xl mx-auto text-base leading-relaxed">
            Six senior barbers. One standard: excellence. Each one passionate
            about their craft and dedicated to your best cut yet.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {barbers.map((b) => (
            <div key={b.name} className="group text-center">
              {/* Avatar */}
              <div className="relative mb-4 mx-auto w-full max-w-[140px]">
                <div
                  className="aspect-square rounded-sm bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{ backgroundImage: `url('${b.img}')` }}
                />
                <div className="absolute inset-0 border border-[#c9a84c]/0 group-hover:border-[#c9a84c]/60 rounded-sm transition-all duration-300" />
              </div>
              <h3 className="font-display font-semibold text-[#f0ece0] text-base">
                {b.name}
              </h3>
              <p className="text-[#c9a84c] text-xs tracking-wide uppercase mb-1">
                {b.role}
              </p>
              <p className="text-[#b8b0a0] text-xs leading-relaxed">
                {b.specialty}
              </p>
            </div>
          ))}
        </div>

        {/* Youth barber note */}
        <div className="mt-16 bg-gradient-to-r from-[#c9a84c]/10 via-[#c9a84c]/5 to-[#c9a84c]/10 border border-[#c9a84c]/25 rounded p-8 text-center">
          <span className="text-3xl mb-4 block">🌟</span>
          <h3 className="font-display text-2xl font-semibold text-[#f0ece0] mb-3">
            We Believe in the Next Generation
          </h3>
          <p className="text-[#b8b0a0] max-w-2xl mx-auto text-sm leading-relaxed">
            The True Barbershop SG actively supports and mentors aspiring young
            barbers — some as young as 16. We&apos;re committed to growing the
            barbering craft from within our community, giving Bedok&apos;s youth
            a skill, a career path, and a sense of pride.
          </p>
        </div>
      </div>
    </section>
  );
}
