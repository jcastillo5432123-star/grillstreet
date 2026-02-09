interface InfoCardProps {
  title: string;
  description: string;
}

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="glass-card">
      <h3 className="heading-md text-sand">{title}</h3>
      <p className="mt-4 text-sm text-steel">{description}</p>
    </div>
  );
}
