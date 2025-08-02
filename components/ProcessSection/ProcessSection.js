import React from 'react';

import shapeArrow from '/public/images/process-arrow-shape.svg'
import shape1 from '/public/images/process/shape1.svg'
import shape2 from '/public/images/process/shape2.svg'
import shape3 from '/public/images/process/shape3.svg'
import shape4 from '/public/images/process/shape4.svg'
import shape5 from '/public/images/process/shape5.svg'
import Image from 'next/image';

const ProcessSection = () => {
    return (
        <section className="process-section">
            <div className="container">
                <div className="wrape">
                    <div className="item">
                        <div className="icon">
                            <i className="flaticon-order"></i>
                            <span>01</span>
                        </div>
                        <h2>Identify needs</h2>
                        <div className="shape">
                            <Image src={shapeArrow} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <i className="flaticon-shield"></i>
                            <span>02</span>
                        </div>
                        <h2>Collect Money</h2>
                        <div className="shape">
                            <Image src={shapeArrow} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <i className="flaticon-return-box"></i>
                            <span>03</span>
                        </div>
                        <h2>Engage Volunteers</h2>
                        <div className="shape">
                            <Image src={shapeArrow} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <i className="flaticon-delivery-truck"></i>
                            <span>04</span>
                        </div>
                        <h2>Distribute Goods</h2>
                        <div className="shape">
                            <Image src={shapeArrow} alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="shape-1">
                <Image src={shape1} alt="" />
            </div>
            <div className="shape-2">
                <Image src={shape2} alt="" />
            </div>
            <div className="shape-3">
                <Image src={shape3} alt="" />
            </div>
            <div className="shape-4">
                <Image src={shape4} alt="" />
            </div>
            <div className="shape-5">
                <Image src={shape5} alt="" />
            </div>
        </section>
    );
};

export default ProcessSection;