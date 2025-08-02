import React, { useState } from 'react';

import shape2 from '/public/images/about/shape2.svg'
import shape3 from '/public/images/cta-shap-3.svg'
import Image from 'next/image';

const DonateSection = () => {
    const [selectedAmount, setSelectedAmount] = useState('');


    const handleAmountClick = (amount) => {
        setSelectedAmount(amount);
    };

    return (
        <section className="donate-section section-padding">
            <div className="container">
                <div className="donation-from">
                    <div className="text">
                        <h2>We are always open for children</h2>
                        <h3>Support for eating funds for hungry people</h3>
                    </div>
                    <div className="Support">
                        <span>Donate Now <span>24/7</span> Support</span>
                    </div>
                    <div className="progress-wrap">
                        <ul>
                            <li>
                                <span>$7,560.00</span>
                                <span className="title">Raised</span>
                            </li>
                            <li>
                                <span>$10,000.00</span>
                                <span className="title">Goal</span>
                            </li>
                        </ul>
                        <div className="progress-item">
                            <div className="progress">
                                <div className="bar" style={{ width: '50%' }}></div>
                            </div>
                            <span className="cssProgress-label">50%</span>
                        </div>
                    </div>
                    <div className="donate-amount">
                        {[100, 200, 300, 400, 600].map(amount => (
                            <button
                                key={amount}
                                className={`amount-btn ${selectedAmount === `$${amount}` ? 'active' : ''}`}
                                onClick={() => handleAmountClick(`$${amount}`)}
                            >
                                ${amount}
                            </button>
                        ))}
                        <input
                            type="text"
                            className="addAmount-value"
                            placeholder="$Custom"
                            value={selectedAmount}
                            onChange={(e) => setSelectedAmount(e.target.value)} 
                        />
                    </div>
                    <div className="donate-now">
                        <div className="donation-one__btn-box">
                            <a href="#" className="donation-one__btn theme-btn">Donate Now <i className="flaticon-heart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <Image src={shape2} alt="" />
            </div>
            <div className="right-text">
                <h1>Donate Now</h1>
                <div className="shape-2">
                    <Image src={shape3} alt="" />
                </div>
            </div>
        </section>
    );
};

export default DonateSection;
