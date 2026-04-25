import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import stepBook from "@/assets/step-book.png";
import stepCare from "@/assets/step-care.png";
import stepRecover from "@/assets/step-recover.png";
import { homeSteps } from "@/content/siteContent";

const images = [stepBook, stepCare, stepRecover];

export const Steps = () => (
  <section id="steps" className="bg-secondary/40 py-20 lg:py-24">
    <div className="container">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
          3 Easy Steps to{" "}
          <span className="inline-block bg-gradient-to-r from-[#52B788] to-[#6aaed6] px-[0.35em] py-[0.18em] text-white [border-radius:0.25rem] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] leading-[1.6]">
            Better Care
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          From first consultation to follow-up, our process is simple, organised
          and fully clinic-based.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {homeSteps.map((item, index) => (
          <div key={item.step} className="text-center">
            <div className="mb-6 overflow-hidden rounded-3xl shadow-card">
              <img
                src={images[index]}
                alt={item.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
                width={1024}
                height={768}
              />
            </div>
            <p className="mb-1 text-sm font-bold uppercase tracking-wider text-[#52B788]">
              {item.step}
            </p>
            <h3 className="mb-3 text-2xl font-bold text-foreground">
              {item.title}
            </h3>
            <p className="mx-auto max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {/* Primary button with gradient */}
        <Button
          asChild
          size="lg"
          className="h-12 rounded-full bg-gradient-to-r from-[#52B788] to-[#6aaed6] px-8 font-semibold text-white shadow-md transition-all hover:shadow-lg hover:brightness-105"
        >
          <Link to="/contact">Book an Appointment</Link>
        </Button>

        {/* Outline button - NO PINK EVER */}
        <Button
          asChild
          size="lg"
          variant="outline"
          className="h-12 rounded-full border-2 border-[#52B788] !bg-transparent px-8 font-semibold !text-[#52B788] transition-all hover:!border-transparent hover:!bg-gradient-to-r hover:from-[#52B788] hover:to-[#6aaed6] hover:!text-white focus:!border-[#52B788] focus:!outline-none focus:!ring-0 focus:!ring-offset-0 active:!bg-gradient-to-r"
        >
          <Link to="/contact">Find Our Clinic</Link>
        </Button>
      </div>
    </div>
  </section>
);