import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import GalleryGrid from "../../components/GalleryGrid";

export const metadata = {
  title: "Gallery",
  description: "Browse outdoor kitchen installs, premium grills, and showroom displays."
};

export default function GalleryPage() {
  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        title="Outdoor Kitchens, Grills, and Backyard Setups"
        subtitle="Browse premium installs, stainless components, and outdoor lifestyle inspiration."
        image="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80"
      />

      <section>
        <div className="container">
          <SectionHeading
            eyebrow="Explore"
            title="Filter by outdoor lifestyle category"
            subtitle="24–36 showcase visuals with a lightbox preview."
          />
          <div className="mt-10">
            <GalleryGrid />
          </div>
        </div>
      </section>
    </div>
  );
}
