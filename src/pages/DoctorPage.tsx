import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import doctorHero from "@/assets/doctor.png";
import { doctorExpertise, doctorFaqs, doctorAchievements, doctorPublications } from "@/content/siteContent";

const credentials = [
  ["Designation", "Medical Oncologist"],
  ["DM Medical Oncology", "JIPMER, Pondicherry"],
  ["MD Medicine", "TNMC & Nair hospital, Mumbai"],
  ["MBBS", "GMERS, Gotri, Vadodara"],
  ["ESMO Certification", "2024 (European Society for Medical Oncology)"],
  ["Languages", "Gujarati, Hindi, English"],
  ["Consultation Hours", "Mon–Sat: 10:00 AM – 8:00 PM | Sunday: By appointment"],
  ["Phone", "+91 70434 08583"],
];

const doctorJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://shreejicancercare.in/doctor#webpage",
    url: "https://shreejicancercare.in/doctor",
    name: "Dr. Shreyans Patel – Medical Oncologist in Nadiad, Gujarat | Shreeji Cancer Care",
    description:
      "Dr. Shreyans Patel is a JIPMER-trained, ESMO-certified medical oncologist at Shreeji Cancer Care, Nadiad, specialising in solid tumours, blood cancers, paediatric oncology and immunotherapy.",
    isPartOf: { "@id": "https://shreejicancercare.in/#website" },
    mainEntity: { "@id": "https://shreejicancercare.in/doctor#physician" },
    inLanguage: "en-IN",
  },
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://shreejicancercare.in/doctor#physician",
    name: "Dr. Shreyans Patel",
    url: "https://shreejicancercare.in/doctor",
    image: "https://shreejicancercare.in/og-image.png",
    jobTitle: "Medical Oncologist",
    description:
      "JIPMER-trained, ESMO-certified medical oncologist specialising in solid tumours, blood cancers, paediatric oncology, chemotherapy, targeted therapy and immunotherapy.",
    telephone: "+918511492789",
    medicalSpecialty: [
      "Oncology",
      "Hematology",
      "Pediatric Oncology",
    ],
    availableService: [
      { "@type": "MedicalTherapy", name: "Chemotherapy" },
      { "@type": "MedicalTherapy", name: "Targeted Therapy" },
      { "@type": "MedicalTherapy", name: "Immunotherapy" },
      { "@type": "MedicalTherapy", name: "Blood Cancer Treatment" },
      { "@type": "MedicalTherapy", name: "Paediatric Oncology" },
      { "@type": "MedicalTherapy", name: "Palliative Care" },
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "JIPMER, Pondicherry",
      },
      {
        "@type": "EducationalOrganization",
        name: "TNMC & Nair Hospital, Mumbai",
      },
      {
        "@type": "EducationalOrganization",
        name: "GMERS, Gotri, Vadodara",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "DM Medical Oncology",
        recognizedBy: { "@type": "EducationalOrganization", name: "JIPMER, Pondicherry" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "MD Medicine",
        recognizedBy: { "@type": "EducationalOrganization", name: "TNMC & Nair Hospital, Mumbai" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "ESMO Certification",
        recognizedBy: { "@type": "Organization", name: "European Society for Medical Oncology" },
        dateCreated: "2024",
      },
    ],
    worksFor: { "@id": "https://shreejicancercare.in/#organization" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "A-1, Kirtikunj Society, V.K.V Road",
      addressLocality: "Nadiad",
      addressRegion: "Gujarat",
      postalCode: "387001",
      addressCountry: "IN",
    },
    knowsLanguage: ["Gujarati", "Hindi", "English", "Tamil", "Marathi"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://shreejicancercare.in/doctor#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "What cancers does Dr. Patel treat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Patel treats all major solid tumours and blood cancers, including breast, lung, colon, cervical cancers, blood cancers and paediatric oncology.",
        },
      },
      {
        "@type": "Question",
        name: "Where does Dr. Patel see patients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All consultations and treatments are provided at Shreeji Cancer Care in Nadiad, where patients can access organised clinic-based oncology care and follow-up.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get a second opinion from Dr. Patel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We offer an initial second-opinion consultation. Bring your reports, scans and previous treatment records.",
        },
      },
      {
        "@type": "Question",
        name: "Does he treat children with cancer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Dr. Patel has specialised training in paediatric oncology and treats children with a gentle, family-centred approach.",
        },
      },
      {
        "@type": "Question",
        name: "What is ESMO Certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ESMO certification reflects training aligned with international standards of cancer care — helping ensure your treatment follows global best practices.",
        },
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
        name: "Doctor",
        item: "https://shreejicancercare.in/doctor",
      },
    ],
  },
];

const DoctorPage = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Dr. Shreyans Patel – Medical Oncologist in Nadiad, Gujarat | Shreeji Cancer Care"
      description="Dr. Shreyans Patel is a JIPMER-trained, ESMO-certified medical oncologist at Shreeji Cancer Care, Nadiad, specialising in solid tumours, blood cancers, paediatric oncology and immunotherapy."
      canonicalPath="/doctor"
      jsonLd={doctorJsonLd}
    />
    <Header />

    <main>
      <PageHero
        eyebrow="Doctor"
        title="Dr. Shreyans Patel — Medical Oncologist, Nadiad"
        description="A trusted cancer specialist bringing JIPMER-level expertise and ESMO-certified precision to every patient in Gujarat — with honesty, compassion and complete dedication."
        imageSrc={doctorHero}
        imageAlt="Portrait of Dr. Shreyans Patel in a clinical setting"
        secondaryLabel="Book a Consultation"
        secondaryHref="/contact"
        butterflyPosition="left"
        butterflyRotation="-70deg"
      />

      {/* ── PROFILE: credentials + bio ── */}
      <section className="bg-background py-16">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">

            {/* Credentials table */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold text-foreground">Qualifications &amp; Details</h2>
              <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-card">
                {credentials.map(([label, value], index) => (
                  <div
                    key={label}
                    className={`grid gap-1 px-5 py-3.5 text-sm sm:grid-cols-[170px_1fr] ${
                      index !== credentials.length - 1 ? "border-b border-border/60" : ""
                    }`}
                  >
                    <span className="font-semibold text-foreground">{label}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio + quote */}
            <div>
              <h2 className="mb-5 text-2xl font-extrabold text-foreground">About Dr. Shreyans Patel</h2>
              <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  Dr. Shreyans Patel completed his MBBS in Vadodara and MD in General Medicine in Mumbai before
                  pursuing his passion for oncology with a DM in Medical Oncology from JIPMER, Pondicherry —
                  one of India's most respected medical institutions.
                </p>
                <p>
                  In 2024 he earned ESMO certification, aligning his practice with the highest international
                  standards of oncological care. He returned to his roots in Nadiad with one clear mission: to
                  make expert cancer care available to every patient in Gujarat without the burden of travel
                  and without losing the human touch.
                </p>
              </div>
              <blockquote className="mt-6 rounded-2xl border-l-4 border-[hsl(var(--primary))] bg-[hsl(var(--primary)_/_0.06)] px-6 py-5">
                <p className="text-[15px] font-semibold italic leading-relaxed text-foreground">
                  "I believe every patient deserves the truth about their diagnosis, a treatment plan built
                  for them, and a doctor who will be there for both the medical decisions and the human moments."
                </p>
                <footer className="mt-3 text-sm font-medium text-muted-foreground">— Dr. Shreyans Patel</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS + PUBLICATIONS ── */}
      <section className="bg-background py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            {/* Achievements */}
            <div>
              <h2 className="mb-6 text-2xl font-extrabold text-foreground flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-hope-purple/10 text-hope-purple">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                </span>
                Achievements
              </h2>
              <div className="space-y-4">
                {doctorAchievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-card transition-all hover:border-hope-purple/30 hover:shadow-lg"
                  >
                    <div className="absolute top-0 left-0 h-full w-1 bg-hope-purple/20 transition-all group-hover:bg-hope-purple" />
                    <p className="text-[15px] font-medium leading-relaxed text-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div>
              <h2 className="mb-6 text-2xl font-extrabold text-foreground flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-hope-purple/10 text-hope-purple">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M8 7h6"></path><path d="M8 11h8"></path></svg>
                </span>
                Publications
              </h2>
              <div className="space-y-4">
                {doctorPublications.map((pub, index) => (
                  <div 
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-card transition-all hover:border-hope-purple/30 hover:shadow-lg"
                  >
                    <div className="absolute top-0 left-0 h-full w-1 bg-hope-purple/20 transition-all group-hover:bg-hope-purple" />
                    <p className="text-[14px] leading-relaxed text-muted-foreground italic">
                      {pub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIALISATIONS + FAQ ── */}
      <section className="bg-secondary/40 py-16">
        <div className="container grid gap-10 lg:grid-cols-2">

          {/* Specialisations */}
          <div>
            <h2 className="mb-6 text-2xl font-extrabold text-foreground">Areas of Specialisation</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {doctorExpertise.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card px-4 py-3.5 text-sm font-semibold text-foreground shadow-card"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary)_/_0.12)] text-[hsl(var(--primary))]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="mb-6 text-2xl font-extrabold text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {doctorFaqs.map((faq) => (
                <article
                  key={faq.q}
                  className="rounded-2xl border border-border/70 bg-card p-5 shadow-card"
                >
                  <h3 className="text-[15px] font-bold text-foreground">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[hsl(var(--primary)_/_0.08)] py-14">
        <div className="container flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-foreground">Ready to consult the Doctor?</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Mon–Sat 10 AM–7 PM · Sunday by appointment · Nadiad, Gujarat
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-full bg-hope-purple px-8 font-semibold text-primary-foreground hover:bg-[hsl(var(--primary-deep))]">
              <Link to="/contact">Book an Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-8 font-semibold">
              <a href="tel:+918511492789">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default DoctorPage;