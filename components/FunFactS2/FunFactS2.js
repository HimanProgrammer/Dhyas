import React from 'react';
import CountUp from 'react-countup';


const FunFactS2 = (props) => {
    return (
        <section className={"" + props.hclass}>
            <h3 className="d-none"> section title</h3>
            <div className="container">
                <div className="wraper">
                    <div className="row g-0">
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="item">
                                <i className="flaticon-pawprint"></i>
                                <h2><CountUp end={560} enableScrollSpy /> +</h2>
                                <p>Pets need help</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="item">
                                <i className="flaticon-donation"></i>
                                <h2><CountUp end={100} enableScrollSpy />%</h2>
                                <p>raised now</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="item">
                                <i className="flaticon-global-distribution"></i>
                                <h2><CountUp end={3} enableScrollSpy />m+</h2>
                                <p>Worldwide branch</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="item">
                                <i className="flaticon-charity"></i>
                                <h2><CountUp end={260} enableScrollSpy />+</h2>
                                <p>volunteers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunFactS2;

