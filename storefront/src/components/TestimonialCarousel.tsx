"use client";

const REVIEWS = [
  { name: "JAMES HARRINGTON",  city: "NEW YORK, NY",    text: "The packaging alone sold me. Opened it like a watch. Sits on my desk and every client asks about it.",                   img: "/review-1.jpg" },
  { name: "TYLER BROOKS",      city: "LOS ANGELES, CA", text: "Takes up zero space but owns the room. Every Zoom call someone notices it. Detail is insane for the price.",             img: "/review-2.jpg" },
  { name: "RYAN CASTELLANO",   city: "AUSTIN, TX",      text: "Bought the GT3 RS. Paint finish is museum quality. Doors click solid. Delivered in 8 days. Came back for the M4.",      img: "/review-3.jpg" },
  { name: "MARCUS WEBB",       city: "NEW YORK, NY",    text: "Sits on my trading desk every morning before I start. Best $50 I've spent on motivation.",                               img: "/review-4.jpg" },
  { name: "DANIEL REEVES",     city: "MIAMI, FL",       text: "The unboxing experience is ridiculous for the price. Felt like opening something that cost 10x more.",                   img: "/review-5.jpg" },
  { name: "CHRIS LAFONT",      city: "CHICAGO, IL",     text: "1:32 scale is perfect. Not too big, not too small. The Huracán detail on the front splitter alone is worth it.",         img: "/review-6.jpg" },
];

export default function TestimonialCarousel() {
  return (
    <section id="the-proof" className="bg-white py-[80px] md:py-[120px] px-6 md:px-[8vw]">
      <div className="flex flex-col items-center mb-16">
        <h2 className="font-bebas text-[48px] md:text-[64px] text-[#080808] leading-none mb-4 uppercase tracking-[-1px]">
          REAL DESKS. REAL DRIVES.
        </h2>
        <div className="flex items-center gap-2 text-[#080808] font-inter text-[14px] font-semibold uppercase tracking-[1px]">
          <span className="text-[#C9A84C]">★★★★★</span>
          <span>4.9 · 200+ VERIFIED REVIEWS</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {REVIEWS.map((r, i) => (
          <div key={i} className="bg-[#F8F8F8] border border-[#EAEAEA] p-6 flex flex-col">
            {/* Image — plain img tag, fixed height */}
            <img
              src={r.img}
              alt={r.name}
              width={500}
              height={300}
              style={{ width: "100%", height: "260px", objectFit: "cover", display: "block", marginBottom: "24px" }}
            />
            <div className="text-[#C9A84C] text-[14px] mb-3">★★★★★</div>
            <p className="font-inter text-[15px] text-[#4A4A4A] leading-relaxed mb-6 flex-grow italic">
              "{r.text}"
            </p>
            <div className="font-bebas text-[18px] text-[#080808] tracking-[1px]">{r.name}</div>
            <div className="font-inter text-[12px] text-[#9A9A9A] uppercase tracking-[1px]">{r.city}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
