import React, { useEffect, useState } from 'react'
//import './home.css'

import Typewriter from 'typewriter-effect';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MdPictureAsPdf, MdArrowUpward } from "react-icons/md";
import serviceImg1 from '../../assets/images/react.png'
import serviceImg2 from '../../assets/images/ui.png'
import serviceImg3 from '../../assets/images/webdesign.png'
import { ButtonWrapper, MainBtn, ScrollTopBtn } from "../home/Button.styles"
import skills from '../../data/skills.json'

const Home = () => {

    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setShowScroll(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
        <>
            <section id="home" className="banner-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center text-md-start">
                            <h6>Hello</h6>
                            <h1>
                                I'Am Sambit <span><Typewriter
                                    options={{
                                        strings: ['React Developer', 'UI Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></span>
                                from Bhubaneswar
                            </h1>
                            <ButtonWrapper>
                                <MainBtn href="./Sambit_Mohanty.pdf" download>
                                    Get CV <MdPictureAsPdf />
                                </MainBtn>
                            </ButtonWrapper>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="about-wrapper">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <img
                                src="https://imgv3.fotor.com/images/videoImage/Background_banner.png"
                                alt="img"
                                className="img-fluid rounded-3"
                            />
                        </div>
                        <div className="col-lg-7 ps-lg-5 text-center text-lg-start">
                            <div className="my-3 mb-lg-3">
                                <span className="sub-title">My Details</span>
                                <h2>About me</h2>
                                <p>
                                    Using the existing company style and UI guidelines to craft a new design based on 
                                    user's needs & after then converted into development part. Creating a wireframe or prototype of a web or mobile app. 
                                </p>
                            </div>
                            <div className="pt-4">
                                <Tabs className='justify-content-lg-between justify-content-center'>
                                    <TabList>
                                        <Tab>Main Skills</Tab>
                                        <Tab>Experience</Tab>
                                        <Tab>Education</Tab>
                                        <Tab>Contact</Tab>
                                    </TabList>

                                    <TabPanel className='mt-4'>
                                        <div>
                                            {skills.map((skill, index) => (
                                                <div className='progress-skill' key = {index}>
                                                    {skill.category} : <span>{skill.items.join(', ')}</span>
                                                </div>
                                            ))}
                                        </div>                                        
                                    </TabPanel>
                                    <TabPanel>
                                        <div className='progress-skill'>
                                            <h6>Role :</h6>
                                            <p> <span><b>UI Developer, Qtonix Software Pvt. Ltd</b></span> <br /><span>From 06th June 2018 to 02nd Feb 2023</span></p>

                                        </div>
                                        <div className='progress-skill'>
                                            <h6>Role :</h6>
                                            <p> <span><b>PCF Team Head, Qtonix Software Pvt. Ltd</b></span> <br /><span>From 07th July 2013 to 15th Jan 2018</span></p>

                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className='progress-skill'>
                                            <span>BSC </span>, Utkal University (2005-2010)
                                        </div>
                                        <div className='progress-skill'>
                                            <span>+2 </span>, Dr Nayapalli Collage, Bhubaneswar (2003-2005)
                                        </div>
                                        <div className='progress-skill'>
                                            <span>Matricullation </span>, Govt. High School, Unit-6, Bhubaneswar (2005-2010)
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className='progress-skill'>
                                            Contact :  <span>9078234876 </span>
                                        </div>
                                        <div className='progress-skill'>
                                            Email :  <span className='address-contact'>sambit.jitu11@gmail.com </span>
                                        </div>
                                    </TabPanel>
                                </Tabs>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="service-wrapper">
                <div className="container">
                    <div className="row text-center mb-4">
                        <span className="sub-title">What can I do</span>
                        <h2>My Awasome Services</h2>
                        <p>
                        My responsibilities will include translation of the UI/UX develment wireframes to actual code that will produce visual elements of the application. 
                            
                            You will work with the UI/UX develment and bridge the gap between graphical design and technical implementation. 
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-body text-md-start text-center">
                                    {/* <i class="fa fa-wrench img-fluid" aria-hidden="true"></i> */}
                                    <img src={serviceImg1} alt="img" className="img-fluid text-center" />
                                    <h3>React develment</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-body text-md-start text-center">
                                    <img src={serviceImg2} alt="img" className="img-fluid" />
                                    <h3>UI development</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-body text-md-start text-center">
                                    <img src={serviceImg3} alt="img" className="img-fluid" />
                                    <h3>UI design</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <div className="card-body text-md-start text-center">
                                    <img
                                        src="https://codism.io/wp-content/uploads/2019/11/UI-UX-011.png"
                                        alt="img"
                                        className="img-fluid"
                                    />
                                    <h3>Website Maintainance</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="portfolio" className="portfolio-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center mb-4">
                            <span className="sub-title">Latest Project</span>
                            <h2>My Latest Projects</h2>
                            <p>
                            Inspirational designs, illustrations, and graphic elements 
                                <br className="d-none d-md-block" />
                                from the world’s best designers.
                            </p>
                        </div>
                        <div className="row">
                            <div className='progress-skill'>
                                
                                <p className='mb-0'>Project Name : <span>http://probioticsconsortium.com/</span></p>
                                <p className='mb-0'>Technology : <span>HTML ,CSS, CSS3, Javascript, Bootstrap4, Jquery</span></p>
                                <p className='mb-0'>Description : <span>Bioresearch Project. A highly purified and scientifically proven strains of probiotics.</span></p>
                            </div>
                            <div className='progress-skill mt-2'>
                                <p className='mb-0'>Project Name : <span>https://www.adamsea.com/</span></p>
                                <p className='mb-0'>Technology : <span>HTML ,CSS, CSS3, Javascript, Bootstrap4, React Js</span></p>
                                <p className='mb-0'>Description : <span>It is marine online marketplace in the boat and yacht industry. It is also online marine marketplace for both buyers and sellers.</span></p>
                            </div>
                            <div className='progress-skill mt-2'>
                                <p className='mb-0'>Project Name : <span>https://www.flowerhornfishstoreindia.com/</span></p>
                                <p className='mb-0'>Technology : <span>HTML ,CSS, CSS3, Javascript, Bootstrap4, Jquery, React Js</span></p>
                                <p className='mb-0'>Description : <span>It is marine online marketplace in the boat and yacht industry. It is also online marine marketplace for both buyers and sellers.</span></p>
                            </div>
                            <div className='progress-skill mt-2'>
                                <p className='mb-0'>Project Name : <span>Email Extract (Currently Running)</span></p>
                                <p className='mb-0'>Technology : <span>HTML ,CSS, CSS3, Javascript, Bootstrap4, Jquery, React Js, Sass</span></p>
                                <p className='mb-0'>Description : <span>It is a bulk email extractor project. </span></p>
                            </div>
                        </div>

                        <div className='main-btn'>
                            <button className='btn-view'>View More</button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="contact-wrapper">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="row call-details mb-4">
                            <div className="col-lg-6 order-2 order-lg-1 pe-lg-5 text-lg-start text-center">
                                <span>Contact me</span>
                                <h2>Hire Me</h2>
                                <label className="col-sm-3 col-lg-4">Call me Directly</label>
                                <div className="col-sm-9  mb-3 mb-lg-2 text-md-start">
                                    <a href="javascript:void(0)">+91 9078 234876</a>
                                </div>
                                <label className="col-sm-3 col-lg-4">Contact Email</label>
                                <div className="col-sm-9 col-lg-8 mb-3 mb-lg-2 text-md-start">
                                    <a href="mailto:sambit.jitu11@gmail.com">sambit.jitu11@gmail.com</a>
                                </div>
                                <form className="mt-4" id="contact-form">
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name..."
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Your Email..."
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Your Phone..."
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <textarea
                                            col={40}
                                            rows={3}
                                            className="form-control"
                                            placeholder="Write Message..."
                                            autoComplete="off"
                                            defaultValue={"\n"}
                                        />
                                    </div>
                                    <button type="submit" className="main-btn">
                                        Submit
                                    </button>
                                </form>
                            </div>
                            <div className="col-lg-6 order-1 mb-4 order-lg-1 mb-lg-0 justify-content-center align-items-center mt-4">
                                <img
                                    src="https://global-uploads.webflow.com/5a5de2c1a0eb5000019e4dc0/61262f232fd1bd5d61456168_contact-img-1.png"
                                    className="img-fluid"
                                    alt="img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {showScroll && (
                <ScrollTopBtn onClick={scrollToTop}>
                    <MdArrowUpward />
                </ScrollTopBtn>
            )}
                             
        </>

    )
}

export default Home