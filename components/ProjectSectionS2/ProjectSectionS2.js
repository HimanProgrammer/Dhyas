import React from 'react';
import Link from "next/link";
import Slider from "react-slick";
import Projects from "../../api/projects";

import shape from '/public/images/project/shapebg-3.svg'
import Image from 'next/image';

const ProjectSectionS2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
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
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-title text-center">
                            <span>We are always open for children</span>
                            <h2>our case study about <span>helping</span> people</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Slider {...settings} className="project-slider-s2">
                {Projects.slice(5, 9).map((project, pitem) => (
                    <div className="project-card" key={pitem}>
                        <Image src={project.pimg1} alt="" />
                        <div className="content">
                            <h2><Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                            <span>{project.subtitle}</span>
                            <div className="icon">
                                <Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}>
                                    <i className="flaticon-arrow-up"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="bg-shape">
                <Image src={shape} alt="" />
            </div>
        </section>
    );
};

export default ProjectSectionS2;