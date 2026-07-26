import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import AnimatedBackground from "@/components/animated-bg";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
