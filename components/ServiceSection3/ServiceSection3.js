import React from 'react';
import Services from "../../api/Services";
import Link from 'next/link';

const ServiceSection3 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-title">
                            <span>Compassion in Action: Join Us Today</span>
                            <h2>how we connect with
                                people helping</h2>
                        </div>
                    </div>
                </div>
                <div className="service-wrap">
                    {Services.slice(5, 9).map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="icon">
                                <i className={service.icon}></i>
                            </div>
                            <h2><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                            <span>{service.description}</span>
                            <Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>Read More <i className="flaticon-right-arrow"></i></Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection3;








