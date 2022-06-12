import { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Header = () => {
    const [slideBar, setSidebar] = useState("")
    return (
        <Wrapper>
            <header>
                <div id="theme-menu-one" className="main-header-area pl-100 pr-100 pt-20 pb-15">
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
                                                <li className="nav-item dropdown ">
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
                                                    <NavLink className="nav-link" to="/contact" id="navbarDropdown5" role="button" aria-expanded="false">Contact</NavLink>
                                                </li>
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
                                            <li><NavLink className="sign-in ml-20" to="/login"><img src="./assets/img/icon/user.svg" alt="" /></NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="hamburger-menu d-md-inline-block d-lg-none text-right">
                                        <NavLink to="#" onClick={() => setSidebar("show")}>
                                            <i className="far fa-bars"></i>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <aside className={`slide-bar ${slideBar}`}>
                <div className="close-mobile-menu" onClick={() => setSidebar("")}>
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
                        <li><NavLink to="about">About</NavLink></li>
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
        </Wrapper>
    )
}

export default Header
const Wrapper = styled.div`
    .dropdown-item.active {
        background-color: #fff;
    }
`