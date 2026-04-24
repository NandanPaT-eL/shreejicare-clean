import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { HowWeHelp } from "@/components/site/HowWeHelp";
import { Steps } from "@/components/site/Steps";
import { Reviews } from "@/components/site/Reviews";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Doctor } from "@/components/site/Doctor";
import { LocationCTA } from "@/components/site/LocationCTA";
import { Footer } from "@/components/site/Footer";
import { Seo } from "@/components/site/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Shreeji Cancer Care – Advanced Cancer Treatment in Nadiad, Gujarat"
        description="Shreeji Cancer Care in Nadiad offers expert chemotherapy, targeted therapy, immunotherapy and blood cancer treatment led by Dr. Shreyans Patel — compassionate, affordable cancer care close to home."
        canonicalPath="/"
      />
      <Header />
      <main>
        <Hero />
        <HowWeHelp />
        <Steps />
        {/* <Reviews /> */}
        <WhyChoose />
        <Doctor />
        <LocationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
