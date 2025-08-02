import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg'
import TeamSectionS4 from '../../components/TeamSectionS4/TeamSectionS4';


const VolunteerPageS2 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Volunteer'} />
            <TeamSectionS4 hclass={'volunteer-section-s2 volunteer-section-s4 section-padding'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default VolunteerPageS2;
