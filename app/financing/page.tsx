import Link from "next/link";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import FinancingFAQ from "../../components/FinancingFAQ";

export const metadata = {
  title: "Financing",
  description:
    "Financing options for outdoor kitchens and premium grills in McAllen. Ask about flexible plans during your consultation."
};

export default function FinancingPage() {
  return (
    <div>
      <PageHero
        eyebrow="Financing"
        title="Make your backyard project happen sooner"
        subtitle="We can connect you with flexible financing options for custom outdoor kitchens, premium grills, and upgrades."
        image="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1600&q=80"
        actions={
          <Link href="/contact" className="btn-primary">
            Ask about financing
          </Link>
        }
      />

      <section>
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Financing"
              title="Simple application process"
              subtitle="Share your project goals and we’ll guide you through the next steps with our trusted partners."
            />
            <div className="mt-6 space-y-4 text-sm text-steel">
              <p>• Short application, quick response times.</p>
              <p>• Plans tailored to outdoor kitchen builds or premium product packages.</p>
              <p>• Transparent guidance from our team every step of the way.</p>
            </div>
          </div>
          <div className="glass-card">
            <h3 className="heading-md text-sand">Ready to explore options?</h3>
            <p className="mt-3 text-sm text-steel">We’ll walk you through financing options during your consultation.</p>
            <div className="mt-6">
              <Link href="/contact" className="btn-outline">
                Schedule a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ash">
        <div className="container">
          <SectionHeading
            eyebrow="FAQ"
            title="Financing questions"
            subtitle="General information to help you plan. Ask us for specifics."
          />
          <div className="mt-10">
            <FinancingFAQ />
          </div>
        </div>
      </section>
    </div>
  );
}
