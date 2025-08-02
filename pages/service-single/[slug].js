import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Accordion from '../../components/Accordion/Accordion';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Services from '../../api/Services';
import ServiceSidebar from './sidebar'
import video from '/public/images/service-single/video.jpg'
import simg1 from '/public/images/image-gallery/1.jpg'
import simg2 from '/public/images/image-gallery/2.jpg'
import simg3 from '/public/images/image-gallery/3.jpg'
import simg4 from '/public/images/image-gallery/4.jpg'
import Footer from '../../components/footer/Footer';
import logo from '/public/images/logo-2.svg'
import VideoModal from '../../components/ModalVideo/VideoModal';
import Image from 'next/image';

const ServiceSinglePage = (props) => {
    const router = useRouter()

    const serviceDetails = Services.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Navbar Logo={logo} hclass={'wpo-site-header'} />
            <PageTitle pageTitle={serviceDetails?.title} pagesub={'Service Single'} />
            <section className="service-single-page section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12 order-lg-2">
                            <div className="service-single-wrap">
                                <div className="title-image">
                                    <Image src={serviceDetails?.simage} alt="" />
                                </div>
                                <h2>{serviceDetails?.title}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi?
                                    perspiciatis
                                    accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupidit
                                    Repudiandae
                                    provident to
                                    consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut
                                    perspiciatis?
                                    Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem.</p>
                                <h3>Sed ut perspiciatis unde omnis iste natus et</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi?
                                    perspiciatis
                                    accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupidit
                                    Repudiandae
                                    provident to
                                    consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut
                                    perspiciatis?
                                    Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem.</p>
                                <div className="video-wrap">
                                    <div className="video-img">
                                        <Image src={video} alt="" />
                                            <div className="video-holder">
                                                <VideoModal/>
                                            </div>
                                    </div>
                                    <div className="video-content">
                                        <h2>Why Marketing Important ?</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisici
                                            sed do eiusmod tempor incididunt ut labore et </p>
                                        <ul>
                                            <li>Research beyond the business plan</li>
                                            <li>Marketing options and rates</li>
                                            <li>The ability to turnaround consulting</li>
                                        </ul>

                                    </div>
                                </div>
                                <p>There are many variations of passages of lorem ipsum is simply free text available in the
                                    market, but the
                                    majority time you put aside to be in our office. Lorem ipsum dolor sit amet,
                                    consectetLorem ipsum dolor sit
                                    amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                    dolore magna aliqua.</p>
                                <h3 className="quate">Business is the activity of making one's living or making money by produ
                                    The NDIS
                                    Cing or buying and selling products akes a lifetime</h3>

                                <div className="image-gallery">
                                    <h2>Eligibility checklist :</h2>
                                    <ul>
                                        <li><Image src={simg1} alt="" /></li>
                                        <li><Image src={simg2} alt="" /></li>
                                        <li><Image src={simg3} alt="" /></li>
                                        <li><Image src={simg4} alt="" /></li>
                                    </ul>
                                </div>
                                <Accordion />
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 order-lg-1">
                            <ServiceSidebar/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;