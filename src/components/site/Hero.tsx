import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-consult.png";
import butterfly from "@/assets/butterfly.png";
import { Link } from "react-router-dom";

export const Hero = () => {
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
            <img
              src={hero}
              alt="Dr. Shreyans Patel consulting with a patient at Shreeji Cancer Care in Nadiad"
              className="aspect-[4/5] h-full w-full rounded-[1.6rem] object-cover"
              width={1280}
              height={1280}
            />
          </div>

          {/* Butterfly IN FRONT of photo */}
          <img
            src={butterfly}
            alt=""
            aria-hidden="true"
            className="absolute -right-12 -top-12 w-36 opacity-40 pointer-events-none z-20 sm:-right-20 sm:-top-20 sm:w-80"
          />

          {/* Colored pills — centered below the image */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            <div className="h-3 w-24 rounded-full bg-[#3B82F6]" />
            <div className="h-3 w-24 rounded-full bg-[#F59E0B]" />
            <div className="h-3 w-24 rounded-full bg-[#22C55E]" />
          </div>
        </div>
      </div>
    </section>
  );
};
