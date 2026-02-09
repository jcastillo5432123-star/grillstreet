import { cn } from "../lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image: string;
  actions?: React.ReactNode;
  alignment?: "left" | "center";
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  actions,
  alignment = "left"
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="Luxury outdoor kitchen" className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
      </div>
      <div className="container relative grid min-h-[60vh] items-center py-24">
        <div className={cn("max-w-2xl", alignment === "center" && "mx-auto text-center")}>
          {eyebrow && <span className="badge">{eyebrow}</span>}
          <h1 className="heading-xl mt-6 text-sand">{title}</h1>
          <p className="subheading mt-4 max-w-xl">{subtitle}</p>
          {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
