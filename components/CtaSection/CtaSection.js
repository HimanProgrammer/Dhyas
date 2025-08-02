import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import data from '../../data/ctaSection.json'; // update the path if needed

import Shape from '/public/images/cta-shap.svg';
import Shape2 from '/public/images/curved_shape.svg';
import Shape3 from '/public/images/arrow1.svg';

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const CtaSection = (props) => {
  const [lang, setLang] = useState('en');
  const [content, setContent] = useState(data.en);

  useEffect(() => {
    const selectedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(selectedLang);
    setContent(data[selectedLang]);

    const handleLanguageChange = () => {
      const updatedLang = localStorage.getItem('selectedLanguage') || 'en';
      setLang(updatedLang);
      setContent(data[updatedLang]);
    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  return (
    <section className={"" + props.hclass}>
      <div className="overlay"></div>        
      <div className="container">
        <div className="content">
          <span>{content.tagline}</span>
          <h3>{content.title}</h3>
          <Link onClick={ClickHandler} href="/become-volunteer" className="theme-btn">
            {content.button}
          </Link>
        </div>
      </div>
      <div className="shape">
        <Image src={Shape} alt="" />
      </div>
      <div className="shape-1">
        <Image src={Shape2} alt="" />
      </div>
      <div className="shape-2">
        <Image src={Shape3} alt="" />
      </div>
    </section>
  );
};

export default CtaSection;
