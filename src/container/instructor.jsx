import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import Information from '../components/information'
import Footer from '../components/footer'
import Subscribe from '../components/subscribe'
import GreatOffers from '../components/greatOffers'
import Header from '../components/header'

const Instructor = () => {
    return (
        <Wrapper>
            <Header />
            <main>
                <section className="page-title-area d-flex align-items-end" >
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="page-title-wrapper mb-50">
                                    <h1 className="page-title mb-25">Instructor</h1>
                                    <div className="breadcrumb-list">
                                        <ul className="breadcrumb">
                                            <li><NavLink to="/">Home - Pages -</NavLink></li>
                                            <li><NavLink to="#">Instructor</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <GreatOffers />
                <section className="course-instructor nav-style-two pt-150 pb-120 pt-md-95 pb-md-70 pt-xs-95 pb-xs-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center mb-60">
                                    <h5 className="bottom-line mb-25">Our Instructor</h5>
                                    <h2 className="mb-25">Explore Experienced Instructor</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="z-instructors text-center mb-30">
                                    <div className="z-instructors__thumb mb-15">
                                        <img src="./assets/img/instructor/01.jpg" alt="" />
                                        <div className="social-media">
                                            <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="z-instructors__content">
                                        <h4 className="sub-title mb-10"><NavLink to="/instructor-profile">John Zlathan</NavLink></h4>
                                        <p>Software Development</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="z-instructors text-center mb-30">
                                    <div className="z-instructors__thumb mb-15">
                                        <img src="./assets/img/instructor/02.jpg" alt="" />
                                        <div className="social-media">
                                            <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="z-instructors__content">
                                        <h4 className="sub-title mb-10"><NavLink to="/instructor-profile">Mally Yan</NavLink></h4>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="z-instructors text-center mb-30">
                                    <div className="z-instructors__thumb mb-15">
                                        <img src="./assets/img/instructor/03.jpg" alt="" />
                                        <div className="social-media">
                                            <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="z-instructors__content">
                                        <h4 className="sub-title mb-10"><NavLink to="/instructor-profile">Mesud Lamb</NavLink></h4>
                                        <p>Programmer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="z-instructors text-center mb-30">
                                    <div className="z-instructors__thumb mb-15">
                                        <img src="./assets/img/instructor/04.jpg" alt="" />
                                        <div className="social-media">
                                            <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="z-instructors__content">
                                        <h4 className="sub-title mb-10"><NavLink to="/instructor-profile">Havana Lyon</NavLink></h4>
                                        <p>Digital Marketing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="z-instructors text-center mb-30">
                                    <div className="z-instructors__thumb mb-15">
                                        <img src="./assets/img/instructor/09.jpg" alt="" />
                                        <div className="social-media">
                                            <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="z-instructors__content">
                                        <h4 className="sub-title mb-10"><NavLink to="/instructor-profile">Lebron Jain</NavLink></h4>
                                        <p>IT Specialist</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="z-instructors text-center mb-30">
                                    <div className="z-instructors__thumb mb-15">
                                        <img src="./assets/img/instructor/10.jpg" alt="" />
                                        <div className="social-media">
                                            <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="z-instructors__content">
                                        <h4 className="sub-title mb-10"><NavLink to="/instructor-profile">Ariana Cany</NavLink></h4>
                                        <p>UArt Specialist</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="z-instructors text-center mb-30">
                                    <div className="z-instructors__thumb mb-15">
                                        <img src="./assets/img/instructor/11.jpg" alt="" />
                                        <div className="social-media">
                                            <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="z-instructors__content">
                                        <h4 className="sub-title mb-10"><NavLink to="/instructor-profile">George Emily</NavLink></h4>
                                        <p>HR Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="z-instructors text-center mb-30">
                                    <div className="z-instructors__thumb mb-15">
                                        <img src="./assets/img/instructor/12.jpg" alt="" />
                                        <div className="social-media">
                                            <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="z-instructors__content">
                                        <h4 className="sub-title mb-10"><NavLink to="/instructor-profile">Chris Jordan</NavLink></h4>
                                        <p>Dance Specialist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Information />
                <Subscribe />
            </main>
            <Footer />
        </Wrapper>
    )
}

export default Instructor
const Wrapper = styled.div``
