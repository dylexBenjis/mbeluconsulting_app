import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/home/heroSection";
import AboutUs from "@/components/home/aboutUs";
import Services_and_team from "@/components/home/services_and_team";
import Need_an_appraisal from "@/components/home/need_an_appraisal";
import ProfessionalsComponents from "@/components/home/professionals, experience";
import Infinite_scroll_loop from "@/components/clientSideComponents/infinite_scroll_loop";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <ProfessionalsComponents/>
      <Services_and_team />
      <Need_an_appraisal />
      <div className="mb-20">
        <div className={styles.container} style={{height:'auto', paddingBottom:'2rem'}}>
        <div className='flex h-auto py-5 text-3xl sm:text-4xl font-semibold text-amber-900 items-center justify-center text-center'>
          We&#39;re Proud Members Of these Institutions.
        </div></div>
        <Infinite_scroll_loop />
      </div>
    </div>
  );
}
