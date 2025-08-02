import React, { Fragment } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Projects from '../../api/projects';
import Footer from '../../components/footer/Footer';
import logo from '/public/images/logo-2.svg'
import psingle1 from '/public/images/project-details/sing1.jpg'
import psingle2 from '/public/images/project-details/sing2.jpg'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const ProjectSingle = (props) => {
    const router = useRouter()

    const ProjectSingle = Projects.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
            <Navbar Logo={logo} hclass={'wpo-site-header'} />
            <PageTitle pageTitle={ProjectSingle?.title}  />
            <section className="project-single-page section-padding">
                <div className="container">
                    <div className="project-wrap">
                        <div className="project-top-info">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-12">
                                    <div className="section-title">
                                        <h2>Trusted electricity Care</h2>
                                        <h3>{ProjectSingle?.title}</h3>
                                        <p>{ProjectSingle?.docomunt}</p>
                                        <Link onClick={ClickHandler} href="#" className="theme-btn">Visit Website <i className="ti-angle-right"></i></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="project-info">
                                        <ul>
                                            <li>
                                                <h3>Clients</h3>
                                                <span>Design Studio In USA </span>
                                            </li>
                                            <li>
                                                <h3>Project Type</h3>
                                                <span>Digital Product Design</span>
                                            </li>
                                            <li>
                                                <h3>Date</h3>
                                                <span>25 October 2024 </span>
                                            </li>
                                            <li>
                                                <h3>Website</h3>
                                                <span>wiatech.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="image-gallery">
                                <ul>
                                    <li><Image src={ProjectSingle?.pSimg} alt="" /></li>
                                    <li><Image src={ProjectSingle?.p3Simg} alt="" /></li>
                                </ul>
                            </div>
                            <div className="info-content">
                                <div className="info-item">
                                    <div className="left">
                                        <h2>Interesting facts in
                                            Development</h2>
                                    </div>
                                    <div className="right">
                                        <p>Must explain to you how all this mistaken idea of denouncing pleasure and
                                            praising
                                            pain was born and I will give you a complete account of the system, and expound
                                            the
                                            actual teachings of the great explorer of the truth, the master-builder of human
                                            happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
                                            pleasure, but because those who do not know how to pursue pleasure rationally
                                            encounter</p>
                                        <div className="item">
                                            <ul>
                                                <li>Efficient Sprint Planning</li>
                                                <li>Standups and Demos</li>
                                            </ul>
                                            <ul>
                                                <li>Iterative Delivery Approach</li>
                                                <li>Problem-solving</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="left">
                                        <h2>The Results of
                                            Our Project</h2>
                                    </div>
                                    <div className="right s2">
                                        <p>Will give you a complete account of the system, and expound the actual teachings
                                            of the great explorer of the truth, the master-builder of human happiness
                                            rejects, dislikes, or avoids pleasure </p>
                                        <div className="item">
                                            <ul>
                                                <li>
                                                    <h3><i className="flaticon-check"></i>Support clients</h3>
                                                    <span>Sed ut perspiciatis unde omnis natus voluptatem accusantium
                                                        doloremque laudantium, totam rem aperiam inventore</span>
                                                </li>
                                                <li>
                                                    <h3><i className="flaticon-check"></i>Solve problems</h3>
                                                    <span>Sed ut perspiciatis unde omnis natus voluptatem accusantium
                                                        doloremque laudantium, totam rem aperiam inventore</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-img">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <Image src={psingle1} alt="" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <Image src={psingle2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="page-chang">
                                <div className="previous-post post">
                                    <Link onClick={ClickHandler} href="#">National Transport</Link>
                                </div>
                                <button className="post-btn">
                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M0.68457 0.444336H7.0903V6.88878H0.68457V0.444336ZM0.68457 13.3333H7.0903V19.7777H0.68457V13.3333ZM7.0903 26.2221H0.68457V32.6665H7.0903V26.2221ZM13.4959 0.444336H19.9016V6.88878H13.4959V0.444336ZM19.9016 13.3333H13.4959V19.7777H19.9016V13.3333ZM13.4959 26.2221H19.9016V32.6665H13.4959V26.2221ZM32.7133 0.444336H26.3076V6.88878H32.7133V0.444336ZM26.3076 13.3333H32.7133V19.7777H26.3076V13.3333ZM32.7133 26.2221H26.3076V32.6665H32.7133V26.2221Z"
                                            fill="#FF7236" />
                                    </svg>
                                </button>
                                <div className="next-post post">
                                    <Link onClick={ClickHandler} href="#" className="next">Next <i className="ti-angle-right"></i></Link>
                                    <Link onClick={ClickHandler} href="#">Transportation Planner</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectSingle;