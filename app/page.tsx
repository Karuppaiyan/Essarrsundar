import Image from "next/image";
import {
  Header,
  HeroCarousel,
  PhilosophySection,
  StatsSection,
  SkillsSection,
  ContactSection,
  Footer,
} from '@/components';

import { Amplify } from 'aws-amplify';
import config from '@/aws-exports';

Amplify.configure(config);

import type { NextPage } from 'next';
import AquaticCarousel from "@/components/AquaticCarousel";
import Testimonials from "@/components/Testimonial";




const Home: NextPage = () => {

  return (
    <>    
    <Header/> 
    {/* <HeroCarousel/>    */}
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

