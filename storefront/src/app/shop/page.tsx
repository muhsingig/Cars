import Navbar from "@/components/Navbar";
import MarqueeBanner from "@/components/MarqueeBanner";
import Collection from "@/components/Collection";
import Footer from "@/components/Footer";

export default function Shop() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Navbar />
      <div className="pt-[64px]"><MarqueeBanner variant="dark" /></div>

      {/* Shop header */}
      <section className="bg-[#080808] px-6 pt-[60px] pb-0 md:px-[8vw] text-center">
        <p className="font-inter text-[11px] tracking-[5px] text-[#6B21A8] uppercase mb-4">
          CSR PERFORMANCE
        </p>
        <h1 className="font-bebas text-[56px] md:text-[96px] text-white leading-none mb-6 uppercase tracking-[-2px]">
          FULL COLLECTION
        </h1>
        <p className="font-inter text-[15px] text-[#9A9A9A] max-w-[480px] mx-auto mb-10 leading-relaxed">
          1:32 scale die-cast models. Precision engineered, museum-grade finish.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-4">
          <div className="flex items-center gap-2 font-inter text-[12px] tracking-[2px] text-[#9A9A9A] uppercase">
            <span className="text-[#6B21A8]">✈</span> Free worldwide shipping
          </div>
          <div className="flex items-center gap-2 font-inter text-[12px] tracking-[2px] text-[#9A9A9A] uppercase">
            <span className="text-[#C9A84C]">✦</span> 30-day satisfaction guarantee
          </div>
          <div className="flex items-center gap-2 font-inter text-[12px] tracking-[2px] text-[#9A9A9A] uppercase">
            <span className="text-[#9A9A9A]">★</span> 200+ satisfied customers
          </div>
        </div>
      </section>

      <Collection />
      <Footer />
    </main>
  );
}
