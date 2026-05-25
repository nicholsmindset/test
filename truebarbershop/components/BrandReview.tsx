const scorecard = [
  { label: "Brand Identity", score: 7, note: "Strong tagline; heartland positioning is authentic but underutilised online" },
  { label: "Online Presence", score: 5, note: "No website, no Google Business Profile, Instagram underperforming for post volume" },
  { label: "Customer Experience", score: 10, note: "Perfect 5.0 Fresha score — industry-leading consistency" },
  { label: "Pricing Competitiveness", score: 8, note: "Strong value vs Bedok market; room to introduce premium tiers" },
  { label: "Growth Potential", score: 9, note: "Youth mentorship, Halal angle, and heartland story = highly differentiated" },
];

const quickWins = [
  {
    title: "Claim Google Business Profile",
    desc: "A verified GBP with photos, hours, and reviews is the single highest-ROI digital move. It captures 'barber near me' searches across Bedok and East SG.",
    timeline: "0–7 days",
  },
  {
    title: "Launch a Weekly Instagram Reel",
    desc: "505 posts but only 1,396 followers signals low discoverability. One Reel per week (before/after, barber POV, customer reaction) will multiply reach 10x vs static posts.",
    timeline: "0–14 days",
  },
  {
    title: "Add a Review Request to Every Checkout",
    desc: "148 Fresha reviews at 5.0 is remarkable. A simple \"Loved your cut? Leave us a review\" WhatsApp or printed card doubles review velocity, reinforcing social proof.",
    timeline: "0–30 days",
  },
];

const strategicMoves = [
  {
    title: "Launch 'True Cuts' TikTok Channel",
    desc: "Barbershop content thrives on TikTok — transformation videos, barber banter, and heartland culture. With 6 skilled barbers generating content, The True Barbershop can own the 'East SG barbershop' TikTok niche within 6 months.",
    timeline: "1–3 months",
  },
  {
    title: "Introduce a Loyalty Programme",
    desc: "A digital stamp card (10th cut free, or birthday discount) drives repeat visits and referrals. It also creates a CRM list for future campaigns. Platforms like Stamp Me or a simple WhatsApp group work well for heartland businesses.",
    timeline: "2–4 months",
  },
  {
    title: "Youth Barber Mentorship Programme — Make It Public",
    desc: "The practice of supporting barbers as young as 16 is a powerful, differentiating brand story. A named mentorship programme ('True Rising'), featured on Instagram and pitched to local media (Mothership, 8World, CNA Insider) creates sustained earned media and community goodwill.",
    timeline: "3–6 months",
  },
  {
    title: "Second Outlet in Tampines or Pasir Ris",
    desc: "Bedok's heartland model is highly replicable across East Singapore's HDB estates. Tampines or Pasir Ris offer similar demographics, lower competition, and strong community demand. A second outlet at 12–18 months validates the franchise model.",
    timeline: "9–18 months",
  },
];

const competitors = [
  { name: "Limpeh Barbershop", type: "Premium", location: "Katong / East Coast", differentiator: "Heritage branding, Peranakan aesthetic, higher price point ($40–$80)" },
  { name: "Debonair Atelier", type: "Premium", location: "CBD / Katong", differentiator: "Appointment-only, prestige positioning, luxury experience" },
  { name: "Bedok Barbers (HDB units)", type: "Budget", location: "Bedok Central", differentiator: "Walk-in, low price ($10–$18), older clientele, no digital presence" },
  { name: "Tommy & Guy (Bedok Mall)", type: "Mid-tier chain", location: "Bedok Mall", differentiator: "Brand recognition, loyalty app, but less craft and personality" },
  { name: "SNiP Barbershop", type: "Mid-tier indie", location: "East SG", differentiator: "Similar positioning; lacks the community story and review volume of True" },
];

export default function BrandReview() {
  const overall = 7.8;

  return (
    <section id="brand-review" className="section-pad bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-sm tracking-widest uppercase mb-3 font-medium">
            Strategic Brand Analysis
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#f0ece0] mb-4">
            Brand Review &{" "}
            <span className="text-gold-gradient">Growth Roadmap</span>
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-[#b8b0a0] max-w-2xl mx-auto text-base leading-relaxed">
            A comprehensive brand strategy audit of The True Barbershop SG —
            covering identity, digital presence, competitive positioning, and a
            12-month growth roadmap.
          </p>
        </div>

        {/* ── SCORECARD ── */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-semibold text-[#f0ece0] mb-8 text-center">
            Brand Health Scorecard
          </h3>

          {/* Overall score */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-32 h-32 rounded-full border-4 border-[#c9a84c] flex flex-col items-center justify-center mb-3">
              <span className="font-display text-4xl font-bold text-[#c9a84c]">
                {overall}
              </span>
              <span className="text-[#b8b0a0] text-xs">/10</span>
            </div>
            <p className="text-[#f0ece0] font-semibold">Overall Brand Health</p>
            <p className="text-[#b8b0a0] text-sm">Strong foundation, significant digital upside</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {scorecard.map((s) => (
              <div key={s.label} className="bg-[#111] border border-[#1e1e1e] rounded p-5">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-[#f0ece0] font-semibold text-sm">{s.label}</h4>
                  <span
                    className={`text-xl font-bold font-display ${
                      s.score >= 8
                        ? "text-[#c9a84c]"
                        : s.score >= 6
                        ? "text-[#e8c96a]/70"
                        : "text-[#b05050]"
                    }`}
                  >
                    {s.score}/10
                  </span>
                </div>
                {/* Score bar */}
                <div className="w-full bg-[#1e1e1e] rounded-full h-1.5 mb-3">
                  <div
                    className="h-1.5 rounded-full bg-gradient-to-r from-[#c9a84c] to-[#e8c96a]"
                    style={{ width: `${s.score * 10}%` }}
                  />
                </div>
                <p className="text-[#b8b0a0] text-xs leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── BRAND IDENTITY ── */}
        <div className="mb-20 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-display text-2xl font-semibold text-[#f0ece0] mb-6">
              Brand Identity & Positioning
            </h3>
            <div className="space-y-4 text-[#b8b0a0] text-sm leading-relaxed">
              <p>
                <span className="text-[#c9a84c] font-semibold">Tagline effectiveness: </span>
                &ldquo;Walk in with trust and walk out with confidence&rdquo; is emotionally resonant and concise. It addresses a real consumer anxiety — choosing an unfamiliar barber — and converts it into a brand promise. This is a strong tagline that punches above the weight of a heartland barbershop.
              </p>
              <p>
                <span className="text-[#c9a84c] font-semibold">Heartland HDB positioning: </span>
                Bedok&apos;s 537 North Street 3 location is a strategic advantage, not a limitation. HDB heartland barbershops in Singapore command fierce loyalty among neighbourhood residents. The proximity to void decks, coffee shops, and community life means walk-in traffic is organic and word-of-mouth is the primary acquisition channel.
              </p>
              <p>
                <span className="text-[#c9a84c] font-semibold">Halal-friendly + youth mentorship: </span>
                These are two underutilised competitive moats. The Halal-friendly positioning opens doors to Singapore&apos;s 700,000+ Malay-Muslim consumers who actively seek trustworthy grooming spaces. The youth mentorship angle creates a compelling human story that no competitor currently owns.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold text-[#f0ece0] mb-6">
              Digital Presence Audit
            </h3>
            <div className="space-y-3">
              {[
                { platform: "Fresha", status: "strong", detail: "5.0 · 148 reviews · Active booking", score: "9/10" },
                { platform: "Instagram", status: "weak", detail: "1,396 followers · 505 posts — low engagement ratio signals poor hashtag/Reel strategy", score: "4/10" },
                { platform: "Facebook", status: "neutral", detail: "1,075 likes — adequate but declining platform for this demographic", score: "5/10" },
                { platform: "Google Business", status: "critical", detail: "Unverified or absent — missing 'barber near me' and Maps searches", score: "2/10" },
                { platform: "Website", status: "critical", detail: "No owned website — zero SEO, no control over brand narrative", score: "0/10" },
                { platform: "TikTok", status: "critical", detail: "Not active — highest-reach platform for barbershop content is untapped", score: "0/10" },
              ].map((d) => (
                <div key={d.platform} className="flex items-start gap-3 bg-[#111] border border-[#1e1e1e] rounded p-3">
                  <span
                    className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                      d.status === "strong"
                        ? "bg-green-500"
                        : d.status === "neutral"
                        ? "bg-yellow-500"
                        : d.status === "weak"
                        ? "bg-orange-500"
                        : "bg-red-500"
                    }`}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-[#f0ece0] text-sm font-semibold">{d.platform}</span>
                      <span className="text-[#c9a84c] text-xs font-bold">{d.score}</span>
                    </div>
                    <p className="text-[#b8b0a0] text-xs mt-0.5">{d.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── COMPETITIVE LANDSCAPE ── */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-semibold text-[#f0ece0] mb-8 text-center">
            Competitive Landscape — Bedok & East SG
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#c9a84c]/30">
                  <th className="text-left text-[#c9a84c] text-xs tracking-widest uppercase pb-3 font-medium pr-4">Competitor</th>
                  <th className="text-left text-[#c9a84c] text-xs tracking-widest uppercase pb-3 font-medium pr-4">Tier</th>
                  <th className="text-left text-[#c9a84c] text-xs tracking-widest uppercase pb-3 font-medium pr-4">Location</th>
                  <th className="text-left text-[#c9a84c] text-xs tracking-widest uppercase pb-3 font-medium">Differentiator vs True</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c, i) => (
                  <tr
                    key={c.name}
                    className={`border-b border-[#1e1e1e] ${i % 2 === 0 ? "bg-[#111]" : "bg-transparent"}`}
                  >
                    <td className="py-3 pr-4 text-[#f0ece0] font-medium">{c.name}</td>
                    <td className="py-3 pr-4">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          c.type.includes("Premium")
                            ? "bg-[#c9a84c]/20 text-[#c9a84c]"
                            : c.type.includes("Budget")
                            ? "bg-[#b05050]/20 text-[#e07070]"
                            : "bg-[#1e1e1e] text-[#b8b0a0]"
                        }`}
                      >
                        {c.type}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-[#b8b0a0]">{c.location}</td>
                    <td className="py-3 text-[#b8b0a0]">{c.differentiator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#b8b0a0] text-xs mt-4 italic text-center">
            The True Barbershop occupies the sweet spot: quality above budget players, accessible vs. premium players, and authentic where chains are corporate.
          </p>
        </div>

        {/* ── QUICK WINS ── */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-semibold text-[#f0ece0] mb-2 text-center">
            Quick Wins
          </h3>
          <p className="text-[#b8b0a0] text-center text-sm mb-8">Execute within 30 days</p>
          <div className="grid md:grid-cols-3 gap-6">
            {quickWins.map((w, i) => (
              <div key={w.title} className="bg-[#111] border border-[#c9a84c]/20 rounded p-6 card-lift">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[#c9a84c] font-display text-2xl font-bold leading-none">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="text-[#f0ece0] font-semibold text-sm leading-tight">{w.title}</h4>
                    <span className="text-[#c9a84c] text-xs">{w.timeline}</span>
                  </div>
                </div>
                <p className="text-[#b8b0a0] text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── STRATEGIC MOVES ── */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-semibold text-[#f0ece0] mb-2 text-center">
            Strategic Moves
          </h3>
          <p className="text-[#b8b0a0] text-center text-sm mb-8">3–18 month roadmap</p>
          <div className="grid md:grid-cols-2 gap-6">
            {strategicMoves.map((m, i) => (
              <div key={m.title} className="bg-[#111] border border-[#1e1e1e] rounded p-6 card-lift hover:border-[#c9a84c]/30">
                <div className="flex items-start gap-4">
                  <span className="text-[#c9a84c]/40 font-display text-5xl font-bold leading-none flex-shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="text-[#f0ece0] font-semibold text-base mb-1">{m.title}</h4>
                    <span className="inline-block text-[#c9a84c] text-xs border border-[#c9a84c]/30 rounded-full px-2 py-0.5 mb-3">
                      {m.timeline}
                    </span>
                    <p className="text-[#b8b0a0] text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BRAND MISSION ── */}
        <div className="text-center bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-[#c9a84c]/25 rounded p-12">
          <span className="text-[#c9a84c] text-sm tracking-widest uppercase font-medium mb-4 block">
            Internal Brand Mission
          </span>
          <blockquote className="font-display text-xl md:text-2xl text-[#f0ece0] leading-relaxed max-w-3xl mx-auto italic">
            &ldquo;The True Barbershop SG exists to be the most trusted grooming
            space in East Singapore — not because of the tools we use, but
            because of the community we serve, the young talent we lift, and
            the consistent excellence we deliver one cut at a time. We are
            Bedok&apos;s barbershop. We are Singapore&apos;s standard.&rdquo;
          </blockquote>
          <div className="gold-divider mt-8" />
        </div>
      </div>
    </section>
  );
}
