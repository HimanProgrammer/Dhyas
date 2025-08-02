import React, { useState } from 'react';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);  

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const accordionItems = [
        {
            question: "How to learn digital marketing?",
            answer: "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signifer umque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
        },
        {
            question: "Can I use the demos made by Ewebot?",
            answer: "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signifer umque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
        },
        {
            question: "Why didn’t you showcase my submission?",
            answer: "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signifer umque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
        },
    ];

    return (
        <div className="accordion">
            {accordionItems.map((item, index) => (
                <div key={index} className={`accordion-item ${index === activeIndex ? 'active' : ''}`}>
                    <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                        {item.question}
                    </button>
                    <div className="accordion-content" style={{ display: index === activeIndex ? 'block' : 'none' }}>
                        <p>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
