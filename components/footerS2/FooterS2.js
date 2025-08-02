import React, { useState } from 'react'
import Link from 'next/link'
import Logo from '/public/images/logo-2.svg'
import Services from '../../api/Services';

import shape1 from '/public/images/f-shape5.svg';
import shape2 from '/public/images/f-shape6.svg';
import shape3 from '/public/images/f-shape4.svg';

import Icon1 from '/public/images/banck/1.png';
import Icon2 from '/public/images/banck/2.png';
import Icon3 from '/public/images/banck/3.png';
import Icon4 from '/public/images/banck/4.png';
import Icon5 from '/public/images/banck/5.png';
import Icon6 from '/public/images/banck/6.png';
import Image from 'next/image';




const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const FooterS2 = () => {
    const [email, setEmail] = useState('');

    const handleReset = () => {
        setEmail('');
    };

    return (
        <footer className="wpo-site-footer-s2">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget address-widget">
                                <div className="widget-title">
                                    <h3>Address</h3>
                                </div>
                                <p>570 8th Ave, New York,NY 10018
                                    United States</p>
                                <h4>Opening Hours</h4>
                                <ul>
                                    <li>9.30am – 6.30pm</li>
                                    <li>Monday to Friday</li>
                                </ul>
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
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>newsletter</h3>
                                </div>
                                <div className="newsletter">
                                    <form className="form-fild">
                                        <input className="fild"
                                            type="text"
                                            placeholder="Your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                        <button type="submit" onClick={handleReset}><i className="flaticon-next"></i></button>
                                        <div className="terms">
                                            <input type="checkbox" id="Insurance" />
                                            <label htmlFor='Insurance'>I agree all your <Link href="#">terms</Link> and
                                                policies</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row g-0 align-items-center">
                        <div className="col col-lg-2 col-12">
                            <div className="logo">
                                <Image src={Logo} alt="blog" />
                            </div>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <p className="copyright"> &copy; 2025 <Link onClick={ClickHandler} href="/">wpOcean</Link> - Non Profit.
                                All
                                rights reserved.</p>
                        </div>
                        <div className="col col-lg-4 col-12">
                            <ul>
                                <li><Link onClick={ClickHandler} href="#"><Image src={Icon1} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} href="#"><Image src={Icon2} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} href="#"><Image src={Icon3} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} href="#"><Image src={Icon4} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} href="#"><Image src={Icon5} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} href="#"><Image src={Icon6} alt="" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <Image src={shape1} alt="" />
            </div>
            <div className="shape2">
                <Image src={shape2} alt="" />
            </div>
            <div className="shape3">
                <Image src={shape3} alt="" />
            </div>
        </footer>
    );
};

export default FooterS2;