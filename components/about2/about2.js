import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import Image from 'next/image';
import aboutContent from '../../data/aboutContent.json';

import About1 from '/public/images/about/about-3.jpg';
import About2 from '/public/images/about/about-4.jpg';
import Shape1 from '/public/images/about/shape4.svg';
import Shape2 from '/public/images/about/shape11.svg';
import Shape3 from '/public/images/healthcare.svg';
import Shape7 from '/public/images/about/shape2.svg';
import Shape8 from '/public/images/about/shape8.svg';

const AboutS2 = (props) => {
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState(0);

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

  const data = aboutContent[lang];

  return (
    <section className={"" + props.hclass}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="about-image">
              <div className="image1"><Image src={About1} alt="" /></div>
              <div className="image2"><Image src={About2} alt="" /></div>
              <div className="shape-love"><Image src={Shape1} alt="" /></div>
              <div className="text">
                <h2>Since</h2>
                <h3><CountUp end={1999} enableScrollSpy /></h3>
                <div className="shape"><Image src={Shape2} alt="" /></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="right-content">
              <h2><Image src={Shape3} alt="" />{data.heading}</h2>
              <h3>{data.subHeading}</h3>
              <p>{data.paragraph}</p>

              <div className="about-tab">
                <div className="tab">
                  {data.tabs.map((tabLabel, index) => (
                    <button
                      key={index}
                      className={activeTab === index ? 'tablinks active' : 'tablinks'}
                      onClick={() => setActiveTab(index)}
                    >
                      {tabLabel}
                    </button>
                  ))}
                </div>

                {data.tabContent.map((content, index) => (
                  <div key={index} className={activeTab === index ? 'tabcontent active' : 'hidden'}>
                    <div className="tab-wrap">
                      <div className="right">
                        <p>{content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape-2"><Image src={Shape7} alt="" /></div>
      <div className="shape-3"><Image src={Shape8} alt="" /></div>
    </section>
  );
};

export default AboutS2;
