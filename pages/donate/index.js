import React, { Fragment, useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg';
import peyimg1 from '/public/images/checkout/img-1.png';
import peyimg2 from '/public/images/checkout/img-2.png';
import peyimg3 from '/public/images/checkout/img-3.png';
import peyimg4 from '/public/images/checkout/img-4.png';
import Image from 'next/image';

const DonatePage = () => {
    const [formData, setFormData] = useState({
        donationAmount: '',
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        note: '',
        cardHolderName: '',
        cardNumber: '',
        cvv: '',
        expiryDate: '',
        paymentMethod: 'card',
    });

    const [isCardPayment, setIsCardPayment] = useState(true);
    const validator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validator.current.showMessages();
        forceUpdate({});
    };

    const handlePaymentMethodChange = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, paymentMethod: value });
        setIsCardPayment(value === 'card');
        validator.current.showMessages();
        forceUpdate({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validator.current.allValid()) {
            console.log(formData);
            validator.current.hideMessages();
            setFormData({
                donationAmount: '',
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                note: '',
                cardHolderName: '',
                cardNumber: '',
                cvv: '',
                expiryDate: '',
                paymentMethod: 'card',
            });
        } else {
            validator.current.showMessages();
            forceUpdate({});
        }
    };

    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Donate Now'} />
            <div className="donation-page-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="donate-header">
                                <h2>Make a Donation</h2>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="donations-amount">
                                    <h2>Your Donation</h2>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="donationAmount"
                                        value={formData.donationAmount}
                                        onChange={handleInputChange}
                                        placeholder="Enter Donation Amount"
                                    />
                                    {validator.current.message('donationAmount', formData.donationAmount, 'required|numeric')}
                                </div>
                                <div className="donations-details">
                                    <h2>Details</h2>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                placeholder="First Name"
                                            />
                                            {validator.current.message('firstName', formData.firstName, 'required|alpha')}
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                placeholder="Last Name"
                                            />
                                            {validator.current.message('lastName', formData.lastName, 'required|alpha')}
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Email"
                                            />
                                            {validator.current.message('email', formData.email, 'required|email')}
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                placeholder="Address"
                                            />
                                            {validator.current.message('address', formData.address, 'required')}
                                        </div>
                                        <div className="col-lg-12 col-12 form-group">
                                            <textarea
                                                className="form-control"
                                                name="note"
                                                value={formData.note}
                                                onChange={handleInputChange}
                                                placeholder="Message"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="donations-details donation-payment">
                                    <h2>Choose Your Payment Method</h2>
                                    <div className="payment-area">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="payment-option">
                                                    <div className="payment-select">
                                                        <ul>
                                                            <li className="addToggle">
                                                                <input
                                                                    id="add"
                                                                    type="radio"
                                                                    checked={formData.paymentMethod === 'card'}
                                                                    name="payment"
                                                                    value="card"
                                                                    onChange={handlePaymentMethodChange}
                                                                />
                                                                <label htmlFor="add">Payment By Card</label>
                                                            </li>
                                                            <li className="removeToggle">
                                                                <input
                                                                    id="remove"
                                                                    type="radio"
                                                                    checked={formData.paymentMethod === 'offline'}
                                                                    name="payment"
                                                                    value="offline"
                                                                    onChange={handlePaymentMethodChange}
                                                                />
                                                                <label htmlFor="remove">Offline Donation</label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {isCardPayment && (
                                                        <div className="payment-name">
                                                            <ul>
                                                                <li className="visa">
                                                                    <input id="1" type="radio" name="size" value="visa" />
                                                                    <label htmlFor="1">
                                                                        <Image src={peyimg1} alt="Visa" />
                                                                    </label>
                                                                </li>
                                                                <li className="mas">
                                                                    <input id="2" type="radio" name="size" value="mastercard" />
                                                                    <label htmlFor="2">
                                                                        <Image src={peyimg2} alt="MasterCard" />
                                                                    </label>
                                                                </li>
                                                                <li className="ski">
                                                                    <input id="3" type="radio" name="size" value="discover" />
                                                                    <label htmlFor="3">
                                                                        <Image src={peyimg3} alt="Discover" />
                                                                    </label>
                                                                </li>
                                                                <li className="pay">
                                                                    <input id="4" type="radio" name="size" value="paypal" />
                                                                    <label htmlFor="4">
                                                                        <Image src={peyimg4} alt="PayPal" />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                            <div className="contact-form form-style">
                                                                <div className="row">
                                                                    <div className="col-lg-6 col-md-12 col-12">
                                                                        <label>Card Holder Name</label>
                                                                        <input
                                                                            type="text"
                                                                            name="cardHolderName"
                                                                            value={formData.cardHolderName}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        {validator.current.message('cardHolderName', formData.cardHolderName, 'required')}
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-12 col-12">
                                                                        <label>Card Number</label>
                                                                        <input
                                                                            type="text"
                                                                            name="cardNumber"
                                                                            value={formData.cardNumber}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        {validator.current.message('cardNumber', formData.cardNumber, 'required|numeric')}
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-12 col-12">
                                                                        <label>CVV</label>
                                                                        <input
                                                                            type="text"
                                                                            name="cvv"
                                                                            value={formData.cvv}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        {validator.current.message('cvv', formData.cvv, 'required|numeric')}
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-12 col-12">
                                                                        <label>Expire Date</label>
                                                                        <input
                                                                            type="text"
                                                                            name="expiryDate"
                                                                            value={formData.expiryDate}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        {validator.current.message('expiryDate', formData.expiryDate, 'required')}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="submit-area">
                                    <button type="submit" className="theme-btn submit-btn">Donate Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default DonatePage;
