import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import { siteInfo } from "../../lib/site-data";

export const metadata = {
  title: "McAllen Showroom",
  description:
    "Visit the McAllen showroom for outdoor kitchens, premium grills, refrigeration, and accessories."
};

export default function ShowroomPage() {
  return (
    <div>
      <PageHero
        eyebrow="Showroom"
        title="Welcome to Our McAllen Showroom"
        subtitle="Explore the Valley’s only full outdoor kitchen showroom with 10+ grill brands."
        image="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1600&q=80"
      />

      <section>
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Visit"
              title="Showroom hours & contact"
              subtitle="Walk in, call ahead, or schedule a private appointment."
            />
            <div className="mt-6 space-y-4 text-sm text-steel">
              <p>{siteInfo.address}</p>
              <p>Phone: {siteInfo.phonePrimary}</p>
              <p>Phone: {siteInfo.phoneSecondary}</p>
              <p>Email: {siteInfo.email}</p>
              <p>Mon–Fri 9:00–6:00, Sat 10:00–5:00, Sun Closed or varies</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="btn-primary" href={siteInfo.googleMaps} target="_blank" rel="noreferrer">
                Get Directions
              </a>
              <a className="btn-outline" href={`tel:${siteInfo.phoneSecondary}`}>
                Call Now
              </a>
            </div>
          </div>
          <div className="glass-card">
            <h3 className="heading-md text-sand">What you’ll find here</h3>
            <ul className="mt-4 space-y-2 text-sm text-steel">
              <li>• Grills, coolers, refrigerators, pizza ovens, stainless components</li>
              <li>• Tools & accessories for every grilling style</li>
              <li>• Wüsthof forged steel knives and prep essentials</li>
            </ul>
            <div className="mt-6 rounded-3xl border border-white/10 bg-charcoal p-4 text-xs uppercase tracking-[0.2em] text-steel">
              Schedule an appointment for a private walkthrough.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ash">
        <div className="container">
          <SectionHeading
            eyebrow="Map"
            title="Find us in McAllen"
            subtitle="Located on W US-83 BUS in the heart of the Rio Grande Valley."
          />
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="Grill Street 140 map"
              src="https://maps.app.goo.gl/SonXjT9UtZZD3WpF9"
              className="h-[360px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
