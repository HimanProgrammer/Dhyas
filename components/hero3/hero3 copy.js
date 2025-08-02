import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroData from '../../data/hero3Content.json'; 



const HeroSlider = () => {
  const [lang, setLang] = useState('en');
  const [slides, setSlides] = useState([]);

  const loadLanguageContent = () => {
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(currentLang);
    const langContent = heroData[currentLang];
    setSlides(langContent?.slides || []);
  };

  useEffect(() => {
    loadLanguageContent(); // load initial

    // Update on language switch
    window.addEventListener('languageChange', loadLanguageContent);
    return () => window.removeEventListener('languageChange', loadLanguageContent);
  }, []);

  return (
    <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className="position-relative w-100" style={{ height: '100vh' }}>
              <Image
                src={slide.image}
                alt={slide.alt || `Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="d-block w-100"
                priority={index === 0}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center">
                <div className="container text-white">
                  <div className="row">
                    <div className="col-md-8">
                      <p className="text-warning fw-bold mb-2">{slide.tagline}</p>
                      <h1 className="display-4 fw-bold">
                        {slide.title} <span className="text-warning">{slide.highlight}</span>
                      </h1>
                      <div className="mt-4 d-flex gap-4 align-items-center">
                        <Link href="/about" className="btn btn-warning btn-lg">
                          {slide.buttonText}
                        </Link>
                        <div className="d-flex align-items-center gap-2 bg-white text-dark p-3 rounded shadow">
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
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" />
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
};

export default HeroSlider;
