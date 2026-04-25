import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/doctor-portrait.png";
import { doctorQualifications } from "@/content/siteContent";

export const Doctor = () => (
  <section
    id="doctor"
    className="bg-secondary/40 py-20 lg:py-24 overflow-hidden"
  >
    <div className="container grid items-center gap-12 lg:grid-cols-2">
      <div className="relative">
        <div className="mx-auto max-w-md overflow-hidden rounded-[2rem] bg-white p-2 shadow-soft">
          <img
            src={portrait}
            alt="Dr. Shreyans Patel — Medical Oncologist"
            loading="lazy"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
          />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
          Meet Our{" "}
          <span className="inline-block bg-gradient-to-r from-[#52B788] to-[#6aaed6] px-[0.35em] py-[0.18em] text-white [border-radius:0.25rem] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] leading-[1.6]">
            Specialist
          </span>
        </h2>
        <p className="mt-4 text-lg text-foreground/80">
          JIPMER-trained and ESMO-certified, Dr. Shreyans Patel leads Shreeji
          Cancer Care with a patient-first approach rooted in ethics, clarity
          and evidence-based treatment.
        </p>
        <ul className="mt-6 space-y-2 text-[15px] text-muted-foreground">
          {doctorQualifications.map((item) => (
            <li key={item}>
              <strong className="text-foreground">•</strong> {item}
            </li>
          ))}
        </ul>
        <Button
          asChild
          size="lg"
          className="mt-8 h-12 rounded-full px-8 font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(to right, #52B788, #6aaed6)" }}
        >
          <Link to="/doctor">Get to Know Us</Link>
        </Button>
      </div>
    </div>
  </section>
);