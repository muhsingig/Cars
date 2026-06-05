"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function UrgencyCountdown() {
  const [timeLeft, setTimeLeft] = useState(5 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 5 * 60));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const secs = String(timeLeft % 60).padStart(2, "0");

  return (
    <section className="bg-[#0A0A0A] border-y border-white/[0.05] py-[80px] px-6 md:px-[8vw]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="font-inter text-[11px] tracking-[5px] text-[#6B21A8] uppercase mb-6">
          LIMITED AVAILABILITY
        </p>
        <h2 className="font-bebas text-[48px] md:text-[72px] text-white leading-none mb-8 uppercase">
          Your competition<br />already clicked
        </h2>

        <div className="font-bebas text-[80px] md:text-[120px] text-[#6B21A8] leading-none mb-10 tabular-nums tracking-[8px]">
          {mins} : {secs}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="font-bebas text-[48px] text-white leading-none">1,284</div>
            <div className="font-inter text-[11px] tracking-[3px] text-[#9A9A9A] uppercase mt-1">
              Desks already started
            </div>
          </motion.div>
          <div className="font-bebas text-[32px] text-[#2A2A2A]">VS</div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="font-bebas text-[48px] text-[#6B21A8] leading-none">0 (so far)</div>
            <div className="font-inter text-[11px] tracking-[3px] text-[#9A9A9A] uppercase mt-1">
              Yours
            </div>
          </motion.div>
        </div>

        <a
          href="#the-cars"
          className="inline-block font-bebas text-[16px] tracking-[4px] px-12 py-5 uppercase text-white bg-[#6B21A8] btn-premium hover:bg-[#7E22CE] transition-colors duration-300"
        >
          CLAIM YOURS — $49.99
        </a>
      </motion.div>
    </section>
  );
}
