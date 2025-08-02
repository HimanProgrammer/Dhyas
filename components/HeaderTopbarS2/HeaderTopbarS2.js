import React from 'react';
import Link from 'next/link';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const HeaderTopbarS2 = () => {
    return (
        <div className="topbar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <ul className="contact-info">
                            <li>
                                <Link href="tel:+887869587496">
                                    <i className="flaticon-phone-1"></i><span>Hot Line: +1 800 123 456 789</span>
                                </Link>
                            </li>
                            <li>
                                <i className="ti-email"></i><span>support@aidUs.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="contact-into">
                            <ul className="social-media">
                                <li><Link href="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
                                <li><Link href="#"><i className="flaticon-linkedin"></i></Link></li>
                                <li><Link href="#"><i className="flaticon-camera"></i></Link></li>
                                <li><Link href="#"><i className="flaticon-vimeo"></i></Link></li>
                            </ul>
                            <div className="pryment-selector">
                                <select>
                                    <option value="usd">USD</option>
                                    <option value="aud">AUD</option>
                                </select>
                            </div>
                            <LanguageSelector />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopbarS2;