import React from 'react';
import VideoModal from '../ModalVideo/VideoModal';
import Link from 'next/link';
import Services from '../../api/Services';
import Img1 from '/public/images/service/1.jpg'
import Img2 from '/public/images/service/2.jpg'
import Img3 from '/public/images/service/3.jpg'
import shape from '/public/images/service/shape-1.svg'
import shape2 from '/public/images/service/shape-2.svg'
import Image from 'next/image';


const ServiceSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="service-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-12">
                        <div className="section-title">
                            <span>Together, We Can Change Lives Forever.</span>
                            <h2>our non-profit services
                                you must love</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="all-Service-btn">
                            <Link onClick={ClickHandler} href="/service" className="theme-btn">All Services</Link>
                        </div>
                    </div>
                </div>
                <div className="service-wrap">
                    <div className="row">
                        <div className="col-lg-5 col-12">
                            <div className="service-left">
                                <ul>
                                    {Services.slice(0, 5).map((Service, item) => (
                                        <li key={item}>
                                            <Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${Service.slug}`}>
                                            <i className={Service.icon}></i>{Service.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="s-more">
                                    <Link onClick={ClickHandler} href="/service">More Services</Link>
                                </div>
                                <div className="shape">
                                    <svg width="58" height="59" viewBox="0 0 58 59" fill="none">
                                        <path
                                            d="M54.2137 14.9275C54.2946 23.4127 50.103 33.234 41.2272 34.6262C37.1014 35.2805 32.7028 33.2479 30.8405 29.3128C29.3958 26.2582 30.6579 22.3036 34.283 22.3228L34.2834 22.3229C36.8308 22.4389 39.1016 23.8711 40.3776 26.1666C45.2298 34.7562 35.5413 42.6647 28.2657 43.9192C19.8266 45.3851 11.4459 42.0345 5.84436 35.6938C5.03073 34.7748 3.55462 36.121 4.36829 37.04C10.4434 43.9139 19.4507 47.4913 28.578 45.8928C36.012 44.5998 43.8881 38.6038 43.3965 29.7439C43.2909 27.8559 42.7123 26.0594 41.7215 24.5411C40.7307 23.0228 39.363 21.8381 37.7608 21.1094C35.1648 19.9251 31.342 19.8652 29.3149 22.5945C26.9759 25.7034 28.6092 30.1415 30.6692 32.6273C33.0047 35.3931 36.3868 36.8987 39.9684 36.7675C50.3966 36.3523 56.1943 24.9281 56.0937 15.0108C56.0797 13.7323 54.2016 13.6272 54.2143 14.9274L54.2137 14.9275Z"
                                            fill="#F74F22" />
                                        <path
                                            d="M8.63745 45.0051C7.10278 41.9681 5.74123 38.8277 4.55951 35.6002L3.84907 37.0423C7.72181 36.3585 11.5486 35.3144 15.2857 33.9219C16.4345 33.49 16.1333 31.5058 14.9742 31.9486C11.2394 33.3434 7.4142 34.3881 3.5432 35.0709C3.25617 35.1419 3.00764 35.3474 2.86862 35.6295C2.73 35.9117 2.71602 36.2392 2.83057 36.5193C4.00526 39.7433 5.35851 42.8809 6.88467 45.9158C7.44574 47.0269 9.18094 46.1094 8.60779 44.9946L8.63745 45.0051Z"
                                            fill="#F74F22" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="service-image">
                                <ul>
                                    <li><Image src={Img1} alt="" />
                                        <VideoModal />
                                    </li>
                                    <li><Image src={Img2} alt="" /></li>
                                    <li><Image src={Img3} alt="" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape-1">
                <Image src={shape} alt="" />
            </div>
            <div className="shape-2">
                <Image src={shape2} alt="" />
            </div>
        </section>
    );
};

export default ServiceSection;