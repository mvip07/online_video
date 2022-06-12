import styled from "styled-components"
import Footer from "../components/footer"
import GreatOffers from "../components/greatOffers"
import Header from "../components/header"
import Information from "../components/information"
import Subscribe from "../components/subscribe"
import { NavLink } from "react-router-dom"

const CoursesTwo = () => {
    return (
        <Wrapper>
            <Header />
            <main>
                <section className="page-title-area d-flex align-items-end">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="page-title-wrapper mb-50">
                                    <h1 className="page-title mb-25">Courses 2</h1>
                                    <div className="breadcrumb-list">
                                        <ul className="breadcrumb">
                                            <li><NavLink to="/">Home - Pages -</NavLink></li>
                                            <li><NavLink to="#">Courses 2</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <GreatOffers />
                <section className="feature-course gradient-bg pt-150 pb-120 pt-md-95 pb-md-75 pt-xs-95 pb-xs-70">
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
                                <div className="z-gallery z-gallery-two gallery-03 mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <NavLink to="/course-details"><img className="img-fluid" src="./assets/img/course/13.jpg" alt="" /></NavLink>
                                        <div className="heart-icon"><i className="fas fa-heart"></i></div>
                                        <div className="research-tag">
                                            <span>Research</span>
                                            <span>Tag</span>
                                        </div>
                                    </div>
                                    <div className="z-gallery__content pos-rel">
                                        <div className="course__meta d-flex align-items-center justify-content-between mb-15">
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 Periods</span>
                                            <span><img className="icon" src="./assets/img/icon/bar-chart.svg" alt="course-meta" /> Intermediate</span>
                                        </div>
                                        <h4 className="sub-title mb-15"><NavLink to="/course-details">Take Your Career to the Next Level Future</NavLink></h4>
                                        <p className="mb-20">There are many variations of passages of with Lorem Ipsum available.</p>
                                        <div className="course__authors  d-xl-flex align-items-center justify-content-between mb-20">
                                            <div className="course__authors-box d-flex align-items-center">
                                                <img src="./assets/img/course/in7.png" alt="" />
                                                <div className="course__authors-box-text ml-10">
                                                    <h5>Mark Herry</h5>
                                                    <span>Career Developer</span>
                                                </div>
                                            </div>
                                            <p><span>6593+</span> Students</p>
                                        </div>
                                        <div className="feedback-tag pt-20">
                                            <span>4.8 <i className="fas fa-star"></i> <b>(256)</b></span>
                                            <NavLink to="/course-details" className="read_more float-end">Learn More+</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item cat1 cat2">
                                <div className="z-gallery z-gallery-two gallery-03 mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <NavLink to="/course-details"><img className="img-fluid" src="./assets/img/course/14.jpg" alt="" /></NavLink>
                                        <div className="heart-icon"><i className="fas fa-heart"></i></div>
                                        <div className="research-tag">
                                            <span>Research</span>
                                            <span>Tag</span>
                                        </div>
                                    </div>
                                    <div className="z-gallery__content pos-rel">
                                        <div className="course__meta d-flex align-items-center justify-content-between mb-15" >
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 Periods</span>
                                            <span><img className="icon" src="./assets/img/icon/bar-chart.svg" alt="course-meta" /> Intermediate</span>
                                        </div>
                                        <h4 className="sub-title mb-15"><NavLink to="/course-details">Take Your Career to the Next Level Future</NavLink></h4>
                                        <p className="mb-20">There are many variations of passages of with Lorem Ipsum available.</p>
                                        <div className="course__authors  d-xl-flex align-items-center justify-content-between mb-20">
                                            <div className="course__authors-box d-flex align-items-center">
                                                <img src="./assets/img/course/in7.png" alt="" />
                                                <div className="course__authors-box-text ml-10">
                                                    <h5>Mark Herry</h5>
                                                    <span>Career Developer</span>
                                                </div>
                                            </div>
                                            <p><span>6593+</span> Students</p>
                                        </div>
                                        <div className="feedback-tag pt-20">
                                            <span>4.8 <i className="fas fa-star"></i> <b>(256)</b></span>
                                            <NavLink to="/course-details" className="read_more float-end">Learn More+</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item cat2">
                                <div className="z-gallery z-gallery-two gallery-03 mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <NavLink to="/course-details"><img className="img-fluid" src="./assets/img/course/15.jpg" alt="" /></NavLink>
                                        <div className="heart-icon"><i className="fas fa-heart"></i></div>
                                        <div className="research-tag">
                                            <span>Research</span>
                                            <span>Tag</span>
                                        </div>
                                    </div>
                                    <div className="z-gallery__content pos-rel">
                                        <div className="course__meta d-flex align-items-center justify-content-between mb-15">
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 Periods</span>
                                            <span><img className="icon" src="./assets/img/icon/bar-chart.svg" alt="course-meta" /> Intermediate</span>
                                        </div>
                                        <h4 className="sub-title mb-15"><NavLink to="/course-details">Take Your Career to the Next Level Future</NavLink></h4>
                                        <p className="mb-20">There are many variations of passages of with Lorem Ipsum available.</p>
                                        <div className="course__authors  d-xl-flex align-items-center justify-content-between mb-20">
                                            <div className="course__authors-box d-flex align-items-center">
                                                <img src="./assets/img/course/in7.png" alt="" />
                                                <div className="course__authors-box-text ml-10">
                                                    <h5>Mark Herry</h5>
                                                    <span>Career Developer</span>
                                                </div>
                                            </div>
                                            <p><span>6593+</span> Students</p>
                                        </div>
                                        <div className="feedback-tag pt-20">
                                            <span>4.8 <i className="fas fa-star"></i> <b>(256)</b></span>
                                            <NavLink to="/course-details" className="read_more float-end">Learn More+</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item cat1">
                                <div className="z-gallery z-gallery-two gallery-03 mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <NavLink to="/course-details"><img className="img-fluid" src="./assets/img/course/16.jpg" alt="" /></NavLink>
                                        <div className="heart-icon"><i className="fas fa-heart"></i></div>
                                        <div className="research-tag">
                                            <span>Research</span>
                                            <span>Tag</span>
                                        </div>
                                    </div>
                                    <div className="z-gallery__content pos-rel">
                                        <div className="course__meta d-flex align-items-center justify-content-between mb-15">
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 Periods</span>
                                            <span><img className="icon" src="./assets/img/icon/bar-chart.svg" alt="course-meta" /> Intermediate</span>
                                        </div>
                                        <h4 className="sub-title mb-15"><NavLink to="/course-details">Take Your Career to the Next Level Future</NavLink></h4>
                                        <p className="mb-20">There are many variations of passages of with Lorem Ipsum available.</p>
                                        <div className="course__authors  d-xl-flex align-items-center justify-content-between mb-20">
                                            <div className="course__authors-box d-flex align-items-center">
                                                <img src="./assets/img/course/in7.png" alt="" />
                                                <div className="course__authors-box-text ml-10" >
                                                    <h5>Mark Herry</h5>
                                                    <span>Career Developer</span>
                                                </div>
                                            </div>
                                            <p><span>6593+</span> Students</p>
                                        </div>
                                        <div className="feedback-tag pt-20">
                                            <span>4.8 <i className="fas fa-star"></i> <b>(256)</b></span>
                                            <NavLink to="/course-details" className="read_more float-end">Learn More+</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item cat3">
                                <div className="z-gallery z-gallery-two gallery-03 mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <NavLink to="/course-details"><img className="img-fluid" src="./assets/img/course/17.jpg" alt="" /></NavLink>
                                        <div className="heart-icon"><i className="fas fa-heart"></i></div>
                                        <div className="research-tag">
                                            <span>Research</span>
                                            <span>Tag</span>
                                        </div>
                                    </div>
                                    <div className="z-gallery__content pos-rel">
                                        <div className="course__meta d-flex align-items-center justify-content-between mb-15">
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 Periods</span>
                                            <span><img className="icon" src="./assets/img/icon/bar-chart.svg" alt="course-meta" /> Intermediate</span>
                                        </div>
                                        <h4 className="sub-title mb-15"><NavLink to="/course-details">Take Your Career to the Next Level Future</NavLink></h4>
                                        <p className="mb-20">There are many variations of passages of with Lorem Ipsum available.</p>
                                        <div className="course__authors  d-xl-flex align-items-center justify-content-between mb-20">
                                            <div className="course__authors-box d-flex align-items-center">
                                                <img src="./assets/img/course/in7.png" alt="" />
                                                <div className="course__authors-box-text ml-10">
                                                    <h5>Mark Herry</h5>
                                                    <span>Career Developer</span>
                                                </div>
                                            </div>
                                            <p><span>6593+</span> Students</p>
                                        </div>
                                        <div className="feedback-tag pt-20">
                                            <span>4.8 <i className="fas fa-star"></i> <b>(256)</b></span>
                                            <NavLink to="/course-details" className="read_more float-end">Learn More+</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item cat2 cat1">
                                <div className="z-gallery z-gallery-two gallery-03 mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <NavLink to="/course-details"><img className="img-fluid" src="./assets/img/course/18.jpg" alt="" /></NavLink>
                                        <div className="heart-icon"><i className="fas fa-heart"></i></div>
                                        <div className="research-tag">
                                            <span>Research</span>
                                            <span>Tag</span>
                                        </div>
                                    </div>
                                    <div className="z-gallery__content pos-rel">
                                        <div className="course__meta d-flex align-items-center justify-content-between mb-15">
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 Periods</span>
                                            <span><img className="icon" src="./assets/img/icon/bar-chart.svg" alt="course-meta" /> Intermediate</span>
                                        </div>
                                        <h4 className="sub-title mb-15"><NavLink to="/course-details">Take Your Career to the Next Level Future</NavLink></h4>
                                        <p className="mb-20">There are many variations of passages of with Lorem Ipsum available.</p>
                                        <div className="course__authors  d-xl-flex align-items-center justify-content-between mb-20">
                                            <div className="course__authors-box d-flex align-items-center">
                                                <img src="./assets/img/course/in7.png" alt="" />
                                                <div className="course__authors-box-text ml-10">
                                                    <h5>Mark Herry</h5>
                                                    <span>Career Developer</span>
                                                </div>
                                            </div>
                                            <p><span>6593+</span> Students</p>
                                        </div>
                                        <div className="feedback-tag pt-20">
                                            <span>4.8 <i className="fas fa-star"></i> <b>(256)</b></span>
                                            <NavLink to="/course-details" className="read_more float-end">Learn More+</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-12 mt-20 text-center mb-20">
                                <NavLink to="/courses" className="theme_btn">Explore More</NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                <Information />
                <Subscribe />
            </main>
            <Footer />
        </Wrapper >
    )
}

export default CoursesTwo
const Wrapper = styled.div``
