import React, { useEffect, useState } from 'react';

const LanguageSelector = () => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(storedLang);
    // Inform all components on initial load
    window.dispatchEvent(new Event('languageChange'));
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'mr' : 'en';
    setLang(newLang);
    localStorage.setItem('selectedLanguage', newLang);
    window.dispatchEvent(new Event('languageChange'));
  };

  return (
    <div className="text-end p-3 bg-light">
      <button onClick={toggleLanguage} className="btn btn-outline-primary btn-sm">
        {lang === 'en' ? 'English' : 'मराठी'}
      </button>
    </div>
  );
};

export default LanguageSelector;
