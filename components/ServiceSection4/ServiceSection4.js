import React from 'react';
import Link from 'next/link'
import Services from "../../api/Services";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shape from '/public/images/healthcare.svg'
import Shape4 from '/public/images/service/shape-4.png'
import Image from 'next/image';

const ServiceSection4 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1499,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }
        ]
    };
    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-title">
                            <span><Image src={Shape} alt="" />Together, We Can Change Lives Forever.</span>
                            <h2>how we connect with
                                people <span>helping</span></h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="service-btn">
                            <Link onClick={ClickHandler} href="/service" className="theme-btn">All Services</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Slider {...settings} className="service-slider-s4">
                {Services.slice(9, 14).map((service, index) => (
                    <div className="service-card-s2" key={index}>
                        <div className="icon">
                            <Image src={service.image} alt="" />
                        </div>
                        <div className="content">
                            <h2><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                            <p>{service.description}</p>
                            <div className="services-btn">
                                <Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>See Details </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="shape">
                <Image src={Shape4} alt="" />
            </div>
        </section>
    );
};

export default ServiceSection4;