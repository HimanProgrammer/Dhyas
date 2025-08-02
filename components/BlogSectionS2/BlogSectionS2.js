import React from "react";
import Link from "next/link";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogs from '../../api/blogs'
import Image from "next/image";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSectionS2 = (props) => {

    const settings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 757,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                     dots: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1, 
                    dots: true
                }
            }
        ]
    };

    return (
        <section className={"" + props.tClass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-title text-center">
                            <span>Hope, Support, and Love for All.</span>
                            <h2>our latest <span>article news</span> & blogs you need</h2>
                        </div>
                    </div>
                </div>
                <div className="blog-slider">
                    <Slider {...settings}>
                        {blogs.slice(3,7).map((bloge, bkye) => (
                            <div className="blog-card-s2" key={bkye}>
                                <div className="image">
                                    <Image src={bloge.screens} alt="" />
                                </div>
                                <div className="content">
                                    <ul>
                                        <li><i className="flaticon-calendar"></i>{bloge.create_at}</li>
                                        <li><i className="flaticon-chat"></i>2 Comments</li>
                                    </ul>
                                    <h3><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${bloge.slug}`}>{bloge.title}</Link></h3>
                                    <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${bloge.slug}`}>Read More <i className="flaticon-right-arrow"></i></Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default BlogSectionS2;




