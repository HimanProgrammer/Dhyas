import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg'
import TeamSectionS3 from '../../components/TeamSectionS3/TeamSectionS3';


const VolunteerPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Volunteer'} />
            <TeamSectionS3 hclass={'volunteer-section volunteer-section-s3 section-padding'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default VolunteerPage;
