import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import doctorHero from "@/assets/doctor-portrait.png";
import butterfly from "@/assets/butterfly.png";
import { doctorExpertise, doctorFaqs } from "@/content/siteContent";

const credentials = [
  ["Designation", "Medical Oncologist"],
  ["DM Oncology", "JIPMER, Pondicherry"],
  ["MD Medicine", "TNMC & Nair hospital, Mumbai"],
  ["MBBS", "GMERS, Gotri, Vadodara"],
  ["ESMO Certification", "2024 (European Society for Medical Oncology)"],
  ["Languages", "Gujarati, Hindi, English"],
  ["Consultation Hours", "Mon–Sat: 10:00 AM – 7:00 PM | Sunday: By appointment"],
  ["Phone", "+91 85114 92789"],
];

const DoctorPage = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Dr. Shreyans Patel – Medical Oncologist in Nadiad, Gujarat | Shreeji Cancer Care"
      description="Dr. Shreyans Patel is a JIPMER-trained, ESMO-certified medical oncologist at Shreeji Cancer Care, Nadiad, specialising in solid tumours, blood cancers, paediatric oncology and immunotherapy."
      canonicalPath="/doctor"
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
              <h2 className="mb-5 text-2xl font-extrabold text-foreground">About Dr. Patel</h2>
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
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
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
            <h2 className="text-2xl font-extrabold text-foreground">Ready to consult Dr. Patel?</h2>
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