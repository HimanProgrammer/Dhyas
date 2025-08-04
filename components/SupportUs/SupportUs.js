import React, { useEffect, useState } from 'react';
import supportData from '../../data/supportus.json';

const SupportUs = () => {
  const [lang, setLang] = useState('en');
  const [content, setContent] = useState(null);

  useEffect(() => {
    const selectedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(selectedLang);
    const langContent = supportData[selectedLang];
    setContent(langContent || supportData['en']); // fallback to English
  }, []);

  if (!content) return null; // or a loading spinner

  return (
    <section className="support-section">
      <div className="support-overlay">
        <div className="support-content">
          <h2>{content.title}</h2>
          <p>{content.description}</p>
          <div className="support-buttons">
            <button className="btn-donate">{content.donateLabel}</button>
            <button className="btn-volunteer">{content.volunteerLabel}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportUs;
