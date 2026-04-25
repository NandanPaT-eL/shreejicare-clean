import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import galleryHero from "@/assets/gallery-hero-v2.jpg";
import heroCare from "@/assets/hero-care.jpg";
import heroConsult from "@/assets/hero-consult.png";
import stepCare from "@/assets/step-care.png";
import stepBook from "@/assets/step-book.png";
import doctorPortrait from "@/assets/doctor-portrait.png";
import stepRecover from "@/assets/step-recover.png";
import { galleryItems } from "@/content/siteContent";

const imageMap = {
  "hero-care": heroCare,
  "hero-consult": heroConsult,
  "step-care": stepCare,
  "step-book": stepBook,
  "doctor-portrait": doctorPortrait,
  "step-recover": stepRecover,
} as const;

const Gallery = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Our Cancer Care Facility – Shreeji Cancer Care, Nadiad | Gallery"
      description="Take a virtual tour of Shreeji Cancer Care's modern oncology facility in Nadiad, Gujarat — our chemotherapy day care unit, consultation rooms and patient care areas."
      canonicalPath="/gallery"
    />
    <Header />
    <main>
      <PageHero
        eyebrow="Gallery"
        title="Our Cancer Care Facility in Nadiad"
        description="Take a closer look at our modern, patient-friendly oncology centre — designed to ensure comfort, safety and a sense of calm at every step of your treatment journey."
        imageSrc={galleryHero}
        imageAlt="Interior corridor of the Shreeji Cancer Care facility in Nadiad"
        secondaryLabel="Book an Appointment"
        secondaryHref="/contact"
      />

      <section className="bg-background py-20">
        <div className="container grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <figure key={item.title} className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-card">
              <img src={imageMap[item.image]} alt={item.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" width={1280} height={960} />
              <figcaption className="p-6">
                <h2 className="text-xl font-bold text-foreground">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.alt}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="container mt-14 rounded-[2rem] bg-gradient-hero px-8 py-12 text-center text-primary-foreground shadow-soft">
          <h2 className="text-3xl font-extrabold">Ready to Visit Us?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/85">See our facility in person, meet Dr. Shreyans Patel and talk through your care plan with our team.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full bg-white text-hope-purple hover:bg-white/90">
              <Link to="/contact">Book an Appointment</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/70 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
              <a href="tel:+918511492789">+91 85114 92789</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Gallery;
