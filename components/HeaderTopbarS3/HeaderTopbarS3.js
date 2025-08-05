'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import headerTopbarData from '../../data/headerTopbar.json';

const scrollToTop = () => window.scrollTo(10, 0);

const HeaderTopbarS3 = () => {
  const [lang, setLang] = useState('en');
  const [labels, setLabels] = useState(headerTopbarData.en);

  useEffect(() => {
    const storedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(storedLang);
    setLabels(headerTopbarData[storedLang]);

    const handleLangChange = () => {
      const updatedLang = localStorage.getItem('selectedLanguage') || 'en';
      setLang(updatedLang);
      setLabels(headerTopbarData[updatedLang]);
    };

    window.addEventListener('languageChange', handleLangChange);
    return () => window.removeEventListener('languageChange', handleLangChange);
  }, []);

  return (
    <div className="topbar fixed-top">
      <div className="container-fluid">
        <div className="row align-items-center">

          {/* Left - Address & Email */}
          <div className="col-lg-6 col-12">
            <ul className="contact-info">
              <li>
                <Link href="tel:+887869587496" onClick={scrollToTop}>
                  <i className="flaticon-maps-and-flags"></i>
                  <span>{labels.address}</span>
                </Link>
              </li>
              <li>
                <i className="ti-email"></i>
                <span>{labels.email}</span>
              </li>
            </ul>
          </div>

          {/* Right - Language + Socials */}
          <div className="col-lg-6 col-12">
            <div className="contact-into d-flex align-items-center justify-content-end gap-3">
              <LanguageSelector />
              <ul className="social-media d-flex gap-2 m-0">
                <li><Link href="#" onClick={scrollToTop}><i className="flaticon-facebook-app-symbol"></i></Link></li>
                <li><Link href="#" onClick={scrollToTop}><i className="flaticon-linkedin"></i></Link></li>
                <li><Link href="#" onClick={scrollToTop}><i className="flaticon-camera"></i></Link></li>
                <li><Link href="#" onClick={scrollToTop}><i className="flaticon-vimeo"></i></Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeaderTopbarS3;
