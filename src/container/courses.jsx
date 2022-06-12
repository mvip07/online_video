import { NavLink } from "react-router-dom"
import styled from "styled-components"
import Footer from "../components/footer"
import GreatOffers from "../components/greatOffers"
import Header from "../components/header"
import Information from "../components/information"
import Subscribe from "../components/subscribe"

const Courses = () => {
    return (
        <Wrapper>
            <Header />
            <main>
                <section className="page-title-area d-flex align-items-end" >
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="page-title-wrapper mb-50">
                                    <h1 className="page-title mb-25">Courses 1</h1>
                                    <div className="breadcrumb-list">
                                        <ul className="breadcrumb">
                                            <li><NavLink to="/">Home - Pages -</NavLink></li>
                                            <li><NavLink to="#">Courses 1</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <GreatOffers />
                <section className="feature-course pt-150 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title text-center mb-30">
                                    <h5 className="bottom-line mb-25">Featured Courses</h5>
                                    <h2>Explore our Popular Courses</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-12 text-center">
                                <div className="portfolio-menu mb-60">
                                    <button className="gf_btn active" data-filter='*'>All</button>
                                    <button className="gf_btn" data-filter='.cat1'>Career</button>
                                    <button className="gf_btn" data-filter='.cat2'>Development</button>
                                    <button className="gf_btn" data-filter='.cat3'>Business</button>
                                    <button className="gf_btn" data-filter='.cat4'>science</button>
                                    <button className="gf_btn" data-filter='.cat5'>Design</button>
                                </div>
                            </div>
                        </div>
                        <div className="grid row">
                            <div className="col-lg-4 col-md-6 grid-item cat2 cat3">
                                <div className="z-gallery mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <NavLink to="course-details.html"><img className="img-fluid" src="./assets/img/course/01.png" alt="" /></NavLink>
                                        <div className="feedback-tag">4.8(256)</div>
                                        <div className="heart-icon"><i className="fas fa-heart"></i></div>
                                    </div>
                                    <div className="z-gallery__content">
                                        <div className="course__tag mb-15">
                                            <span>Science</span>
                                            <span>Lab</span>
                                            <NavLink className="f-right" to="instructor-details.html"><img src="./assets/img/course/in1.png" alt="" /></NavLink>
                                        </div>
                                        <h4 className="sub-title mb-20"><NavLink to="course-details.html">Take Your Career to the Next Level Future</NavLink></h4>
                                        <div className="course__meta">
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 Class</span>
                                            <span><img className="icon" src="./assets/img/icon/bar-chart.svg" alt="course-meta" /> Higher</span>
                                            <span><img className="icon" src="./assets/img/icon/user.svg" alt="course-meta" /> 6395+</span>
                                            <span>$260</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item cat1 cat3 cat4">
                                <div className="z-gallery mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <NavLink to="course-details.html"><img className="img-fluid" src="./assets/img/course/02.png" alt="" /></NavLink>
                                        <div className="feedback-tag">4.8(256)</div>
                                        <div className="heart-icon"><i className="fas fa-heart"></i></div>
                                    </div>
                                    <div className="z-gallery__content">
                                        <div className="course__tag mb-15">
                                            <span>Science</span>
                                            <span>Lab</span>
                                            <NavLink className="f-right" to="instructor-details.html"><img src="./assets/img/course/in2.png" alt="" /></NavLink>
                                        </div>
                                        <h4 className="sub-title mb-20"><NavLink to="course-details.html">Your Career to build for the pro level</NavLink></h4>
                                        <div className="course__meta">
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 Class</span>
                                            <span><img className="icon" src="./assets/img/icon/bar-chart.svg" alt="course-meta" /> Higher</span>
                                            <span><img className="icon" src="./assets/img/icon/user.svg" alt="course-meta" /> 6395+</span>
                                            <span>$260</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item cat2 cat1 cat5">
                                <div className="z-gallery mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <NavLink to="course-details.html"><img className="img-fluid" src="./assets/img/course/03.png" alt="" /></NavLink>
                                        <div className="feedback-tag">4.8(256)</div>
                                        <div className="heart-icon"><i className="fas fa-heart"></i></div>
                                    </div>
                                    <div className="z-gallery__content">
                                        <div className="course__tag mb-15">
                                            <span>Science</span>
                                            <span>Lab</span>
                                            <NavLink className="f-right" to="instructor-details.html"><img src="./assets/img/course/in3.png" alt="" /></NavLink>
                                        </div>
                                        <h4 className="sub-title mb-20"><NavLink to="course-details.html">Take A Course For You Biright Future</NavLink></h4>
                                        <div className="course__meta">
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 Class</span>
                                            <span><img className="icon" src="./assets/img/icon/bar-chart.svg" alt="course-meta" /> Higher</span>
                                            <span><img className="icon" src="./assets/img/icon/user.svg" alt="course-meta" /> 6395+</span>
                                            <span>$260</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item cat2 cat3">
                                <div className="z-gallery mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <NavLink to="course-details.html"><img className="img-fluid" src="./assets/img/course/04.png" alt="" /></NavLink>
                                        <div className="feedback-tag">4.8(256)</div>
                                        <div className="heart-icon"><i className="fas fa-heart"></i></div>
                                    </div>
                                    <div className="z-gallery__content">
                                        <div className="course__tag mb-15">
                                            <span>Science</span>
                                            <span>Lab</span>
                                            <NavLink className="f-right" to="instructor-details.html"><img src="./assets/img/course/in4.png" alt="" /></NavLink>
                                        </div>
                                        <h4 className="sub-title mb-20"><NavLink to="course-details.html">Take Your Career to the Next Level Future</NavLink></h4>
                                        <div className="course__meta">
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 Class</span>
                                            <span><img className="icon" src="./assets/img/icon/bar-chart.svg" alt="course-meta" /> Higher</span>
                                            <span><img className="icon" src="./assets/img/icon/user.svg" alt="course-meta" /> 6395+</span>
                                            <span>$260</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item cat5 cat4">
                                <div className="z-gallery mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <NavLink to="course-details.html"><img className="img-fluid" src="./assets/img/course/05.png" alt="" /></NavLink>
                                        <div className="feedback-tag">4.8(256)</div>
                                        <div className="heart-icon"><i className="fas fa-heart"></i></div>
                                    </div>
                                    <div className="z-gallery__content">
                                        <div className="course__tag mb-15">
                                            <span>Science</span>
                                            <span>Lab</span>
                                            <NavLink className="f-right" to="instructor-details.html"><img src="./assets/img/course/in5.png" alt="" /></NavLink>
                                        </div>
                                        <h4 className="sub-title mb-20"><NavLink to="course-details.html">Your Career to build for the pro level</NavLink></h4>
                                        <div className="course__meta">
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 Class</span>
                                            <span><img className="icon" src="./assets/img/icon/bar-chart.svg" alt="course-meta" /> Higher</span>
                                            <span><img className="icon" src="./assets/img/icon/user.svg" alt="course-meta" /> 6395+</span>
                                            <span>$260</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item cat3 cat1">
                                <div className="z-gallery mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <NavLink to="course-details.html"><img className="img-fluid" src="./assets/img/course/06.png" alt="" /></NavLink>
                                        <div className="feedback-tag">4.8(256)</div>
                                        <div className="heart-icon"><i className="fas fa-heart"></i></div>
                                    </div>
                                    <div className="z-gallery__content">
                                        <div className="course__tag mb-15">
                                            <span>Science</span>
                                            <span>Lab</span>
                                            <NavLink className="f-right" to="instructor-details.html"><img src="./assets/img/course/in6.png" alt="" /></NavLink>
                                        </div>
                                        <h4 className="sub-title mb-20"><NavLink to="course-details.html">Take A Course For You Biright Future</NavLink></h4>
                                        <div className="course__meta">
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 Class</span>
                                            <span><img className="icon" src="./assets/img/icon/bar-chart.svg" alt="course-meta" /> Higher</span>
                                            <span><img className="icon" src="./assets/img/icon/user.svg" alt="course-meta" /> 6395+</span>
                                            <span>$260</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-12 mt-20 text-center mb-20">
                                <NavLink to="courses.html" className="theme_btn">Explore More</NavLink>
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

export default Courses
const Wrapper = styled.div``