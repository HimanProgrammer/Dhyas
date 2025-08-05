

import { useState, useEffect } from 'react';
import tabData from '../../data/tabsection.json';

export default function BoxTabs() {
  const [lang, setLang] = useState('en');
  const [activeIndex, setActiveIndex] = useState(0);
  const [tabs, setTabs] = useState(tabData['en']);

  useEffect(() => {
    const storedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(storedLang);
    setTabs(tabData[storedLang]);

    const handleLangChange = () => {
      const updated = localStorage.getItem('selectedLanguage') || 'en';
      setLang(updated);
      setTabs(tabData[updated]);
    };

    window.addEventListener('languageChange', handleLangChange);
    return () => window.removeEventListener('languageChange', handleLangChange);
  }, []);

  return (

        <section className=".about-section-s41">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <div className="box-tabs-container">
                <ul className="tabs">
                  {tabs.map((tab, index) => (
                    <li
                      key={index}
                      className={`tab ${index === activeIndex ? 'active' : ''}`}
                      onClick={() => setActiveIndex(index)}
                    >
                      {tab.title}
                    </li>
                  ))}
                </ul>

                <div className="tab-content">
                  <p>{tabs[activeIndex].content}</p>
                </div>
              </div>
              </div>
    
              {/* <div className="col-md-5 col-9">
                 <img
                  src="/images/about/visual.jpg"
                  alt="About visual"
                  className="initiative-image "
                />
              </div> */}
            </div>
          </div>
    
        </section>    
  );
}
