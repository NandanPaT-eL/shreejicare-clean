import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import treatmentsHero from "@/assets/treatments-hero.png";
import { detailedTreatments } from "@/content/siteContent";

const Treatments = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Cancer Treatments in Nadiad – Chemotherapy, Immunotherapy & More | Shreeji Cancer Care"
      description="Explore advanced cancer treatments at Shreeji Cancer Care, Nadiad — chemotherapy day care, targeted therapy, immunotherapy, blood cancer treatment, paediatric oncology, palliative care and cancer screening."
      canonicalPath="/treatments"
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
            <article key={treatment.title} className="rounded-3xl border border-border/70 bg-card p-8 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-hope-pink">{treatment.tagline}</p>
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
