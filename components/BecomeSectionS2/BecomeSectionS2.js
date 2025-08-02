import React from 'react';
import Link from 'next/link';

import Arrow from '/public/images/up-arrow1.svg'
import Icon1 from '/public/images/healthcare-icon1.svg'
import Icon2 from '/public/images/healthcare-icon2.svg'
import Shape from '/public/images/curved_shape2.svg'
import Image from 'next/image';

const BecomeSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={"" + props.hclass}>
            <div className="left-content">
                <div className="icon">
                    <Image src={Icon1} alt="" />
                </div>
                <h2>Become an volunteer?</h2>
                <Link onClick={ClickHandler} href="/contact">Contact With us <Image src={Arrow} alt="" /></Link>
            </div>
            <div className="right-content">
                <div className="icon">
                    <Image src={Icon2} alt="" />
                </div>
                <h2>Make donation to us?</h2>
                <Link onClick={ClickHandler} href="/donate">donation <Image src={Arrow} alt="" /></Link>
            </div>

        </section>
    );
};

export default BecomeSection;