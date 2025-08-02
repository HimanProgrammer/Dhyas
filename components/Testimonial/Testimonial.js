import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '/public/images/testimonial/1.jpg'
import Img2 from '/public/images/testimonial/2.jpg'
import Image from 'next/image';


const testimonials = [
    {
        id: '01',
        img: Img1,
        Des: "The other hand we denounticy grow with righteou indg ation and le men who are so beguiled an Lorem moment.Dislike men who care by the charms of pleasur ipsum with righteou indg ation and lesbi",
        title: 'Michel Jhonson',
        sub: "CEO Barta",
    },
    {
        id: '02',
        img: Img2,
        Des: "The other hand we denounticy grow with righteou indg ation and le men who are so beguiled an Lorem moment.Dislike men who care by the charms of pleasur ipsum with righteou indg ation and lesbi",
        title: 'Tommy Kraft',
        sub: "Fashion Designer",
    },
    {
        id: '03',
        img: Img1,
        Des: "The other hand we denounticy grow with righteou indg ation and le men who are so beguiled an Lorem moment.Dislike men who care by the charms of pleasur ipsum with righteou indg ation and lesbi",
        title: 'Curtis Fahey',
        sub: "Managin dirctor",
    },
    {
        id: '04',
        img: Img2,
        Des: "The other hand we denounticy grow with righteou indg ation and le men who are so beguiled an Lorem moment.Dislike men who care by the charms of pleasur ipsum with righteou indg ation and lesbi",
        title: 'Curtis Fahey',
        sub: "Managin dirctor",
    },


]




const Testimonial = (props) => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    };


    return (

        <section className={"" + props.tClass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-title">
                            <span>We are always open for children</span>
                            <h2>Helping each other can
                                make <span>world</span> better</h2>
                        </div>
                    </div>
                </div>
                <div className="testimonial-wrap">
                    <Slider {...settings} className="testimonial-slider">
                        {testimonials.map((testitem, titem) => (
                            <div className="testimonial-card" key={titem}>
                                <ul>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                    <li><i className="flaticon-star"></i></li>
                                </ul>
                                <p>{testitem.Des}</p>
                                <div className="autr-name">
                                    <div className="image">
                                        <Image src={testitem.img} alt="" />
                                    </div>
                                    <div className="text">
                                        <h3>{testitem.title}</h3>
                                        <span>{testitem.sub}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </section>
    );
}

export default Testimonial;





