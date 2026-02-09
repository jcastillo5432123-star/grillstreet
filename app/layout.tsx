import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../components/LanguageProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";
import { siteInfo } from "../lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.url),
  title: {
    default: "Grill Street 140° | Outdoor Kitchens & Premium Grills",
    template: "%s | Grill Street 140°"
  },
  description: siteInfo.description,
  keywords: [
    "outdoor kitchens McAllen TX",
    "grill store McAllen",
    "Rio Grande Valley outdoor kitchens"
  ],
  openGraph: {
    title: "Grill Street 140° | Outdoor Kitchens & Premium Grills",
    description: siteInfo.description,
    url: siteInfo.url,
    siteName: siteInfo.legalName,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Grill Street 140° | Outdoor Kitchens & Premium Grills",
    description: siteInfo.description
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteInfo.legalName,
    image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1200&q=80",
    address: {
      "@type": "PostalAddress",
      streetAddress: "419 W US-83 BUS",
      addressLocality: "McAllen",
      addressRegion: "TX",
      postalCode: "78501",
      addressCountry: "US"
    },
    telephone: [siteInfo.phonePrimary, siteInfo.phoneSecondary],
    email: siteInfo.email,
    url: siteInfo.url,
    openingHours: siteInfo.hours
  };

  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyCTA />
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
