import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import BecomeVolunteerForm from '../../components/BecomeVolunteerForm/BecomeVolunteerForm';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg';
import Bgimg from '/public/images/volunteer.jpg';
import Image from 'next/image';
import pageTitles from '../../data/pageTitles.json';

const HomePage4 = () => {
  const [lang, setLang] = useState('en');
  const [titleData, setTitleData] = useState({});

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
      <PageTitle pageTitle={titleData.becomeVolunteerPageTitle} pagesub={titleData.becomeVolunteerPageSub} />

      <div className="volunteer-area">
        <div className="volunteer-wrap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="volunteer-item">
                  <div className="volunteer-img-wrap">
                    <div className="volunter-img">
                      <Image src={Bgimg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="volunteer-contact">
                  <div className="volunteer-contact-form">
                    <h2>{titleData.becomeVolunteerPageTitle || 'Become a Volunteer'}</h2>
                    <BecomeVolunteerForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePage4;
