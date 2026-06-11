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

    <h1 className="text-4xl font-bold text-center mt-8">Welcome to My Portfolio</h1>
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

