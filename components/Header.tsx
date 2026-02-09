"use client";

import Link from "next/link";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";
import { siteInfo } from "../lib/site-data";

export default function Header() {
  const { strings } = useLanguage();

  const navItems = [
    { href: "/", label: strings.nav.home },
    { href: "/outdoor-kitchens", label: strings.nav.outdoorKitchens },
    { href: "/products", label: strings.nav.products },
    { href: "/showroom", label: strings.nav.showroom },
    { href: "/gallery", label: strings.nav.gallery },
    { href: "/financing", label: strings.nav.financing },
    { href: "/events", label: strings.nav.events },
    { href: "/about", label: strings.nav.about },
    { href: "/contact", label: strings.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-charcoal/95 backdrop-blur">
      <div className="container flex flex-wrap items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-semibold uppercase tracking-[0.2em]">
            {siteInfo.name}
          </Link>
          <span className="hidden text-xs text-steel md:inline">Outdoor Kitchens & Grill Store</span>
        </div>
        <nav className="hidden flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-steel lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ember">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteInfo.phoneSecondary}`}
            className="hidden rounded-full border border-ember/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ember hover:bg-ember/10 md:inline-flex"
          >
            {siteInfo.phoneSecondary}
          </a>
          <LanguageToggle />
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto border-t border-white/10 bg-ash/80 px-6 py-2 text-[11px] uppercase tracking-[0.2em] text-steel lg:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap">
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
