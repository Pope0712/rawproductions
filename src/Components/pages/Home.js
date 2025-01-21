import '../../App.css'
import HeroSection from '../LandingPage/HeroSection'
import React from 'react';
import SecondSection from '../LandingPage/SecondSection'
import ThirdSection from '../LandingPage/ThirdSection';
import FourSection from '../LandingPage/FourSection';
import ReviewsCarousel from '../LandingPage/ReviewsCarousel'; 
import Fotografii from '../LandingPage/Fotografii';
import Noi from '../LandingPage/Noi';
import Calendar from '../LandingPage/Calendar'
import Pachete from '../LandingPage/Pachete';
import WhyUs from '../LandingPage/WhyUs';
import Footer from '../LandingPage/Footer';


function Home (){
    return(
        <>
            <HeroSection />
            <SecondSection />
            <Noi />
            <WhyUs />
            <Fotografii />
            <ThirdSection/>
            <Pachete />
            <FourSection />
            <ReviewsCarousel />
            <Calendar/>
            <Footer/>
            
        </>
    )
}
export default Home;