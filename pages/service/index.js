import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FooterS2 from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg';
import CtaSectionS2 from '../../components/CtaSection/CtaSection';
// Optional Sections (you can uncomment as needed)
// import BecomeSection from '../../components/BecomeSection/BecomeSection';
// import ServiceSection3 from '../../components/ServiceSection3/ServiceSection3';
// import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
// import InstagamSectionS2 from '../../components/InstagamSectionS2/InstagamSectionS2';
// import Testimonial2 from '../../components/Testimonial2/Testimonial2';
// import PartnerSectionS2 from '../../components/PartnerSectionS2/PartnerSectionS2';
// import BlogSectionS2 from '../../components/BlogSectionS2/BlogSectionS2';
// import CtaSectionS3 from '../../components/CtaSectionS3/CtaSectionS3';

import pageTitles from '../../data/pageTitles.json';

const ServicePage = () => {
  const [lang, setLang] = useState('en');
  const [titleData, setTitleData] = useState(pageTitles.en);

  useEffect(() => {
    const storedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(storedLang);
    setTitleData(pageTitles[storedLang] || {});

    const handleLangChange = () => {
      const newLang = localStorage.getItem('selectedLanguage') || 'en';
      setLang(newLang);
      setTitleData(pageTitles[newLang] || {});
    };

    window.addEventListener('languageChange', handleLangChange);
    return () => window.removeEventListener('languageChange', handleLangChange);
  }, []);

  return (
    <Fragment>
      <Navbar hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle
        pageTitle={titleData.servicePageTitle || 'Our Services'}
        pagesub={titleData.servicePageSub || 'Services'}
      />
      <ServiceSection />
      <CtaSectionS2 />
      <FooterS2 />
      <Scrollbar />
    </Fragment>
  );
};

export default ServicePage;
