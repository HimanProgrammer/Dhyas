import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import heroData from '../../data/hero3Content.json';

const hero3 = () => {
  const [lang, setLang] = useState('en');
  const [slides, setSlides] = useState([]);

  const loadLanguageContent = () => {
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(currentLang);
    const langContent = heroData[currentLang];
    setSlides(langContent?.slides || []);
  };

  useEffect(() => {
    loadLanguageContent();
    window.addEventListener('languageChange', loadLanguageContent);
    return () => window.removeEventListener('languageChange', loadLanguageContent);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: false,
    cssEase: 'linear',
    
  };

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="position-relative w-100" style={{ height: '100vh' }}>
              <Image
                src={slide.image}
                alt={slide.alt || `Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="d-block w-100"
                priority={index === 0}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-end">
                <div className="container text-white pb-5">
                  <div className="row">
                    <div className="col-md-8">
                      <p className="text-warning fw-bold mb-2">{slide.tagline}</p>
                      <h1 className="display-4 fw-bold text-warning ">
                        {slide.title}{' '}
                        <span className="text-warning">{slide.highlight}</span>
                      </h1>
                      <div className="mt-4 d-flex gap-4 align-items-center flex-wrap">
                        <Link href="/about" className="btn btn-warning btn-lg">
                          {slide.buttonText}
                        </Link>
                        <div className="d-flex align-items-center gap-2 bg-white text-warning p-3 rounded shadow">
                          <i className="flaticon-phone fs-3 text-warning" />
                          <div>
                            <h6 className="mb-0">{slide.phone?.title}</h6>
                            <small>{slide.phone?.number}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default hero3;
