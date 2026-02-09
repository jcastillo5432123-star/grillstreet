import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import EventsList from "../../components/EventsList";
import NewsletterForm from "../../components/NewsletterForm";

export const metadata = {
  title: "Events",
  description:
    "Upcoming Grill Street showroom events, seasonal promos, and outdoor kitchen workshops in the Rio Grande Valley."
};

export default function EventsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Events"
        title="Showroom events & seasonal promos"
        subtitle="Join our next open house, demo, or grilling workshop in McAllen."
        image="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1600&q=80"
      />

      <section>
        <div className="container">
          <SectionHeading
            eyebrow="Calendar"
            title="Upcoming events"
            subtitle="Enjoy live demos, team meet-and-greets, and seasonal outdoor lifestyle showcases."
          />
          <div className="mt-10">
            <EventsList />
          </div>
        </div>
      </section>

      <section className="bg-ash">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Stay in the loop"
              title="Join our next event"
              subtitle="Get the latest event invites and showroom promotions in your inbox."
            />
          </div>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
