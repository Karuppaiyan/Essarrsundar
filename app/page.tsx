import {
  Header,
  PhilosophySection,
  StatsSection,
  SkillsSection,
  ContactSection,
  Footer,
} from '@/components';
import type { NextPage } from 'next';
import AquaticCarousel from "@/components/AquaticCarousel";
import Testimonials from "@/components/Testimonial";

const Home: NextPage = () => {

  return (
    <>    
    <Header/> 
    <AquaticCarousel/>
    <PhilosophySection/>
    <StatsSection/>
    <Testimonials />
    <SkillsSection/>
    <ContactSection/>
    <Footer/>

    </>
  );
};

export default Home;

