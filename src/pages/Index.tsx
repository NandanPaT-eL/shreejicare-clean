import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { HowWeHelp } from "@/components/site/HowWeHelp";
import { Steps } from "@/components/site/Steps";
import { Reviews } from "@/components/site/Reviews";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Doctor } from "@/components/site/Doctor";
import { LocationCTA } from "@/components/site/LocationCTA";
import { Footer } from "@/components/site/Footer";
import { Seo } from "@/components/site/Seo";

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://shreejicancercare.in/#organization",
    name: "Shreeji Cancer Care",
    alternateName: "Shreeji Cancer Care (Dr. Shreyans Patel)",
    url: "https://shreejicancercare.in",
    logo: "https://shreejicancercare.in/og-image.png",
    image: "https://shreejicancercare.in/og-image.png",
    description:
      "Shreeji Cancer Care is a modern oncology centre in Nadiad, Gujarat offering advanced chemotherapy, targeted therapy, immunotherapy, blood cancer treatment and paediatric oncology led by Dr. Shreyans Patel.",
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
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "00:00",
        description: "By appointment only",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Card",
    areaServed: [
      { "@type": "City", name: "Nadiad" },
      { "@type": "City", name: "Anand" },
      { "@type": "City", name: "Kheda" },
      { "@type": "City", name: "Vadodara" },
      { "@type": "State", name: "Gujarat" },
    ],
    medicalSpecialty: "Oncology",
    hasMap: "https://www.google.com/maps/place/Shreeji+Cancer+Care+(Dr.+Shreyans+Patel)/@22.6844849,72.8662637,17z",
    sameAs: [
      "https://www.google.com/maps/place/Shreeji+Cancer+Care+(Dr.+Shreyans+Patel)/@22.6844849,72.8662637,17z",
    ],
    founder: {
      "@type": "Person",
      name: "Dr. Shreyans Patel",
      jobTitle: "Medical Oncologist",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://shreejicancercare.in/#website",
    url: "https://shreejicancercare.in",
    name: "Shreeji Cancer Care",
    description:
      "Advanced cancer treatment in Nadiad, Gujarat by Dr. Shreyans Patel — chemotherapy, immunotherapy, blood cancer and paediatric oncology.",
    publisher: { "@id": "https://shreejicancercare.in/#organization" },
    inLanguage: "en-IN",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://shreejicancercare.in/#webpage",
    url: "https://shreejicancercare.in/",
    name: "Shreeji Cancer Care – Advanced Cancer Treatment in Nadiad, Gujarat",
    description:
      "Shreeji Cancer Care in Nadiad offers expert chemotherapy, targeted therapy, immunotherapy and blood cancer treatment led by Dr. Shreyans Patel — compassionate, affordable cancer care close to home.",
    isPartOf: { "@id": "https://shreejicancercare.in/#website" },
    about: { "@id": "https://shreejicancercare.in/#organization" },
    inLanguage: "en-IN",
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
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Shreeji Cancer Care – Advanced Cancer Treatment in Nadiad, Gujarat"
        description="Shreeji Cancer Care in Nadiad offers expert chemotherapy, targeted therapy, immunotherapy and blood cancer treatment led by Dr. Shreyans Patel — compassionate, affordable cancer care close to home."
        canonicalPath="/"
        jsonLd={homeJsonLd}
      />
      <Header />
      <main>
        <Hero />
        <HowWeHelp />
        <Steps />
        {/* <Reviews /> */}
        <WhyChoose />
        <Doctor />
        <LocationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
