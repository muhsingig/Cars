"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const IMAGES = [
 "/review-1.jpg",
 "/review-2.jpg",
 "/review-3.jpg",
 "/review-4.jpg",
 "/review-5.jpg",
 "/review-6.jpg",
];

export default function SwipeManifesto() {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, margin: "-20%" });
 const [width, setWidth] = useState(0);
 const carouselRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
   if (carouselRef.current) {
     setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
   }
 }, []);

 return (
   <section ref={ref} className="bg-[#080808] flex flex-col md:flex-row overflow-hidden border-t border-white/[0.04]">
     <div className="w-full md:w-1/2 p-8 md:p-[8vw] flex flex-col justify-center">
       <div className="overflow-hidden mb-6">
         <motion.h2 
           initial={{ y: "100%" }} 
           animate={isInView ? { y: 0 } : { y: "100%" }} 
           transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
           className="font-bebas text-[48px] md:text-[72px] leading-[0.9] text-white"
         >
           OWN THE VISION.
         </motion.h2>
       </div>
       <div className="overflow-hidden mb-10">
         <motion.p 
           initial={{ y: "100%" }} 
           animate={isInView ? { y: 0 } : { y: "100%" }} 
           transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
           className="font-inter text-[#9A9A9A] text-[16px] md:text-[18px] leading-relaxed max-w-md"
         >
           Physical reminders of where you're going. A tangible connection to the ambition that drives you forward.
         </motion.p>
       </div>
       
       <motion.div 
         initial={{ scaleX: 0 }} 
         animate={isInView ? { scaleX: 1 } : { scaleX: 0 }} 
         transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
         className="h-[2px] bg-[#6B21A8] w-[120px] mb-6 origin-left" 
       />
       
       <motion.p 
         initial={{ opacity: 0 }} 
         animate={isInView ? { opacity: 1 } : { opacity: 0 }} 
         transition={{ duration: 0.8, delay: 0.4 }}
         className="font-bebas text-[24px] tracking-[2px] text-white uppercase"
       >
         NEVER OUT OF SIGHT. NEVER OUT OF REACH.
       </motion.p>
     </div>
     
     <div className="w-full md:w-1/2 p-8 md:p-0 md:py-[8vw] overflow-hidden">
       <motion.div ref={carouselRef} className="cursor-grab active:cursor-grabbing overflow-hidden">
         <motion.div 
           drag="x" 
           dragConstraints={{ right: 0, left: -width }} 
           className="flex gap-6 md:pl-0 pr-[8vw]"
         >
           {IMAGES.map((src, i) => (
             <motion.div 
               key={i} 
               className="min-w-[280px] md:min-w-[400px] aspect-[4/5] bg-[#0F0F0F] rounded-sm overflow-hidden"
             >
               <img src={src} alt="Lifestyle" className="w-full h-full object-cover pointer-events-none opacity-80" />
             </motion.div>
           ))}
         </motion.div>
       </motion.div>
     </div>
   </section>
 );
}
