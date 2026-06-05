import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import SwipeManifesto from "@/components/SwipeManifesto";
import ImageComparison from "@/components/ImageComparison";
import Truth from "@/components/Truth";
import UrgencyCountdown from "@/components/UrgencyCountdown";
import Collection from "@/components/Collection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import ManifestBanner from "@/components/ManifestBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] selection:bg-[#6B21A8] selection:text-white">
      <Navbar />
      <div className="pt-[64px]"><MarqueeBanner variant="dark" /></div>
      <Hero />
      <SwipeManifesto />
      <ImageComparison />
      <Truth />
      <UrgencyCountdown />
      <Collection />
      <MarqueeBanner variant="red" />
      <TestimonialCarousel />
      <FAQ />
      <CTA />
      <ManifestBanner />
      <Footer />
    </main>
  );
}
