import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link'
import shape1 from '/public/images/healthcare.svg';
import shape2 from '/public/images/slider/shape-9.svg';
import shape3 from '/public/images/slider/shape-10.svg';
import Image from "next/image";



const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero2 = (props) => {
    return (

        <section className="wpo-hero-slider-s2" >
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-1.jpg'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <span><Image src={shape1} alt="" /> We can brighten every
                                        child's future.</span>
                                </div>
                                <div  className="slide-sub-title">
                                    <h2>Charities focused
                                        <span> education </span> <span className="text">help</span></h2>
                                </div>
                                <div  className="slide-btns">
                                    <Link onClick={ClickHandler} href="/about" className="theme-btn">About Us</Link>
                                    <div className="call">
                                        <div className="icon">
                                            <i className="flaticon-phone"></i>
                                        </div>
                                        <div className="text">
                                            <h3>Call Us Now</h3>
                                            <span>+025 757 576 560</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="shape">
                                    <Image src={shape2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="shape">
                            <Image src={shape3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-2.jpg'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <span><Image src={shape1} alt="" /> We are always open for
                                        children</span>
                                </div>
                                <div  className="slide-sub-title">
                                    <h2>Charities focused
                                        <span> education </span> <span className="text">help</span></h2>
                                </div>
                                <div  className="slide-btns">
                                    <Link onClick={ClickHandler} href="/about" className="theme-btn">About Us</Link>
                                    <div className="call">
                                        <div className="icon">
                                            <i className="flaticon-phone"></i>
                                        </div>
                                        <div className="text">
                                            <h3>Call Us Now</h3>
                                            <span>+025 757 576 560</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="shape">
                                    <Image src={shape2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="shape">
                            <Image src={shape3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
           
                ...
            </Swiper>
        </section>
    )
}

export default Hero2;