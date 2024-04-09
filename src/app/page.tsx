import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/home/heroSection";
import AboutUs from "@/components/home/aboutUs";
import Services_and_team from "@/components/home/services_and_team";
import Need_an_appraisal from "@/components/home/need_an_appraisal";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services_and_team />
      <Need_an_appraisal/>
    </div>
  );
}
