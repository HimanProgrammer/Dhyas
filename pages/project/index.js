import React, { Fragment } from 'react';
import Link from "next/link";
import Projects from "../../api/projects";
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg'
import Image from 'next/image';


const ProjectPage = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Portfolio'} />
            <section className="project-page section-padding">
                <div className="container">
                    <div className="project-wrap">
                        {Projects.slice(0, 6).map((project, pitem) => (
                            <div className="project-grid" key={pitem}>
                                <Image src={project.pimg1} alt="" />
                                <div className="content">
                                    <div>
                                        <h2><Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                        <span>{project.subtitle}</span>
                                    </div>
                                    <div>
                                        <div className="icon"><Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}><i className="flaticon-right-arrow"></i></Link></div>
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
export default ProjectPage;