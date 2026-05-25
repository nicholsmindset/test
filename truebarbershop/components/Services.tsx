const services = [
  {
    name: "Junior Fade",
    price: "from SGD 22",
    desc: "Clean, precise fades for the younger gents. Great for school-going kids and teens.",
    tag: "Most Popular · Kids",
    img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80",
  },
  {
    name: "Adult Fade",
    price: "from SGD 28",
    desc: "Our signature fade — skin tight to textured, high to low. Your barber, your style.",
    tag: "Signature Cut",
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
  },
  {
    name: "Tertiary Fade",
    price: "from SGD 28",
    desc: "Tailored for students and young professionals. Polished, confident, and campus-ready.",
    tag: "Students",
    img: "https://images.unsplash.com/photo-1634840038437-1b4d2e79b9c4?w=600&q=80",
  },
  {
    name: "Scissors Cut",
    price: "from SGD 28",
    desc: "Classic scissor technique for a natural, textured finish. Refined and timeless.",
    tag: "Classic",
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
  },
  {
    name: "Haircut + Beard",
    price: "from SGD 45",
    desc: "The full groom. Haircut paired with a beard line-up or trim — walk out looking sharp.",
    tag: "Full Groom",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-sm tracking-widest uppercase mb-3 font-medium">
            Services & Pricing
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f0ece0] mb-4">
            Every Cut, <span className="text-gold-gradient">Perfected</span>
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-[#b8b0a0] max-w-xl mx-auto text-base leading-relaxed">
            Walk-ins welcome or book ahead on Fresha. All prices from — final
            price confirmed at the chair based on length and style.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="group bg-[#111] border border-[#1e1e1e] rounded overflow-hidden card-lift"
            >
              {/* Image */}
              <div
                className="h-52 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${s.img}')` }}
              >
                <div className="h-full bg-gradient-to-t from-[#0a0a0a]/80 to-transparent flex items-end p-4">
                  <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-medium border border-[#c9a84c]/40 rounded-full px-3 py-1 bg-[#0a0a0a]/60">
                    {s.tag}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl font-semibold text-[#f0ece0]">
                    {s.name}
                  </h3>
                  <span className="text-[#c9a84c] font-semibold text-sm whitespace-nowrap ml-4">
                    {s.price}
                  </span>
                </div>
                <p className="text-[#b8b0a0] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}

          {/* Book CTA card */}
          <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/40 rounded p-8 flex flex-col justify-center items-center text-center card-lift">
            <span className="text-4xl mb-4">✂</span>
            <h3 className="font-display text-xl font-semibold text-[#f0ece0] mb-2">
              Ready to Book?
            </h3>
            <p className="text-[#b8b0a0] text-sm mb-6 leading-relaxed">
              Book in seconds on Fresha. Appointments & walk-ins welcome daily
              12PM–10PM.
            </p>
            <a
              href="https://www.fresha.com/a/the-true-barbershop-singapore-537-bedok-north-street-3-kmg1yhgr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#c9a84c] text-[#0a0a0a] font-semibold text-sm tracking-widest uppercase rounded hover:bg-[#e8c96a] transition-colors"
            >
              Book on Fresha
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
