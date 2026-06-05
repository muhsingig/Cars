"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
 const [isVisible, setIsVisible] = useState(false);
 
 const springX = useSpring(0, { stiffness: 150, damping: 20 });
 const springY = useSpring(0, { stiffness: 150, damping: 20 });

 useEffect(() => {
   if (window.innerWidth < 768) return;
   setIsVisible(true);
   
   const updateMousePosition = (e: MouseEvent) => {
     setMousePosition({ x: e.clientX, y: e.clientY });
     springX.set(e.clientX - 16);
     springY.set(e.clientY - 16);
   };

   window.addEventListener("mousemove", updateMousePosition);
   return () => window.removeEventListener("mousemove", updateMousePosition);
 }, [springX, springY]);

 if (!isVisible) return null;

 return (
   <>
     <motion.div
       className="fixed top-0 left-0 w-8 h-8 border border-[#6B21A8] rounded-full pointer-events-none z-[9999]"
       style={{ x: springX, y: springY }}
     />
     <div
       className="fixed top-0 left-0 w-2 h-2 bg-[#6B21A8] rounded-full pointer-events-none z-[9999]"
       style={{ transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)` }}
     />
   </>
 );
}
