import {
  ArrowRight,
  Baby,
  Droplet,
  Pill,
  ShieldCheck,
  Stethoscope,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import { homeServices } from "@/content/siteContent";

const icons = [Pill, Target, Droplet, Baby, ShieldCheck, Stethoscope];

export const HowWeHelp = () => (
  <section id="treatments" className="bg-background py-20 lg:py-24">
    <div className="container">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
          How{" "}
          <span className="inline-block bg-gradient-to-r from-[#52B788] to-[#6aaed6] px-[0.35em] py-[0.18em] text-white [border-radius:0.25rem] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] leading-[1.6]">
            We Can Help You
          </span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          A focused range of oncology services designed around diagnosis,
          treatment planning and continued clinic care.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {homeServices.map((service, index) => {
          const Icon = icons[index];
          return (
            <article
              key={service.title}
              className="group rounded-2xl border border-border/70 bg-card p-7 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-hope-purple">
                <Icon className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
              <Link
                to="/treatments"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-hope-purple transition-smooth hover:gap-2.5"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
