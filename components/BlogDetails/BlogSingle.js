import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import Link from 'next/link'
import blog3 from '/public/images/blog-details/comments-author/img-1.jpg'
import blog4 from '/public/images/blog-details/comments-author/img-2.jpg'
import gl0 from '/public/images/blog-details/img-2.jpg'
import gl1 from '/public/images/blog-details/img-3.jpg'
import gl2 from '/public/images/blog-details/img-4.jpg'
import blogs from '../../api/blogs';
import { useRouter } from 'next/router'
import BlogSidebar from '../BlogSidebar/BlogSidebar'
import Image from 'next/image';

const BlogSingle = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        comment: '',
        insuranceb: false,
    });

    const [validator] = useState(new SimpleReactValidator());

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
        validator.showMessageFor(name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                website: '',
                comment: '',
                insuranceb: false,
            });
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };


    return (
        <section className={`blog-single-section section-padding ${props.blSclass}`}>
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="blog-content">
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <Image src={BlogDetails?.blogSingleImg} alt='' />
                                </div>
                                <div className="entry-meta">
                                    <ul>
                                        <li><i className="fi flaticon-calendar"></i><Link onClick={ClickHandler} href="#">02 Apr 2025</Link>
                                        </li>
                                        <li><i className="fi flaticon-comments"></i> <Link onClick={ClickHandler} href="#">Coments (03)</Link></li>
                                        <li><i className="fi flaticon-clock"></i><Link onClick={ClickHandler} href="#">3 min Read</Link></li>
                                    </ul>
                                </div>
                                <div className="entry-details">
                                    <h3>{BlogDetails?.title}</h3>
                                    <p>he whimsically named Egg Canvas is the brainchild of Erica Choi, a design director
                                        and photo
                                        grapher based in York. Why the name “Egg Canvas Erica was inspired by her Korean
                                        childhood
                                        nickname, which means egg, while “canvas” medium with wh art is created. “Egg Canvas
                                        therefore, is her life—creating beautiful things each day
                                        a blank canvas.</p>
                                    <p>We have covered many special events such as fireworks, fairs, parades, races, walks,
                                        awards ceremonies, fashion shows, sporting events, and even a memorial service.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate
                                        vestibulum rhon
                                        cus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat
                                        elit eu lacus. Vestibulum non justo fun consectetur, cursus ante, tincidunt sapien.
                                        Nulla quis diam sit amet turpis interd enim. Vivamus fauc ex sed nibh egestas
                                        elementum. Mauris et bibendum</p>
                                </div>
                            </div>
                            <blockquote>
                                Your time is limited, so don’t waste it living someone else’s
                                life.Don’t be trapped by dogma – which is living with the
                                <span>John Mehedii</span>
                            </blockquote>
                            <div className="post-team-content">
                                <h3>Let our investment management team</h3>
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-12">
                                        <ul className="content">
                                            <li>Lorem Ipsum generators on the tend to repeat.</li>
                                            <li> If you are going to use a passage.</li>
                                            <li> Lorem Ipsum generators on the tend to repeat.</li>
                                            <li> If you are going to use a passage.</li>
                                            <li> Lorem Ipsum generators on the tend to repeat.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-5 col-12">
                                        <Image src={gl0} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12 im-1">
                                    <Image src={gl1} alt="" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 im-1">
                                    <Image src={gl2} alt="" />
                                </div>
                            </div>
                            <p>We have covered many special events such as fireworks, fairs, parades, races, walks, awards
                                ceremonies, fashion shows, sporting events, and even a memorial service.Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. vestibulum rhoncus, dolor eget viverra pretium, dolor
                                ellus aliquet nunc,</p>
                            <div className="tag-share-wrap">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <div className="tag-share clearfix">
                                            <div className="tag">
                                                <span>Tag: </span>
                                                <ul>
                                                    <li><Link onClick={ClickHandler} href="#">Business</Link></li>
                                                    <li><Link onClick={ClickHandler} href="#">Design</Link></li>
                                                    <li><Link onClick={ClickHandler} href="#">apps</Link></li>
                                                    <li><Link onClick={ClickHandler} href="#">data</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="tag-share-s2 clearfix">
                                            <div className="tag">
                                                <span>Share: </span>
                                                <ul>
                                                    <li><Link onClick={ClickHandler} href="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
                                                    <li><Link onClick={ClickHandler} href="#"><i className="flaticon-vimeo"></i></Link></li>
                                                    <li><Link onClick={ClickHandler} href="#"><i className="flaticon-linkedin"></i></Link></li>
                                                    <li><Link onClick={ClickHandler} href="#"><i className="flaticon-twitter"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="more-posts">
                                <div className="previous-post">
                                    <Link href="/blog">
                                        <span className="post-control-link">Previous Post</span>
                                        <span className="post-name">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</span>
                                    </Link>
                                </div>
                                <div className="next-post">
                                    <Link href="/blog-left-sidebar">
                                        <span className="post-control-link">Next Post</span>
                                        <span className="post-name">Dignissimos ducimus qui blanditiis praesentiu deleniti atque corrupti quos dolores</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="comments-area">
                                <div className="comments-section">
                                    <h3 className="comments-title">(04) Comment</h3>
                                    <ol className="comments">
                                        <li className="comment even thread-even depth-1" id="comment-1">
                                            <div id="div-comment-1">
                                                <div className="comment-theme">
                                                    <div className="comment-image"><Image
                                                        src={blog3} alt='' />
                                                    </div>
                                                </div>
                                                <div className="comment-main-area">
                                                    <div className="comment-wrapper">
                                                        <div className="comments-meta">
                                                            <h4>Rohan De Spond <span className="comments-date">
                                                                25 january 2021</span></h4>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>
                                                                There are many variations of passages of Lorem Ipsum
                                                                available, but the leap into electronic
                                                                type setting, remaining essentiallyuncha opularisedthe with
                                                                the release of Letrasetsheets
                                                                containingth leap electrtypesetting remainingmajority have.
                                                                There are many variations
                                                                of passages of Lorem Ipsum
                                                            </p>
                                                            <div className="comments-reply">
                                                                <Link onClick={ClickHandler} className="comment-reply-link" href="#"><i
                                                                    className="flaticon-back"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="children">
                                                <li className="comment">
                                                    <div>
                                                        <div className="comment-theme">
                                                            <div className="comment-image"><Image
                                                                src={blog4}
                                                                alt='' /></div>
                                                        </div>
                                                        <div className="comment-main-area">
                                                            <div className="comment-wrapper">
                                                                <div className="comments-meta">
                                                                    <h4>Johan Ritaxon<span className="comments-date">
                                                                        25 january 2021
                                                                    </span></h4>
                                                                </div>
                                                                <div className="comment-area">
                                                                    <p>There are many variations of passages of Lorem Ipsum
                                                                        available, but the
                                                                        majority have. There are many variations of passages
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Post Comments</h3>
                                    <form id="commentForm" className="comment-form" onSubmit={handleSubmit}>
                                        <div className="form-inputs">
                                            <div>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    placeholder="Enter your name*"
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                {validator.message('name', formData.name, 'required|alpha')}
                                            </div>
                                            <div>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    placeholder="Enter your mail*"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                {validator.message('email', formData.email, 'required|email')}

                                            </div>
                                            <div>
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Enter your number*"
                                                    type="text"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                {validator.message('phone', formData.phone, 'required|phone')}
                                            </div>
                                            <div>
                                                <input
                                                    id="website"
                                                    name="website"
                                                    placeholder="Website*"
                                                    type="url"
                                                    value={formData.website}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                {validator.message('website', formData.website, 'required|url')}
                                            </div>
                                        </div>
                                        <div className="form-textarea">
                                            <textarea
                                                id="comment"
                                                name="comment"
                                                placeholder="Enter your Message*"
                                                value={formData.comment}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                            {validator.message('comment', formData.comment, 'required')}
                                        </div>
                                        <div className="terms">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                id="insuranceb"
                                                name="insuranceb"
                                                checked={formData.insuranceb}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="insuranceb">Save my name, email, and website in this browser for the next time I comment.</label>
                                        </div>
                                        <div className="form-submit">
                                            <input className="theme-btn" id="submit" value="Send Message" type="submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
