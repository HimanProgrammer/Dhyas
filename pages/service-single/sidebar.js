import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ServicesData from '../../data/services.json';

const ServiceSidebar = () => {
  const [lang, setLang] = useState('en');
  const [services, setServices] = useState([]);

  useEffect(() => {
    const selectedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(selectedLang);
    const langServices = ServicesData[selectedLang] || ServicesData['en'];
    setServices(langServices);
  }, []);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="service-sidebar">
      <div className="service-catagory">
        <ul>
          {services.slice(0, 5).map((service, index) => (
            <li key={index}>
              <Link href={`/service-single/${service.slug}`} onClick={ClickHandler}>
                {service.title} <i className="flaticon-right-arrow-1"></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="service-info">
        <div className="icon">
          <i className="flaticon-phone-call"></i>
        </div>
        <h2>
          Looking for
          <br />
          logistics service
          <br />
          Provider?
        </h2>
        <span>Call anytime</span>
        <div className="num">
          <span>+(2) 871 382 023</span>
        </div>
      </div> */}
    </div>
  );
};

export default ServiceSidebar;
