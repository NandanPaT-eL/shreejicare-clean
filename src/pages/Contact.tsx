import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { LocationCTA } from "@/components/site/LocationCTA";
import contactHero from "@/assets/contact.png";

const contactJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://shreejicancercare.in/contact#webpage",
    url: "https://shreejicancercare.in/contact",
    name: "Contact & Book Appointment – Shreeji Cancer Care, Nadiad",
    description:
      "Book an appointment with Dr. Shreyans Patel at Shreeji Cancer Care, Nadiad. Visit our clinic on V. K. Road, call +91 85114 92789 or fill the contact form.",
    isPartOf: { "@id": "https://shreejicancercare.in/#website" },
    about: { "@id": "https://shreejicancercare.in/#organization" },
    inLanguage: "en-IN",
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://shreejicancercare.in/#organization",
    name: "Shreeji Cancer Care",
    url: "https://shreejicancercare.in",
    telephone: "+917043408583",
    email: "shreejicancercare@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "A-1, Kirtikunj Society, V.K.V Road",
      addressLocality: "Nadiad",
      addressRegion: "Gujarat",
      postalCode: "387001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.6844849,
      longitude: 72.8662637,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    hasMap: "https://www.google.com/maps/place/Shreeji+Cancer+Care+(Dr.+Shreyans+Patel)/@22.6844849,72.8662637,17z",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://shreejicancercare.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://shreejicancercare.in/contact",
      },
    ],
  },
];

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Contact & Book Appointment – Shreeji Cancer Care, Nadiad | +91 85114 92789"
      description="Book an appointment with Dr. Shreyans Patel at Shreeji Cancer Care, Nadiad. Visit our clinic on V. K. Road, call +91 85114 92789 or fill the contact form."
      canonicalPath="/contact"
      jsonLd={contactJsonLd}
    />
    <Header />
    <main>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch with Shreeji Cancer Care"
        description="We are here to help. Whether you want to book a consultation, ask a question, or simply learn more — reach out to us and our team will respond promptly."
        imageSrc={contactHero}
        imageAlt="Reception and patient welcome area at Shreeji Cancer Care"
        secondaryLabel="View Treatments"
        secondaryHref="/treatments"
      />
      <LocationCTA standalone />
    </main>
    <Footer />
  </div>
);

export default Contact;
