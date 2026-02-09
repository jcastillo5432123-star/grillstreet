"use client";

import { useLanguage } from "./LanguageProvider";
import { cn } from "../lib/utils";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-ash px-3 py-1 text-xs uppercase tracking-[0.2em] text-steel">
      {["en", "es"].map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang as "en" | "es")}
          className={cn(
            "rounded-full px-2 py-1 transition",
            language === lang ? "bg-ember text-charcoal" : "text-steel hover:text-sand"
          )}
          aria-pressed={language === lang}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
