import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Policies() {
 return (
   <main className="min-h-screen bg-[#080808] text-[#9A9A9A] font-inter">
     <Navbar />
     <div className="pt-[120px] pb-24 px-6 md:px-[8vw] max-w-4xl mx-auto">
       <h1 className="font-bebas text-[48px] md:text-[64px] text-white mb-12 tracking-[2px]">LEGAL POLICIES</h1>
       
       <div className="space-y-16">
         <section id="returns">
           <h2 className="font-bebas text-[28px] text-white mb-4 tracking-[1px]">RETURNS & REFUNDS</h2>
           <p className="mb-4">We stand behind the quality of our models. We offer a 30-day guarantee on damaged or defective items. If your model arrives damaged or has a manufacturing defect, please contact us within 30 days of delivery with photos of the issue for a replacement or full refund.</p>
           <p>Please note that we do not accept change-of-mind returns once an order has been dispatched.</p>
         </section>

         <section id="shipping">
           <h2 className="font-bebas text-[28px] text-white mb-4 tracking-[1px]">SHIPPING POLICY</h2>
           <p className="mb-4">We offer free international shipping on all orders, with no minimum spend required.</p>
           <ul className="list-disc pl-5 space-y-2">
             <li><strong>Dispatch:</strong> All orders are processed and dispatched within 1–2 business days.</li>
             <li><strong>Delivery:</strong> Estimated delivery is 6–12 business days worldwide.</li>
             <li><strong>Tracking:</strong> A tracking number will be sent via email as soon as your order ships.</li>
           </ul>
         </section>

         <section id="privacy">
           <h2 className="font-bebas text-[28px] text-white mb-4 tracking-[1px]">PRIVACY POLICY</h2>
           <p className="mb-4">Your privacy is important to us. We only collect information necessary to process your order and improve your experience. We do not sell your personal data to third parties. Our payment processing is fully encrypted and secure.</p>
         </section>

         <section id="terms">
           <h2 className="font-bebas text-[28px] text-white mb-4 tracking-[1px]">TERMS OF SERVICE</h2>
           <p className="mb-4">By placing an order, you agree to our terms of service. All prices are final. We reserve the right to cancel any order if we suspect fraudulent activity.</p>
         </section>

         <section id="contact">
           <h2 className="font-bebas text-[28px] text-white mb-4 tracking-[1px]">CONTACT</h2>
           <p className="mb-4">For any inquiries, issues, or business proposals, please email us at <a href="mailto:support@csr-racing.com" className="text-[#6B21A8] hover:underline">support@csr-racing.com</a>. We aim to respond within 24 hours.</p>
         </section>
       </div>
     </div>
     <Footer />
   </main>
 );
}
