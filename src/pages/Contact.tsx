import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { LocationCTA } from "@/components/site/LocationCTA";
import contactHero from "@/assets/contact-hero-v2.jpg";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Contact & Book Appointment – Shreeji Cancer Care, Nadiad | +91 85114 92789"
      description="Book an appointment with Dr. Shreyans Patel at Shreeji Cancer Care, Nadiad. Visit our clinic on V. K. Road, call +91 85114 92789 or fill the contact form."
      canonicalPath="/contact"
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
