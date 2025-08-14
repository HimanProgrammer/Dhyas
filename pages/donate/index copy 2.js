// pages/donate.js
import React, { Fragment, useEffect, useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import Image from "next/image";
import Script from "next/script";

// Data (adjust import paths to your project structure)
import formLabels from "../data/donationFormLabels.json";
import pageTitles from "../data/pageTitles.json";
import paymentMethods from "../data/paymentMethods.json";
import accountDetails from "../data/accountDetails.json";

// Static assets
import qrImage from "/public/images/checkout/qr.jpeg";
import Logo from "/public/images/logo-2.png";

const ACTIVE_PROVIDER = process.env.NEXT_PUBLIC_ACTIVE_PROVIDER || "razorpay";

export default function DonatePage() {
  const [formData, setFormData] = useState({
    donationAmount: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    note: "",
    // optional reconciliation fields for bank transfer
    accountName: "",
    accountNumber: "",
    bankName: "",
    ifsc: "",
    paymentMethod: "razorpay", // default to online gateway
  });

  const [lang, setLang] = useState("en");
  const [formText, setFormText] = useState(formLabels.en || {});
  const [titleText, setTitleText] = useState(pageTitles.en || {});
  const [accountText, setAccountText] = useState(accountDetails.en || {});
  const [currentPaymentMethods, setCurrentPaymentMethods] = useState(
    Array.isArray(paymentMethods.en) ? paymentMethods.en : []
  );

  // SDK readiness states
  const [rzpReady, setRzpReady] = useState(false);
  const [cfReady, setCfReady] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();

  // Load payment SDKs conditionally
  useEffect(() => {
    if (ACTIVE_PROVIDER === "razorpay") {
      const id = "razorpay-checkout-js";
      if (!document.getElementById(id)) {
        const s = document.createElement("script");
        s.id = id;
        s.src = "https://checkout.razorpay.com/v1/checkout.js";
        s.async = true;
        s.onload = () => setRzpReady(true);
        s.onerror = () => setRzpReady(false);
        document.body.appendChild(s);
      } else {
        setRzpReady(true);
      }
    } else if (ACTIVE_PROVIDER === "cashfree") {
      const id = "cashfree-pg-js";
      if (!document.getElementById(id)) {
        const s = document.createElement("script");
        // Use prod SDK in production. For sandbox, use sdk.cashfree.com/js/ui/2.0.0/cashfree.sandbox.js
        s.id = id;
        s.src = "https://sdk.cashfree.com/js/ui/2.0.0/cashfree.js";
        s.async = true;
        s.onload = () => setCfReady(true);
        s.onerror = () => setCfReady(false);
        document.body.appendChild(s);
      } else {
        setCfReady(true);
      }
    }
  }, []);

  // Language boot
  useEffect(() => {
    const storedLang = typeof window !== "undefined"
      ? localStorage.getItem("selectedLanguage") || "en"
      : "en";
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

    const fallbackMethods = Array.isArray(paymentMethods.en) ? paymentMethods.en : [];
    const methods = Array.isArray(paymentMethods[language]) ? paymentMethods[language] : fallbackMethods;
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

  // ---- Online payment flows ----
  const startRazorpayFlow = async () => {
    if (!rzpReady) {
      alert("Secure payment module is loading. Please try again.");
      return;
    }
    try {
      setSubmitting(true);

      // 1) Create order on server
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Math.round(Number(formData.donationAmount || 0) * 100), // in paise
          currency: "INR",
          donorName: `${formData.firstName} ${formData.lastName}`.trim(),
          donorEmail: formData.email,
          donorAddress: formData.address,
          note: formData.note,
        }),
      });
      if (!res.ok) throw new Error("Failed to create Razorpay order");
      const { order } = await res.json();

      // 2) Open checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: titleText?.donatePageTitle || "Donation",
        description: "Donation Payment",
        image: "/images/logo-2.png",
        order_id: order.id,
        handler: async (response) => {
          // 3) Verify signature on server
          const vRes = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const vJson = await vRes.json();
          if (vRes.ok && vJson?.verified) {
            alert("Payment successful! Thank you.");
          } else {
            alert("Payment captured but verification failed. We’ll review and update you.");
          }
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
        },
        notes: {
          donor_name: `${formData.firstName} ${formData.lastName}`.trim(),
          donor_email: formData.email,
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (resp) => {
        console.warn("Razorpay payment failed:", resp.error);
        alert(resp?.error?.description || "Payment failed. Please try again.");
      });
      rzp.open();
    } catch (e) {
      console.error(e);
      alert("Could not start Razorpay payment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const startCashfreeFlow = async () => {
    // Using Cashfree PG v2 session + Drop-in/redirect. Requires server to create a session.
    try {
      setSubmitting(true);
      // 1) Create Cashfree session on server
      const res = await fetch("/api/cashfree/create-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Number(formData.donationAmount || 0),
          currency: "INR",
          customer: {
            customer_id: `${Date.now()}_${Math.random().toString(36).slice(2)}`,
            customer_email: formData.email,
            customer_phone: "", // optional
            customer_name: `${formData.firstName} ${formData.lastName}`.trim(),
          },
          notes: { note: formData.note || "" },
        }),
      });
      if (!res.ok) throw new Error("Failed to create Cashfree session");
      const data = await res.json();

      // If using Drop-in SDK:
      if (typeof window !== "undefined" && window.Cashfree && cfReady && data?.payment_session_id) {
        const cashfree = window.Cashfree(data?.mode || { mode: process.env.NEXT_PUBLIC_CASHFREE_MODE || "production" });
        await cashfree.initialiseDropin(document.getElementById("cashfree-dropin"), {
          paymentSessionId: data.payment_session_id,
          redirectTarget: "_self",
          // onSuccess/onFailure are not required; use webhook + status check if needed.
        });
        // The Drop-in will render a UI. If you prefer redirect-only, use paymentLink below.
      } else if (data?.payment_link) {
        // Fallback: open hosted payment link (Payment Links flow)
        window.location.href = data.payment_link;
      } else {
        alert("Payment session created, but no UI method available.");
      }
    } catch (e) {
      console.error(e);
      alert("Could not start Cashfree payment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      if (formData.paymentMethod === "razorpay" || formData.paymentMethod === "card") {
        if (ACTIVE_PROVIDER !== "razorpay") {
          alert("Online payments are currently configured for Cashfree. Switch provider to Razorpay to use this option.");
          return;
        }
        if (!formData.donationAmount) {
          alert("Please enter a donation amount.");
          return;
        }
        startRazorpayFlow();
        return;
      }

      if (formData.paymentMethod === "cashfree") {
        if (ACTIVE_PROVIDER !== "cashfree") {
          alert("Online payments are currently configured for Razorpay. Switch provider to Cashfree to use this option.");
          return;
        }
        if (!formData.donationAmount) {
          alert("Please enter a donation amount.");
          return;
        }
        startCashfreeFlow();
        return;
      }

      // Account / QR flows
      console.log("Form submitted for non-gateway flow:", formData);
      validator.current.hideMessages();
      alert("For Bank Transfer or QR, please use the shown details to complete payment. You’ll receive a receipt once we reconcile.");
    } else {
      validator.current.showMessages();
      forceUpdate({});
    }
  };

  return (
    <Fragment>
      <div className="donation-page-area section-padding">
        <div className="container" style={{ overflowX: "hidden" }}>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-12 mx-auto">
              <div className="donate-header text-center mb-4">
                <Image src={Logo} alt="logo" width={140} height={40} />
                <h2>{titleText.donatePageTitle || "Donate"}</h2>
              </div>

              <form onSubmit={handleSubmit} className="donation-form">
                {/* Amount */}
                <div className="mb-4">
                  <h3>{formText.yourDonation || "Your Donation"}</h3>
                  <input
                    type="text"
                    className="form-control"
                    name="donationAmount"
                    value={formData.donationAmount}
                    onChange={handleInputChange}
                    placeholder={formText.donationAmount || "Amount (INR)"}
                  />
                  {validator.current.message("donationAmount", formData.donationAmount, "required|numeric")}
                </div>

                {/* Donor Details */}
                <div className="mb-4">
                  <h3>{formText.details || "Details"}</h3>
                  <div className="row">
                    {["firstName", "lastName", "email", "address"].map((field, i) => (
                      <div key={i} className="col-md-6 col-12 form-group mb-3">
                        <input
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          value={formData[field]}
                          onChange={handleInputChange}
                          placeholder={formText[field] || field}
                          className="form-control"
                        />
                        {validator.current.message(
                          field,
                          formData[field],
                          field === "email" ? "required|email" : "required"
                        )}
                      </div>
                    ))}
                    <div className="col-12 form-group mb-3">
                      <textarea
                        rows="3"
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                        placeholder={formText.note || "Note (optional)"}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-4">
                  <h3>{formText.choosePayment || "Choose Payment Method"}</h3>
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

                  {/* Gateway blocks */}
                  {(formData.paymentMethod === "razorpay" || formData.paymentMethod === "card") && (
                    <div className="mb-3 p-3 border rounded">
                      <h4>Secure Online Payment (Razorpay)</h4>
                      <p className="mb-0">
                        {rzpReady && ACTIVE_PROVIDER === "razorpay"
                          ? "Click Donate to open the payment window."
                          : "Loading secure module or provider disabled in config."}
                      </p>
                    </div>
                  )}

                  {formData.paymentMethod === "cashfree" && (
                    <div className="mb-3 p-3 border rounded">
                      <h4>Secure Online Payment (Cashfree)</h4>
                      <p className="mb-2">
                        {cfReady && ACTIVE_PROVIDER === "cashfree"
                          ? "Click Donate to open the payment window (or see embedded UI below)."
                          : "Loading secure module or provider disabled in config."}
                      </p>
                      {/* Optional: Drop-in target (renders UI when using Drop-in) */}
                      <div id="cashfree-dropin"></div>
                    </div>
                  )}

                  {/* Account Transfer */}
                  {formData.paymentMethod === "account" && (
                    <div>
                      <div className="trust-account-info mb-3 p-3 border rounded">
                        <h4>{formText.trustAccountDetails || "Trust Account Details"}</h4>
                        <p><strong>{formText.accountName || "Account Name"}:</strong> {accountText.accountName}</p>
                        <p><strong>{formText.accountNumber || "Account Number"}:</strong> {accountText.accountNumber}</p>
                        <p><strong>{formText.bankName || "Bank Name"}:</strong> {accountText.bankName}</p>
                        <p><strong>{formText.ifsc || "IFSC Code"}:</strong> {accountText.ifsc}</p>
                      </div>

                      <div className="row">
                        {["accountName", "accountNumber", "bankName", "ifsc"].map((field, i) => (
                          <div key={i} className="col-md-6 col-12 form-group mb-3">
                            <label>{formText[field] || field}</label>
                            <input
                              type="text"
                              name={field}
                              value={formData[field]}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                            {validator.current.message(field, formData[field], "required")}
                          </div>
                        ))}
                      </div>
                      <small className="text-muted">
                        Please complete the bank transfer using the above details. We’ll confirm via email after reconciliation or webhook credit notification.
                      </small>
                    </div>
                  )}

                  {/* QR */}
                  {formData.paymentMethod === "qr" && (
                    <div className="text-center">
                      <p>{formText.scanQr || "Scan the QR to pay"}</p>
                      <Image src={qrImage} alt="QR Code" width={200} height={200} />
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <button type="submit" className="theme-btn submit-btn" disabled={submitting}>
                    {submitting ? "Processing..." : (formText.donateNow || "Donate Now")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* If you want, you can also add <Script> tags; we injected scripts manually above */}
      {ACTIVE_PROVIDER === "razorpay" && (
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      )}
      {ACTIVE_PROVIDER === "cashfree" && (
        <Script src="https://sdk.cashfree.com/js/ui/2.0.0/cashfree.js" strategy="lazyOnload" />
      )}
    </Fragment>
  );
}
