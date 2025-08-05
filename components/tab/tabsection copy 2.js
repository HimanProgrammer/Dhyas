'use client';
import { useState } from 'react';
import tabData from '../../data/tabsection.json';

const TabsSection = ({ locale = 'en' }) => {
  const [activeTab, setActiveTab] = useState(0);

  const languageTabs = tabData[locale] || tabData.en;

  return (
    <section className="bg-emerald-800 text-light py-16 px-6 text-center">
      <h2 className="text-4xl font-semibold mb-8">
        {locale === 'mr' ? 'टॅब्स' : 'TABS'}
      </h2>

      <div className="flex justify-center space-x-4 mb-6 flex-wrap">
        {languageTabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`cursor-pointer px-6 py-3 rounded-t-md border ${
              activeTab === index
                ? 'bg-dark text-emerald-800 font-bold'
                : 'border-white text-white hover:bg-dark hover:text-emerald-800'
            } transition duration-300`}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto border-t border-white pt-6 text-left">
        <p>{languageTabs[activeTab]?.content}</p>
      </div>
    </section>
  );
};

export default TabsSection;
