"use client";


export default function TableReservationCard() {
  return (
    <section className="w-full mx-auto my-8 bg-white rounded-2xl shadow-md p-4 md:p-8 border-1 border-[#7a1512]">
      <div className="flex flex-col  gap-6">
        {/* Left Side - Icon and Title */}
        <div className="flex items-center justify-start gap-4">
         
          <h2
           
             className={` text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B2E4A]`}
          >
            Tischreservierung
          </h2>
        </div>

        {/* Right Side - Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <p className="text-sm md:text-base text-gray-600 opacity-80 mb-4">
            Jetzt einen Tisch reservieren, um im Restaurant zu essen.
          </p>

          

        <button
  className="bg-[#f4e1d2] text-[#7a1512] font-semibold px-6 py-3 rounded-xl hover:bg-[#611616] transition"
  onClick={() => {
    window.location.href = "https://maps.app.goo.gl/zXre6oruRjeMsQKY6?g_st=iwb"  }}
>
  Tischreservierung
</button>

        </div>
      </div>
    </section>
  );
}
