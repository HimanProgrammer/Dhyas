import React, { useState } from 'react';

const DonationForm = () => {
    const [selectedAmount, setSelectedAmount] = useState(100);
    const [customAmount, setCustomAmount] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        address: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleAmountClick = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount(false);
    };

    const handleCustomAmountClick = () => {
        setCustomAmount(true);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        if (!formData.email) {
            newErrors.email = 'Email is required.';
            isValid = false;
        }

        if (!formData.phone) {
            newErrors.phone = 'Phone number is required.';
            isValid = false;
        } else if (!/^[0-9]{11}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid 11-digit phone number.';
            isValid = false;
        }

        if (!formData.address) {
            newErrors.address = 'Address is required.';
            isValid = false;
        }

        if (!formData.message) {
            newErrors.message = 'Message is required.';
            isValid = false;
        }

        if (!paymentMethod) {
            newErrors.paymentMethod = 'Please select a payment method.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            setSuccessMessage('Donation submitted successfully!');
            setTimeout(() => {
              
            }, 2000);
        }
    };

    return (
        <div className="donation-container">
            <div className="selected-amount">
                <span className="currency">$</span>
                <input
                    type="number"
                    className="amount-input"
                    value={customAmount ? selectedAmount : selectedAmount}
                    onChange={(e) => setSelectedAmount(e.target.value)}
                    readOnly={!customAmount}
                />
            </div>

            <div className="amounts">
                <div className={`amount ${selectedAmount === 20 ? 'selected' : ''}`} onClick={() => handleAmountClick(20)}>$20</div>
                <div className={`amount ${selectedAmount === 50 ? 'selected' : ''}`} onClick={() => handleAmountClick(50)}>$50</div>
                <div className={`amount ${selectedAmount === 100 ? 'selected' : ''}`} onClick={() => handleAmountClick(100)}>$100</div>
                <div className={`amount ${selectedAmount === 150 ? 'selected' : ''}`} onClick={() => handleAmountClick(150)}>$150</div>
                <div className="amount custom" onClick={handleCustomAmountClick}>Custom</div>
            </div>

            <div className="payment-methods">
                <h5>Select Payment Method</h5>
                <div className="custom-radio-wrap">
                    <label className="custom-radio">
                        <input type="radio" name="paymentMethod" value="test" onChange={handlePaymentMethodChange} />
                        <span className="radio"></span>
                        Test Donation
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="paymentMethod" value="offline" onChange={handlePaymentMethodChange} />
                        <span className="radio"></span>
                        Offline Donation
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="paymentMethod" value="credit" onChange={handlePaymentMethodChange} />
                        <span className="radio"></span>
                        Credit Card
                    </label>
                    {errors.paymentMethod && <div className="error-message">{errors.paymentMethod}</div>}
                </div>
            </div>

            <div className="form-section">
                <h3>Details Information</h3>
                <div className="item">
                    <input type="email" id="email" placeholder="Your email..." value={formData.email} onChange={handleInputChange} />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
                <div className="item">
                    <input type="tel" id="phone" placeholder="Your phone..." value={formData.phone} onChange={handleInputChange} />
                    {errors.phone && <div className="error-message">{errors.phone}</div>}
                </div>
                <div className="item">
                    <input type="text" id="address" placeholder="Your address..." value={formData.address} onChange={handleInputChange} />
                    {errors.address && <div className="error-message">{errors.address}</div>}
                </div>
                <div className="item">
                    <textarea id="message" rows="4" placeholder="Write something..." value={formData.message} onChange={handleInputChange}></textarea>
                    {errors.message && <div className="error-message">{errors.message}</div>}
                </div>
            </div>

            {successMessage && <div className="success-message">{successMessage}</div>}

            <div className="item">
                <button className="theme-btn" onClick={handleSubmit}>Donate Now</button>
            </div>
        </div>
    );
};

export default DonationForm;
