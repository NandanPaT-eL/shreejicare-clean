import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-consult.png";
import hero2 from "@/assets/hero-consult-2.png";
import hero3 from "@/assets/hero-consult-3.png";
import butterfly from "@/assets/butterfly.png";
import { Link } from "react-router-dom";

const IMAGES = [
  {
    src: hero,
    alt: "Dr. Shreyans Patel consulting with a patient at Shreeji Cancer Care in Nadiad",
  },
  {
    src: hero2,
    alt: "Cancer care treatment at Shreeji Cancer Care in Nadiad",
  },
  {
    src: hero3,
    alt: "Oncology consultation at Shreeji Cancer Care in Nadiad",
  },
];

const INTERVAL_MS = 4000;

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 300);
    },
    [current, isTransitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gradient-hero text-primary-foreground overflow-hidden"
    >
      <div className="container grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="space-y-7">
          <h1 className="text-4xl font-extrabold leading-[1.6] sm:text-5xl lg:text-[3.5rem]">
            Advanced Cancer{" "}
            <span className="text-highlight">Care &amp; Treatment</span> Trusted
            in Nadiad
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Compassionate, ethical oncology tailored to your needs. We offer
            chemotherapy day care, targeted &amp; immunotherapy, blood cancer
            treatment, pediatric oncology and early cancer screening — visit our
            centre or request a home consultation.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-1">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-white px-7 font-semibold text-hope-purple shadow-soft hover:bg-white/90"
            >
              <Link to="/contact">Book an Appointment</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/70 bg-transparent px-7 font-semibold text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            >
              <Link to="/about">Why Choose Us</Link>
            </Button>
          </div>
        </div>

        {/* Photo + Butterfly */}
        <div className="relative">
          <div className="relative z-0 overflow-hidden rounded-[2rem] bg-white p-2 shadow-soft">
            {/* Slider images */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.6rem]">
              {IMAGES.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out"
                  style={{ opacity: i === current ? 1 : 0 }}
                  width={1024}
                  height={1280}
                  {...(i === 0 ? { fetchPriority: "high" as const, loading: "eager" as const } : { loading: "lazy" as const })}
                />
              ))}
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Butterfly IN FRONT of photo */}
          <img
            src={butterfly}
            alt=""
            aria-hidden="true"
            className="absolute -right-12 -top-12 w-36 opacity-40 pointer-events-none z-20 sm:-right-20 sm:-top-20 sm:w-80"
          />
        </div>
      </div>
    </section>
  );
};