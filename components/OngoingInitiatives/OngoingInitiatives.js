import React, { useEffect, useState } from 'react';
import data from '../../data/ongoingInitiatives.json'; // Adjust the path if needed

const OngoingInitiatives = () => {
  const [lang, setLang] = useState('en');
  const [content, setContent] = useState(data['en']); // Default fallback

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
    <section className="section-padding ongoing-initiatives">
      <div className="container">
        <h2 className="section-title">{content.title}</h2>
        <div className="initiatives-list">
          {content.initiatives.map((item, index) => (
            <div className="initiative-item" key={index}>
              {item.image && (
                <div className="initiative-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>
              )}
              <div className="initiative-text">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingInitiatives;
