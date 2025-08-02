import React, { useState } from 'react';
import Link from 'next/link';
import Instagram from "../../api/Instagram";

import BgImg2 from '/public/images/line-ing.svg'
import Image from 'next/image';

const InstagamSectionS2 = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title">
                            <span>We are always open for children</span>
                            <h2>Recent Instagram Post</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery-main-wrap">
                <div className="sortable-gallery">
                    {Instagram.map((item) => (
                        <div className="grid" key={item.id}>
                            <div className="img-holder">
                                <Link href={item.imag} className="fancybox" data-fancybox-group="gall-1"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        openModal(item.imag);
                                    }} >
                                    <Image src={item.imag} alt={`Instagram ${item.id}`} className="img img-responsive" />
                                    <div className="hover-content">
                                        <i className="flaticon-camera"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {modalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-wrap">
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close" onClick={closeModal}>
                                &times;
                            </span>
                            <Image src={selectedImage} alt="Modal" />
                        </div>
                    </div>
                </div>
            )}

            <div className="line-in">
                <Image src={BgImg2} alt=""/>
            </div>
        </section>
    );
};

export default InstagamSectionS2;