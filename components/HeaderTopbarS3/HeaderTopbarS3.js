import React from 'react';
import Link from 'next/link';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const HeaderTopbarS3 = () => {
    return (
        <div className="topbar fixed-top">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <ul className="contact-info">
                            <li>
                                <Link onClick={ClickHandler} href="tel:+887869587496">
                                    <i className="flaticon-maps-and-flags"></i><span>734 H, Bryan Burlington, NC
                                        27215</span>
                                </Link>
                            </li>
                            <li>
                                <i className="ti-email"></i><span>support@aidUs.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="contact-into">
                            <div className="pryment-selector">
                                <select>
                                    <option value="usd">USD</option>
                                    <option value="aud">AUD</option>
                                </select>
                            </div>
                            <LanguageSelector/>
                            <ul className="social-media">
                                <li><Link onClick={ClickHandler} href="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="#"><i className="flaticon-linkedin"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="#"><i className="flaticon-camera"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="#"><i className="flaticon-vimeo"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopbarS3;