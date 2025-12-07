import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      
        <Link
                href="https://eat.allo.restaurant/restaurant/masala-taste-of-india"
                rel="noopener noreferrer"
               
                className={`bg-[#7a1f1f] hover:bg-[#611616] text-2xl text-white font-semibold px-6 py-1 rounded-xl transition text-center tracking-wide`}
               
            
              >
                🍴 ORDER MENU
              </Link>

      </main>
    </div>
  );
}
