interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      {eyebrow && <span className="badge">{eyebrow}</span>}
      <h2 className="heading-lg text-sand">{title}</h2>
      {subtitle && <p className="subheading max-w-2xl">{subtitle}</p>}
    </div>
  );
}
