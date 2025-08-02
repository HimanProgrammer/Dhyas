import React from 'react';
import { useParams } from 'react-router-dom'
import Link from 'next/link'
import about from '/public/images/blog/about-widget.jpg'
import blogs from '../../api/blogs'
import Image from 'next/image';

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <Image src={about} alt="" />
                    </div>
                    <h4>Rosalina D. Willaim</h4>
                    <span>Blogger/Photographer</span>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack"><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.slice(0, 3).map((blog, bl) => (
                            <div className="post" key={bl}>
                                <div className="img-holder">
                                    <Image src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <span className="date"><i className="flaticon-calendar"></i>{blog.create_at}</span>
                                    <h4><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title2}</Link></h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget category-widget">
                    <h3>Post Categories</h3>
                    <ul>
                        <ul>
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Donation Drive<span>5</span></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Community Outreach<span>7</span></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Volunteer Assistance<span>3</span></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Fundraising Event<span>6</span></Link></li>
                        </ul>
                    </ul>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li>
                            <Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Giving Back</Link>
                        </li>
                        <li>
                            <Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Relief Effort</Link>
                        </li>
                        <li>
                            <Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Positive Impact</Link>
                        </li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Kindness</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Helping</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Care</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
