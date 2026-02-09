import Link from "next/link";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import ContactForm from "../../components/ContactForm";
import { siteInfo } from "../../lib/site-data";

export const metadata = {
  title: "Custom Outdoor Kitchens",
  description:
    "Custom outdoor kitchens in McAllen, Texas. Designed around your space with premium grills, refrigeration, and stainless finishes."
};

const integrations = [
  "Grill islands",
  "Outdoor refrigeration",
  "Pizza ovens",
  "Storage",
  "Stainless finishes",
  "Steakhouse-style presentation"
];

export default function OutdoorKitchensPage() {
  return (
    <div>
      <PageHero
        eyebrow="Outdoor Kitchens"
        title="Custom Outdoor Kitchens — Designed Around Your Space"
        subtitle="We customize projects based on your ideas and your measurements, with premium finishes and experienced builders."
        image="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1600&q=80"
        actions={
          <>
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <a className="btn-outline" href={`tel:${siteInfo.phoneSecondary}`}>
              Call {siteInfo.phoneSecondary}
            </a>
          </>
        }
      />

      <section>
        <div className="container">
          <SectionHeading
            eyebrow="Process"
            title="Consult → Design → Build → Install"
            subtitle="A premium timeline tailored to your outdoor lifestyle and cooking goals."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {["Consult", "Design", "Build", "Install"].map((step, index) => (
              <div key={step} className="glass-card">
                <span className="badge">Step {index + 1}</span>
                <p className="mt-4 text-sm text-steel">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ash">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Integrations"
              title="What we can integrate"
              subtitle="Build a steakhouse-style setup with the components you want, installed by a highly experienced team."
            />
            <div className="mt-6 grid gap-3 text-sm text-steel sm:grid-cols-2">
              {integrations.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-charcoal px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/gallery" className="btn-outline">
                View Gallery Preview
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80"
              alt="Custom outdoor kitchen"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Gallery"
              title="Premium outdoor kitchens installed across the RGV"
              subtitle="Explore full builds, stainless components, and grill islands in our curated gallery."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="overflow-hidden rounded-3xl border border-white/10">
                  <img
                    src={`https://images.unsplash.com/collection/483251/${index}00?auto=format&fit=crop&w=900&q=80`}
                    alt={`Outdoor kitchen build ${index}`}
                    className="h-56 w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/gallery" className="btn-primary">
                See full gallery
              </Link>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
