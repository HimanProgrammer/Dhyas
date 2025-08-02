import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3'
import Hero3 from '../../components/hero3/hero3';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import About3 from '../../components/about3/about3';
import FunFactS2 from '../../components/FunFactS2/FunFactS2';
import ServiceSection4 from '../../components/ServiceSection4/ServiceSection4';
import GetQuateSectionS2 from '../../components/GetQuateSectionS2/GetQuateSectionS2';
import ProcessSectionS3 from '../../components/ProcessSectionS3/ProcessSectionS3';
import CausesSectionS3 from '../../components/CausesSectionS3/CausesSectionS3';
import PartnerSectionS3 from '../../components/PartnerSectionS3/PartnerSectionS3';
import TeamSectionS2 from '../../components/TeamSectionS2/TeamSectionS2';
import TestimonialS3 from '../../components/TestimonialS3/TestimonialS3';
import BlogSectionS3 from '../../components/BlogSectionS3/BlogSectionS3';
import BecomeSectionS2 from '../../components/BecomeSectionS2/BecomeSectionS2';
import MapSection from '../../components/MapSection/MapSection';
import FooterS3 from '../../components/footerS3/FooterS3';
import Scrollbar from '../../components/scrollbar/scrollbar';

import Logo from '/public/images/logo.svg'

const HomePage3 = () => {
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
            <Hero3 />
            <FeaturesSection />
            <About3 hclass={'about-section-s3 section-padding'} />
            <FunFactS2 hclass={'funfact-section-s2'} />
            <ServiceSection4 hclass={"service-section-s5 section-padding"} />
            <CausesSectionS3 />
            <GetQuateSectionS2 hclass={"get-quate-section-s2 section-padding"} />
            <ProcessSectionS3 hclass={"process-section-s3 section-padding"} />
            <PartnerSectionS3 />
            <TeamSectionS2 hclass={'volunteer-section-s2 section-padding'} />
            <TestimonialS3 />
            <BlogSectionS3 />
            <BecomeSectionS2 hclass={"become_volunteer become_volunteer-s2"} />
            <MapSection />
            <FooterS3 />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage3;