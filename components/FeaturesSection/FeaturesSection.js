import React from 'react';
import img1 from '/public/images/healthcare.svg';
import Image from 'next/image';

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className=" wraper">
                    <div className="row">
                        {/* Feature Card 1 */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="feature-card">
                                <div className="content">
                                    <h2><Image src={img1} alt="Healthcare" />Healthy Foods</h2>
                                    <h3>Love & Pets Fund donation</h3>
                                </div>
                                <div className="icon">
                                    <i className="flaticon-pawprint"></i>
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="feature-card">
                                <div className="content">
                                    <h2><Image src={img1} alt="Healthcare" />Medical Facilities</h2>
                                    <h3>Pet Grooming & Natural healthy food</h3>
                                </div>
                                <div className="icon">
                                    <i className="flaticon-dog"></i>
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 3 */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="feature-card">
                                <div className="content">
                                    <h2><Image src={img1} alt="Healthcare" /> Make Donation</h2>
                                    <h3>Veterinary Help & pet Health care</h3>
                                </div>
                                <div className="icon">
                                    <i className="flaticon-cat-bath"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
