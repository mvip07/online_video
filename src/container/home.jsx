import styled from "styled-components"
import { NavLink } from "react-router-dom"
import Header from "../components/header"
import Footer from "../components/footer"
import GreatOffers from "../components/greatOffers"
import Information from "../components/information"
import Subscribe from "../components/subscribe"


const HomeOne = () => {
    return (
        <Wrapper>
            <Header />

            <div className="body-overlay"></div>
            <main>
                <section className="slider-area pt-180 pt-xs-150 pt-150 pb-xs-35">
                    <img className="sl-shape shape_01" src="./assets/img/icon/01.svg" alt="" />
                    <img className="sl-shape shape_02" src="./assets/img/icon/02.svg" alt="" />
                    <img className="sl-shape shape_03" src="./assets/img/icon/03.svg" alt="" />
                    <img className="sl-shape shape_04" src="./assets/img/icon/04.svg" alt="" />
                    <img className="sl-shape shape_05" src="./assets/img/icon/05.svg" alt="" />
                    <img className="sl-shape shape_06" src="./assets/img/icon/06.svg" alt="" />
                    <img className="sl-shape shape_07" src="./assets/img/shape/dot-box-5.svg" alt="" />
                    <div className="main-slider pt-10">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 order-last order-lg-first">
                                    <div className="slider__img__box mb-50 pr-30">
                                        <img className="img-one mt-55 pr-70" src="./assets/img/slider/01.png" alt="" />
                                        <img className="slide-shape img-two" src="./assets/img/slider/02.png" alt="" />
                                        <img className="slide-shape img-three" src="./assets/img/slider/03.png" alt="" />
                                        <img className="slide-shape img-four" src="./assets/img/shape/dot-box-1.svg" alt="" />
                                        <img className="slide-shape img-five" src="./assets/img/shape/dot-box-2.svg" alt="" />
                                        <img className="slide-shape img-six" src="./assets/img/shape/zigzg-1.svg" alt="" />
                                        <img className="slide-shape img-seven wow fadeInRight animated" data-delay="1.5s" src="./assets/img/icon/dot-plan-1.svg" alt="Chose-img" />
                                        <img className="slide-shape img-eight" src="./assets/img/slider/earth-bg.svg" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="slider__content pt-15">
                                        <h1 className="main-title mb-40 wow fadeInUp2 animated" data-wow-delay='.1s'>Learn Everyday & Any New Skills Online with Top <span className="vec-shape">Instructors.</span></h1>
                                        <h5 className="mb-35 wow fadeInUp2 animated" data-wow-delay='.2s'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</h5>
                                        <ul className="search__area d-md-inline-flex align-items-center justify-content-between mb-30">
                                            <li>
                                                <div className="widget__search">
                                                    <form className="input-form" action="#">
                                                        <input type="text" placeholder="Find Courses" />
                                                    </form>
                                                    <button className="search-icon"><i className="far fa-search"></i></button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="widget__select">
                                                    <select name="select-cat" id="select" style={{ display: "none" }} >
                                                        <option value="">Categories</option>
                                                        <option value="">className One</option>
                                                        <option value="">className Two</option>
                                                        <option value="">className Three</option>
                                                        <option value="">className Four</option>
                                                        <option value="">className Five</option>
                                                    </select>
                                                    <div className="nice-select" tabIndex="0"><span className="current">Categories</span><ul className="list"><li data-value="" className="option selected focus">Categories</li><li data-value="" className="option">Class One</li><li data-value="" className="option">Class Two</li><li data-value="" className="option">Class Three</li><li data-value="" className="option">Class Four</li><li data-value="" className="option">Class Five</li></ul></div>
                                                </div>
                                            </li>
                                            <li>
                                                <button className="theme_btn search_btn ml-35">Search Now</button>
                                            </li>
                                        </ul>
                                        <p className="highlight-text"><span>#1</span> Worldwide Online Learning & Skills Development Platform</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <GreatOffers />
                <Information />
                <section className="feature-course pt-150 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="section-title text-center mb-50">
                                    <h5 className="bottom-line mb-25">Featured Courses</h5>
                                    <h2>Explore our Popular Courses</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-12 text-center">
                                <div className="portfolio-menu mb-30">
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
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 className</span>
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
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 className</span>
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
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 className</span>
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
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 className</span>
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
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 className</span>
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
                                            <span><img className="icon" src="./assets/img/icon/time.svg" alt="course-meta" /> 12 className</span>
                                            <span><img className="icon" src="./assets/img/icon/bar-chart.svg" alt="course-meta" /> Higher</span>
                                            <span><img className="icon" src="./assets/img/icon/user.svg" alt="course-meta" /> 6395+</span>
                                            <span>$260</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt-20 text-center mb-20 wow fadeInUp2 animated" data-wow-delay='.3s'>
                                <NavLink to="courses.html" className="theme_btn">All Categories</NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="why-chose-section-wrapper gradient-bg mr-100 ml-100">
                    <section className="why-chose-us">
                        <div className="why-chose-us-bg pt-150 pb-175 pt-md-95 pb-md-90 pt-xs-95 pb-xs-90">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="chose-img-wrapper mb-50 pos-rel">
                                            <div className="coures-member">
                                                <h5>Total Students</h5>
                                                <img className="choses chose_01" src="./assets/img/chose/01.png" alt="Chose-img" />
                                                <img className="choses chose_02" src="./assets/img/chose/02.png" alt="Chose-img" />
                                                <img className="choses chose_03" src="./assets/img/chose/03.png" alt="Chose-img" />
                                                <img className="choses chose_04" src="./assets/img/chose/04.png" alt="Chose-img" />
                                                <span>25k+</span>
                                            </div>
                                            <div className="feature tag_01"><span><img src="./assets/img/icon/shield-check.svg" alt="" /></span> Safe & Secured</div>
                                            <div className="feature tag_02"><span><img src="./assets/img/icon/catalog.svg" alt="" /></span> 120+ Catalog</div>
                                            <div className="feature tag_03"><span><i className="fal fa-check"></i></span> Quality Education</div>
                                            <div className="video-wrapper">
                                                <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04" className="popup-video"><i className="fas fa-play"></i></NavLink>
                                            </div>
                                            <div className="img-bg pos-rel">
                                                <img className="chose_05 pl-70 pl-lg-0 pl-md-0 pl-xs-0" src="./assets/img/chose/05.png" alt="Chose-img" />
                                            </div>
                                            <img className="chose chose_06" src="./assets/img/shape/dot-box3.svg" alt="Chose-img" />
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5">
                                        <div className="chose-wrapper pl-25 pl-lg-0 pl-md-0 pl-xs-0">
                                            <div className="section-title mb-30 wow fadeInUp2 animated" data-wow-delay='.1s'>
                                                <h5 className="bottom-line mb-25">Explore Zoomy</h5>
                                                <h2 className="mb-25">Why Choose Zoomy?</h2>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. There are many variations of passages of Lorem Ipsum available.</p>
                                            </div>
                                            <ul className="text-list mb-40 wow fadeInUp2 animated" data-wow-delay='.2s'>
                                                <li>There are many variations of passages of Lorem Ipsum.</li>
                                                <li>The majority have suffered alteration in some form. </li>
                                                <li>There are many variations of passages of Lorem Ipsum.</li>
                                            </ul>
                                            <NavLink to="about.html" className="theme_btn wow fadeInUp2 animated" data-wow-delay='.3s'>More Details</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="course-instructor nav-style-two pos-rel">
                        <div className="course-blur-shape"></div>
                        <div className="course-bg-space pt-150 pb-120 pt-md-95 pb-md-70 pt-xs-95 pb-xs-70">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-9">
                                        <div className="section-title text-center text-md-start mb-60">
                                            <h5 className="bottom-line mb-25">Our Instructor</h5>
                                            <h2 className="mb-25">Explore Experienced Instructor</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="instructor-active owl-carousel">
                                    <div className="item">
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
                                                <h4 className="sub-title mb-10"><NavLink to="instructor-profile.html">John Zlathan</NavLink></h4>
                                                <p>Software Development</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
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
                                                <h4 className="sub-title mb-10"><NavLink to="instructor-profile.html">Mally Yan</NavLink></h4>
                                                <p>UI/UX Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
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
                                                <h4 className="sub-title mb-10"><NavLink to="instructor-profile.html">Mesud Lamb</NavLink></h4>
                                                <p>Programmer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
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
                                                <h4 className="sub-title mb-10"><NavLink to="instructor-profile.html">Havana Lyon</NavLink></h4>
                                                <p>Digital Marketing</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
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
                                                <h4 className="sub-title mb-10"><NavLink to="instructor-profile.html">John Zlathan</NavLink></h4>
                                                <p>Software Development</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
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
                                                <h4 className="sub-title mb-10"><NavLink to="instructor-profile.html">Mally Yan</NavLink></h4>
                                                <p>UI/UX Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="testimonial-area testimonial-pad pt-150 pb-120 pt-md-95 pb-md-70 pt-xs-95 pb-xs-70">
                    <div className="container custom-container-testimonial">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center text-md-start mb-35">
                                    <h5 className="bottom-line mb-25">Our Instructor</h5>
                                    <h2 className="mb-25">Explore Experienced Instructor</h2>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center text-lg-end">
                                <NavLink to="instructor.html" className="theme_btn">Read All Reviews</NavLink>
                            </div>
                        </div>
                        <div className="row testimonial-active-01">
                            <div className="col-xl-3">
                                <div className="item">
                                    <div className="testimonial-wrapper mb-30">
                                        <div className="testimonial-authors overflow-hidden mb-15">
                                            <div className="testimonial-authors__avatar">
                                                <img src="./assets/img/testimonial/01.png" alt="testi-author" />
                                            </div>
                                            <div className="testimonial-authors__content mt-10">
                                                <h4 className="sub-title">Georgia Laila</h4>
                                                <p>Full Stack Developer</p>
                                            </div>
                                        </div>
                                        <p>" Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed di nonumy eirmod tempor invidt utlabore et dolore magn aliq erat.</p>
                                        <div className="quote-icon mt-20">
                                            <img src="./assets/img/icon/quote.svg" alt="quote-icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="item">
                                    <div className="testimonial-wrapper mb-30">
                                        <div className="testimonial-authors overflow-hidden mb-15">
                                            <div className="testimonial-authors__avatar">
                                                <img src="./assets/img/testimonial/02.png" alt="testi-author" />
                                            </div>
                                            <div className="testimonial-authors__content mt-10">
                                                <h4 className="sub-title">Emily Gemon</h4>
                                                <p>User Interface</p>
                                            </div>
                                        </div>
                                        <p>" Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed di nonumy eirmod tempor invidt utlabore et dolore magn aliq erat.</p>
                                        <div className="quote-icon mt-20">
                                            <img src="./assets/img/icon/quote.svg" alt="quote-icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="item">
                                    <div className="testimonial-wrapper mb-30">
                                        <div className="testimonial-authors overflow-hidden mb-15">
                                            <div className="testimonial-authors__avatar">
                                                <img src="./assets/img/testimonial/03.png" alt="testi-author" />
                                            </div>
                                            <div className="testimonial-authors__content mt-10">
                                                <h4 className="sub-title">Micheal George</h4>
                                                <p>Content Writer</p>
                                            </div>
                                        </div>
                                        <p>" Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed di nonumy eirmod tempor invidt utlabore et dolore magn aliq erat.</p>
                                        <div className="quote-icon mt-20">
                                            <img src="./assets/img/icon/quote.svg" alt="quote-icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="item">
                                    <div className="testimonial-wrapper mb-30">
                                        <div className="testimonial-authors overflow-hidden mb-15">
                                            <div className="testimonial-authors__avatar">
                                                <img src="./assets/img/testimonial/01.png" alt="testi-author" />
                                            </div>
                                            <div className="testimonial-authors__content mt-10">
                                                <h4 className="sub-title">Georgia Laila</h4>
                                                <p>Full Stack Developer</p>
                                            </div>
                                        </div>
                                        <p>" Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed di nonumy eirmod tempor invidt utlabore et dolore magn aliq erat.</p>
                                        <div className="quote-icon mt-20">
                                            <img src="./assets/img/icon/quote.svg" alt="quote-icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-area mr-100 ml-100">
                    <div className="blog-bg gradient-bg pl-100 pr-100 pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="section-title text-center mb-60">
                                        <h5 className="bottom-line mb-25">Latest News</h5>
                                        <h2 className="mb-25">Lots of new Blogs & News</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="z-blogs mb-30 wow fadeInUp2 animated" data-wow-delay='.1s'>
                                        <div className="z-blogs__thumb mb-30">
                                            <NavLink to="blog-details.html"><img src="./assets/img/blog/01.jpg" alt="blog-img" /></NavLink>
                                        </div>
                                        <div className="z-blogs__content">
                                            <h5 className="mb-25">Online . School . Skill</h5>
                                            <h4 className="sub-title mb-15"><NavLink to="blog-details.html">5 Ways to Use Padlet in Higher -Ed Online classNameroom</NavLink></h4>
                                            <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                                                <span>Date : June 15 , 2021</span>
                                                <span>By Guest Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="z-blogs mb-30 wow fadeInUp2 animated" data-wow-delay='.2s'>
                                        <div className="z-blogs__thumb mb-30">
                                            <NavLink to="blog-details.html"><img src="./assets/img/blog/02.jpg" alt="blog-img" /></NavLink>
                                        </div>
                                        <div className="z-blogs__content">
                                            <h5 className="mb-25">Education . Expert</h5>
                                            <h4 className="sub-title mb-15"><NavLink to="blog-details.html">4 New Zoom Features Enhance Virtual Teaching & Learning</NavLink></h4>
                                            <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                                                <span>Date : June 15 , 2021</span>
                                                <span>By Guest Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="z-blogs mb-30 wow fadeInUp2 animated" data-wow-delay='.3s'>
                                        <div className="z-blogs__thumb mb-30">
                                            <NavLink to="blog-details.html"><img src="./assets/img/blog/03.jpg" alt="blog-img" /></NavLink>
                                        </div>
                                        <div className="z-blogs__content">
                                            <h5 className="mb-25">Creative . Programmer</h5>
                                            <h4 className="sub-title mb-15"><NavLink to="blog-details.html">Using Social Media to Support Online Teaching</NavLink></h4>
                                            <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                                                <span>Date : June 15 , 2021</span>
                                                <span>By Guest Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-center mt-20 mb-30 wow fadeInUp2 animated" data-wow-delay='.4s'>
                                    <NavLink to="blog-details.html" className="theme_btn">Load More</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Subscribe />
            </main>

            <Footer />
        </Wrapper>
    )
}
export default HomeOne
const Wrapper = styled.div``