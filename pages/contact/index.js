import { useEffect, useState } from 'react';
import React, { Fragment } from 'react';
import Navbar from '../../components/NavbarS3/NavbarS3';
import ContactPage from '../../components/Contactpage/Contactpage';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'; 
import Logo from '/public/images/logo-2.svg';
import PageTitle from '../../components/pagetitle/PageTitle';
import pageTitles from '../../data/pageTitles.json';

const Contact = () => {
    const [lang, setLang] = useState('en');
    const [titleText, setTitleText] = useState(pageTitles.en);

    useEffect(() => {
        const storedLang = localStorage.getItem('selectedLanguage') || 'en';
        setLang(storedLang);
        setTitleText(pageTitles[storedLang] || pageTitles.en);
    }, []);

    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={titleText.contactPageTitle} pagesub={titleText.contactPageSub} />
            <ContactPage />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default Contact;