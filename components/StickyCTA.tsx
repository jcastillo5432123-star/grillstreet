"use client";

import { siteInfo } from "../lib/site-data";
import { useLanguage } from "./LanguageProvider";

export default function StickyCTA() {
  const { strings } = useLanguage();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ash/95 px-4 py-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 text-xs uppercase tracking-[0.2em]">
        <a className="btn-primary flex-1 text-center" href={`tel:${siteInfo.phoneSecondary}`}>
          {strings.cta.call}
        </a>
        <a className="btn-outline flex-1 text-center" href={siteInfo.googleMaps} target="_blank" rel="noreferrer">
          {strings.cta.directions}
        </a>
        <a className="btn-ghost flex-1 text-center" href="/contact">
          {strings.cta.consult}
        </a>
      </div>
    </div>
  );
}
