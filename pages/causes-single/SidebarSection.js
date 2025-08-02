import React, {useState } from 'react';
import Link from 'next/link';
import Recent1 from '/public/images/recent-posts/img-4.jpg'
import Recent2 from '/public/images/recent-posts/img-5.jpg'
import Recent3 from '/public/images/recent-posts/img-6.jpg'

import shape from '/public/images/hand.png'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}



const SidebarSection = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm('');
    };



    return (
        <div className="blog-sidebar">
            <div className="widget search-widget">
                <h3>search here</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Post.."
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                        <button type="submit">
                            <i className="ti-search"></i>
                        </button>
                    </div>
                </form>
            </div>
            <div className="widget recent-post-widget">
                <h3>Recent Causes</h3>
                <div className="posts">
                    <div className="post">
                        <div className="img-holder">
                            <Image src={Recent3}alt="" />
                        </div>
                        <div className="details">
                            <span><span>$85,202</span> of <span> $20,000</span> raised</span>
                            <h4>
                                Budget Issues Force The Our To Become
                            </h4>
                        </div>
                    </div>
                    <div className="post">
                        <div className="img-holder">
                            <Image src={Recent1} alt="" />
                        </div>
                        <div className="details">
                            <span><span>$85,202</span> of <span> $20,000</span> raised</span>
                            <h4>
                                Quality Builds, Trusted Foundations
                            </h4>
                        </div>
                    </div>
                    <div className="post">
                        <div className="img-holder">
                            <Image src={Recent2} alt="" />
                        </div>
                        <div className="details">
                            <span><span>$85,202</span> of <span> $20,000</span> raised</span>
                            <h4>
                                Structures That Stand,
                                Dreams That Soar
                            </h4>
                        </div>
                    </div>

                </div>
            </div>
            <div className="widget contact-widget">
                <span>Small Donations Bigger Impact</span>
                <h2>Education Health
                    for Every Child</h2>
                <Link onClick={ClickHandler} href="/contact" className="theme-btn">Get A Quote </Link>
                <div className="shape">
                    <Image src={shape} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SidebarSection;