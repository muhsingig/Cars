"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ImageComparison() {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(Math.max(pct, 3), 97));
  };

  return (
    <section className="bg-[#080808] px-6 py-[80px] md:px-[8vw] md:py-[120px] flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full flex flex-col items-center"
      >
        <p className="font-inter text-[11px] tracking-[5px] text-[#6B21A8] uppercase mb-6">
          THE VISION
        </p>
        <h2 className="font-bebas text-[40px] md:text-[64px] text-white text-center leading-none mb-12 uppercase">
          TODAY ON YOUR DESK.<br />TOMORROW IN YOUR DRIVEWAY.
        </h2>

        <div
          ref={containerRef}
          className="relative w-full max-w-4xl aspect-[16/9] overflow-hidden select-none rounded-sm"
          style={{ cursor: dragging ? "grabbing" : "ew-resize" }}
          onMouseMove={e => dragging && handleMove(e.clientX)}
          onMouseDown={e => { setDragging(true); handleMove(e.clientX); }}
          onMouseUp={() => setDragging(false)}
          onMouseLeave={() => setDragging(false)}
          onTouchMove={e => handleMove(e.touches[0].clientX)}
          onTouchStart={e => handleMove(e.touches[0].clientX)}
        >
          {/* TODAY — left side */}
          <div className="absolute inset-0">
            <img
              src="/assets/swipe/car-desk.png"
              alt="Today — model on desk"
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1">
              <span className="font-bebas text-[16px] tracking-[4px] text-white uppercase">Today</span>
            </div>
          </div>

          {/* TOMORROW — right side, clipped */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
          >
            <img
              src="/assets/swipe/car-driveway.png"
              alt="Tomorrow — real car"
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1">
              <span className="font-bebas text-[16px] tracking-[4px] text-white uppercase">Tomorrow</span>
            </div>
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-white/80 pointer-events-none"
            style={{ left: `${pos}%` }}
          >
            {/* Handle */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_0_0_3px_rgba(255,255,255,0.2)]">
              <span className="font-inter text-[10px] font-bold text-black tracking-tight">◀▶</span>
            </div>
          </div>

          {/* Drag hint — fades on interaction */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none">
            <span className="font-inter text-[11px] tracking-[3px] text-white/40 uppercase">
              ← DRAG →
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
