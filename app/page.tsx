import Image from "next/image";
import {
  Header,
  HeroCarousel,
  PhilosophySection,
  StatsSection,
  SkillsSection,
  ContactSection,
  Footer,
} from '../components';


import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
    <Header/>
    <HeroCarousel/>
    <PhilosophySection/>
    <StatsSection/>
    <SkillsSection/>
    <ContactSection/>
    <Footer/>
    </>
  );
};

export default Home;

