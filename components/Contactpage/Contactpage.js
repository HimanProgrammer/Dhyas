import React, { useState, useEffect } from 'react';
import ContactForm from '../ContactFrom/ContactForm';
import contactContent from '../../data/contactPage.json';

const Contactpage = () => {
    const [lang, setLang] = useState('en');
    const [contactData, setContactData] = useState(contactContent.en);

    useEffect(() => {
        // Get initial language from localStorage or default to 'en'
        const selectedLang = localStorage.getItem('selectedLanguage') || 'en';
        setLang(selectedLang);
        setContactData(contactContent[selectedLang] || contactContent.en);

        // Language change listener
        const handleLanguageChange = () => {
            const updatedLang = localStorage.getItem('selectedLanguage') || 'en';
            setLang(updatedLang);
            setContactData(contactContent[updatedLang] || contactContent.en);
        };

        window.addEventListener('languageChange', handleLanguageChange);

        return () => {
            window.removeEventListener('languageChange', handleLanguageChange);
        };
    }, []);

    return (
        <section className="contact-page section-padding-contact">
            <div className="container">
                <div className="office-info">
                    <div className="row">
                        {contactData?.office?.map((item, index) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={index}>
                                <div className={`office-info-item ${index === 1 ? 'active' : ''}`}>
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className={item.icon}></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>{item.title}</h2>
                                        {item.lines?.map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="contact-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="contact-left">
                                <h2>{contactData.contact?.heading}</h2>
                                <p>{contactData.contact?.description}</p>
                                <div className="map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
                                        allowFullScreen
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="contact-right">
                                <div className="title">
                                    <h2>{contactData.contact?.formHeading}</h2>
                                    <p>{contactData.contact?.formNote}</p>
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
