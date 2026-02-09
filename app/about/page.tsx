import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";

export const metadata = {
  title: "About Grill Street 140°",
  description:
    "Founded in 2000, Grill Street 140° builds premium outdoor kitchens and showcases 10+ grill brands in the Rio Grande Valley."
};

const values = [
  {
    title: "Craft",
    description: "Thoughtful design and fabrication tailored to each backyard and lifestyle."
  },
  {
    title: "Quality",
    description: "Premium grills, stainless components, and tools that stand up to Texas heat."
  },
  {
    title: "Outdoor lifestyle",
    description: "Spaces that bring people together for cooking, relaxing, and entertaining."
  },
  {
    title: "Customer-first design",
    description: "Built around your ideas, measurements, and the way you grill."
  }
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title="Built on family grilling culture since 2000"
        subtitle="Grill Street 140° is the Valley’s only full showroom destination for custom outdoor kitchens, premium grills, and outdoor lifestyle essentials."
        image="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1600&q=80"
      />

      <section>
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-sm text-steel">
            <SectionHeading
              eyebrow="Our Story"
              title="Rooted in the Rio Grande Valley"
              subtitle="Founded in 2000, we share the grilling experience through high-quality products and custom outdoor kitchens."
            />
            <p>
              Grill Street 140° was founded in 2000, built on a family grilling culture and a passion for premium outdoor cooking. We are
              proud to be the only store in the Valley with a full showroom display and more than 10 grill brands under one roof.
            </p>
            <p>
              Our unique showroom in the Valley of Texas highlights stainless components, outdoor refrigeration, pizza ovens, and accessories
              including Wüsthof forged steel knives.
            </p>
            <p>
              Our mission is to create a unique outdoor lifestyle space. We specialize in the design and manufacture of custom outdoor
              kitchens, integrating what the customer wants — from grill islands to steakhouse-style setups. Every project is fully custom
              based on client ideas and space measurements, guided by a highly experienced team.
            </p>
          </div>
          <div className="glass-card">
            <h3 className="heading-md text-sand">Mission</h3>
            <p className="mt-4 text-sm text-steel">
              Create a unique outdoor lifestyle space by delivering custom outdoor kitchens, premium grills, and expert guidance from design
              to installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ash">
        <div className="container">
          <SectionHeading eyebrow="Values" title="What we stand for" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="glass-card">
                <h3 className="heading-md text-sand">{value.title}</h3>
                <p className="mt-3 text-sm text-steel">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
