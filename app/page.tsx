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



import type { NextPage } from 'next';
import AquaticCarousel from "@/components/AquaticCarousel";
import Testimonials from "@/components/Testimonial";

const Home: NextPage = () => {
  const testimonialsData = [
      {
        name: "Ravi Kumar",
        role: "Event Manager",
        company: "ESS ARR Enterprises",
        image: "https://via.placeholder.com/150",
        quote:
          "The LED screens were top-notch and made our event unforgettable!",
      },
      {
        name: "Priya Sharma",
        role: "Marketing Head",
        company: "Shivam Video",
        quote:
          "Professional service and excellent quality. Highly recommended!",
      },
      {
        name: "Arjun Mehta",
        role: "CEO",
        company: "TechVision",
        image: "https://via.placeholder.com/150",
        quote:
          "Reliable, innovative, and always on time. A great partner to work with.",
      },
    ];

  return (
    <>    
    <Header/> 
    {/* <HeroCarousel/>    */}
    <AquaticCarousel/>
    <PhilosophySection/>
    <StatsSection/>
     <Testimonials testimonials={testimonialsData} />
    <SkillsSection/>
    <ContactSection/>
    <Footer/>

    </>
  );
};

export default Home;

