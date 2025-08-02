import React, { useState } from 'react';
import VideoModal from '../ModalVideo/VideoModal';



import About1 from '/public/images/about/about-8.jpg';
import About2 from '/public/images/about/about-9.jpg';
import About3 from '/public/images/about/about-5.jpg';
import About4 from '/public/images/about/about-6.jpg';
import About5 from '/public/images/about/about-7.jpg';
import Aut1 from '/public/images/about/aut-1.jpg';
import Aut2 from '/public/images/about/aut-2.jpg';
import Aut3 from '/public/images/about/aut-3.jpg';


import Shape3 from '/public/images/healthcare.svg';
import Shape4 from '/public/images/about/shape10.svg';
import Shape5 from '/public/images/about/call.svg';
import Shape6 from '/public/images/about/shape13.png';
import Shape7 from '/public/images/about/about-10.jpg';
import Shape8 from '/public/images/about/dog-sid-img.png';
import Image from 'next/image';

const AboutS3 = (props) => {

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-image">
                            <div className="image1">
                                <Image src={About1} alt="" />
                            </div>
                            <div className="image2">
                                <Image src={About2} alt="" />
                                <div className="shape">
                                    <Image src={Shape6} alt="" />
                                </div>
                            </div>
                            <div className="image3">
                                <Image src={Shape7} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="right-content">
                            <h2><Image src={Shape3} alt="" />Building Brighter Futures Through Kindness.</h2>
                            <h3> Helping each other can
                                make<span> world </span> better</h3>
                            <p>Helping each other creates a stronger, kinder world. We build trust, spread compassion, and inspire others to do the same. Together, we can overcome challenges and make lasting positive changes.</p>

                            <div className="about-tab">
                                <div className="tab">
                                    <button className={activeTab === 0 ? 'tablinks active' : 'tablinks'} onClick={() => handleTabClick(0)}>Our Mission</button>
                                    <button className={activeTab === 1 ? 'tablinks active' : 'tablinks'} onClick={() => handleTabClick(1)}>Our Vission</button>
                                    <button className={activeTab === 2 ? 'tablinks active' : 'tablinks'} onClick={() => handleTabClick(2)}>excellence</button>
                                </div>
                                <div className={activeTab === 0 ? ' tabcontent active' : 'hidden'}>
                                    <div className="tab-wrap">
                                        <div className="left">
                                            <Image src={About3} alt="" />
                                            <VideoModal />
                                        </div>
                                        <div className="right">
                                            <ul>
                                                <li><i className="flaticon-check"></i> People’s Growth</li>
                                                <li><i className="flaticon-check"></i>Helped fund 3,265 Project powerful
                                                </li>
                                                <li><i className="flaticon-check"></i>Awards Winning nonprofit company</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeTab === 1 ? ' tabcontent active' : 'hidden'}>
                                    <div className="tab-wrap">
                                        <div className="left">
                                            <Image src={About4} alt="" />
                                            <VideoModal />
                                        </div>
                                        <div className="right">
                                            <ul>
                                                <li><i className="flaticon-check"></i> The standard chunk of Lorem Ipsum
                                                </li>
                                                <li><i className="flaticon-check"></i>Helped fund 3,265 Project powerful
                                                </li>
                                                <li><i className="flaticon-check"></i>Awards Winning nonprofit company</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeTab === 2 ? ' tabcontent active' : 'hidden'}>
                                    <div className="tab-wrap">
                                        <div className="left">
                                            <Image src={About5} alt="" />
                                            <VideoModal />
                                        </div>
                                        <div className="right">
                                            <ul>
                                                <li><i className="flaticon-check"></i>There are many variations of passages
                                                </li>
                                                <li><i className="flaticon-check"></i>Helped fund 3,265 Project powerful
                                                </li>
                                                <li><i className="flaticon-check"></i>Awards Winning nonprofit company</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="author-wrap">
                                <ul className="author-img">
                                    <li><Image src={Aut1} alt="" /></li>
                                    <li className="active"><Image src={Aut2} alt="" /></li>
                                    <li><Image src={Aut3} alt="" /></li>
                                </ul>
                                <div className="author-text">5m+ Customer <div className="shape"><Image
                                    src={Shape4} alt="" /></div>
                                </div>
                                <div className="contact">
                                    <div className="icon">
                                        <Image src={Shape5} alt="" />
                                    </div>
                                    <div className="text">
                                        <span>Phone:</span>
                                        <h4>+236 (456) 896 22</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dog-sidimg">
                <Image src={Shape8} alt="" />
            </div>
        </section >
    )
}

export default AboutS3;



