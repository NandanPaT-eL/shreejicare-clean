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
    <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <img src={doctor} alt="Dr. Shreyans Patel at Shreeji Cancer Care" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full rounded-2xl object-cover shadow-card" />
          <img src={care} alt="Day care chemotherapy unit at Shreeji Cancer Care Nadiad" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-2xl object-cover shadow-card" />
        </div>
        <div className="mt-8 space-y-4">
          <img src={consult} alt="Patient consultation at Shreeji Cancer Care" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-2xl object-cover shadow-card" />
          <img src={recover} alt="Family support during cancer recovery" loading="lazy" width={1024} height={1024} className="aspect-[4/5] w-full rounded-2xl object-cover shadow-card" />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-extrabold leading-[1.5] text-foreground sm:text-4xl lg:text-5xl">
          Why Choose <span className="inline-block bg-gradient-to-r from-[#52B788] to-[#6aaed6] px-[0.35em] py-[0.18em] text-white [border-radius:0.25rem] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] leading-[1.6]">
  Shreeji Cancer Care?
</span>
        </h2>

        <ul className="mt-8 space-y-4">
          {whyChoosePoints.map((point) => (
            <li key={point} className="flex items-start gap-3 text-foreground">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-hope-purple text-primary-foreground">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="text-base font-semibold">{point}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{SITE.serviceArea}</p>

        <Button asChild size="lg" className="mt-10 h-12 rounded-full bg-hope-purple px-8 font-semibold text-primary-foreground hover:bg-[hsl(var(--primary-deep))]">
          <Link to="/about">About Us</Link>
        </Button>
      </div>
    </div>
  </section>
);
