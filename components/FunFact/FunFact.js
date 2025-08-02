import React from 'react';
import CountUp from 'react-countup';
import Shape from '/public/images/funfuck-shape.svg';
import Image from 'next/image';

const FunFact = (props) => {

    return (
        <section className="funfact-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h2>Hope, Support, and Love for All</h2>
                            <h3>We work together
                                & never <span>give</span> up</h3>
                            <p>Aidus is the world’s driving worldwide coordinations supplier — we uphold industry and
                                exchange the worldwide trade of mercha</p>
                            <a href="tel:+4733378901">
                                <i className="flaticon-phone-call"></i>
                                <span>(415) 555-98 76 44</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="funfact">
                            <ul>
                                <li>
                                    <div className="count">
                                        <h3><CountUp end={500} enableScrollSpy />+</h3>
                                    </div>
                                    <span>Cities we have connected</span>
                                </li>
                                <li>
                                    <div className="count">
                                        <h3><CountUp end={1} enableScrollSpy />.<CountUp end={5} enableScrollSpy />m</h3>
                                    </div>
                                    <span>Raise funds every month</span>
                                </li>
                                <li>
                                    <div className="count">
                                        <h3><CountUp end={10} enableScrollSpy />+</h3>
                                    </div>
                                    <span>We have monthly donor</span>
                                </li>
                                <li>
                                    <div className="count">
                                        <h3><CountUp end={95} enableScrollSpy />%</h3>
                                    </div>
                                    <span>Successful campains</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <Image src={Shape} alt="" />
            </div>
        </section>
    )

}

export default FunFact;