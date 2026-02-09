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
        subtitle="Flexible financing for outdoor kitchens, roofs, pergolas, and premium appliances—designed to fit how you live and budget."
        image="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1600&q=80"
        actions={
          <Link href="/contact" className="btn-primary">
            Start your financing plan
          </Link>
        }
      />

      <section>
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Now we finance"
              title="Financing built around your outdoor living goals"
              subtitle="As the RGV’s largest outdoor kitchen and roof builder, we offer financing options tailored to every homeowner."
            />
            <p className="mt-6 text-sm text-steel">
              Financing is a simple, convenient way to invest in a new outdoor kitchen, roof, pergola, or appliance package with
              payments that align with your budget.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Quick decisions",
                  description: "A short application and fast credit response so you can move forward confidently."
                },
                {
                  title: "Reusable credit line",
                  description: "A revolving line of credit you can use again for future outdoor upgrades."
                },
                {
                  title: "Promotional offers",
                  description: "Access special promotions when available to maximize your purchasing power."
                },
                {
                  title: "Online management",
                  description: "Easy online account tools for payments and account management."
                }
              ].map((card) => (
                <div key={card.title} className="glass-card">
                  <h3 className="heading-sm text-sand">{card.title}</h3>
                  <p className="mt-2 text-sm text-steel">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card flex h-full flex-col justify-between gap-6">
            <div>
              <h3 className="heading-md text-sand">We’ll help you choose the right plan</h3>
              <p className="mt-3 text-sm text-steel">
                Your Grill Street representative will walk through your project, explain financing options, and guide you to the
                online application.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">Next step</p>
              <Link href="/contact" className="btn-outline mt-4">
                Schedule my consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ash">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-card">
            <p className="text-xs uppercase tracking-[0.3em] text-ember">Promotional financing</p>
            <h2 className="heading-lg mt-3 text-sand">Expand your purchasing power with Promotional Financing through Synchrony.</h2>
            <p className="mt-4 text-sm text-steel">
              Synchrony is one of the nation’s premier consumer financial services companies. Our roots in consumer finance trace
              back to 1932, and today we are the largest provider of private label credit cards in the United States based on
              purchase volume and receivables.
            </p>
            <div className="mt-6 space-y-3 text-sm text-steel">
              <p>• A simple application process, and fast credit decisions</p>
              <p>• Unsecured, revolving credit lines</p>
              <p>• Promotional financing options1</p>
              <p>• Convenient monthly payment options</p>
              <p>• Online account management</p>
            </div>
            <p className="mt-6 text-xs text-steel">
              1Subject to credit approval. Minimum monthly payments required. See store for details.
            </p>
            <p className="mt-4 text-xs text-steel">
              For all promotions: Qualifying purchase must be made with your Home Design credit card issued by Synchrony Bank and
              a $29 account activation fee will apply and be charged at the time first purchase posts to account. For new accounts:
              Purchase APR is 26.99%; Minimum Monthly Interest Charge is $2. Existing cardholders should see their credit card
              agreement for their applicable terms. Subject to credit approval.
            </p>
            <div className="mt-6">
              <Link href="https://etail.mysynchrony.com/eapply/eapply.action" className="btn-outline">
                Apply with Synchrony
              </Link>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Why finance"
              title="Bring comfort home sooner"
              subtitle="Financing is just one of the ways Grill Street makes outdoor living more accessible for RGV homeowners."
            />
            <p className="mt-6 text-sm text-steel">
              We’ll help you select the financing option that aligns with your timeline, then you can complete the application
              process online—no guesswork, just guidance.
            </p>
            <p className="mt-6 text-xs text-steel">
              *Promotional financing and credit offers are subject to credit approval and may change without notice. Terms, minimum
              purchase requirements, and eligible products vary by program. See store for details.
            </p>
          </div>
        </div>
      </section>

      <section>
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
