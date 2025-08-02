import React, { useState } from "react";
import Link from "next/link";

const DonationComponent = () => {
    const [selectedAmount, setSelectedAmount] = useState("$100");
    const [customAmount, setCustomAmount] = useState("");

    const handleAmountClick = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount(amount);
    };

    const handleCustomAmountChange = (event) => {
        setSelectedAmount(event.target.value);
        setCustomAmount(event.target.value);
    };

    return (
        <div className="progress-wrap">
            <div className="progress-item">
                <div className="progress">
                    <div className="bar" style={{ width: "50%" }}></div>
                </div>
                <span className="cssProgress-label">50%</span>
            </div>
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

            <div className="donate-amount">
                {["$100", "$300.00", "$400.00", "$200.00", "$600.00"].map((amount) => (
                    <button
                        key={amount}
                        className={`amount-btn ${selectedAmount === amount ? "active" : ""}`}
                        onClick={() => handleAmountClick(amount)}
                    >
                        {amount}
                    </button>
                ))}
            </div>

            <div className="donate-now">
                <input
                    type="text"
                    className="addAmount-value"
                    placeholder="$Custom"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                />
                <div className="donation-one__btn-box">
                    <Link href="#" className="donation-one__btn theme-btn">
                        Donate Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonationComponent;
