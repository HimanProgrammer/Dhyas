'use client';

import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import AboutS2 from '../../components/about2/about2';
import CtaSection from '../../components/CtaSection/CtaSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.png';
import TabSection from '../../components/tab/tabsection';

import pageTitles from '../../data/pageTitles.json'; // ✅ Correct path

const AboutPage = () => {
  const [lang, setLang] = useState('en');
  const [titleData, setTitleData] = useState(pageTitles.en);

  useEffect(() => {
    const storedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(storedLang);
    setTitleData(pageTitles[storedLang]);

    const handleLangChange = () => {
      const newLang = localStorage.getItem('selectedLanguage') || 'en';
      setLang(newLang);
      setTitleData(pageTitles[newLang]);
    };

    window.addEventListener('languageChange', handleLangChange);
    return () => window.removeEventListener('languageChange', handleLangChange);
  }, []);

  return (
    <Fragment>
      <Navbar hclass="wpo-site-header" Logo={Logo} />
      <PageTitle pageTitle={titleData.aboutPageTitle} pagesub={titleData.aboutPageSub} />
      <AboutS2 hclass="about-section-s4 section-padding" />
      <TabSection />
      <CtaSection hclass="cta-section" />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default AboutPage;
