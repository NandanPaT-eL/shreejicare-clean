import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/logo-footer.png";
import butterfly from "@/assets/butterfly.png";
import { SITE } from "@/content/siteContent";

const links = [
  { label: "About Us", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Doctor", href: "/doctor" },
  { label: "Contact", href: "/contact" },
];

export const Footer = () => (
  <footer className="relative bg-[hsl(var(--primary-deep))] text-primary-foreground overflow-hidden">
    {/* Butterfly — top-right, hidden on mobile */}
    <img
      src={butterfly}
      alt=""
      aria-hidden="true"
      className="absolute -right-0 -top-0 z-0 w-56 opacity-20 pointer-events-none hidden md:block"
    />

    <div className="relative z-10 container grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
      <div>
        <img src={logo} alt="Shreeji Cancer Care" className="h-24 w-auto" width={240} height={96} />
        <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/75">
          A trusted oncology centre in Nadiad delivering advanced cancer
          treatment with compassion, ethics and the latest evidence-based
          science.
        </p>
        <p className="mt-4 text-sm font-semibold text-primary-foreground/90">
          {SITE.serviceArea}
        </p>
      </div>

      <nav className="relative" aria-label="Footer navigation">
        <h4 className="mb-4 text-lg font-bold">Quick Links</h4>
        <ul className="grid gap-3 text-sm text-primary-foreground/85">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="transition-smooth hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Butterfly below quick links — half of w-56 = w-28, rotated 90deg left */}
        <img
          src={butterfly}
          alt=""
          aria-hidden="true"
          className="mt-6 w-28 opacity-20 pointer-events-none hidden md:block"
          style={{ transform: "rotate(-70deg)" }}
        />
      </nav>

      <div>
        <h4 className="mb-4 text-lg font-bold">Get in Touch</h4>
        <ul className="space-y-3 text-sm text-primary-foreground/85">
          <li className="flex gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0" />{" "}
            <span>{SITE.addressLines.join(" ")}</span>
          </li>
          <li className="flex gap-3">
            <Phone className="h-5 w-5 shrink-0" />{" "}
            <a href={SITE.phoneHref} className="hover:underline">
              {SITE.phoneDisplay}
            </a>
          </li>
          <li className="flex gap-3">
            <Mail className="h-5 w-5 shrink-0" />{" "}
            <a href={`mailto:${SITE.email}`} className="hover:underline">
              {SITE.email}
            </a>
          </li>
          <li className="flex gap-3">
            <Clock className="h-5 w-5 shrink-0" />{" "}
            <span>
              {SITE.hours.weekday}
              <br />
              {SITE.hours.sunday}
            </span>
          </li>
        </ul>
        <Link
          to="/contact"
          className="mt-5 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-hope-purple transition-smooth hover:bg-white/90"
        >
          Book an Appointment
        </Link>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container flex flex-wrap items-center justify-between gap-2 py-5 text-xs text-primary-foreground/70">
        <span>
          © {new Date().getFullYear()} Shreeji Cancer Care. All rights reserved.
        </span>
        <div className="flex flex-wrap items-center gap-3">
          <span>{SITE.tagline}</span>
          <p className="flex items-center gap-1 text-xs text-primary-foreground/60">
            Designed by{" "}
            <span className="font-semibold text-primary-foreground">
              Harsh Patel
            </span>
            <span className="mx-1">|</span>
            <a
              href="https://wa.me/918980809394"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary-foreground hover:underline"
              aria-label="Chat with Harsh Patel on WhatsApp"
            >
              <FaWhatsapp className="h-3 w-3" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);