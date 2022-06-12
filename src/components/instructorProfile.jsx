import styled from "styled-components"
import { NavLink } from "react-router-dom"
import Subscribe from "./subscribe"
import Footer from "./footer"
import Header from "./header"
import Information from "./information"

const InstructorProfile = () => {
    return (
        <Wrapper>
            <Header />
            <main>
                <section className="page-title-area d-flex align-items-end" >
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="page-title-wrapper mb-50">
                                    <h1 className="page-title mb-25">Instructor-profile</h1>
                                    <div className="breadcrumb-list">
                                        <ul className="breadcrumb">
                                            <li><NavLink to="/">Home - Pages -</NavLink></li>
                                            <li><NavLink to="#">Instructor Profile</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="instructor-details-area pt-145 pb-110 pt-md-95 pb-md-60 pt-xs-95 pb-xs-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="instructor-profile-img mb-30" ></div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="instructor-profile">
                                    <h2>Instructor Profile</h2>
                                    <ul className="profile-list mb-50">
                                        <li>Name : <span>Chris Jordan</span></li>
                                        <li>Mobile Num: <span>+(123) 125-856-23</span></li>
                                        <li>Address : <span>24/7 Street Road , NY, USA</span></li>
                                        <li>Email : <span>info@example.com</span></li>
                                        <li>Website : <span>Chrisjordan.com</span></li>
                                        <li>
                                            <div className="social-media">
                                                <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                                <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                                <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                                <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="work-progress">
                                        <li>
                                            <div className="chart1 mb-30" data-percent="75">
                                                <div className="progress-content">
                                                    <h6>Design</h6>
                                                    <b>75%</b>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="chart1 mb-30" data-percent="90">
                                                <div className="progress-content">
                                                    <h6>Arts</h6>
                                                    <b>90%</b>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="chart1 mb-30" data-percent="95">
                                                <div className="progress-content">
                                                    <h6>Business</h6>
                                                    <b>95%</b>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="chart1 mb-30" data-percent="65">
                                                <div className="progress-content">
                                                    <h6>Career</h6>
                                                    <b>65%</b>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="instructor-profile">
                                    <h2>Courses Info</h2>
                                    <div className="star-icon mb-20">
                                        <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                        <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                        <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                        <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                        <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                    </div>
                                    <p className="mb-25">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use NavLink passage of Lorem Ipsum.</p>
                                    <h5 className="total-stu pt-30"><span><img src="assets/img/icon/avatar-outline-badged-2.svg" alt="" /> 36549+ Students</span> <span className="float-sm-end"><img src="assets/img/icon/course.svg" alt="" /> 36549+ Students</span></h5>
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

export default InstructorProfile
const Wrapper = styled.div`
    .instructor-profile-img {
        background-image: url("./assets/img/instructor/13.jpg");
    }
`