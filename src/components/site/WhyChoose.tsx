import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import doctor from "@/assets/doctor-portrait.png";
import care from "@/assets/step-care.png";
import consult from "@/assets/hero-consult.png";
import recover from "@/assets/step-recover.png";
import { SITE, whyChoosePoints } from "@/content/siteContent";

export const WhyChoose = () => (
  <section id="about" className="bg-background py-20 lg:py-24">
    <div className="container">

      {/* ── Section heading — mirrors LocationCTA centred header ── */}
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
          Why Choose{" "}
          <span
            className="text-white"
            style={{
              background: "linear-gradient(to right, #52B788, #6aaed6)",
              borderRadius: "0.25rem",
              WebkitBoxDecorationBreak: "clone",
              boxDecorationBreak: "clone",
              display: "inline",
              padding: "0.15em 0.35em",
              lineHeight: "1.9",
            }}
          >
            Shreeji Cancer Care?
          </span>
        </h2>
      </div>

      {/* ── Body grid — mirrors LocationCTA mt-12 grid gap-8 ── */}
      <div className="mt-12 grid items-center gap-8 lg:grid-cols-2 lg:gap-16">

        {/* Image collage */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img
              src={doctor}
              alt="Dr. Shreyans Patel at Shreeji Cancer Care"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-card"
            />
            <img
              src={care}
              alt="Day care chemotherapy unit at Shreeji Cancer Care Nadiad"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-2xl object-cover shadow-card"
            />
          </div>
          <div className="mt-8 space-y-4">
            <img
              src={consult}
              alt="Patient consultation at Shreeji Cancer Care"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-2xl object-cover shadow-card"
            />
            <img
              src={recover}
              alt="Family support during cancer recovery"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-card"
            />
          </div>
        </div>

        {/* Text card — mirrors LocationCTA's info card (rounded-3xl border p-8 shadow-card) */}
        <div className="rounded-3xl border border-border/70 bg-card p-8 shadow-card">
          <h3 className="text-2xl font-bold text-foreground">
            Our Commitment to You
          </h3>

          <ul className="mt-6 space-y-4">
            {whyChoosePoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-foreground">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: "#52B788" }}
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-base font-semibold">{point}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {SITE.serviceArea}
          </p>

          <div className="mt-6">
            <Button
              asChild
              className="rounded-full text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(to right, #52B788, #6aaed6)" }}
            >
              <Link to="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);