import React, { Fragment, useEffect, useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import Navbar from "../../components/NavbarS3/NavbarS3";
import PageTitle from "../../components/pagetitle/PageTitle";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "/public/images/logo-2.png";
import peyimg1 from "/public/images/checkout/img-1.png";
import peyimg2 from "/public/images/checkout/img-2.png";
import peyimg3 from "/public/images/checkout/img-3.png";
import peyimg4 from "/public/images/checkout/img-4.png";
import qrImage from "/public/images/checkout/qr.jpeg";
import Image from "next/image";

import formLabels from "../../data/donationFormLabels.json";
import pageTitles from "../../data/pageTitles.json";
import paymentMethods from "../../data/paymentMethods.json";
import accountDetails from "../../data/accountDetails.json";

const DonatePage = () => {
  const [formData, setFormData] = useState({
    donationAmount: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    note: "",
    cardHolderName: "",
    cardNumber: "",
    cvv: "",
    expiryDate: "",
    accountName: "",
    accountNumber: "",
    bankName: "",
    ifsc: "",
    paymentMethod: "card",
  });

  const [lang, setLang] = useState("en");
  const [formText, setFormText] = useState(formLabels.en || {});
  const [titleText, setTitleText] = useState(pageTitles.en || {});
  const [accountText, setAccountText] = useState(accountDetails.en || {});
  const [currentPaymentMethods, setCurrentPaymentMethods] = useState(
    Array.isArray(paymentMethods.en) ? paymentMethods.en : []
  );

  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();

  useEffect(() => {
    const storedLang = localStorage.getItem("selectedLanguage") || "en";
    updateLanguage(storedLang);

    const handleLangChange = () => {
      const newLang = localStorage.getItem("selectedLanguage") || "en";
      updateLanguage(newLang);
    };

    window.addEventListener("languageChange", handleLangChange);
    return () => window.removeEventListener("languageChange", handleLangChange);
  }, []);

  const updateLanguage = (language) => {
    setLang(language);

    setFormText(formLabels[language] || formLabels.en || {});
    setTitleText(pageTitles[language] || pageTitles.en || {});
    setAccountText(accountDetails[language] || accountDetails.en || {});

    const fallbackMethods = Array.isArray(paymentMethods.en)
      ? paymentMethods.en
      : [];
    const methods = Array.isArray(paymentMethods[language])
      ? paymentMethods[language]
      : fallbackMethods;
    setCurrentPaymentMethods(methods);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validator.current.showMessages();
    forceUpdate({});
  };

  const handlePaymentMethodChange = (e) => {
    setFormData((prev) => ({ ...prev, paymentMethod: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      console.log("Submitted data:", formData);
      validator.current.hideMessages();
    } else {
      validator.current.showMessages();
      forceUpdate({});
    }
  };

  return (
    <Fragment>
      <Navbar hclass="wpo-site-header" Logo={Logo} />
      <PageTitle
        pageTitle={titleText.donatePageTitle || ""}
        pagesub={titleText.donatePageSub || ""}
      />

      <div className="donation-page-area section-padding">
        <div className="container" style={{ overflowX: "hidden" }}>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-12 mx-auto">
              <div className="donate-header text-center mb-4">
                <h2>{formText.donationTitle || ""}</h2>
              </div>

              <form onSubmit={handleSubmit} className="donation-form">
                {/* Donation Amount */}
                <div className="mb-4">
                  <h2>{formText.yourDonation || ""}</h2>
                  <input
                    type="text"
                    className="form-control"
                    name="donationAmount"
                    value={formData.donationAmount}
                    onChange={handleInputChange}
                    placeholder={formText.donationAmount || ""}
                  />
                  {validator.current.message(
                    "donationAmount",
                    formData.donationAmount,
                    "required|numeric"
                  )}
                </div>

                {/* Donor Details */}
                <div className="mb-4">
                  <h2>{formText.details || ""}</h2>
                  <div className="row">
                    {["firstName", "lastName", "email", "address"].map(
                      (field, i) => (
                        <div
                          key={i}
                          className="col-md-6 col-12 form-group mb-3"
                        >
                          <input
                            type={field === "email" ? "email" : "text"}
                            name={field}
                            value={formData[field]}
                            onChange={handleInputChange}
                            placeholder={formText[field] || ""}
                            className="form-control"
                          />
                          {validator.current.message(
                            field,
                            formData[field],
                            field === "email"
                              ? "required|email"
                              : "required"
                          )}
                        </div>
                      )
                    )}
                    <div className="col-12 form-group mb-3">
                      <textarea
                        rows="4"
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                        placeholder={formText.note || ""}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-4">
                  <h2>{formText.choosePayment || ""}</h2>
                  <div className="d-flex gap-3 mb-3 flex-wrap">
                    {currentPaymentMethods.map((method) => (
                      <div key={method.id}>
                        <input
                          type="radio"
                          id={method.id}
                          name="payment"
                          value={method.id}
                          checked={formData.paymentMethod === method.id}
                          onChange={handlePaymentMethodChange}
                        />
                        <label htmlFor={method.id} className="ms-2">
                          {method.label}
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Card Payment */}
                  {formData.paymentMethod === "card" && (
                    <div>
                      <ul className="list-unstyled d-flex overflow-auto gap-3 mb-3">
                        {[peyimg1, peyimg2, peyimg3, peyimg4].map((img, i) => (
                          <li key={i} style={{ flex: "0 0 auto" }}>
                            <Image
                              src={img}
                              alt="paymethod"
                              width={50}
                              height={30}
                            />
                          </li>
                        ))}
                      </ul>
                      <div className="row">
                        {["cardHolderName", "cardNumber", "cvv", "expiryDate"].map(
                          (field, i) => (
                            <div
                              key={i}
                              className="col-md-6 col-12 form-group mb-3"
                            >
                              <label>{formText[field] || ""}</label>
                              <input
                                type="text"
                                name={field}
                                value={formData[field]}
                                onChange={handleInputChange}
                                className="form-control"
                              />
                              {validator.current.message(
                                field,
                                formData[field],
                                field === "cardNumber" || field === "cvv"
                                  ? "required|numeric"
                                  : "required"
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* Account Payment */}
                  {formData.paymentMethod === "account" && (
                    <div>
                      {/* Trust Account Info */}
                      <div className="trust-account-info mb-3 p-3 border rounded">
                        <h4>{formText.trustAccountDetails || "Trust Account Details"}</h4>
                        <p><strong>{formText.accountName || "Account Name"}:</strong> {accountText.accountName}</p>
                        <p><strong>{formText.accountNumber || "Account Number"}:</strong> {accountText.accountNumber}</p>
                        <p><strong>{formText.bankName || "Bank Name"}:</strong> {accountText.bankName}</p>
                        <p><strong>{formText.ifsc || "IFSC Code"}:</strong> {accountText.ifsc}</p>
                      </div>

                      {/* Donor's Account Fields */}
                      {/* <div className="row">
                        {["accountName", "accountNumber", "bankName", "ifsc"].map(
                          (field, i) => (
                            <div
                              key={i}
                              className="col-md-6 col-12 form-group mb-3"
                            >
                              <label>{formText[field] || ""}</label>
                              <input
                                type="text"
                                name={field}
                                value={formData[field]}
                                onChange={handleInputChange}
                                className="form-control"
                              />
                              {validator.current.message(
                                field,
                                formData[field],
                                "required"
                              )}
                            </div>
                          )
                        )}
                      </div> */}
                    </div>
                  )}

                  {/* QR Code Payment */}
                  {formData.paymentMethod === "qr" && (
                    <div className="text-center">
                      <p>{formText.scanQr || ""}</p>
                      <Image
                        src={qrImage}
                        alt="QR Code"
                        width={200}
                        height={200}
                      />
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <button type="submit" className="theme-btn submit-btn">
                    {formText.donateNow || ""}
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

export default DonatePage;
