import React, { Fragment, useEffect, useRef, useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import Navbar from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.png';
import peyimg1 from '/public/images/checkout/img-1.png';
import peyimg2 from '/public/images/checkout/img-2.png';
import peyimg3 from '/public/images/checkout/img-3.png';
import peyimg4 from '/public/images/checkout/img-4.png';
import Image from 'next/image';
import pageTitles from '../../data/pageTitles.json';
import formLabels from '../../data/donationFormLabels.json';

const DonatePage1 = () => {
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

  const [lang, setLang] = useState('en');
  const [formText, setFormText] = useState(formLabels.en);
  const [titleText, setTitleText] = useState(pageTitles.en);
  const [isCardPayment, setIsCardPayment] = useState(true);

  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();

  useEffect(() => {
    const storedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(storedLang);
    setFormText(formLabels[storedLang] || formLabels.en);
    setTitleText(pageTitles[storedLang] || pageTitles.en);

    const handleLangChange = () => {
      const newLang = localStorage.getItem('selectedLanguage') || 'en';
      setLang(newLang);
      setFormText(formLabels[newLang] || formLabels.en);
      setTitleText(pageTitles[newLang] || pageTitles.en);
    };

    window.addEventListener('languageChange', handleLangChange);
    return () => window.removeEventListener('languageChange', handleLangChange);
  }, []);

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
      console.log('Submitted data:', formData);
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
      <Navbar hclass="wpo-site-header" Logo={Logo} />
      <PageTitle pageTitle={titleText.donatePageTitle || 'Donate'} pagesub={titleText.donatePageSub || 'Donate'} />
      
      <div className="donation-page-area section-padding">
        <div className="container" style={{ overflowX: 'hidden' }}>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-12 mx-auto">
              <div className="donate-header text-center mb-4">
                <h2>{formText.donationTitle}</h2>
              </div>

              <form onSubmit={handleSubmit} className="donation-form">
                {/* Donation Amount */}
                <div className="donations-amount mb-4">
                  <h2>{formText.yourDonation}</h2>
                  <input
                    type="text"
                    className="form-control"
                    name="donationAmount"
                    value={formData.donationAmount}
                    onChange={handleInputChange}
                    placeholder={formText.donationAmount}
                  />
                  {validator.current.message('donationAmount', formData.donationAmount, 'required|numeric')}
                </div>

                {/* Donor Details */}
                <div className="donations-details mb-4">
                  <h2>{formText.details}</h2>
                  <div className="row">
                    {['firstName', 'lastName', 'email', 'address'].map((field, i) => (
                      <div key={i} className="col-md-6 col-12 form-group mb-3">
                        <input
                          type={field === 'email' ? 'email' : 'text'}
                          name={field}
                          value={formData[field]}
                          onChange={handleInputChange}
                          placeholder={formText[field]}
                          className="form-control"
                        />
                        {validator.current.message(field, formData[field], field === 'email' ? 'required|email' : 'required')}
                      </div>
                    ))}
                    <div className="col-12 form-group mb-3">
                      <textarea
                        rows="4"
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                        placeholder={formText.note}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="donations-details donation-payment mb-4">
                  <h2>{formText.choosePayment}</h2>
                  <div className="payment-option mb-3 d-flex gap-3">
                    {['card', 'offline','Account' ].map((method) => (
                      <div key={method}>
                        <input
                          type="radio"
                          id={method}
                          name="payment"
                          value={method}
                          checked={formData.paymentMethod === method}
                          onChange={handlePaymentMethodChange}
                        />
                        <label htmlFor={method} className="ms-2">
                          {formText[
                            method === 'card'
                              ? 'paymentByCard'
                              : method === 'offline'
                              ? 'offlineDonation'
                              : 'accountDonation'
                          ]}
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Card Payment Fields */}
                  {isCardPayment && (
                    <div className="payment-name">
                      <ul className="list-unstyled d-flex overflow-auto gap-3 mb-3">
                        {[peyimg1, peyimg2, peyimg3, peyimg4].map((img, i) => (
                          <li key={i} style={{ flex: '0 0 auto' }}>
                            <input type="radio" id={`pay-${i}`} name="cardType" />
                            <label htmlFor={`pay-${i}`}><Image src={img} alt="paymethod" width={50} height={30} /></label>
                          </li>
                        ))}
                      </ul>

                      <div className="row">
                        {['cardHolderName', 'cardNumber', 'cvv', 'expiryDate'].map((field, i) => (
                          <div key={i} className="col-md-6 col-12 form-group mb-3">
                            <label>{formText[field]}</label>
                            <input
                              type="text"
                              name={field}
                              value={formData[field]}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {validator.current.message(field, formData[field], field === 'cardNumber' || field === 'cvv' ? 'required|numeric' : 'required')}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="submit-area text-center">
                  <button type="submit" className="theme-btn submit-btn">
                    {formText.donateNow}
                  </button>
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

export default DonatePage1;
