import React, { useEffect, useState } from 'react';
import ContactForm from '../ContactFrom/ContactForm';
import contactData from '../../data/contactPage.json';

const Contactpage = () => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(storedLang);

    const handleLangChange = () => {
      const updatedLang = localStorage.getItem('selectedLanguage') || 'en';
      setLang(updatedLang);
    };

    window.addEventListener('languageChange', handleLangChange);
    return () => window.removeEventListener('languageChange', handleLangChange);
  }, []);

  const content = contactData[lang] || {};

  return (
    <section className="contact-page section-padding">
      <div className="container">
        <div className="office-info">
          <div className="row">
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="office-info-item">
                <div className="office-info-icon">
                  <div className="icon">
                    <i className="fi flaticon-home-address"></i>
                  </div>
                </div>
                <div className="office-info-text">
                  <h2>{content.addressHeading}</h2>
                  <p>{content.addressText}</p>
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-md-6 col-12">
              <div className="office-info-item active">
                <div className="office-info-icon">
                  <div className="icon">
                    <i className="fi flaticon-phone-call"></i>
                  </div>
                </div>
                <div className="office-info-text">
                  <h2>{content.phoneHeading}</h2>
                  <p>{content.phoneText}</p>
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-md-6 col-12">
              <div className="office-info-item">
                <div className="office-info-icon">
                  <div className="icon">
                    <i className="fi flaticon-mail-1"></i>
                  </div>
                </div>
                <div className="office-info-text">
                  <h2>{content.emailHeading}</h2>
                  <p>{content.emailText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-wrap">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="contact-left">
                <h2>{content.getInTouch}</h2>
                <p>{content.getInTouchDesc}</p>
                <div className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="contact-right">
                <div className="title">
                  <h2>{content.formTitle}</h2>
                  <p>{content.formNote}</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
