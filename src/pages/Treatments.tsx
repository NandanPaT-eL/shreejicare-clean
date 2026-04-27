import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import treatmentsHero from "@/assets/treatments.png";
import { detailedTreatments } from "@/content/siteContent";

const treatmentsJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": "https://shreejicancercare.in/treatments#webpage",
    url: "https://shreejicancercare.in/treatments",
    name: "Cancer Treatments in Nadiad – Chemotherapy, Immunotherapy & More | Shreeji Cancer Care",
    description:
      "Explore advanced cancer treatments at Shreeji Cancer Care, Nadiad — chemotherapy day care, targeted therapy, immunotherapy, blood cancer treatment, paediatric oncology, palliative care and cancer screening.",
    isPartOf: { "@id": "https://shreejicancercare.in/#website" },
    about: { "@id": "https://shreejicancercare.in/#organization" },
    medicalAudience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
    inLanguage: "en-IN",
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://shreejicancercare.in/#organization",
    name: "Shreeji Cancer Care",
    url: "https://shreejicancercare.in",
    medicalSpecialty: "Oncology",
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Comprehensive Cancer Consultation",
        description: "Thorough evaluation of diagnosis, reports and medical history with a personalised treatment plan.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Day Care Chemotherapy",
        description: "Comfortable and safe day-care chemotherapy designed to minimise hospital stay.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Targeted Therapy & Immunotherapy",
        description: "Precision medicine targeting cancer cells while preserving healthy tissue.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Blood Cancer Treatment",
        description: "Expert care for Leukaemia, Lymphoma and Multiple Myeloma using evidence-based protocols.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Paediatric Oncology",
        description: "Specialised cancer treatment for children with a gentle, family-centred approach.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Palliative & Supportive Care",
        description: "Pain management, nutritional support, fatigue reduction and emotional wellbeing.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Multidisciplinary Tumour Board",
        description: "Collaborative review for complex diagnoses with oncologists, radiologists, surgeons and pathologists.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Second Opinion Services",
        description: "Comprehensive, honest second opinion service with independent perspective.",
      },
      {
        "@type": "MedicalTest",
        name: "Cancer Screening & Early Detection",
        description: "Comprehensive screening for breast, cervical, colorectal and oral cancers.",
      },
    ],
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
        name: "Treatments",
        item: "https://shreejicancercare.in/treatments",
      },
    ],
  },
];

const Treatments = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Cancer Treatments in Nadiad – Chemotherapy, Immunotherapy & More | Shreeji Cancer Care"
      description="Explore advanced cancer treatments at Shreeji Cancer Care, Nadiad — chemotherapy day care, targeted therapy, immunotherapy, blood cancer treatment, paediatric oncology, palliative care and cancer screening."
      canonicalPath="/treatments"
      jsonLd={treatmentsJsonLd}
    />
    <Header />
    <main>
      <PageHero
        eyebrow="Treatments"
        title="Advanced Cancer Treatments — All Under One Roof in Nadiad"
        description="At Shreeji Cancer Care, we provide comprehensive, evidence-based oncology services using the latest medical advancements. Every treatment plan is personalised — built around your diagnosis, your body and your life."
        imageSrc={treatmentsHero}
        imageAlt="Chemotherapy day care and oncology treatment environment at Shreeji Cancer Care"
        secondaryLabel="Talk to Our Team"
        secondaryHref="/contact"
      />

      <section className="bg-background py-20">
        <div className="container grid gap-6 lg:grid-cols-2">
          {detailedTreatments.map((treatment) => (
            <article 
              key={treatment.title} 
              id={treatment.title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}
              className="rounded-3xl border border-border/70 bg-card p-8 shadow-card scroll-mt-24"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-hope-purple">{treatment.tagline}</p>
              <h2 className="mt-3 text-2xl font-bold text-foreground">{treatment.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{treatment.body}</p>
              <ul className="mt-6 space-y-3 text-sm text-foreground/85">
                {treatment.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-hope-purple" /> <span>{bullet}</span></li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="container mt-12 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="h-12 rounded-full bg-hope-purple px-8 font-semibold text-primary-foreground hover:bg-[hsl(var(--primary-deep))]">
            <Link to="/contact">Book an Appointment</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-hope-purple/30 px-8 font-semibold text-hope-purple hover:bg-hope-purple/5 hover:text-hope-purple">
            <Link to="/doctor">Meet Doctor</Link>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Treatments;