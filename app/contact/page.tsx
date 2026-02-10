import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import ContactForm from "../../components/ContactForm";
import { siteInfo } from "../../lib/site-data";

export const metadata = {
  title: "Contact",
  description:
    "Book a free consultation for outdoor kitchens and premium grills in McAllen. Call, email, or visit the showroom."
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Book a free consultation"
        subtitle="Tell us about your outdoor kitchen, premium grill, or accessory needs."
        image="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1600&q=80"
      />

      <section>
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <div className="glass-card">
            <SectionHeading
              eyebrow="Showroom"
              title="Contact details"
              subtitle="Visit or call the only Valley showroom with full outdoor kitchen displays."
            />
            <div className="mt-6 space-y-4 text-sm text-steel">
              <p>{siteInfo.address}</p>
              <p>{siteInfo.addressAlt}</p>
              <p>Phone: {siteInfo.phonePrimary}</p>
              <p>Phone: {siteInfo.phoneSecondary}</p>
              <p>Email: {siteInfo.email}</p>
              <p>Mon–Fri 9:00–6:00, Sat 10:00–5:00, Sun Closed or varies</p>
            </div>
            <div className="mt-8 rounded-3xl border border-white/10 bg-charcoal p-5 text-sm text-steel">
              Map previews have been removed to avoid incorrect location details.
              <div className="mt-4">
                <a className="btn-outline" href={siteInfo.googleMaps} target="_blank" rel="noreferrer">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
