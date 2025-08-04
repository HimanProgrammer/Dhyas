import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import footerData from '../../data/FooterData.json';
import Logo from '/public/images/logo.svg';

const Footer = () => {
  const [lang, setLang] = useState('en');
  const [content, setContent] = useState({});

  useEffect(() => {
    const selectedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(selectedLang);
    setContent(footerData[selectedLang] || {});
    
    const handleLanguageChange = () => {
      const updatedLang = localStorage.getItem('selectedLanguage') || 'en';
      setLang(updatedLang);
      setContent(footerData[updatedLang] || {});
    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  const renderLinks = (links = []) =>
    Array.isArray(links) ? (
      links.map((link, idx) => (
        <li key={idx}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))
    ) : (
      <li>No links available</li>
    );

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
                <h3>{content?.newsletter?.title || 'Subscribe Newsletter'}</h3>
                <p>{content?.newsletter?.description || ''}</p>
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

            {/* Services */}
            {content?.services && (
              <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                <div className="widget link-widget">
                  <div className="widget-title">
                    <h3>{content.services.title || 'Services'}</h3>
                  </div>
                  <ul>{renderLinks(content.services.links)}</ul>
                </div>
              </div>
            )}

            {/* Useful Links */}
            {content?.usefulLinks && (
              <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                <div className="widget link-widget">
                  <div className="widget-title">
                    <h3>{content.usefulLinks.title || 'Useful Links'}</h3>
                  </div>
                  <ul>{renderLinks(content.usefulLinks.links)}</ul>
                </div>
              </div>
            )}

            {/* Locations */}
            {content?.locations && (
              <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="widget wpo-contact-widget">
                  <div className="widget-title">
                    <h3>{content.locations.title || 'Locations'}</h3>
                  </div>
                  <ul>
                    <li>{content.locations.address}</li>
                    <li>
                      {content.locations.contact}: {content.locations.email}
                    </li>
                    <li>{content.locations.phone}</li>
                  </ul>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright-text">
                {content?.copyright || '© 2025 AidUs. All rights reserved.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
