import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <>
            <section id="contact" className="footer-wrapper mt-3 mt-md-0">
                <div className="container">
                    <div className="row align-items-center py-3">
                        <div className="col-lg-12 col-md-12 text-center">
                            <div className="footer-logo mb-3 mb-md-0">
                                {/* <img src="./assets/" className="img-fluid w-25" alt="img" /> */}
                                <img src= './assets/images/logo.png' />
                                <p className="mt-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div>
                                <ul className="list-unstyled d-flex text-center social-icon mb-3 mb-md-0">
                                    <li>
                                        <a href="#">
                                            <FaFacebookF />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaLinkedinIn />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <FaInstagram />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-wrapper-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="copyright-text text-lg-start text-center mb-3 mb-lg-0">
                                    copyright @ {new Date().getFullYear()}. All rights reservered
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer