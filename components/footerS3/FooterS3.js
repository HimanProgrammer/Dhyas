import React, { useState } from 'react'
import Link from 'next/link'
import Logo from '/public/images/logo-2.svg'
import Services from '../../api/Services';

import shape1 from '/public/images/f-shape7.png';
import shape2 from '/public/images/f-shape8.png';
import shape3 from '/public/images/f-shape9.png';
import Image from 'next/image';





const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const FooterS3 = () => {
    const [email, setEmail] = useState('');

    const handleReset = () => {
        setEmail('');
    };

    return (
        <footer className="wpo-site-footer-s3">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <Link onClick={ClickHandler} href="/" className="logo">
                                    <Image src={Logo} alt="" />
                                </Link>
                                <p>The world’s first and largest digital market
                                    for crypto collectibles and non-fungible
                                    (NFTs). Buy</p>
                                <span><i className="flaticon-maps-and-flags"></i>86 Road Broklyn Street, 600
                                    <br/> New York, USA</span>
                                <span><i className="flaticon-mail"></i>needhelp@company.com</span>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget ">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 5).map((service, Sitem) => (
                                        <li key={Sitem}><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget ">
                                <div className="widget-title">
                                    <h3>Useful links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/">Home</Link></li>
                                    <li><Link onClick={ClickHandler} href="/about">about us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/service">service</Link></li>
                                    <li><Link onClick={ClickHandler} href="/blog">blog</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-s2">
                                <div className="widget-title">
                                    <h3>newsletter</h3>
                                </div>
                                <div className="itme">
                                    <div className="icon">
                                        <i className="flaticon-time-left"></i>
                                    </div>
                                    <div className="text">
                                        <h3>Opening Houres</h3>
                                        <span>Mon - Sat(8.00 - 6.00)</span>
                                        <span>Sunday - Closed</span>
                                    </div>
                                </div>
                                <form className="form-fild">
                                    <input className="fild"
                                        type="text"
                                        placeholder="Your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                    <button type="submit" onClick={handleReset}>Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 col-12">
                            <p className="copyright"> &copy; 2025 <Link onClick={ClickHandler} href="/">wpOcean</Link> - Non Profit.
                                All
                                rights reserved.</p>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <ul className="links">
                                <li>
                                    <Link onClick={ClickHandler} href="/"><i className="flaticon-facebook-app-symbol"></i></Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} href="/"><i className="flaticon-vimeo"></i></Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} href="/"><i className="flaticon-linkedin"></i></Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} href="/"><i className="flaticon-twitter"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape">
                <Image src={shape1} alt="" />
            </div>
            <div className="shape1">
                <Image src={shape2} alt="" />
            </div>
            <div className="shape2">
                <Image src={shape3} alt="" />
            </div>

        </footer>
    );
};

export default FooterS3;