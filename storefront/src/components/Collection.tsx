"use client";
import { motion } from "framer-motion";

type Product = {
  id: string;
  name: string;
  specs: string;
  quote: string;
  price: string;
  video: string;
};

const PRODUCTS: Product[] = [
  { id: "m4",       name: "BMW M4 COMPETITION",  specs: "S58 · 503 HP · 3.9s",           quote: '"The most wanted desk on the way to the most wanted car."', price: "49.99", video: "/assets/product/product-m4.mp4" },
  { id: "sto",      name: "HURACÁN STO",          specs: "V10 · 640 HP · 3.0s",            quote: '"Not a toy. A declaration."',                                price: "49.99", video: "/assets/product/product-gt3.mp4" },
  { id: "gt3",      name: "PORSCHE 911 GT3 RS",   specs: "FLAT-SIX · 525 HP · 9,000 RPM", quote: '"The obsessive\'s anchor."',                                 price: "49.99", video: "/assets/product/product-sto.mp4" },
  { id: "mustang",  name: "FORD MUSTANG GT",      specs: "5.0 V8 · 480 HP · 4.2s",        quote: '"Raw American muscle, scaled to your desk."',                price: "49.99", video: "/assets/product/product-mustang.mp4" },
  { id: "corvette", name: "CHEVROLET CORVETTE",   specs: "6.2 V8 · 495 HP · 2.9s",        quote: '"The legend that earns its place every morning."',           price: "49.99", video: "/assets/product/product-corvette.mp4" },
  { id: "mclaren",  name: "MCLAREN 720S",         specs: "V8 TWIN-TURBO · 710 HP · 2.8s", quote: '"Engineered to obsess over. Built to chase."',               price: "49.99", video: "/assets/product/product-mclaren.mp4" },
];

export default function Collection() {
  return (
    <section id="the-cars" className="bg-[#080808] px-6 py-[80px] md:px-[8vw] md:py-[120px] flex flex-col items-center">
      <p className="font-inter text-[11px] tracking-[5px] text-[#6B21A8] uppercase text-center mb-6">CHOOSE YOUR FIRST STEP</p>
      <h2 className="font-bebas text-[48px] md:text-[80px] leading-none mb-16 tracking-[-2px] uppercase bg-[linear-gradient(180deg,#FFFFFF_0%,#6A6A6A_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
        YOUR COLLECTION
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((prod, i) => (
          <motion.div
            key={prod.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden group flex flex-col relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] backdrop-blur-[20px] transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(107,33,168,0.3)] hover:shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(107,33,168,0.1)_0%,transparent_70%)]" />
            <div className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 bg-[linear-gradient(90deg,transparent,rgba(107,33,168,0.6)_50%,transparent)]" />

            {/* Video */}
            <div className="relative w-full h-[260px] bg-black overflow-hidden">
              <video
                src={prod.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            {/* Body */}
            <div className="relative z-10 flex flex-col flex-grow p-8">
              <div className="font-bebas text-[28px] tracking-[2px] text-white mb-2">{prod.name}</div>
              <div className="font-inter text-[12px] tracking-[2px] text-[#9A9A9A] uppercase mb-4">{prod.specs}</div>
              <div className="font-inter text-[14px] italic text-[#6A6A6A] leading-relaxed mb-6">{prod.quote}</div>

              <div className="mt-auto pt-6 border-t border-[rgba(255,255,255,0.04)]">
                <div className="text-center font-inter text-[16px] font-bold text-[#C9A84C] mb-4">${prod.price}</div>
                <a href="/shop" className="block w-full bg-[#6B21A8] text-white text-center py-3 font-inter text-[11px] tracking-[3px] uppercase font-bold hover:bg-white hover:text-black transition-colors duration-300">
                  Add to Cart
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
