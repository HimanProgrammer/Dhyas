import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Accordion from '../../components/Accordion/Accordion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import serviceContent from '../../data/serviceSectionData.json';
import servicesData from '../../data/services.json';
import ServiceSidebar from './sidebar';
import video from '/public/images/service-single/video.jpg';
import simg1 from '/public/images/image-gallery/1.jpg';
import simg2 from '/public/images/image-gallery/2.jpg';
import simg3 from '/public/images/image-gallery/3.jpg';
import simg4 from '/public/images/image-gallery/4.jpg';
import Footer from '../../components/footer/Footer';
import logo from '/public/images/logo-2.svg';
import VideoModal from '../../components/ModalVideo/VideoModal';
import Image from 'next/image';

const ServiceSinglePage = (props) => {
  const router = useRouter();
  const [lang, setLang] = useState('en');
  const [content, setContent] = useState(serviceContent['en']);
  const [servicess, setServicess] = useState(servicesData['en']);

  const loadLanguageContent = () => {
    const selectedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLang(selectedLang);
    setContent(serviceContent[selectedLang] || serviceContent['en']);
    setServicess(servicesData[selectedLang] || servicesData['en']);
  };

  useEffect(() => {
    loadLanguageContent();
    window.addEventListener('languageChange', loadLanguageContent);
    return () => window.removeEventListener('languageChange', loadLanguageContent);
  }, []);

  const serviceDetails = servicess.find(item => item.slug === router.query.slug);

  return (
    <Fragment>
      <Navbar Logo={logo} hclass={'wpo-site-header'} />
      <PageTitle pageTitle={serviceDetails?.title || 'Services'} pagesub={'Service Single'} />
      <section className="service-single-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 order-lg-2">
              <div className="service-single-wrap">
                <div className="title-image">
                  <Image src={serviceDetails?.simage} alt="" />
                </div>
                <h2>{serviceDetails?.title}</h2>
                <p>{serviceDetails?.description}</p>
                <h3>{serviceDetails?.subtitle}</h3>
                <p>
                </p>

                {/* Optional: Video Section */}
                {/* <div className="video-wrap">
                  <div className="video-img">
                    <Image src={video} alt="" />
                    <div className="video-holder">
                      <VideoModal />
                    </div>
                  </div>
                  <div className="video-content">
                    <h2>Why Marketing Important ?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisici sed do eiusmod tempor incididunt ut labore et </p>
                    <ul>
                      <li>Research beyond the business plan</li>
                      <li>Marketing options and rates</li>
                      <li>The ability to turnaround consulting</li>
                    </ul>
                  </div>
                </div> */}

                {/* Optional: Gallery */}
                {/* <div className="image-gallery">
                  <h2>Eligibility checklist :</h2>
                  <ul>
                    <li><Image src={simg1} alt="" /></li>
                    <li><Image src={simg2} alt="" /></li>
                    <li><Image src={simg3} alt="" /></li>
                    <li><Image src={simg4} alt="" /></li>
                  </ul>
                </div> */}
                {/* <Accordion /> */}
              </div>
            </div>
            <div className="col-lg-4 col-12 order-lg-1">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ServiceSinglePage;
