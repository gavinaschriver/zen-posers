"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "about us", href: "#about" },
  { label: "contact", href: "#contact" },
  { label: "programming", href: "#programming" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    ["top", "about", "contact", "programming"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-6 md:px-8 py-4 bg-parchment/90 backdrop-blur-md border-b border-sand/20">
      <a
        href="#top"
        className="font-serif text-xl font-medium tracking-[0.08em] text-ink lowercase no-underline"
      >
        zen posers
      </a>
      <nav className="flex gap-4 md:gap-7 items-center">
        {NAV_LINKS.map(({ label, href }) => {
          const section = href.slice(1);
          return (
            <a
              key={section}
              href={href}
              className={`text-xs md:text-[13px] tracking-[0.06em] lowercase no-underline pb-0.5 border-b transition-all ${
                active === section
                  ? "text-ink border-ink"
                  : "text-stone border-transparent hover:text-ink"
              }`}
            >
              {label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
