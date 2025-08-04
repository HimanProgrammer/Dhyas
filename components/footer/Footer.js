import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import footerData from '../../data/footerData.json';
import Logo from '/public/images/logo-2.svg';

const Footer = () => {
  const [lang, setLang] = useState('en');
  const [content, setContent] = useState(footerData.en);

  useEffect(() => {
    const selectedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(selectedLang);

    const newFooter = footerData[selectedLang] || footerData.en;

    setContent(newFooter);

    const handleLanguageChange = () => {
      const updatedLang = localStorage.getItem('selectedLanguage') || 'en';
      setLang(updatedLang);

      setContent(footerData[updatedLang] || footerData.en);

    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">

            {/* Newsletter */}
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <Image src={Logo} alt="footer logo" />
                </div>
                <h3 className="text-light">{content?.newsletter?.title || 'Subscribe Newsletter'}</h3>
                <p>{content?.newsletter?.description}</p>
                <form className="newsletter-form">
                  <input
                    type="email"
                    placeholder={content?.newsletter?.placeholder || 'Your email'}
                  />
                  <button type="submit">
                    <i className="fa fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>

            {/* Services List */}
            <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>{content?.services?.title}</h3>
                </div>
                <ul>
                  {content?.services?.links?.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>{content?.footer?.servicesTitle || 'Services'}</h3>
                </div>
                <ul>
                  {services?.slice(0, 5).map((service, index) => (
                    <li key={index}>
                      <Link href={`/service-single/${service.slug}`}>
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}

            {/* Useful Links */}
            <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>{content?.usefulLinks?.title}</h3>
                </div>
                <ul>
                  {content?.usefulLinks?.links?.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-contact-widget">
                <div className="widget-title">
                  <h3>{content?.locations?.title}</h3>
                </div>
                <ul>
                  <li>{content?.locations?.address}</li>
                  <li>{content?.locations?.contact}: {content?.locations?.email}</li>
                  <li>{content?.locations?.phone}</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright-text">{content?.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
