"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
  { label: "Brand Review", href: "#brand-review" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#c9a84c]/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex flex-col leading-tight">
          <span className="font-display text-xl font-bold tracking-wide text-[#c9a84c]">
            THE TRUE
          </span>
          <span className="font-display text-sm font-medium tracking-[0.3em] text-[#f0ece0] uppercase">
            Barbershop SG
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-[#b8b0a0] hover:text-[#c9a84c] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.fresha.com/a/the-true-barbershop-singapore-537-bedok-north-street-3-kmg1yhgr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-[#c9a84c] text-[#0a0a0a] text-sm font-semibold rounded tracking-wide hover:bg-[#e8c96a] transition-colors"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#c9a84c] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#111] border-t border-[#c9a84c]/20 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#b8b0a0] hover:text-[#c9a84c] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.fresha.com/a/the-true-barbershop-singapore-537-bedok-north-street-3-kmg1yhgr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-[#c9a84c] text-[#0a0a0a] text-sm font-semibold rounded tracking-wide text-center"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
