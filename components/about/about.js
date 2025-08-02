import React from 'react';
import VideoModal from '../ModalVideo/VideoModal';
import Link from 'next/link';


/* image */
import Img1 from '/public/images/about/about-1.jpg'
import Img2 from '/public/images/about/about-2.jpg'
import CEO from '/public/images/about/ceo.jpg'
import shape1 from '/public/images/about/shape1.svg'
import shape2 from '/public/images/about/shape2.svg'
import shape3 from '/public/images/about/shape3.svg'
import shape4 from '/public/images/about/shape4.svg'
import shape5 from '/public/images/about/shape5.svg'
import shape6 from '/public/images/about/shape6.svg'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const about = (props) => {
    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="about-image">
                            <div className="img-1">
                                <Image src={Img1} alt="" />
                                    <VideoModal />
                            </div>
                            <div className="img-2">
                                <Image src={Img2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-content">
                            <h2>We are always open for children</h2>
                            <h3>Helping each other can
                                make <span>world</span> better</h3>
                            <p>Helping each other creates a stronger, kinder world. We build trust, spread compassion, and inspire others to do the same. Together, we can overcome challenges and make lasting positive changes.</p>

                            <div className="inner-content">
                                <div className="inner-item">
                                    <div className="icon">
                                        <i className="flaticon-charity"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Trusted organization</h4>
                                        <span>Welcome to our Print 128 wesit
                                            company that offers a wide r</span>
                                    </div>
                                </div>
                                <div className="inner-item">
                                    <div className="icon">
                                        <i className="flaticon-medal"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Awarded services</h4>
                                        <span>Welcome to our Print 128 wesit
                                            company that offers a wide r</span>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li><i className="flaticon-check"></i>We help companies develop powerful corporate social
                                    <Link onClick={ClickHandler} href="#">Responsibility</Link></li>
                                <li><i className="flaticon-check"></i>Helped fund 3,265 Project powerful corporate poor.
                                </li>
                            </ul>
                            <div className="about-btn">
                                <Link onClick={ClickHandler} href="/about" className="theme-btn">About Us</Link>
                                <div className="ceo">
                                    <div className="image">
                                        <Image src={CEO} alt="" />
                                    </div>
                                    <div className="text">
                                        <h4>Moses Fahey</h4>
                                        <span>Ceo & Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <Image src={shape1} alt="" />
            </div>
            <div className="shape-2">
                <Image src={shape2} alt="" />
            </div>
            <div className="shape-3">
                <Image src={shape3}alt="" />
            </div>
            <div className="shape-4">
                <Image src={shape4} alt="" />
            </div>
            <div className="shape-5">
                <Image src={shape5} alt="" />
            </div>
            <div className="shape-6">
                <Image src={shape6} alt="" />
            </div>
        </section>
    );
};

export default about;