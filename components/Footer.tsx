import Link from "next/link";
import { siteInfo } from "../lib/site-data";

const links = [
  { href: "/", label: "Home" },
  { href: "/outdoor-kitchens", label: "Outdoor Kitchens" },
  { href: "/products", label: "Grills & Products" },
  { href: "/showroom", label: "Showroom" },
  { href: "/gallery", label: "Gallery" },
  { href: "/financing", label: "Financing" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ash">
      <div className="container grid gap-10 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-steel">{siteInfo.legalName}</p>
          <h3 className="mt-4 text-2xl font-semibold text-sand">Book your free consultation</h3>
          <p className="mt-3 text-sm text-steel">
            Call or visit the only showroom in the Valley with 10+ premium grill brands and full outdoor kitchen displays.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href={`tel:${siteInfo.phoneSecondary}`}>
              Call {siteInfo.phoneSecondary}
            </a>
            <a className="btn-outline" href={siteInfo.googleMaps} target="_blank" rel="noreferrer">
              Get Directions
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-sand">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-steel">
            <li>{siteInfo.address}</li>
            <li>Phone: {siteInfo.phonePrimary}</li>
            <li>Phone: {siteInfo.phoneSecondary}</li>
            <li>Email: {siteInfo.email}</li>
            <li>Mon–Fri 9:00–6:00, Sat 10:00–5:00, Sun Closed</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-sand">Explore</h4>
          <ul className="mt-4 grid gap-2 text-sm text-steel">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-muted">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3 text-steel">
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs">Instagram</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs">Facebook</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-steel">
        © {new Date().getFullYear()} {siteInfo.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
