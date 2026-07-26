// This is a boiler plate for the main page of the portal feel free to change it to your liking


"use client"

import { HeroSection } from "@/components/hero-section";
import { ProductTour } from "@/components/product-tour";
import { useRouter } from "next/navigation";

export default function Home() {
  let router = useRouter();
  let returntoportal = () => {
    router.push("/portal");
  }
  return (
    <main className="relative min-h-screen bg-[#030303]">
      <HeroSection />
      <ProductTour />
    </main>
  );
}
