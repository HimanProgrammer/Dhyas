'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { connect } from 'react-redux';

import HeaderTopbarS3 from '../HeaderTopbarS3/HeaderTopbarS3';
import MobileMenu from '../MobileMenu/MobileMenu';
import { removeFromCart } from "../../store/actions/action";
import { totalPrice } from "../../utils";

import Logo from '/public/images/logo-2.png';
import headerLinks from '../../data/headerLinks.json';

const HeaderS3 = ({ carts, hclass }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [lang, setLang] = useState('en');
  const [labels, setLabels] = useState(headerLinks.en);

  useEffect(() => {
    const storedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(storedLang);
    setLabels(headerLinks[storedLang]);

    const handleLangChange = () => {
      const newLang = localStorage.getItem('selectedLanguage') || 'en';
      setLang(newLang);
      setLabels(headerLinks[newLang]);
    };

    window.addEventListener('languageChange', handleLangChange);
    return () => window.removeEventListener('languageChange', handleLangChange);
  }, []);

  const handleClick = () => window.scrollTo(10, 0);
  const handleSubmit = (e) => e.preventDefault();

  return (
    <header id="header" className="header-s3">
      <HeaderTopbarS3 />

      <div className={hclass || ''}>
        <nav className="navigation navbar mt-60 navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              

              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <Link href="/" onClick={handleClick} className="navbar-brand">
                    <Image src={Logo} alt="logo" />
                  </Link>
                </div>
              </div>

            

              <div className="col-lg-6 col-md-1 col-1">
                <div className="collapse navbar-collapse navigation-holder" id="navbar">
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li><Link href="/" onClick={handleClick}>{labels.home}</Link></li>
                    <li><Link href="/about" onClick={handleClick}>{labels.about}</Link></li>
                    <li><Link href="/donate" onClick={handleClick}>{labels.donate}</Link></li>
                    <li><Link href="/contact" onClick={handleClick}>{labels.contact}</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-2 col-2">
                <div className="header-right">
                  <div className="close-form">
                    <Link href="/donate" onClick={handleClick} className="theme-btn">{labels.donateNow}</Link>
                  </div>

                  <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                    <MobileMenu />
                  </div>
                  <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button onClick={() => setMenuActive(!menuActive)} className="search-toggle-btn">
                        <i className={`fi ${menuActive ? 'ti-close' : 'ti-search'}`}></i>
                      </button>
                      <div className={`header-search-form ${menuActive ? 'header-search-content-toggle' : ''}`}>
                        <form onSubmit={handleSubmit}>
                          <div>
                            <input type="text" className="form-control" placeholder="Search here..." />
                            <button type="submit"><i className="fi flaticon-magnifying-glass"></i></button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  carts: state.cartList.cart
});

export default connect(mapStateToProps, { removeFromCart })(HeaderS3);
