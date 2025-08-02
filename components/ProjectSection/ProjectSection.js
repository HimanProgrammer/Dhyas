import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import Projects from "../../api/projects";
import Image from "next/image";



const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSection = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        centerMode: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                centerMode: true,
            }
        },

        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        }
        ]
    };

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="section-title">
                    <span>We are always open for children</span>
                    <h2>our case study about helping people</h2>
                </div>
            </div>
            <div className="project-slider">
                <Slider {...settings}>
                    {Projects.slice(0, 4).map((project, pitem) => (
                        <div className="project-card" key={pitem}>
                            <Image src={project.pimg1} alt="" />
                            <div className="content">
                                <h2><Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                <span>{project.subtitle}</span>
                                <div className="icon"><Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}><i className="flaticon-arrow-up"></i></Link></div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
export default ProjectSection;

