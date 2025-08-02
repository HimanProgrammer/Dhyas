import React, { Fragment } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg'
import causes from '../../api/causes';
import Image from 'next/image';

const CausesPage = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'causes'} />
            <section className="cause-pg-section section-padding">
                <div className="container">
                    <div className="row">
                        {causes.slice(0, 6).map((causesData, item) => (
                            <div className="col-lg-4 col-md-6 col-12" key={item}>
                                <div className="causes-card" >
                                    <div className="image">
                                        <span>{causesData.tag}</span>
                                        <Image src={causesData.Cimg} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2><Link onClick={ClickHandler} href={'/causes-single/[slug]'} as={`/causes-single/${causesData.slug}`}>{causesData.title}</Link></h2>
                                        <p>{causesData.docomunt}</p>
                                    </div>
                                    <div className="progress-wrap">
                                        <div className="progress-item">
                                            <div className="progress">
                                                <div className="bar" style={{ width: `${causesData.progress}%` }}>
                                                    <span className="cssProgress-label">{causesData.progress}%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <span className="title">Goal:</span>
                                                <span>${causesData.goal}</span>
                                            </li>
                                            <li>
                                                <span className="title">Raised:</span>
                                                <span>${causesData.raised}</span>
                                            </li>
                                            <li>
                                                <span className="title">Goal:</span>
                                                <span>${causesData.targetGoal}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default CausesPage;
