import Link from "next/link";

export default function ManifestBanner() {
  return (
    <section className="relative w-full flex flex-col md:block">
      {/* Background image — sets the section height */}
      <img
        src="/banner-hero.png"
        alt=""
        className="w-full object-cover block h-[260px] sm:h-[360px] md:h-[550px] xl:h-[750px] object-center"
      />

      {/* Overlay + text */}
      <div className="relative md:absolute md:inset-0 bg-[#080808] md:bg-black/40 py-12 md:py-0 flex items-center">
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-[6vw] flex items-center justify-center md:justify-end">
          <div className="text-center md:text-left flex flex-col items-center md:items-start max-w-[90%] md:max-w-[420px]">
            <p className="font-inter uppercase tracking-widest text-white/60 text-[11px] md:text-[clamp(11px,1.1vw,14px)] mb-3">
              Give yourself a reason to struggle.
            </p>
            <h2 className="font-bebas text-white text-[32px] md:text-[clamp(36px,4.5vw,68px)] leading-[0.95] mb-5 break-words">
              Buy yours now.
            </h2>
            <Link
              href="/shop"
              className="font-inter text-sm font-medium text-white border-b border-white pb-1 uppercase tracking-wide hover:text-[#6B21A8] hover:border-[#6B21A8] transition-colors"
            >
              Shop the Collection →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
