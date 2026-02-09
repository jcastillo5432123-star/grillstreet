interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
}

export default function TestimonialCard({ quote, name, location }: TestimonialCardProps) {
  return (
    <div className="glass-card flex h-full flex-col justify-between">
      <p className="text-sm text-sand">“{quote}”</p>
      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">{name}</p>
        <p className="text-xs text-steel">{location}</p>
      </div>
    </div>
  );
}
