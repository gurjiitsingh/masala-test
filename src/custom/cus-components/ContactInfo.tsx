'use client'

import Link from "next/link";


// components/ContactInfo.tsx

export default function ContactInfo() {
  return (
    <section className="bg-[#f4efdf]  bg-[#ffe5d2] text-[#2b2e4a] py-16 md:py-36 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {/* Standort */}
        <div>
        
          <h3 className="uppercase text-sm tracking-wider font-semibold mb-2">Standort</h3>
          
          <p className="text-sm">Braunschweiger Str.</p>
            <p className="text-sm">Braunschweiger Str. 93,</p>
            <p className="text-sm">38518 Gifhorn, Germany</p>

           
        </div>
 
        {/* Telefon */}
        <div>
         
          <h3 className="uppercase text-sm tracking-wider font-semibold mb-2">Telefon</h3>
          <p className="text-sm"> 05371 6266291</p>
        </div>

        {/* E-Mail */}
        <div>
         
          <h3 className="uppercase text-sm tracking-wider font-semibold mb-2">Links</h3>
           <Link href="/allergene" >Allergene</Link><br />
          <a href="mailto:info@lakeside-ellerau.de" className="text-sm hover:underline">
            info@masala-gf.de
          </a>

        </div>

        {/* Öffnungszeiten */}
         <div>
      
          <h3 className="uppercase text-sm tracking-wider font-semibold mb-2">Öffnungszeiten</h3>
          <div className="text-sm space-y-1">
          
            <p>Täglich geöffnet:</p>
            <p>11:00 bis 15:00 Uhr</p>
            <p>und 17:00 bis 22:00 Uhr</p>
         
          </div>
        </div>
      </div>
    </section>
  );
}
