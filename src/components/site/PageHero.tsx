import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-consult.png";
import butterfly from "@/assets/butterfly.png"; // Import butterfly image

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  hideButterfly?: boolean;
  butterflyPosition?: "left" | "right";
  butterflyRotation?: string;
}

export const PageHero = ({
  eyebrow,
  title,
  description,
  imageSrc = heroImage,
  imageAlt = "Cancer consultation at Shreeji Cancer Care in Nadiad",
  primaryLabel = "Book an Appointment",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref = "/",
  hideButterfly = false,
  butterflyPosition = "right",
  butterflyRotation,
}: PageHeroProps) => (
  <section className="bg-gradient-hero text-primary-foreground">
    <div className="container grid items-center gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-20">
      <div className="space-y-6">
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">{eyebrow}</p> : null}
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.25] sm:text-5xl lg:text-[3.35rem]">{title}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">{description}</p>
        <div className="flex flex-wrap gap-3 pt-1">
          <Button asChild size="lg" className="h-12 rounded-full bg-white px-7 font-semibold text-hope-purple shadow-soft hover:bg-white/90">
            <Link to={primaryHref}>{primaryLabel}</Link>
          </Button>
          {secondaryLabel ? (
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-white/70 bg-transparent px-7 font-semibold text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
              <Link to={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          ) : null}
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-[2rem] bg-white p-2 shadow-soft">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
            width={1024}
            height={1280}
            fetchPriority="high"
            loading="eager"
          />
        </div>
        {/* Butterfly decoration */}
        {!hideButterfly && (
          <img
            src={butterfly}
            alt=""
            aria-hidden="true"
            className={`absolute w-36 opacity-40 pointer-events-none z-20 sm:w-80 ${
              butterflyPosition === "left"
                ? "-left-32 -top-4 sm:-left-72 sm:top-0"
                : "-right-12 -top-12 sm:-right-24 sm:-top-24"
            }`}
            style={butterflyRotation ? { transform: `rotate(${butterflyRotation})` } : undefined}
          />
        )}
      </div>
    </div>
  </section>
);