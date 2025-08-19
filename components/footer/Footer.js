import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import footerData from "../../data/footerData.json";
import footerIcons from "../../data/footerIcons.json";
import Logo from "/public/images/logo-2.png";

// ✅ Import ALL needed icons from react-icons/fa
import * as FaIcons from "react-icons/fa";

// Utility function to resolve icon name from JSON
const getIcon = (iconName) => {
  const IconComponent = FaIcons[iconName] || FaIcons.FaRegQuestionCircle;
  return (
    <IconComponent
      className="footer-icon"
      aria-hidden="true"
    />
  );
};

const Footer = () => {
  const [lang, setLang] = useState("en");
  const [content, setContent] = useState(footerData.en);

  useEffect(() => {
    const selectedLang = localStorage.getItem("selectedLanguage") || "en";
    setLang(selectedLang);
    setContent(footerData[selectedLang] || footerData.en);

    const handleLanguageChange = () => {
      const updatedLang = localStorage.getItem("selectedLanguage") || "en";
      setLang(updatedLang);
      setContent(footerData[updatedLang] || footerData.en);
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () =>
      window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  return (
    <footer className="wpo-site-footer bg-gray-50 py-10">
      <div className="container">
        <div className="row text-dark">
          {/* Logo + Location Info */}
          <div className="col col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="widget about-widget">
              <div className="logo w-50 mb-3">
                <Image src={Logo} alt="footer logo" />
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  {getIcon(footerIcons.locations.address)}
                  <h5 className="font-semibold">{content?.locations?.address}</h5>
                </li>
                <li className="flex items-center gap-3">
                  {getIcon(footerIcons.locations.email)}
                  <h5 className="!lowercase" >{content?.locations?.email}</h5>
                </li>
                <li className="flex items-center gap-3">
                  {getIcon(footerIcons.locations.phone)}
                  <h5>{content?.locations?.phone}</h5>
                </li>
              </ul>
            </div>
          </div>

          {/* Services List */}
          <div className="col col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="widget link-widget">
              <div className="widget-title mb-2">
                <h3>{content?.services?.title}</h3>
              </div>
              <ul className="space-y-1">
                {content?.services?.links?.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="widget link-widget">
              <div className="widget-title mb-2">
                <h3>{content?.usefulLinks?.title}</h3>
              </div>
              <ul className="space-y-1">
                {content?.usefulLinks?.links?.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="widget wpo-contact-widget">
              <div className="widget-title flex items-center gap-2 mb-2">
                {/* {getIcon(footerIcons.newsletter.title)} */}
                <h3>{content?.newsletter?.title}</h3>
              </div>
              <p className="mb-3">{content?.newsletter?.description}</p>
              <form className="newsletter-form flex">
                <input
                  type="email"
                  placeholder={content?.newsletter?.placeholder || "Your email"}
                  className="border p-2 flex-grow rounded-l"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-dark px-3  flex items-center justify-center rounded-r">
                  {getIcon(footerIcons.newsletter.button)}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-6">
          <div className="col col-xs-12 text-center">
            <p className="copyright-text text-sm text-gray-500">
              {content?.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
