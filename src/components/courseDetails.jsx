import { NavLink } from "react-router-dom"
import styled from "styled-components"
import Footer from "./footer"
import GreatOffers from "./greatOffers"
import Header from "./header"
import Subscribe from "./subscribe"

const CourseDetails = () => {
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
                                    <h1 className="page-title mb-25">Courses Details</h1>
                                    <div className="breadcrumb-list">
                                        <ul className="breadcrumb">
                                            <li><NavLink to="/">Home - Pages -</NavLink></li>
                                            <li><NavLink to="#">Courses Details</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="course-details-area pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-7">
                                <div className="courses-details-wrapper mb-30">
                                    <h2 className="courses-title mb-30">Fundamentals Of Dslr Photography</h2>
                                    <h5>Photography Specialist By Jason Momoa</h5>
                                    <div className="course-details-img mb-30">
                                        <div className="video-wrapper">
                                            <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04" className="popup-video"><i className="fas fa-play"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="courses-tag-btn">
                                        <NavLink to="#">Add to wishlist</NavLink>
                                        <NavLink to="#">Share</NavLink>
                                        <NavLink to="#">Gift this course</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-5">
                                <div className="learn-area mb-30">
                                    <ul className="cart-list-tag d-sm-inline-flex align-items-center mb-50">
                                        <li>
                                            <div className="price-list">
                                                <h5><span>$123.65</span> <b className="sub-title">$93.65</b></h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="cart-btn">
                                                <NavLink className="theme_btn" to="#">Add To Cart</NavLink>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="video-wrapper courses-cart-video">
                                                <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04" className="popup-video"><i className="fas fa-play"></i></NavLink>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="learn-box">
                                        <h5>25 Lessons ( 3h 36m )</h5>
                                        <ul className="learn-list">
                                            <li>
                                                <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video"><img src="assets/img/icon/video-player.svg" alt="course-list" /></span> 01. Intro Video <span className="time float-end">4:02</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video"><i className="fal fa-lock-alt"></i></span> 02. How to Open Camera <span className="time float-end">2:03</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video"><i className="fal fa-lock-alt"></i></span> 03. Balancing the Exposure <span className="time float-end">5:03</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video"><i className="fal fa-lock-alt"></i></span> 04. Preparing to Shoot <span className="time float-end">5:12</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video"><i className="fal fa-lock-alt"></i></span> 05. Studio Demonstration <span className="time float-end">6:12</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video"><i className="fal fa-lock-alt"></i></span> 06. Shutter Speed <span className="time float-end">7:00</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video"><i className="fal fa-lock-alt"></i></span> 07. Aperture <span className="time float-end">6:05</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video"><i className="fal fa-lock-alt"></i></span> 08. ISO <span className="time float-end">30:00</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video"><i className="fal fa-lock-alt"></i></span> 09. Editing Tips & Tricks <span className="time float-end">20:03</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video"><i className="fal fa-lock-alt"></i></span> 10. Advance Photography <span className="time float-end">40:36</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video"><i className="fal fa-lock-alt"></i></span> 10. Advance Photography-2 <span className="time float-end">40:36</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video"><i className="fal fa-lock-alt"></i></span> 10. Advance Photography-3 <span className="time float-end">40:36</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video"><i className="fal fa-lock-alt"></i></span> 10. Advance Photography-4 <span className="time float-end">40:36</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-7">
                                <div className="project-details mb-65">
                                    <h2 className="courses-title mb-30">Photography Learning A-Z</h2>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.</p>
                                    <ul className="seller-rating d-md-inline-flex align-items-center mt-20 mb-10">
                                        <li>
                                            <NavLink to="#" className="theme_btn mb-10">Bestseller</NavLink>
                                        </li>
                                        <li>
                                            <div className="star-icon mb-10">
                                                <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                                <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                                <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                                <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                                <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                                <NavLink to="#">4.8 ( 256,384)</NavLink>
                                            </div>
                                        </li>
                                        <li>
                                            <h5 className="mb-10">Enroll 360,349</h5>
                                        </li>
                                    </ul>
                                    <h5 className="mb-25"><span>Created by</span> Jason Momoa & Uxaction Photography team</h5>
                                    <div className="date-lang">
                                        <span><b>Date :</b> 31/05/2020</span>
                                        <span><b>Language :</b> English</span>
                                    </div>
                                </div>
                                <div className="meet-our-teacher mb-65">
                                    <h2 className="courses-title mb-30">Meet Your Teacher</h2>
                                    <div className="teachers-content mb-25">
                                        <img className="teacher_01" src="assets/img/course/details/teacher.png" alt="" />
                                        <div className="teachers-content__text">
                                            <h5>Jason Momoa</h5>
                                            <p>Photography Specialist</p>
                                        </div>
                                    </div>
                                    <p className="mb-20">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.</p>
                                    <p className="mb-20">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.Lorem ipsum dolor.</p>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy.</p>
                                </div>
                                <div className="skill-area">
                                    <h2 className="courses-title mb-35">Related Skills</h2>
                                    <div className="courses-tag-btn">
                                        <NavLink to="#">Photography</NavLink>
                                        <NavLink to="#">Outdoor</NavLink>
                                        <NavLink to="#">Indoor Photography</NavLink>
                                        <NavLink to="#">DSLR</NavLink>
                                        <NavLink to="#">Creative</NavLink>
                                        <NavLink to="#">Camera</NavLink>
                                        <NavLink to="#">Professional</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <div className="courses-ingredients">
                                    <h2 className="corses-title mb-30">Course Includes</h2>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore.</p>
                                    <ul className="courses-item mt-25">
                                        <li><img src="assets/img/icon/video.svg" alt="" /> 4 hours on-demand video</li>
                                        <li><img src="assets/img/icon/newspaper.svg" alt="" /> 73 articles</li>
                                        <li><img src="assets/img/icon/download.svg" alt="" /> 650+ downloadable resources</li>
                                        <li><img src="assets/img/icon/infinity.svg" alt="" /> Full Lifetime Access</li>
                                        <li><img src="assets/img/icon/mobile.svg" alt="" /> Access on mobile and TV or any devices</li>
                                        <li><img src="assets/img/icon/certificate-line.svg" alt="" /> Certificate of completion</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="feature-course pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
                    <div className="container">
                        <h2 className="courses-title mb-35">Recent Courses</h2>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="z-gallery mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <NavLink to="/course-details"><img className="img-fluid" src="assets/img/course/01.png" alt="" /></NavLink>
                                        <div className="feedback-tag">4.8(256)</div>
                                        <div className="heart-icon"><i className="fas fa-heart"></i></div>
                                    </div>
                                    <div className="z-gallery__content">
                                        <div className="course__tag mb-15">
                                            <span>Science</span>
                                            <span>Lab</span>
                                            <NavLink className="f-right" to="instructor-details.html"><img src="assets/img/course/in1.png" alt="" /></NavLink>
                                        </div>
                                        <h4 className="sub-title mb-20"><NavLink to="/course-details">Take Your Career to the Next Level Future</NavLink></h4>
                                        <div className="course__meta">
                                            <span><img className="icon" src="assets/img/icon/time.svg" alt="course-meta" /> 12 Class</span>
                                            <span><img className="icon" src="assets/img/icon/bar-chart.svg" alt="course-meta" /> Higher</span>
                                            <span><img className="icon" src="assets/img/icon/user.svg" alt="course-meta" /> 6395+</span>
                                            <span>$260</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="z-gallery mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <NavLink to="/course-details"><img className="img-fluid" src="assets/img/course/02.png" alt="" /></NavLink>
                                        <div className="feedback-tag">4.8(256)</div>
                                        <div className="heart-icon"><i className="fas fa-heart"></i></div>
                                    </div>
                                    <div className="z-gallery__content">
                                        <div className="course__tag mb-15">
                                            <span>Science</span>
                                            <span>Lab</span>
                                            <NavLink className="f-right" to="instructor-details.html"><img src="assets/img/course/in2.png" alt="" /></NavLink>
                                        </div>
                                        <h4 className="sub-title mb-20"><NavLink to="/course-details">Your Career to build for the pro level</NavLink></h4>
                                        <div className="course__meta">
                                            <span><img className="icon" src="assets/img/icon/time.svg" alt="course-meta" /> 12 Class</span>
                                            <span><img className="icon" src="assets/img/icon/bar-chart.svg" alt="course-meta" /> Higher</span>
                                            <span><img className="icon" src="assets/img/icon/user.svg" alt="course-meta" /> 6395+</span>
                                            <span>$260</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="z-gallery mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <NavLink to="/course-details"><img className="img-fluid" src="assets/img/course/03.png" alt="" /></NavLink>
                                        <div className="feedback-tag">4.8(256)</div>
                                        <div className="heart-icon"><i className="fas fa-heart"></i></div>
                                    </div>
                                    <div className="z-gallery__content">
                                        <div className="course__tag mb-15">
                                            <span>Science</span>
                                            <span>Lab</span>
                                            <NavLink className="f-right" to="instructor-details.html"><img src="assets/img/course/in3.png" alt="" /></NavLink>
                                        </div>
                                        <h4 className="sub-title mb-20"><NavLink to="/course-details">Take A Course For You Biright Future</NavLink></h4>
                                        <div className="course__meta">
                                            <span><img className="icon" src="assets/img/icon/time.svg" alt="course-meta" /> 12 Class</span>
                                            <span><img className="icon" src="assets/img/icon/bar-chart.svg" alt="course-meta" /> Higher</span>
                                            <span><img className="icon" src="assets/img/icon/user.svg" alt="course-meta" /> 6395+</span>
                                            <span>$260</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <GreatOffers />
                <Subscribe />
            </main>
            <Footer />
        </Wrapper>
    )
}

export default CourseDetails
const Wrapper = styled.div`
    .course-details-img {
        background-image: url("./assets/img/course/details/01.jpg")
    }
`