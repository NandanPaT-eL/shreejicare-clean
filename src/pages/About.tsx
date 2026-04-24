import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import doctor from "@/assets/doctor-portrait.png";
import care from "@/assets/step-care.png";
import aboutHero from "@/assets/about-hero.png";
import { SITE, aboutApproach, aboutValues, doctorExpertise, whyChoosePoints } from "@/content/siteContent";

const About = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="About Us – Shreeji Cancer Care | Dr. Shreyans Patel, Oncologist, Nadiad"
      description="Meet Dr. Shreyans Patel, JIPMER-trained and ESMO-certified medical oncologist in Nadiad. Learn how Shreeji Cancer Care was founded to bring world-class cancer treatment close to home in Gujarat."
      canonicalPath="/about"
    />
    <Header />
    <main>
      <PageHero
        eyebrow="About Us"
        title="About Shreeji Cancer Care — Built on a Promise to Nadiad"
        description="Shreeji Cancer Care is a modern, independent oncology centre in Nadiad committed to delivering advanced cancer treatment with compassion, transparency and integrity. We exist so no patient in Gujarat has to travel far from home to receive world-class cancer care."
        imageSrc={aboutHero}
        imageAlt="Dr. Shreyans Patel discussing care with a patient family at Shreeji Cancer Care"
        secondaryLabel="Book an Appointment"
        secondaryHref="/contact"
      />

      <section className="bg-background py-20">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-white p-2 shadow-soft">
            <img src={doctor} alt="Dr. Shreyans Patel at Shreeji Cancer Care" className="aspect-[4/5] w-full rounded-[1.6rem] object-cover" width={1024} height={1280} />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">A Doctor's Promise — The Story Behind Shreeji</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                For Dr. Shreyans Patel, oncology is not just a profession — it is a deeply personal mission. Growing up in Nadiad, he witnessed patients and families travelling hours to larger cities for cancer treatment while already carrying physical, emotional and financial strain.
              </p>
              <p className="text-lg font-semibold text-foreground">“No one should have to leave their home to fight for their life.”</p>
              <p>
                After completing his DM in Medical Oncology from JIPMER, Pondicherry, Dr. Patel returned to Nadiad with a singular purpose: to build a centre that combines metro-level medical excellence with the warmth and accessibility of a hometown clinic. Shreeji Cancer Care is that promise, brought to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Our Mission, Vision & Values</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">A Gujarat where no cancer patient has to choose between quality care and being close to their family.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            <article className="rounded-2xl border border-border/70 bg-card p-6 shadow-card xl:col-span-2">
              <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">To deliver advanced, evidence-based cancer care that is accessible, affordable and deeply human — so every patient in Gujarat can receive world-class treatment without leaving their community.</p>
            </article>
            <article className="rounded-2xl border border-border/70 bg-card p-6 shadow-card xl:col-span-2">
              <h3 className="text-xl font-bold text-foreground">Our Approach</h3>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {aboutApproach.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
            {aboutValues.map((value) => (
              <article key={value.title} className="rounded-2xl border border-border/70 bg-card p-6 shadow-card">
                <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
  <div className="container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
    <div>
      <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
        The Story Behind Our Symbol — Wings of Hope
      </h2>

      <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
        <p className="text-xl font-semibold text-foreground">
          “એક આશાની પાંખોવાળી કહાની”
        </p>

        <p className="text-lg font-medium text-foreground">
          Shreeji Cancer Care is not just a hospital—it is a symbol of hope.
        </p>

        <div className="space-y-4">
          <p>
            જ્યારે જીવનમાં “કૅન્સર” શબ્દ આવે છે, ત્યારે ઘણાં માટે તે ભય, અનિશ્ચિતતા અને દુઃખ સાથે જોડાયેલો હોય છે. 
            પરંતુ Shreeji Cancer Care એ આ શબ્દને એક નવો અર્થ આપ્યો છે — આશા, સંભાળ અને વિશ્વાસ.
          </p>

          <p>
            લોગોમાં દેખાતી રંગીન પાંખો માત્ર ડિઝાઇન નથી; તે દરેક દર્દીની અંદર છુપાયેલી જીવન જીવવાની ઈચ્છાનું પ્રતીક છે.
          </p>

          <p>
            <strong className="text-foreground">જાંબલી રંગ</strong> હિંમત અને આત્મવિશ્વાસ બતાવે છે — જે દરેક દર્દીને સારવાર દરમિયાન જરૂરી હોય છે.
          </p>

          <p>
            <strong className="text-foreground">લીલો રંગ</strong> આરોગ્ય અને નવી શરૂઆતનું સૂચક છે — કારણ કે અહીં દરેક દર્દીને ફરીથી સ્વસ્થ જીવન તરફ લઈ જવાનો સંકલ્પ લેવાયો છે.
          </p>

          <p>
            <strong className="text-foreground">નારંગી રંગ</strong> ઊર્જા અને આશાનું પ્રતીક છે — જે કહે છે: 
            <span className="block italic mt-1">“અંધારાં પછી ઉજાસ જરૂર આવે છે.”</span>
          </p>

          <p>
            અને વચ્ચેનો નાનો માનવ આકાર… એ દરેક દર્દી છે — જે Shreeji Cancer Care ની પાંખોમાં સુરક્ષિત છે.
          </p>

          <p>
            Shreeji Cancer Care માત્ર સારવાર આપતું કેન્દ્ર નથી, પરંતુ એક એવી જગ્યા છે જ્યાં ડૉક્ટર માત્ર ડૉક્ટર નથી રહેતા, પણ પરિવાર બની જાય છે.
          </p>

          <p>
            અહીં મશીનો સાથે માનવતા જોડાયેલી છે, દવાઓ સાથે હિંમત મળે છે, અને દરેક દર્દીને કહેવામાં આવે છે —
            <span className="block font-semibold text-foreground mt-1">
              “તમે એકલા નથી, અમે તમારી સાથે છીએ.”
            </span>
          </p>

          <p className="font-semibold text-foreground">
            Shreeji Cancer Care — જ્યાં સારવાર માત્ર શરીરની નહીં, પણ મન અને આત્માની પણ થાય છે.
          </p>
        </div>
      </div>
    </div>

    <div className="overflow-hidden rounded-[2rem] bg-white p-2 shadow-soft">
      <img
        src={care}
        alt="Supportive care environment at Shreeji Cancer Care in Nadiad"
        className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
        width={1024}
        height={1280}
      />
    </div>
  </div>
</section>

      <section className="bg-secondary/40 py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">What Patients Can Expect at Shreeji Cancer Care</h2>
            <ul className="mt-8 grid gap-4">
              {whyChoosePoints.slice(0, 4).map((point) => (
                <li key={point} className="rounded-2xl border border-border/70 bg-card px-5 py-4 text-sm font-semibold text-foreground shadow-card">{point}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-gradient-hero p-8 text-primary-foreground shadow-soft">
            <h3 className="text-2xl font-bold">Meet Dr. Shreyans Patel</h3>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">Dr. Patel is known for his patient-first approach — clear communication, ethical counsel and steady support through every stage of treatment.</p>
            <ul className="mt-6 space-y-3 text-sm text-primary-foreground/85">
              {doctorExpertise.map((item) => <li key={item}>• {item}</li>)}
            </ul>
            <p className="mt-6 text-sm font-semibold text-primary-foreground/90">{SITE.serviceArea}</p>
            <Button asChild className="mt-8 rounded-full bg-white text-hope-purple hover:bg-white/90">
              <Link to="/contact">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
