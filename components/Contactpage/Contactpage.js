import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return(
        <section className="contact-page section-padding">
            <div className="container">
                <div className="office-info">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="office-info-item">
                                <div className="office-info-icon">
                                    <div className="icon">
                                        <i className="fi flaticon-home-address"></i>
                                    </div>
                                </div>
                                <div className="office-info-text">
                                    <h2>address line</h2>
                                    <p>Bowery St, New York, 37 USA
                                        <br /> NY 10013,USA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="office-info-item active">
                                <div className="office-info-icon">
                                    <div className="icon">
                                        <i className="fi flaticon-phone-call"></i>
                                    </div>
                                </div>
                                <div className="office-info-text">
                                    <h2>Phone Number</h2>
                                    <p>+1255 - 568 - 6523 4374-221 <br />
                                        +1255 - 568 - 6523</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="office-info-item">
                                <div className="office-info-icon">
                                    <div className="icon">
                                        <i className="fi flaticon-mail-1"></i>
                                    </div>
                                </div>
                                <div className="office-info-text">
                                    <h2>Address</h2>
                                    <p>contact@aidUs.com <br /> info@aidUs.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="contact-left">
                                <h2>Get in touch</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis
                                    faucibus odio feugiat arc dolor.</p>
                                <div className="map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
                                        ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="contact-right">
                                <div className="title">
                                    <h2>Fill Up The Form</h2>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                </div>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default Contactpage;
