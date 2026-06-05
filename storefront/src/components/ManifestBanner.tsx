import Link from "next/link";

export default function ManifestBanner() {
  return (
    <section className="relative w-full">
      {/* Background image — sets the section height */}
      <img
        src="/banner-hero.png"
        alt=""
        className="w-full object-cover block"
        style={{ maxHeight: "90vh", minHeight: "400px" }}
      />

      {/* Overlay + text */}
      <div className="absolute inset-0 bg-black/40">
        <div className="h-full w-full max-w-[1500px] mx-auto px-6 md:px-[6vw] flex items-center justify-center md:justify-end">
          <div className="text-center md:text-left flex flex-col items-center md:items-start max-w-[90%] md:max-w-[420px]">
            <p className="font-inter uppercase tracking-widest text-white/60 text-[clamp(11px,1.1vw,14px)] mb-3">
              Give yourself a reason to struggle.
            </p>
            <h2 className="font-bebas text-white text-[clamp(36px,4.5vw,68px)] leading-[0.95] mb-5 break-words">
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
