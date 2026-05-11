import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/content/siteContent";

interface LocationCTAProps {
  standalone?: boolean;
}

export const LocationCTA = ({ standalone = false }: LocationCTAProps) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className={
        standalone
          ? "bg-background py-20 lg:py-24"
          : "bg-secondary/40 py-20 lg:py-24"
      }
    >
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            Get in Touch with{" "}
            <span className="inline bg-gradient-to-r from-[#52B788] to-[#6aaed6] px-[0.35em] py-[0.18em] text-white [border-radius:0.25rem] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] leading-[1.6]">
              Shreeji Cancer Care
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We are here to help. Whether you want to book a consultation, ask a
            question, or simply learn more — reach out to us and our team will
            respond promptly.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-border/70 bg-card p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground">
                Visit Our Centre
              </h3>

              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#52B788" }} />
                  <span>
                    {SITE.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>

                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0" style={{ color: "#52B788" }} />
                  <a
                    href={SITE.phoneHref}
                    className="font-semibold text-foreground transition-opacity hover:opacity-70"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </li>

                <li className="flex gap-3">
                  <Mail className="h-5 w-5 shrink-0" style={{ color: "#52B788" }} />
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-semibold text-foreground transition-opacity hover:opacity-70"
                  >
                    {SITE.email}
                  </a>
                </li>

                <li className="flex gap-3">
                  <Clock className="h-5 w-5 shrink-0" style={{ color: "#52B788" }} />
                  <span>
                    {SITE.hours.weekday}
                    <br />
                    {SITE.hours.sunday}
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full text-white transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(to right, #52B788, #6aaed6)" }}
                >
                  <a href={SITE.mapShareUrl} target="_blank" rel="noreferrer">
                    Open Location
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full transition-opacity hover:opacity-80"
                  style={{ borderColor: "#52B788", color: "#52B788" }}
                >
                  <a href={SITE.whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-card">
              <iframe
                src={SITE.mapEmbedUrl}
                title="Map showing Shreeji Cancer Care location in Nadiad"
                className="h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allow="fullscreen"
                allowFullScreen
              />
            </div>
          </div>

          {/* FORM SECTION */}
          <div className="rounded-3xl border border-border/70 bg-card p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground">
              Book Your Appointment
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Thank you. Our team will contact you within 24 hours to confirm
              your appointment.
            </p>

            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSeckxVxyrZ_h2SgTIe88MmHqwxhm7VBlJbEg5rBnSaRzI7sOA/formResponse"
              method="POST"
              target="hidden_iframe"
              onSubmit={(e) => {
                const form = e.currentTarget;
                const dateInput = form.querySelector(
                  "#preferredDate",
                ) as HTMLInputElement;
                const date = dateInput?.value;

                const dateField = form.querySelector(
                  '[name="entry.980550760"]',
                ) as HTMLInputElement;
                if (dateField && date) {
                  dateField.value = date;
                }

                setSubmitted(true);

                setTimeout(() => {
                  form.reset();
                }, 1000);

                setTimeout(() => {
                  setSubmitted(false);
                }, 5000);
              }}
              className="mt-8 space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" name="entry.1573883975" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="entry.577702231"
                  type="tel"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="concern">Your Concern</Label>
                <Textarea
                  id="concern"
                  name="entry.550985260"
                  className="min-h-[130px]"
                  required
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date</Label>
                  <Input id="preferredDate" type="date" required />
                </div>
              </div>

              <input type="hidden" name="entry.980550760" />

              <Button
                type="submit"
                size="lg"
                className="h-12 rounded-full px-8 text-white transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(to right, #52B788, #6aaed6)" }}
              >
                Book My Appointment →
              </Button>
            </form>

            <iframe name="hidden_iframe" title="Form submission target" style={{ display: "none" }} />

            {submitted && (
              <p className="mt-4 text-sm text-green-600">
                Your appointment request has been submitted. Our team will
                contact you within 24 hours.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};