import React, { useState, useEffect } from 'react';
import tabsec from '../../data/tabsection.json';

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [lang, setLang] = useState('en');
  const [data, setData] = useState(tabsec['en']);

  useEffect(() => {
    const selectedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(selectedLang);
    setData(tabsec[selectedLang]);

    const handleLanguageChange = () => {
      const updatedLang = localStorage.getItem('selectedLanguage') || 'en';
      setLang(updatedLang);
      setData(tabsec[updatedLang]);
    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-7 col-9">
          <div className="about-tab">
            <div className="tab d-flex flex-wrap mb-3">
              {data.tabs.map((tabLabel, index) => (
                <button
                  key={index}
                  className={`tablinks btn me-2 mb-2 ${activeTab === index ? 'active btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tabLabel}
                </button>
              ))}
            </div>

            {data.tabContent.map((content, index) => (
              <div key={index} className={`tabcontent ${activeTab === index ? 'd-block' : 'd-none'}`}>
                <div className="tab-wrap">
                  <div className="right">
                    <p>{content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-5 col-3">
          <img
            src="/images/about/visual.jpg"
            alt="About visual"
            className="img-fluid initiative-image "
          />
        </div>
      </div>
    </div>
  );
};

export default TabSection;