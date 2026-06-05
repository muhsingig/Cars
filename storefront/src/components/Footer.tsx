export default function Footer() {
 return (
   <footer className="bg-[#080808] border-t border-white/[0.04] py-16 px-6 md:px-[8vw] text-[#9A9A9A]">
     <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
       <div className="flex flex-col gap-4">
         <div className="flex flex-col items-start">
           <span className="font-bebas text-[18px] tracking-[8px] text-white leading-none uppercase">CSR</span>
           <div className="w-[80px] h-[1px] bg-[#6B21A8] my-[2px]" />
           <span className="font-bebas text-[18px] tracking-[8px] text-[#6B21A8] leading-none uppercase">PERFORMANCE</span>
         </div>
         <p className="font-inter text-sm italic mt-2">"Own It In Your Hand First"</p>
         <p className="font-inter text-xs mt-4">Free Worldwide Shipping.<br />100% Satisfaction Guaranteed.</p>
       </div>
       <div className="hidden md:block"></div>
       <div>
         <h4 className="font-bebas text-white tracking-[2px] mb-4 text-xl">SHOP</h4>
         <ul className="flex flex-col gap-3 font-inter text-sm">
           <li><a href="/#the-cars" className="hover:text-white transition-colors">The Cars</a></li>
           <li><a href="/#faq" className="hover:text-white transition-colors">FAQs</a></li>
           <li><a href="/shop" className="hover:text-white transition-colors">Full Catalog</a></li>
         </ul>
       </div>
       <div>
         <h4 className="font-bebas text-white tracking-[2px] mb-4 text-xl">LEGAL</h4>
         <ul className="flex flex-col gap-3 font-inter text-sm">
           <li><a href="/policies#returns" className="hover:text-white transition-colors">Returns & Refunds</a></li>
           <li><a href="/policies#shipping" className="hover:text-white transition-colors">Shipping Policy</a></li>
           <li><a href="/policies#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
           <li><a href="/policies#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
           <li><a href="/policies#contact" className="hover:text-white transition-colors">Contact</a></li>
         </ul>
       </div>
     </div>
     <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.04] text-xs font-inter uppercase tracking-wider">
       <p>&copy; 2026 CSR PERFORMANCE. ALL RIGHTS RESERVED.</p>
       <p className="mt-4 md:mt-0 text-[#6B21A8]">🌍 SHIPS WORLDWIDE · FREE INTERNATIONAL SHIPPING</p>
     </div>
   </footer>
 );
}
