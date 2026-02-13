import Link from "next/link";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import InfoCard from "../components/InfoCard";
import { featuredCategories, siteInfo } from "../lib/site-data";

export const metadata = {
  title: "Outdoor Kitchens & Premium Grills in McAllen",
  description:
    "Outdoor kitchens, premium grills, and outdoor living products in the Rio Grande Valley. Visit our McAllen showroom or schedule a free consultation."
};

const testimonialSlots = ["Testimonial 1", "Testimonial 2", "Testimonial 3", "Testimonial 4"];

export default function HomePage() {
  return (
    <div>
      <PageHero
        title="Outdoor Kitchens & Premium Grills in the Rio Grande Valley"
        subtitle="Design. Build. Grill Better — Visit our McAllen showroom."
        image="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1600&q=80"
        actions={
          <>
            <Link href="/contact" className="btn-primary">
              Schedule a Free Consultation
            </Link>
            <a className="btn-outline" href={siteInfo.googleMaps} target="_blank" rel="noreferrer">
              Visit the Showroom
            </a>
            <a className="btn-ghost" href={`tel:${siteInfo.phoneSecondary}`}>
              Call {siteInfo.phoneSecondary}
            </a>
          </>
        }
      />

      <section>
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <span className="badge">Founded 2000 • 10+ grill brands • Valley showroom specialists</span>
              <h2 className="heading-lg mt-6 text-sand">What We Do</h2>
            </div>
            <p className="subheading max-w-xl">
              The only store in the Valley with a full showroom display for custom outdoor kitchens, premium grills, and accessories.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <InfoCard
              title="Custom Outdoor Kitchens"
              description="Design + build tailored outdoor kitchens with stainless finishes, premium grills, refrigeration, and storage."
            />
            <InfoCard
              title="Premium Grills & Specialty Grilling"
              description="Explore more than 10 premium grill brands, specialty grilling setups, and performance accessories."
            />
            <InfoCard
              title="Outdoor Components & Accessories"
              description="Coolers, fridges, pizza ovens, stainless components, tools, and Wüsthof forged steel knives."
            />
          </div>
        </div>
      </section>

      <section className="bg-ash">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Showroom Advantage"
              title="The Valley’s showroom destination"
              subtitle="See and compare full outdoor kitchen displays, grills, and premium accessories before you buy."
            />
            <ul className="mt-6 space-y-3 text-sm text-steel">
              <li>• Only store in the Valley with showroom display</li>
              <li>• 10+ grill brands under one roof</li>
              <li>• Stainless outdoor kitchen components & accessories</li>
            </ul>
            <div className="mt-8">
              <a className="btn-primary" href={siteInfo.googleMaps} target="_blank" rel="noreferrer">
                Get Directions
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1200&q=80"
              alt="Outdoor kitchen showroom"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHeading
            eyebrow="Featured Categories"
            title="Shop the showroom categories"
            subtitle="Premium grill lines, outdoor refrigeration, and tools you can see in person."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((category) => (
              <div key={category.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-ash">
                <div className="h-48 overflow-hidden">
                  <img src={category.image} alt={category.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="heading-md text-sand">{category.title}</h3>
                  <p className="mt-3 text-sm text-steel">{category.description}</p>
                  <div className="mt-6">
                    <Link href="/products" className="btn-outline">
                      View products
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ash">
        <div className="container">
          <SectionHeading
            eyebrow="How It Works"
            title="A premium outdoor kitchen process"
            subtitle="From showroom inspiration to installation, our experienced team handles every step."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              "Visit showroom / call",
              "Measure & design",
              "Build + install",
              "Grill season starts"
            ].map((step, index) => (
              <div key={step} className="glass-card">
                <span className="badge">Step {index + 1}</span>
                <p className="mt-4 text-sm text-steel">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by RGV homeowners"
            subtitle="Use these open spaces to add your own customer testimonials."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {testimonialSlots.map((slot) => (
              <div key={slot} className="rounded-3xl border border-dashed border-white/20 bg-[#1e222d] p-6">
                <p className="text-sm text-steel">{slot}</p>
                <p className="mt-3 text-sm text-steel/70">Add your testimonial text here.</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Book a free consultation
            </Link>
            <a className="btn-outline" href={`tel:${siteInfo.phoneSecondary}`}>
              Call {siteInfo.phoneSecondary}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
