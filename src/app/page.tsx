

 import ContactInfo from "@/custom/cus-components/ContactInfo";
// import QuoteBanner from "@/custom/cus-components/QuoteBanner";
 import Catering from "@/custom/cus-components/Catering";
import DiscountSection from "@/custom/cus-components/DiscountSection";
import WelcomeBanner from "@/custom/cus-components/WelcomeBanner";
import HeroSectionCustom from "@/custom/cus-components/HeroSectionCustom";
 import BuffetCard from "@/custom/cus-components/BuffetCard";
import LunchDiscountCard from "@/custom/cus-components/LunchDiscountCard";
 import TableReservationCard from "@/custom/cus-components/TableReservationCard";


export default function Home() {
  return (
     <main className=" text-gray-900 font-sans">
      {/* <FlavorLine /> */}
      {/* <HeroSection /> */}
      <HeroSectionCustom />
      
      <DiscountSection />
      <WelcomeBanner />
    
     <div className="max-w-7xl flex flex-col mx-auto  md:flex-row gap-4">
      <div className="max-w-full mx-2 md:mx-0 md:w-[60%]">
     <LunchDiscountCard />
     </div>
     <div className="max-w-full mx-2 md:mx-0 md:w-[40%]">
     <TableReservationCard />
     </div>
     </div>
         
      <BuffetCard />
     

      {/* <QuoteBanner />*/}
      <Catering />
      <ContactInfo /> 
      {/* <MenuPreview /> */}
      {/* <Contact />
      <Footer /> */}
    </main>
  );
}
