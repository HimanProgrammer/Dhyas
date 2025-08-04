'use client';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import serviceContent from '../../data/serviceSectionData.json';
import servicesData from '../../data/services.json';
import footerData from '../../data/footerData.json';

import shape1 from '/public/images/f-shape1.svg';
import shape2 from '/public/images/f-shape-2.svg';
import shape3 from '/public/images/f-shape3.svg';
import shape4 from '/public/images/f-shape4.svg';
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = () => {
    const [email, setEmail] = useState('');
    const [lang, setLang] = useState('en');
    const [content, setContent] = useState(serviceContent['en']);
    const [services, setServices] = useState(servicesData['en']);

    const handleReset = () => setEmail('');

    const loadLanguageContent = () => {
        const selectedLang = localStorage.getItem('selectedLanguage') || 'en';
        setLang(selectedLang);
        setContent(serviceContent[selectedLang] || serviceContent['en']);
        setServices(servicesData[selectedLang] || servicesData['en']);
    };

    useEffect(() => {
        loadLanguageContent();
        window.addEventListener('languageChange', loadLanguageContent);
        return () => window.removeEventListener('languageChange', loadLanguageContent);
    }, []);

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        {/* <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-s2">
                                <div className="widget-title">
                                    <h3>{content?.footer?.newsletterTitle || content.newsletter.}</h3>
                                </div>
                                <p>{content?.footer?.newsletterDesc || 'Subscribe to our updates for latest services and news.'}</p>
                                <form className="form-fild">
                                    <input
                                        className="fild"
                                        type="text"
                                        placeholder={content?.footer?.newsletterPlaceholder || "Your email"}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button type="button" onClick={handleReset}>
                                        <i className="flaticon-right-arrow"></i>
                                    </button>
                                </form>
                            </div>
                        </div> */}

                        {/* Newsletter */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="widget">
                            <div className="footer-logo mb-30">
                            <h3>{content.newsletter.title}</h3>
                            </div>
                            <p>{content.newsletter.description}</p>
                            <form className="newsletter-form">
                            <input
                                type="email"
                                placeholder={content.newsletter.placeholder}
                            />
                            <button type="submit">
                                <i className="fa fa-paper-plane"></i>
                            </button>
                            </form>
                        </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>{content?.footer?.servicesTitle || 'Services'}</h3>
                                </div>
                                <ul>
                                    {services?.slice(0, 5).map((service, index) => (
                                        <li key={index}>
                                            <Link onClick={ClickHandler} href={`/service-single/${service.slug}`}>
                                                {service.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    {/* Useful Links */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget">
                        <h3>{content.usefulLinks.title}</h3>
                        <ul className="footer-links">
                        {content.usefulLinks.links.map((link, idx) => (
                            <li key={idx}>
                            <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                    </div>


                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget locations-widget">
                                <div className="widget-title">
                                    <h3>{content?.footer?.locationsTitle || content.locations.title}</h3>
                                </div>
                                <p>{content?.footer?.locationAddress || content.locations.address}</p>
                                <ul>
                                    <li>{content?.footer?.contact || content.locations.contact}</li>
                                    <li>{content?.footer?.email || content.locations.email}</li>
                                    <li>{content?.footer?.phone || content.locations.phone}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright">
                                &copy; 2025 <Link onClick={ClickHandler} href="">Tech</Link> - non profit. {content?.footer?.rights || 'All rights reserved.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape"><Image src={shape1} alt="" /></div>
            <div className="shape1"><Image src={shape2} alt="" /></div>
            <div className="shape2"><Image src={shape3} alt="" /></div>
            <div className="shape3"><Image src={shape4} alt="" /></div>  



 {/* Copyright */}
      <div className="footer-bottom">
        <div className="container text-center">
          <p>{content.copyright}</p>
        </div>
      </div>


        </footer>
    );
}

export default Footer;




