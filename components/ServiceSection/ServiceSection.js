import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import VideoModal from '../ModalVideo/VideoModal';
import serviceContent from '../../data/serviceSectionData.json';
import servicesData from '../../data/services.json';

import Img1 from '/public/images/service/1.jpg';
import Img2 from '/public/images/service/2.jpg';
import Img3 from '/public/images/service/3.jpg';
import shape from '/public/images/service/shape-1.svg';
import shape2 from '/public/images/service/shape-2.svg';

const ServiceSection = () => {
  const [lang, setLang] = useState('en');
  const [content, setContent] = useState(serviceContent['en']);
  const [services, setServices] = useState(servicesData['en']);

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

  const scrollToTop = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="service-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-12">
            <div className="section-title">
              <span>{content.subtitle}</span>
              <h2>{content.title}</h2>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="all-Service-btn">
              <Link href="/service" className="theme-btn" onClick={scrollToTop}>
                {content.allServices}
              </Link>
            </div>
          </div>
        </div>

        <div className="service-wrap">
          <div className="row">
            <div className="col-lg-5 col-12">
              <div className="service-left">
                <ul>
                  {services.slice(0, 5).map((service, i) => (
                    <li key={i}>
                      <Link href={`/service-single/${service.slug}`} onClick={scrollToTop}>
                        <i className={service.icon}></i> {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="s-more">
                  <Link href="/service" onClick={scrollToTop}>
                    {content.moreServices}
                  </Link>
                </div>
                <div className="shape">
                  <svg width="58" height="59" viewBox="0 0 58 59" fill="none">
                    <path d="M54.2137..." fill="#F74F22" />
                    <path d="M8.63745..." fill="#F74F22" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-12">
              <div className="service-image">
                <ul>
                  <li>
                    <Image src={Img1} alt="service 1" />
                    <VideoModal />
                  </li>
                  <li><Image src={Img2} alt="service 2" /></li>
                  <li><Image src={Img3} alt="service 3" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape-1">
        <Image src={shape} alt="shape1" />
      </div>
      <div className="shape-2">
        <Image src={shape2} alt="shape2" />
      </div>
    </section>
  );
};

export default ServiceSection;
