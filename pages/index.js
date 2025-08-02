import React, { Fragment } from 'react';
import Navbar from '../components/NavbarS3/NavbarS3'
import Hero from '../components/hero3/hero3';
import PartnerSection from '../components/PartnerSection/PartnerSection';
import About from '../components/about/about';
import FunFact from '../components/FunFact/FunFact';
import EventSection from '../components/EventSection/EventSection';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import CausesSection from '../components/CausesSection/CausesSection';
import CtaSection from '../components/CtaSection/CtaSection';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import Testimonial from '../components/Testimonial/Testimonial';
import ProcessSection from '../components/ProcessSection/ProcessSection';
import InstagamSection from '../components/InstagamSection/InstagamSection';
import BlogSection from '../components/BlogSection/BlogSection';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg'

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'}  Logo={Logo} />
            <Hero hclass={'wpo-hero-slider'} />
            {/* <PartnerSection hclass={'partners-section'} /> */}
            <FunFact />
            <About hclass={'about-section section-padding'}/>
            <ServiceSection  />
            {/* <CausesSection hclass={"causes-section section-padding pt-0"} /> */}
            <CtaSection hclass={'cta-section'}/>
            {/* <ProjectSection hclass={'project-section section-padding'}/>  */}
            {/* <Testimonial tClass={'testimonial-section'} /> */}
            {/* <ProcessSection /> */}
            {/* <InstagamSection hclass={'instagam-section section-padding pb-0'}/> */}
            <EventSection />
            {/* <BlogSection tClass={'blog-section section-padding'}/> */}
            <Footer />
            <Scrollbar /> 
        </Fragment>
    )
};
export default HomePage;