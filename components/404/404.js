import React from 'react'
import Link from 'next/link'
import erimg from '/public/images/404.png'
import Image from 'next/image'


const Error = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <Image src={erimg} alt="" />
                            </div>
                            <div className="error-message">
                                <h3>we’re sorry page not found</h3>
                                <Link onClick={ClickHandler} href="/" className="theme-btn">Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;


