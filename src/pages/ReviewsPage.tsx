import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import reviewsHero from "@/assets/reviews-hero.jpg";
import { reviews, SITE } from "@/content/siteContent";

const ReviewsPage = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Patient Reviews – Shreeji Cancer Care, Nadiad | 250+ Families Trust Us"
      description="Read real patient reviews and stories from Shreeji Cancer Care, Nadiad. Hundreds of families across Gujarat trust Dr. Shreyans Patel for compassionate, expert cancer treatment."
      canonicalPath="/reviews"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'MedicalClinic',
        name: SITE.name,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: '250'
        },
        review: reviews.slice(0, 3).map((review) => ({
          '@type': 'Review',
          reviewBody: review.body,
          reviewRating: { '@type': 'Rating', ratingValue: '5' },
          author: { '@type': 'Person', name: review.attribution }
        }))
      }}
    />
    <Header />
    <main>
      <PageHero
        eyebrow="Patient Stories"
        title="What Our Patients Say"
        description="Over 250 families across Nadiad, Anand, Kheda and Gujarat have trusted Shreeji Cancer Care for their cancer treatment. Here are some of their stories."
        imageSrc={reviewsHero}
        imageAlt="Supportive consultation between doctor, patient and family at Shreeji Cancer Care"
        secondaryLabel="Book a Consultation"
        secondaryHref="/contact"
      />

      <section className="bg-background py-20">
        <div className="container grid gap-6 lg:grid-cols-2">
          {reviews.map((review) => (
            <article key={review.title} className="rounded-3xl border border-border/70 bg-card p-8 shadow-card">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-hope-orange text-hope-orange" />)}
              </div>
              <h2 className="text-2xl font-bold text-foreground">“{review.title}”</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{review.body}</p>
              <p className="mt-5 text-sm font-semibold text-foreground/80">{review.attribution}</p>
            </article>
          ))}
        </div>

        <div className="container mt-14 rounded-[2rem] bg-secondary/50 px-8 py-12 text-center">
          <h2 className="text-3xl font-extrabold text-foreground">Share Your Experience</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">Have you or a loved one been treated at Shreeji Cancer Care? Your story can give hope and guidance to another family in need.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full bg-hope-purple text-primary-foreground hover:bg-[hsl(var(--primary-deep))]">
              <a href={`mailto:${SITE.email}?subject=Patient%20Story%20for%20Shreeji%20Cancer%20Care`}>Share Your Story</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-hope-purple/30 text-hope-purple hover:bg-hope-purple/5 hover:text-hope-purple">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ReviewsPage;
