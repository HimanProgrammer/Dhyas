import React from 'react';
import causes from '../../api/causes';
import Link from 'next/link';
import Slider from "react-slick";

import shape from '/public/images/causes/shape.svg'
import shape2 from '/public/images/causes/bg.jpg'
import Image from 'next/image';

const CausesSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1699,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        }
        ]
    };

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="section-title">
                            <span>Charity makes no decrease in property.</span>
                            <h2>Helping each other can
                                make <span>world</span> better</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="causes-slider">
                <Slider {...settings}>
                    {causes.slice(0, 6).map((causesData, item) => (
                        <div className="causes-card" key={item}>
                            <div className="image">
                                <span>{causesData.tag}</span>
                                <Image src={causesData.Cimg} alt="" />
                            </div>
                            <div className="text">
                                <h2><Link onClick={ClickHandler} href={'/causes-single/[slug]'} as={`/causes-single/${causesData.slug}`}>{causesData.title}</Link></h2>
                                <p>{causesData.docomunt}</p>
                            </div>
                            <div className="progress-wrap">
                                <div className="progress-item">
                                    <div className="progress">
                                        <div className="bar" style={{ width: `${causesData.progress}%` }}>
                                            <span className="cssProgress-label">{causesData.progress}%</span>
                                        </div>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <span className="title">Goal:</span>
                                        <span>${causesData.goal}</span>
                                    </li>
                                    <li>
                                        <span className="title">Raised:</span>
                                        <span>${causesData.raised}</span>
                                    </li>
                                    <li>
                                        <span className="title">Goal:</span>
                                        <span>${causesData.targetGoal}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="shape">
                <Image src={shape} alt="" />
            </div>
            <div className="shape-2">            
                <Image src={shape2} alt="" />
            </div>
        </section>
    );
};

export default CausesSection;