const events = [
  {
    date: "Oct 12, 2024",
    title: "Fall Grilling Showcase",
    description: "Live demos, chef tips, and new outdoor kitchen layouts in our showroom."
  },
  {
    date: "Nov 2, 2024",
    title: "Holiday Hosting Workshop",
    description: "Prep your outdoor space with pro-level grilling and refrigeration upgrades."
  },
  {
    date: "Dec 7, 2024",
    title: "Outdoor Lifestyle Open House",
    description: "Meet the team, tour our display kitchens, and explore premium grill lines."
  }
];

export default function EventsList() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {events.map((event) => (
        <div key={event.title} className="glass-card">
          <p className="text-xs uppercase tracking-[0.2em] text-steel">{event.date}</p>
          <h3 className="heading-md mt-3 text-sand">{event.title}</h3>
          <p className="mt-3 text-sm text-steel">{event.description}</p>
          <div className="mt-6">
            <a className="btn-outline" href="/contact">
              Join the event
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
