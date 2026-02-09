import Link from "next/link";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import ProductFilters from "../../components/ProductFilters";
import { siteInfo } from "../../lib/site-data";

export const metadata = {
  title: "Grills & Products",
  description:
    "Discover premium grills, outdoor refrigeration, pizza ovens, accessories, and Wüsthof knives in our McAllen showroom."
};

export default function ProductsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Grills & Products"
        title="Showroom-first product discovery"
        subtitle="This is not e-commerce. Explore categories, then see them live in our McAllen showroom."
        image="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80"
        actions={
          <>
            <Link href="/showroom" className="btn-primary">
              Visit the Showroom
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
            eyebrow="Catalog"
            title="Filter by product category"
            subtitle="We carry 10+ premium brands. Logos shown for example only."
          />
          <div className="mt-10">
            <ProductFilters />
          </div>
        </div>
      </section>

      <section className="bg-ash">
        <div className="container">
          <SectionHeading
            eyebrow="Brand Portfolio"
            title="More than 10 grill brands"
            subtitle="Explore a curated mix of premium brands, all displayed in person."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="glass-card text-center text-xs uppercase tracking-[0.2em] text-steel">
                Brand Logo
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-steel">Brand logos shown for example only.</p>
        </div>
      </section>
    </div>
  );
}
