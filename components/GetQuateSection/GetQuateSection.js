import React from 'react';
import DonationComponent from '../DonationComponent/DonationComponent';

import Healt from '/public/images/healthcare.svg'
import shape1 from '/public/images/donate-shape.svg'
import shape2 from '/public/images/donate-1.svg'
import shape3 from '/public/images/donate-2.svg'
import shape4 from '/public/images/donate-3.svg'
import shape5 from '/public/images/donate.png'
import Image from 'next/image';

const GetQuateSection = (props) => {
    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="left-wrap">
                            <h2> <Image src={Healt} alt="" /> Non profit Charity Fundation</h2>
                            <h3>Helping each other can
                                make <span>world</span> better</h3>
                            <p>We approached aidused complex project Designing website
                                can involve various aspects such as layout, graphics, content
                                experience For a more specific response elaborate</p>
                            <ul className="icontext">
                                <li><i className="flaticon-fund"></i>Fund Raised & Donation
                                    Treat raised</li>
                                <li><i className="flaticon-cardiogram"></i>We Helping People
                                    & Donation pik</li>
                            </ul>
                            <ul className="op-item">
                                <li><i className="flaticon-check"></i>Dedicated Team & volunteer</li>
                                <li><i className="flaticon-check"></i>Domestics & Logistics</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="donation-from">
                            <h3>Support for eating funds</h3>
                            <DonationComponent/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-shape">
                <Image src={shape1} alt="" />
                    <div className="shape1">
                    <Image src={shape2} alt="" />
                    </div>
                    <div className="shape2">
                    <Image src={shape3} alt="" />
                    </div>
                    <div className="shape3">
                    <Image src={shape4} alt="" />
                    </div>
            </div>
            <div className="right-img">
                <Image src={shape5} alt="" />
            </div>
        </section>
    );
};

export default GetQuateSection;