import styled from "styled-components"
import { NavLink } from "react-router-dom"

const HomeThree = () => {
    // style
    return (
        <Wrapper>
            <header>
                <div id="theme-menu-two" className="main-header-area main-head-three pl-100 pr-100 pt-20 pb-15">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-5">
                                <div className="logo"><NavLink to="/"><img src="./assets/img/logo/header_logo_one.svg" alt="" /></NavLink></div>
                            </div>
                            <div className="col-xl-7 col-lg-8 d-none d-lg-block">
                                <nav className="main-menu navbar navbar-expand-lg justify-content-center">
                                    <div className="nav-container">
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav">
                                                <li className="nav-item dropdown mega-menu">
                                                    <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        All Categories
                                                    </NavLink>
                                                    <ul className="dropdown-menu submenu mega-menu__sub-menu-box" aria-labelledby="navbarDropdown">
                                                        <li><NavLink to="/"><span><img src="./assets/img/icon/icon7.svg" alt="" /></span> Business</NavLink></li>
                                                        <li><NavLink to="/"><span><img src="./assets/img/icon/icon8.svg" alt="" /></span> Technology</NavLink></li>
                                                        <li><NavLink to="/"><span><img src="./assets/img/icon/icon9.svg" alt="" /></span> Development</NavLink></li>
                                                        <li><NavLink to="/"><span><img src="./assets/img/icon/icon10.svg" alt="" /></span> Photography</NavLink></li>
                                                        <li><NavLink to="/"><span><img src="./assets/img/icon/icon11.svg" alt="" /></span> Digital Marketing</NavLink></li>
                                                        <li><NavLink to="/"><span><img src="./assets/img/icon/icon12.svg" alt="" /></span> Programming</NavLink></li>
                                                        <li><NavLink to="/"><span><img src="./assets/img/icon/icon14.svg" alt="" /></span> Videograpgy</NavLink></li>
                                                        <li><NavLink to="/"><span><img src="./assets/img/icon/icon13.svg" alt="" /></span> Illustration</NavLink></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown active">
                                                    <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Home
                                                    </NavLink>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                                        <li><NavLink className="dropdown-item" to="/">Home Style 1</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/-2">Home Style 2</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/-3">Home Style 3</NavLink></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</NavLink>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                                        <li><NavLink className="dropdown-item" to="/about">About Us</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/courses">Course One</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/courses-2">Course Two</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/course-details">Courses Details</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/price">Price</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/instructor">Instructor</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/instructor-profile">Instructor Profile</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/faq">FAQ</NavLink></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Blog
                                                    </NavLink>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown4">
                                                        <li><NavLink className="dropdown-item" to="/blog">Blog Grid</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/blog-details">Blog Details</NavLink></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/contact" id="navbarDropdown5" role="button" aria-expanded="false">Contact</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-7">
                                <div className="right-nav d-flex align-items-center justify-content-end">
                                    <div className="right-btn mr-25 mr-xs-15">
                                        <ul className="d-flex align-items-center">
                                            <li><NavLink to="/contact" className="theme_btn free_btn">Try Free Now</NavLink></li>
                                            <li><NavLink className="sign-in ml-20" to="login"><img src="./assets/img/icon/user.svg" alt="" /></NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="hamburger-menu d-md-inline-block d-lg-none text-right">
                                        <NavLink to="#">
                                            <i className="far fa-bars"></i>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <aside className="slide-bar">
                <div className="close-mobile-menu">
                    <NavLink to="#"><i className="fas fa-times"></i></NavLink>
                </div>

                <div className="offset-sidebar">
                    <div className="offset-widget offset-logo mb-30">
                        <NavLink to="/">
                            <img src="./assets/img/logo/header_logo_one.svg" alt="logo" />
                        </NavLink>
                    </div>
                    <div className="offset-widget mb-40">
                        <div className="info-widget">
                            <h4 className="offset-title mb-20">About Us</h4>
                            <p className="mb-30">
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                                was born and will give you NavLink complete account of the system and expound the actual teachings of
                                the great explore
                            </p>
                            <NavLink className="theme_btn theme_btn_bg" to="/contact">Contact Us</NavLink>
                        </div>
                    </div>
                    <div className="offset-widget mb-30 pr-10">
                        <div className="info-widget info-widget2">
                            <h4 className="offset-title mb-20">Contact Info</h4>
                            <p> <i className="fal fa-address-book"></i> 23/A, Miranda City Likaoli Prikano, Dope</p>
                            <p> <i className="fal fa-phone"></i> +0989 7876 9865 9 </p>
                            <p> <i className="fal fa-envelope-open"></i> info@example.com </p>
                        </div>
                    </div>
                </div>
                <nav className="side-mobile-menu">
                    <ul id="mobile-menu-active">
                        <li className="has-dropdown">
                            <NavLink to="/">Home</NavLink>
                            <ul className="sub-menu">
                                <li><NavLink to="/">Home Style 1</NavLink></li>
                                <li><NavLink to="/-2">Home Style 2</NavLink></li>
                                <li><NavLink to="/-3">Home Style 3</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li className="has-dropdown">
                            <NavLink to="#">Pages</NavLink>
                            <ul className="sub-menu">
                                <li><NavLink to="/courses">Course One</NavLink></li>
                                <li><NavLink to="/courses-2">Course Two</NavLink></li>
                                <li><NavLink to="/course-details">Courses Details</NavLink></li>
                                <li><NavLink to="/price">Price</NavLink></li>
                                <li><NavLink to="/instructor">Instructor</NavLink></li>
                                <li><NavLink to="/instructor-profile">Instructor Profile</NavLink></li>
                                <li><NavLink to="/faq">FAQ</NavLink></li>
                                <li><NavLink to="/login">login</NavLink></li>
                            </ul>
                        </li>
                        <li className="has-dropdown"><NavLink to="#">Blogs</NavLink>
                            <ul className="sub-menu">
                                <li><NavLink to="/blog">Blog Grid</NavLink></li>
                                <li><NavLink to="/blog-details">Blog Details</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/contact">Contacts Us</NavLink></li>
                    </ul>
                </nav>

            </aside>
            <div className="body-overlay"></div>


            <main>
                <section className="slider-area slider-three slider-gradient-bg pt-120">
                    <img className="sl-shape shape_s13" src="./assets/img/icon/01.svg" alt="" />
                    <img className="sl-shape shape_01" src="./assets/img/icon/05.svg" alt="" />
                    <img className="sl-shape shape_02" src="./assets/img/icon/02.svg" alt="" />
                    <img className="sl-shape shape_03" src="./assets/img/icon/04.svg" alt="" />
                    <img className="sl-shape shape_04" src="./assets/img/icon/03a.svg" alt="" />
                    <img className="sl-shape shape_06" src="./assets/img/icon/06.svg" alt="" />
                    <div className="slider-blur"></div>
                    <div className="main-slider">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="slider__content slider__content__03 text-center pt-120 pr-50 pl-50">
                                        <h1 className="main-title mb-35 wow fadeInUp2 animated" data-wow-delay='.1s'>Learn online from the leaders in business education</h1>
                                        <h5 className="mb-45 wow fadeInUp2 animated" data-wow-delay='.2s'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look .</h5>
                                        <ul className="search__area d-md-inline-flex align-items-center justify-content-between mb-30 wow fadeInUp animated" data-delay="1.5s">
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
                                                    <select name="select-cat" id="select">
                                                        <option value="">Categories</option>
                                                        <option value="">Class One</option>
                                                        <option value="">Class Two</option>
                                                        <option value="">Class Three</option>
                                                        <option value="">Class Four</option>
                                                        <option value="">Class Five</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li>
                                                <button className="theme_btn search_btn ml-35">Search Now</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="slider-img-area">
                                        <div className="slider-img-box-three">
                                            <div className="video-wrapper">
                                                <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04" className="popup-video"><i className="fas fa-play"></i></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="course-categories pt-150 pb-115 pt-md-95 pb-md-65 pt-xs-95 pb-xs-65">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title section-title-3 text-center mb-60">
                                    <h5 className="mb-25">Browse Categories</h5>
                                    <h2 className="mb-20">Explore our <span className="bottom-line">Online Subjects</span></h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5 gx-4 online__course__cat">
                            <div className="col">
                                <div className="courses_link mb-30 wow fadeInUp2 animated" data-wow-delay='.1s'>
                                    <img className="icon-01 mb-35" src="./assets/img/icon/dna-color.svg" alt="" />
                                    <h4 className="sub-title mb-25">Science </h4>
                                    <NavLink to="/courses"><img className='arrows-icon' src="./assets/img/icon/arrow-right.svg" alt="arrow-right" /></NavLink>
                                </div>
                            </div>
                            <div className="col">
                                <div className="courses_link mb-30 wow fadeInUp2 animated" data-wow-delay='.2s'>
                                    <img className="icon-01 mb-35" src="./assets/img/icon/chart-NavLink.svg" alt="" />
                                    <h4 className="sub-title mb-25">Business</h4>
                                    <NavLink to="/courses"><img className='arrows-icon' src="./assets/img/icon/arrow-right.svg" alt="arrow-right" /></NavLink>
                                </div>
                            </div>
                            <div className="col">
                                <div className="courses_link mb-30 wow fadeInUp2 animated" data-wow-delay='.3s'>
                                    <img className="icon-01 mb-35" src="./assets/img/icon/code-NavLink.svg" alt="" />
                                    <h4 className="sub-title mb-25">Development</h4>
                                    <NavLink to="/courses"><img className='arrows-icon' src="./assets/img/icon/arrow-right.svg" alt="arrow-right" /></NavLink>
                                </div>
                            </div>
                            <div className="col">
                                <div className="courses_link mb-30 wow fadeInUp2 animated" data-wow-delay='.4s'>
                                    <img className="icon-01 mb-35" src="./assets/img/icon/cube-NavLink.svg" alt="" />
                                    <h4 className="sub-title mb-25">Career</h4>
                                    <NavLink to="/courses"><img className='arrows-icon' src="./assets/img/icon/arrow-right.svg" alt="arrow-right" /></NavLink>
                                </div>
                            </div>
                            <div className="col">
                                <div className="courses_link mb-30 wow fadeInUp2 animated" data-wow-delay='.5s'>
                                    <img className="icon-01 mb-35" src="./assets/img/icon/design-NavLink.svg" alt="" />
                                    <h4 className="sub-title mb-25">Arts & Design</h4>
                                    <NavLink to="/courses"><img className='arrows-icon' src="./assets/img/icon/arrow-right.svg" alt="arrow-right" /></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-12 text-center mt-20 mb-30 wow fadeInUp2 animated" data-wow-delay='.3s'>
                            <NavLink to="/courses" className="theme_btn">All Categories</NavLink>
                        </div>
                    </div>
                </section>
                <section className="feature-course pos-rel overflow-hidden pt-150 pb-120 pt-md-95 pb-md-75 pt-xs-95 pb-xs-70">
                    <div className="feature-blur-one"></div>
                    <div className="feature-blur-two"></div>
                    <div className="container">
                        <div className="row align-items-center mb-35">
                            <div className="col-xl-6 col-lg-12">
                                <div className="section-title section-title-3 text-center text-xl-start mb-30">
                                    <h5 className="mb-25">Featured Courses</h5>
                                    <h2 className="mb-20">Explore our <span className="bottom-line">Popular Courses</span></h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 text-center text-xl-end">
                                <div className="portfolio-menu portfolio-menu-two mb-30">
                                    <button className="gf_btn active" data-filter='*'>All</button>
                                    <button className="gf_btn" data-filter='.cat1'>Career</button>
                                    <button className="gf_btn" data-filter='.cat2'>Development</button>
                                    <button className="gf_btn" data-filter='.cat3'>Business</button>
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
                            <div className="col-xxl-12 mt-20 text-center mb-20 wow fadeInUp2 animated" data-wow-delay='.3s'>
                                <NavLink to="/courses" className="theme_btn">Explore More</NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="why-chose-us chose-round-bg gradient-bg pt-150 pb-120 pt-md-95 pb-md-70 pt-xs-95 pb-xs-70">
                    <div className="why-chose-blur-bg"></div>
                    <div className="container">
                        <div className="row align-items-center mb-50">
                            <div className="col-xl-5 col-lg-12">
                                <div className="chose-wrapper mb-30">
                                    <div className="section-title section-title-3 mb-30 wow fadeInUp2 animated" data-wow-delay='.1s'>
                                        <h5 className="mb-25">Explore Zoomy</h5>
                                        <h2 className="mb-25">Why Choose <span className="bottom-line">Zoomy?</span></h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    </div>
                                    <ul className="text-list-box mb-40">
                                        <li>
                                            <div className="single-box s-box-2 mb-30 wow fadeInUp2 animated" data-wow-delay='.2s'>
                                                <div className="single-box__icon mb-25">
                                                    <img src="./assets/img/icon/skill-level-intermediate.svg" alt="" />
                                                </div>
                                                <h4 className="sub-title mb-10">Learn New Skills</h4>
                                                <p>There are many variations of passag of Lorm Ipsum available.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-box s-box-2 mb-30 wow fadeInUp2 animated" data-wow-delay='.3s'>
                                                <div className="single-box__icon icon_02 mb-25">
                                                    <img src="./assets/img/icon/avatar-outline-alerted.svg" alt="" />
                                                </div>
                                                <h4 className="sub-title mb-10">Expert Trainers</h4>
                                                <p>There are many variations of passag of Lorm Ipsum available.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-box s-box-2 mb-30 wow fadeInUp2 animated" data-wow-delay='.4s'>
                                                <div className="single-box__icon icon_03 mb-25">
                                                    <img src="./assets/img/icon/report.svg" alt="" />
                                                </div>
                                                <h4 className="sub-title mb-10">Free Trial Lesson</h4>
                                                <p>There are many variations of passag of Lorm Ipsum available.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <NavLink to="about" className="theme_btn wow fadeInUp2 animated" data-wow-delay='.5s'>More Details</NavLink>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-12">
                                <div className="chose-img-wrapper-03 chose-img-full mb-30 pos-rel">
                                    <div className="feature tag_01">
                                        <span><img src="./assets/img/icon/shield-check.svg" alt="" /></span>
                                        <h5>Safe & Secured</h5>
                                        <p>There are many variations of pas sages of Lorem Ipsum available, but the majority.</p>
                                    </div>
                                    <div className="feature tag_03">
                                        <span><i className="fal fa-check"></i></span>
                                        <h5>Quality Education</h5>
                                        <p>There are many variations of pas sages of Lorem Ipsum available, but the majority.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pl-75 pr-75 pr-lg-0 pr-md-0 pr-xs-0 pl-lg-0 pl-md-0 pl-xs-0">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counters text-center mb-30 wow fadeInUp2 animated" data-wow-delay='.1s'>
                                    <h2><span className="counter">100</span>+</h2>
                                    <h5>Specialist Good Teachers</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counters count-1 text-center mb-30 wow fadeInUp2 animated" data-wow-delay='.2s'>
                                    <h2><span className="counter">1000</span>+</h2>
                                    <h5>Online Learning Courses</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counters count-2 text-center mb-30 wow fadeInUp2 animated" data-wow-delay='.3s'>
                                    <h2><span className="counter">13654</span>+</h2>
                                    <h5>Online & Offline Students</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counters count-3 text-center mb-30 wow fadeInUp2 animated" data-wow-delay='.4s'>
                                    <h2><span className="counter">365</span>+</h2>
                                    <h5>Special Awards Winning</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="course-instructor nav-style-two nav-style-three pt-150 pb-120 pt-md-70 pb-md-70 pt-xs-95 pb-xs-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-8">
                                <div className="section-title section-title-3 text-center mb-60">
                                    <h5 className="mb-25">Our Instructor</h5>
                                    <h2 className="mb-25">Explore Experienced <span className="bottom-line">Instructor</span></h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                        </div>
                        <div className="instructor-active owl-carousel owl-loaded owl-drag">
                            <div className="owl-stage-outer">
                                <div className="owl-stage" style={{ transform: "translate3d(-2025px, 0px, 0px)", transition: "all 2s ease 0s", width: "4740px" }}>
                                    <div className="owl-item cloned" style={{ width: "308px", marginRight: "30px" }}>
                                        <div className="item">
                                            <div className="z-instructors z-instructors-02 text-center mb-30">
                                                <div className="z-instructors__thumb mb-15">
                                                    <img src="assets/img/instructor/07.jpg" alt="" />
                                                </div>
                                                <div className="z-instructors__content">
                                                    <h3 className="semi-title mb-20"><NavLink to="instructor-profile.html">Mesud Lamb</NavLink></h3>
                                                    <p>15+ Courses <span>15+ Courses</span></p>
                                                    <div className="social-media">
                                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{ width: "308px", marginRight: "30px" }}>
                                        <div className="item">
                                            <div className="z-instructors z-instructors-02 text-center mb-30">
                                                <div className="z-instructors__thumb mb-15">
                                                    <img src="assets/img/instructor/08.jpg" alt="" />
                                                </div>
                                                <div className="z-instructors__content">
                                                    <h3 className="semi-title mb-20"><NavLink to="instructor-profile.html">Havana Lyon</NavLink></h3>
                                                    <p>15+ Courses <span>15+ Courses</span></p>
                                                    <div className="social-media">
                                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{ width: "308px", marginRight: "30px" }}>
                                        <div className="item">
                                            <div className="z-instructors z-instructors-02 text-center mb-30">
                                                <div className="z-instructors__thumb mb-15">
                                                    <img src="assets/img/instructor/05.jpg" alt="" />
                                                </div>
                                                <div className="z-instructors__content">
                                                    <h3 className="semi-title mb-20"><NavLink to="instructor-profile.html">John Zlathan</NavLink></h3>
                                                    <p>15+ Courses <span>15+ Courses</span></p>
                                                    <div className="social-media">
                                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{ width: "308px", marginRight: "30px" }}>
                                        <div className="item">
                                            <div className="z-instructors z-instructors-02 text-center mb-30">
                                                <div className="z-instructors__thumb mb-15">
                                                    <img src="assets/img/instructor/06.jpg" alt="" />
                                                </div>
                                                <div className="z-instructors__content">
                                                    <h3 className="semi-title mb-20"><NavLink to="instructor-profile.html">Mally Yan</NavLink></h3>
                                                    <p>15+ Courses <span>15+ Courses</span></p>
                                                    <div className="social-media">
                                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item" style={{ width: "308px", marginRight: "30px" }}>
                                        <div className="item">
                                            <div className="z-instructors z-instructors-02 text-center mb-30">
                                                <div className="z-instructors__thumb mb-15">
                                                    <img src="assets/img/instructor/05.jpg" alt="" />
                                                </div>
                                                <div className="z-instructors__content">
                                                    <h3 className="semi-title mb-20"><NavLink to="instructor-profile.html">Kevin Petersen</NavLink></h3>
                                                    <p>15+ Courses <span>15+ Courses</span></p>
                                                    <div className="social-media">
                                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item" style={{ width: "308px", marginRight: "30px" }}>
                                        <div className="item">
                                            <div className="z-instructors z-instructors-02 text-center mb-30">
                                                <div className="z-instructors__thumb mb-15">
                                                    <img src="assets/img/instructor/06.jpg" alt="" />
                                                </div>
                                                <div className="z-instructors__content">
                                                    <h3 className="semi-title mb-20"><NavLink to="instructor-profile.html">Mally Yan</NavLink></h3>
                                                    <p>15+ Courses <span>15+ Courses</span></p>
                                                    <div className="social-media">
                                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item active" style={{ width: "308px", marginRight: "30px" }}>
                                        <div className="item">
                                            <div className="z-instructors z-instructors-02 text-center mb-30">
                                                <div className="z-instructors__thumb mb-15">
                                                    <img src="assets/img/instructor/07.jpg" alt="" />
                                                </div>
                                                <div className="z-instructors__content">
                                                    <h3 className="semi-title mb-20"><NavLink to="instructor-profile.html">Mesud Lamb</NavLink></h3>
                                                    <p>15+ Courses <span>15+ Courses</span></p>
                                                    <div className="social-media">
                                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item active" style={{ width: "308px", marginRight: "30px" }}>
                                        <div className="item">
                                            <div className="z-instructors z-instructors-02 text-center mb-30">
                                                <div className="z-instructors__thumb mb-15">
                                                    <img src="assets/img/instructor/08.jpg" alt="" />
                                                </div>
                                                <div className="z-instructors__content">
                                                    <h3 className="semi-title mb-20"><NavLink to="instructor-profile.html">Havana Lyon</NavLink></h3>
                                                    <p>15+ Courses <span>15+ Courses</span></p>
                                                    <div className="social-media">
                                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item active" style={{ width: "308px", marginRight: "30px" }}>
                                        <div className="item">
                                            <div className="z-instructors z-instructors-02 text-center mb-30">
                                                <div className="z-instructors__thumb mb-15">
                                                    <img src="assets/img/instructor/05.jpg" alt="" />
                                                </div>
                                                <div className="z-instructors__content">
                                                    <h3 className="semi-title mb-20"><NavLink to="instructor-profile.html">John Zlathan</NavLink></h3>
                                                    <p>15+ Courses <span>15+ Courses</span></p>
                                                    <div className="social-media">
                                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item active" style={{ width: "308px", marginRight: "30px" }}>
                                        <div className="item">
                                            <div className="z-instructors z-instructors-02 text-center mb-30">
                                                <div className="z-instructors__thumb mb-15">
                                                    <img src="assets/img/instructor/06.jpg" alt="" />
                                                </div>
                                                <div className="z-instructors__content">
                                                    <h3 className="semi-title mb-20"><NavLink to="instructor-profile.html">Mally Yan</NavLink></h3>
                                                    <p>15+ Courses <span>15+ Courses</span></p>
                                                    <div className="social-media">
                                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{ width: "308px", marginRight: "30px" }}>
                                        <div className="item">
                                            <div className="z-instructors z-instructors-02 text-center mb-30">
                                                <div className="z-instructors__thumb mb-15">
                                                    <img src="assets/img/instructor/05.jpg" alt="" />
                                                </div>
                                                <div className="z-instructors__content">
                                                    <h3 className="semi-title mb-20"><NavLink to="instructor-profile.html">Kevin Petersen</NavLink></h3>
                                                    <p>15+ Courses <span>15+ Courses</span></p>
                                                    <div className="social-media">
                                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{ width: "308px", marginRight: "30px" }}>
                                        <div className="item">
                                            <div className="z-instructors z-instructors-02 text-center mb-30">
                                                <div className="z-instructors__thumb mb-15">
                                                    <img src="assets/img/instructor/06.jpg" alt="" />
                                                </div>
                                                <div className="z-instructors__content">
                                                    <h3 className="semi-title mb-20"><NavLink to="instructor-profile.html">Mally Yan</NavLink></h3>
                                                    <p>15+ Courses <span>15+ Courses</span></p>
                                                    <div className="social-media">
                                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{ width: "308px", marginRight: "30px" }}
                                    ><div className="item">
                                            <div className="z-instructors z-instructors-02 text-center mb-30">
                                                <div className="z-instructors__thumb mb-15">
                                                    <img src="assets/img/instructor/07.jpg" alt="" />
                                                </div>
                                                <div className="z-instructors__content">
                                                    <h3 className="semi-title mb-20"><NavLink to="instructor-profile.html">Mesud Lamb</NavLink></h3>
                                                    <p>15+ Courses <span>15+ Courses</span></p>
                                                    <div className="social-media">
                                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned" style={{ width: "308px", marginRight: "30px" }}>
                                        <div className="item">
                                            <div className="z-instructors z-instructors-02 text-center mb-30">
                                                <div className="z-instructors__thumb mb-15">
                                                    <img src="assets/img/instructor/08.jpg" alt="" />
                                                </div>
                                                <div className="z-instructors__content">
                                                    <h3 className="semi-title mb-20"><NavLink to="instructor-profile.html">Havana Lyon</NavLink></h3>
                                                    <p>15+ Courses <span>15+ Courses</span></p>
                                                    <div className="social-media">
                                                        <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                                        <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-nav">
                                <button type="button" role="presentation" className="owl-prev"><i className="far fa-chevron-left"></i></button>
                                <button type="button" role="presentation" className="owl-next"><i className="far fa-chevron-right"></i></button>
                            </div>
                            <div className="owl-dots disabled">
                            </div>
                        </div>
                    </div>
                </section>
                <section className="testimonial-area pos-rel gradient-bg-2 pt-150 pb-120 pt-md-95 pb-md-95 pt-xs-95 pb-xs-95">
                    <div className="/instructor-blur"></div>
                    <div className="container custom-container-testimonial">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title section-title-3 text-center text-lg-start mb-40 pr-50 pr-xs-0 pr-md-0">
                                    <h5 className="mb-25">Our Instructor</h5>
                                    <h2 className="mb-25">What People Say <span className="bottom-line">About Us</span></h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4 text-center text-lg-end">
                                <NavLink to="/blog-details" className="theme_btn">Read All Reviews</NavLink>
                            </div>
                        </div>
                        <div className="testimonial-active owl-carousel">
                            <div className="tem">
                                <div className="testimonial-wrapper test-wrapper-3 mb-30">
                                    <div className="quote-icon mt-20">
                                        <img src="./assets/img/icon/quote-right-3.svg" alt="quote-icon" />
                                    </div>
                                    <div className="testimonial-authors overflow-hidden mb-15">
                                        <div className="star-icon mb-20">
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                        </div>
                                        <p className="mb-30">There are many variations of passages of Lore Ipsum available, but the majority have suffered alteration in some.</p>
                                        <div className="testimonial-authors__avatar">
                                            <img src="./assets/img/testimonial/11.png" alt="testi-author" />
                                        </div>
                                        <div className="testimonial-authors__content mt-10">
                                            <h4 className="sub-title">Hasan Mahmud</h4>
                                            <p>Frontend Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-wrapper test-wrapper-3 mb-30">
                                    <div className="quote-icon mt-20">
                                        <img src="./assets/img/icon/quote-right-3.svg" alt="quote-icon" />
                                    </div>
                                    <div className="testimonial-authors overflow-hidden mb-15">
                                        <div className="star-icon mb-20">
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                        </div>
                                        <p className="mb-30">There are many variations of passages of Lore Ipsum available, but the majority have suffered alteration in some.</p>
                                        <div className="testimonial-authors__avatar">
                                            <img src="./assets/img/testimonial/12.png" alt="testi-author" />
                                        </div>
                                        <div className="testimonial-authors__content mt-10">
                                            <h4 className="sub-title">Rashed Kabir</h4>
                                            <p>Sr. ui/ux Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-wrapper test-wrapper-3 mb-30">
                                    <div className="quote-icon mt-20">
                                        <img src="./assets/img/icon/quote-right-3.svg" alt="quote-icon" />
                                    </div>
                                    <div className="testimonial-authors overflow-hidden mb-15">
                                        <div className="star-icon mb-20">
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                        </div>
                                        <p className="mb-30">There are many variations of passages of Lore Ipsum available, but the majority have suffered alteration in some.</p>
                                        <div className="testimonial-authors__avatar">
                                            <img src="./assets/img/testimonial/13.png" alt="testi-author" />
                                        </div>
                                        <div className="testimonial-authors__content mt-10">
                                            <h4 className="sub-title">Hossain Mahmud</h4>
                                            <p>Jr. ui/ux Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-wrapper test-wrapper-3 mb-30">
                                    <div className="quote-icon mt-20">
                                        <img src="./assets/img/icon/quote-right-3.svg" alt="quote-icon" />
                                    </div>
                                    <div className="testimonial-authors overflow-hidden mb-15">
                                        <div className="star-icon mb-20">
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                        </div>
                                        <p className="mb-30">There are many variations of passages of Lore Ipsum available, but the majority have suffered alteration in some.</p>
                                        <div className="testimonial-authors__avatar">
                                            <img src="./assets/img/testimonial/11.png" alt="testi-author" />
                                        </div>
                                        <div className="testimonial-authors__content mt-10">
                                            <h4 className="sub-title">Hasan Mahmud</h4>
                                            <p>Frontend Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-wrapper test-wrapper-3 mb-30">
                                    <div className="quote-icon mt-20">
                                        <img src="./assets/img/icon/quote-right-3.svg" alt="quote-icon" />
                                    </div>
                                    <div className="testimonial-authors overflow-hidden mb-15">
                                        <div className="star-icon mb-20">
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                        </div>
                                        <p className="mb-30">There are many variations of passages of Lore Ipsum available, but the majority have suffered alteration in some.</p>
                                        <div className="testimonial-authors__avatar">
                                            <img src="./assets/img/testimonial/12.png" alt="testi-author" />
                                        </div>
                                        <div className="testimonial-authors__content mt-10">
                                            <h4 className="sub-title">Rashed Kabir</h4>
                                            <p>Sr. ui/ux Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial-wrapper test-wrapper-3 mb-30">
                                    <div className="quote-icon mt-20">
                                        <img src="./assets/img/icon/quote-right-3.svg" alt="quote-icon" />
                                    </div>
                                    <div className="testimonial-authors overflow-hidden mb-15">
                                        <div className="star-icon mb-20">
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-star"></i></NavLink>
                                        </div>
                                        <p className="mb-30">There are many variations of passages of Lore Ipsum available, but the majority have suffered alteration in some.</p>
                                        <div className="testimonial-authors__avatar">
                                            <img src="./assets/img/testimonial/13.png" alt="testi-author" />
                                        </div>
                                        <div className="testimonial-authors__content mt-10">
                                            <h4 className="sub-title">Hossain Mahmud</h4>
                                            <p>Jr. ui/ux Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-area pt-150 pb-120 pt-md-95 pb-md-70 pt-xs-95 pb-xs-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-6 col-xl-7 col-lg-8">
                                <div className="section-title section-title-3 text-center mb-65 pr-30 pl-30">
                                    <h5 className="mb-25">Latest News</h5>
                                    <h2 className="mb-25">Lots of new <span className="bottom-line">Blogs & News</span></h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="z-blogs z-blogs-3 mb-30 wow fadeInUp2 animated" data-wow-delay='.1s'>
                                    <div className="z-blogs__thumb mb-25">
                                        <NavLink to="/blog-details"><img src="./assets/img/blog/07.jpg" alt="blog-img" /></NavLink>
                                    </div>
                                    <div className="z-blogs__content">
                                        <div className="blog__tags mb-20">
                                            <span>Business</span>
                                            <span>Research</span>
                                        </div>
                                        <h4 className="sub-title mb-15"><NavLink to="/blog-details">Education means inculcating moral values</NavLink></h4>
                                        <p className="mb-20">Lorem ipsum dolor sit amet, consetetur saps cing elitr, sed di nonumy eirmod temporinvid unt ut labore et dolore.</p>
                                        <div className="z-blogs__meta d-flex justify-content-between mb-10">
                                            <span><img className="mr-5" src="./assets/img/icon/date-line.svg" alt="" /> 03/06/2021</span>
                                            <span><img className="mr-5" src="./assets/img/icon/box-comment-detail.svg" alt="" /> 03 Comments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="z-blogs z-blogs-3 mb-30 wow fadeInUp2 animated" data-wow-delay='.2s'>
                                    <div className="z-blogs__thumb mb-25">
                                        <NavLink to="/blog-details"><img src="./assets/img/blog/08.jpg" alt="blog-img" /></NavLink>
                                    </div>
                                    <div className="z-blogs__content">
                                        <div className="blog__tags mb-20">
                                            <span>Business</span>
                                            <span>Research</span>
                                        </div>
                                        <h4 className="sub-title mb-15"><NavLink to="/blog-details">Education means inculcating moral values</NavLink></h4>
                                        <p className="mb-20">Lorem ipsum dolor sit amet, consetetur saps cing elitr, sed di nonumy eirmod temporinvid unt ut labore et dolore.</p>
                                        <div className="z-blogs__meta d-flex justify-content-between mb-10">
                                            <span><img className="mr-5" src="./assets/img/icon/date-line.svg" alt="" /> 03/06/2021</span>
                                            <span><img className="mr-5" src="./assets/img/icon/box-comment-detail.svg" alt="" /> 03 Comments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="z-blogs z-blogs-3 mb-30 wow fadeInUp2 animated" data-wow-delay='.3s'>
                                    <div className="z-blogs__thumb mb-25">
                                        <NavLink to="/blog-details"><img src="./assets/img/blog/09.jpg" alt="blog-img" /></NavLink>
                                    </div>
                                    <div className="z-blogs__content">
                                        <div className="blog__tags mb-20">
                                            <span>Business</span>
                                            <span>Research</span>
                                        </div>
                                        <h4 className="sub-title mb-15"><NavLink to="/blog-details">Education means inculcating moral values</NavLink></h4>
                                        <p className="mb-20">Lorem ipsum dolor sit amet, consetetur saps cing elitr, sed di nonumy eirmod temporinvid unt ut labore et dolore.</p>
                                        <div className="z-blogs__meta d-flex justify-content-between mb-10">
                                            <span><img className="mr-5" src="./assets/img/icon/date-line.svg" alt="" /> 03/06/2021</span>
                                            <span><img className="mr-5" src="./assets/img/icon/box-comment-detail.svg" alt="" /> 03 Comments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center mt-20 mb-30 wow fadeInUp2 animated" data-wow-delay='.4s'>
                                <NavLink to="/blog-details" className="theme_btn">Load More</NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="subscribe-area">
                    <div className="container">
                        <div className="subscribe-two theme-bg">
                            <img className="cta-shape shape_01" src="./assets/img/shape/c1.svg" alt="" />
                            <img className="cta-shape shape_02" src="./assets/img/shape/c2.svg" alt="" />
                            <img className="cta-shape shape_03" src="./assets/img/shape/c3.svg" alt="" />
                            <img className="cta-shape shape_04" src="./assets/img/shape/c4.svg" alt="" />
                            <img className="cta-shape shape_05" src="./assets/img/shape/c5.svg" alt="" />
                            <img className="cta-shape shape_06" src="./assets/img/shape/c6.svg" alt="" />
                            <img className="cta-shape shape_07" src="./assets/img/shape/c7.svg" alt="" />
                            <div className="row align-items-center">
                                <div className="col-xl-6">
                                    <div className="subscribe-wrapper text-center text-xl-start mb-30">
                                        <h2>Subscribe our Newsletter & Get every updates.</h2>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="subscribe-wrapper text-center mb-30">
                                        <div className="subscribe-form-box pos-rel">
                                            <form className="subscribe-form sub-form-2">
                                                <input type="text" placeholder="Write Your E-mail" />
                                            </form>
                                            <button className="sub_btn">Subscribe Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="footer-area footer-bg pt-220 pb-25 pt-md-100 pt-xs-100">
                <div className="footer-blur"></div>
                <div className="container">
                    <div className="row mb-15">
                        <div className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp2 animated" data-wow-delay='.1s'>
                            <div className="footer__widget mb-30">
                                <div className="footer-log mb-20">
                                    <NavLink to="/" className="logo">
                                        <img src="./assets/img/logo/header_logo_one.svg" alt="" />
                                    </NavLink>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed di nonumy eirmod temporinvi dunt ut labore lorem ipsum.</p>
                                <div className="social-media footer__social mt-30">
                                    <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                    <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                    <NavLink to="#"><i className="fab fa-linkedin-in"></i></NavLink>
                                    <NavLink to="#"><i className="fab fa-google-plus-g"></i></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp2 animated" data-wow-delay='.3s'>
                            <div className="footer__widget mb-30 pl-40 pl-md-0 pl-xs-0">
                                <h6 className="widget-title mb-35">Contact us</h6>
                                <ul className="fot-list">
                                    <li><NavLink to="#">info@example.com</NavLink></li>
                                    <li><NavLink to="#">+00 235 695 58</NavLink></li>
                                    <li><NavLink to="#">Terms & Conditions</NavLink></li>
                                    <li><NavLink to="#">Privacy Policy</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp2 animated" data-wow-delay='.5s'>
                            <div className="footer__widget mb-25 pl-65 pl-md-0 pl-xs-0">
                                <h6 className="widget-title mb-35">Quick Links</h6>
                                <ul className="fot-list">
                                    <li><NavLink to="#">About US</NavLink></li>
                                    <li><NavLink to="#">Explore Pages</NavLink></li>
                                    <li><NavLink to="#">Our Services</NavLink></li>
                                    <li><NavLink to="#">Destinations</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6  wow fadeInUp2 animated" data-wow-delay='.7s'>
                            <div className="footer__widget mb-30 pl-150 pl-lg-0 pl-md-0 pl-xs-0">
                                <h6 className="widget-title mb-35">Features</h6>
                                <ul className="fot-list mb-30">
                                    <li><NavLink to="#">Home Page</NavLink> </li>
                                    <li><NavLink to="#">Testimonials</NavLink></li>
                                    <li><NavLink to="/blog">Latest News</NavLink></li>
                                    <li><NavLink to="#">Help Center</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right-area border-bot pt-40">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="copyright">
                                    <h5>Copyright@ 2021 <NavLink to="#">Zoomy</NavLink>. All Rights Reserved</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </Wrapper >
    )
}

export default HomeThree
const Wrapper = styled.div`
    .slider-img-box-three{
        background-image: url("./assets/img/slider/slide3.jpg");
    } 

    .chose-img-wrapper-03.chose-img-full.mb-30.pos-rel {
        background-image: url("./assets/img/chose/06.jpg");
    }
`