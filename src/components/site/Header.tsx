import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/shreeji-logo.png";
import { SITE } from "@/content/siteContent";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Doctor", href: "/doctor" },
  // { label: "Gallery", href: "/gallery" },
  // { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background">
      <div className="hidden items-center justify-center gap-2 border-b border-border/40 py-2 text-sm text-foreground/80 md:flex">
        <Phone className="h-4 w-4 text-hope-purple" strokeWidth={2.2} />
        <a
          href={SITE.phoneHref}
          className="font-medium transition-smooth hover:text-hope-purple"
        >
          {SITE.phoneDisplay}
        </a>
      </div>

      <div className="container flex h-20 items-center justify-between gap-6">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Go to homepage"
        >
          <img
            src={logo}
            alt="Shreeji Cancer Care logo"
            className="h-24 w-auto md:h-14 lg:h-20"
            width={200}
            height={200}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-[15px] font-semibold text-foreground/85 transition-smooth hover:text-hope-purple"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden h-11 rounded-full bg-hope-purple px-6 font-semibold text-primary-foreground hover:bg-[hsl(var(--primary-deep))] sm:inline-flex"
          >
            <Link to="/contact">Book an Appointment</Link>
          </Button>
          <button
            onClick={() => setOpen((value) => !value)}
            className="rounded-md p-2 text-hope-purple lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border/60 bg-background lg:hidden" aria-label="Mobile navigation">
          <div className="container flex flex-col gap-2 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="py-2 font-semibold text-foreground/85"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 rounded-full bg-hope-purple text-primary-foreground"
            >
              <Link to="/contact" onClick={() => setOpen(false)}>
                Book an Appointment
              </Link>
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
};
