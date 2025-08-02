import React from 'react';
import Link from "next/link";
import blogs from '../../api/blogs'
import Image from 'next/image';

const BlogSectionS3 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="blog-section-s3 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-title text-center">
                            <span>Hope, Support, and Love for All.</span>
                            <h2>Leatest News & Article From The Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="blog-container">
                    <div className="grid">
                        {blogs.slice(7, 8).map((bloge, bkye) => (
                            <div className="grid-item s1" key={bkye}>
                                <Image src={bloge.screens} alt="" />
                                <div className="post-content">
                                    <ul>
                                        <li><i className="flaticon-calendar"></i>{bloge.create_at}</li>
                                        <li><i className="flaticon-chat"></i> 03 Comments</li>
                                    </ul>
                                    <h3><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${bloge.slug}`}>{bloge.title}</Link></h3>
                                    <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${bloge.slug}`}>Read More</Link>
                                </div>
                            </div>
                        ))}
                        </div>
                    <div className="grid">
                        {blogs.slice(8, 11).map((bloge, bkye) => (
                            <div className="grid-item" key={bkye}>
                                <Image src={bloge.screens} alt="" />
                                <div className="post-content">
                                    <ul>
                                        <li><i className="flaticon-calendar"></i>{bloge.create_at}</li>
                                        <li><i className="flaticon-chat"></i> 03 Comments</li>
                                    </ul>
                                    <h3><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${bloge.slug}`}>{bloge.title}</Link></h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="all-btn">
                    <Link onClick={ClickHandler} href="/blog" className="theme-btn">all Blog</Link>
                </div>
            </div>
        </section>
    );
};

export default BlogSectionS3;