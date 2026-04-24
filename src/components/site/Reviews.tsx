import { Link } from "react-router-dom";
import { Quote, Star } from "lucide-react";
import { reviews } from "@/content/siteContent";

export const Reviews = () => (
  <section id="reviews" className="bg-background py-20 lg:py-24">
    <div className="container">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
          Read Our <span className="text-highlight text-primary-foreground">Reviews</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Real feedback from families who trusted Shreeji Cancer Care for treatment, guidance and support.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {reviews.slice(0, 3).map((review) => (
          <article key={review.title} className="relative overflow-hidden rounded-3xl border border-border/70 bg-secondary/50 p-8 shadow-card">
            <Quote className="absolute -right-2 -top-2 h-24 w-24 text-hope-purple/10" />
            <div className="mb-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-hope-orange text-hope-orange" />
              ))}
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">“{review.title}”</h3>
            <p className="mb-4 text-[15px] leading-relaxed text-muted-foreground">{review.body}</p>
            <p className="text-sm font-semibold text-foreground/80">{review.attribution}</p>
            <Link to="/reviews" className="mt-5 inline-flex text-sm font-bold text-hope-purple">
              Read the Story &gt;&gt;
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);
