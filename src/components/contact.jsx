import { NavLink } from "react-router-dom"
import styled from "styled-components"
import Footer from "./footer"
import Header from "./header"
import Subscribe from "./subscribe"

const Contact = () => {
    // style
    return (
        <Wrapper>
            <Header />
            <main>
                <section className="page-title-area d-flex align-items-end" >
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="page-title-wrapper mb-50">
                                    <h1 className="page-title mb-25">Contact Us</h1>
                                    <div className="breadcrumb-list">
                                        <ul className="breadcrumb">
                                            <li><NavLink to="/">Home -</NavLink></li>
                                            <li><NavLink to="#">Contact</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-us-area pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-img mb-30">
                                    <img className="img-fluid" src="./assets/img/contact/01.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-wrapper pl-75 mb-30">
                                    <div className="section-title mb-30">
                                        <h2>Get In Touch With Us</h2>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.</p>
                                    </div>
                                    <div className="single-contact-box mb-30">
                                        <div className="contact__iocn">
                                            <img src="./assets/img/icon/material-location-on.svg" alt="" />
                                        </div>
                                        <div className="contact__text">
                                            <h5>27/2b , street road -04 ,New York , USA</h5>
                                        </div>
                                    </div>
                                    <div className="single-contact-box cb-2 mb-30">
                                        <div className="contact__iocn">
                                            <img src="./assets/img/icon/phone-alt.svg" alt="" />
                                        </div>
                                        <div className="contact__text">
                                            <h5>+000 (125) 3654 34</h5>
                                            <h5>+000 (125) 3654 34</h5>
                                        </div>
                                    </div>
                                    <div className="single-contact-box cb-3 mb-30">
                                        <div className="contact__iocn">
                                            <img src="./assets/img/icon/feather-mail.svg" alt="" />
                                        </div>
                                        <div className="contact__text">
                                            <h5>info@example.com</h5>
                                            <h5>info2@example.com</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-map-area">
                    <div className="container-fluid px-0">
                        <div className="row gx-0">
                            <div className="col-lg-12">
                                <div className="conatct-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d779.0962574121864!2d69.21499553102541!3d41.32860295455919!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1654970322686!5m2!1sru!2s" title="G'uncha"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-form-area pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="contact-form-wrapper mb-30">
                                    <h2 className="mb-45">Contact Us</h2>
                                    <form action="#" className="row gx-3 comments-form contact-form">
                                        <div className="col-lg-6 col-md-6 mb-30">
                                            <input type="text" placeholder="Full Name" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 mb-30">
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 mb-30">
                                            <input type="text" placeholder="Phone Number" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 mb-30">
                                            <input type="text" placeholder="Address" />
                                        </div>
                                        <div className="col-lg-12 mb-30">
                                            <input type="text" placeholder="Email Name" />
                                        </div>
                                        <div className="col-lg-12 mb-30">
                                            <textarea name="commnent" id="commnent" cols="30" rows="10" placeholder="Write NavLink Message"></textarea>
                                        </div>
                                    </form>
                                    <button className="theme_btn message_btn mt-20">Send Message</button>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-img contact-img-02 mb-30">
                                    <img className="img-fluid" src="./assets/img/contact/02.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Subscribe />
            </main >

            <Footer />
        </Wrapper >

    )
}

export default Contact
const Wrapper = styled.div`
    
    .page-title-area.d-flex.align-items-end {
        background-image: url("./assets/img/page-title-bg/01.jpg");
    }
`