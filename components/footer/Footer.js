import React, { useState } from 'react'
import Link from 'next/link'
import Services from '../../api/Services';

import shape1 from '/public/images/f-shape1.svg';
import shape2 from '/public/images/f-shape-2.svg';
import shape3 from '/public/images/f-shape3.svg';
import shape4 from '/public/images/f-shape4.svg';
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {
    const [email, setEmail] = useState('');

    const handleReset = () => {
        setEmail('');
    };
    return (
        <footer className="wpo-site-footer">
            <div className="footer-socialicon">
                <ul>
                    <li><i className="flaticon-facebook-app-symbol"></i> <span>Facebook</span></li>
                    <li><i className="flaticon-twitter"></i> <span>Twitter</span></li>
                    <li><i className="ti-pinterest-alt"></i> <span>Pinterest</span></li>
                    <li><i className="flaticon-youtube"></i> <span>youtube</span></li>
                    <li><i className="flaticon-vimeo"></i> <span>Vimeo</span></li>
                </ul>
            </div>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-s2">
                                <div className="widget-title">
                                    <h3>Subscribe Newsletter</h3>
                                </div>
                                <p>These agencies specialize leveraging various digital channels, such as social media
                                    advertising</p>
                                <form className="form-fild">
                                    <input
                                        className="fild"
                                        type="text"
                                        placeholder="Your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button type="button" onClick={handleReset}>
                                        <i className="flaticon-right-arrow"></i>
                                    </button>
                                </form>
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
                            <div className="widget locations-widget ">
                                <div className="widget-title">
                                    <h3>Locations</h3>
                                </div>
                                <p>55 Main Street, 2nd block
                                    Malborne, Australia</p>
                                <ul>
                                    <li>Contact</li>
                                    <li>support@logistika.com</li>
                                    <li>+880 (123) 456 88</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> &copy; 2025 <Link onClick={ClickHandler} href="/">wpOcean</Link> - non profit. All
                                rights reserved.</p>
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
            <div className="shape3">
                <Image src={shape4} alt="" />
            </div>
        </footer>
    )
}

export default Footer;







