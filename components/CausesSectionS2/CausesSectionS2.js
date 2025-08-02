import React from 'react';
import Link from 'next/link';
import causes from '../../api/causes';
import Shape from '/public/images/causes/shape2.svg'
import Slider from 'react-slick';
import Image from 'next/image';

const CausesSectionS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [{
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
        <section className="causes-section-s2 section-padding ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="section-title">
                            <span>Charity makes no decrease in property.</span>
                            <h2>Helping each other
                                make <span>world</span> better</h2>
                            <p>Aidus is the world’s driving worldwide coordinations supplier
                                uphold industry and exchange the worldwide trade of mercha</p>
                            <ul>
                                <li>
                                    <i className="flaticon-check"></i>
                                    We help companies develop powerful corporate social
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Helped fund 3,265 Project powerful corporate poor.
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    It is a long established fact that a reader.
                                </li>
                            </ul>
                            <Link onClick={ClickHandler} href="/service" className="theme-btn">All Services</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Slider {...settings} className="causes-slider-s2">
                {causes.slice(6, 10).map((causesData, item) => (
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
            <div className="shape">
                <Image src={Shape} alt="" />
            </div>
        </section>
    );
};

export default CausesSectionS2;