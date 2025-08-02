import React from 'react';
import CountUp from 'react-countup';

import icon5 from '/public/images/feature/5.svg';
import icon6 from '/public/images/feature/6.svg';
import icon7 from '/public/images/feature/7.svg';
import icon8 from '/public/images/feature/8.svg';


const FunFactS3 = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="item">
                            <div className="icon">
                                <img src={icon5} alt="" />
                            </div>
                            <div className="content">
                                <h2><CountUp end={500} enableScrollSpy />+</h2>
                                <h3>Successfully</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="item">
                            <div className="icon">
                                <img src={icon6} alt="" />
                            </div>
                            <div className="content">
                                <h2><CountUp end={300} enableScrollSpy />+</h2>
                                <h3>Highly</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="item">
                            <div className="icon">
                                <img src={icon7} alt="" />
                            </div>
                            <div className="content">
                                <h2><CountUp end={226} enableScrollSpy />+</h2>
                                <h3>Countries</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="item">
                            <div className="icon">
                                <img src={icon8} alt="" />
                            </div>
                            <div className="content">
                                <h2><CountUp end={25} enableScrollSpy />+</h2>
                                <h3>Historical</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default FunFactS3;