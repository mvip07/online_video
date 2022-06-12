import { NavLink } from "react-router-dom"

const Footer = () => {

    return (
        <footer className="footer-area pt-70 pb-40">
            <div className="container">
                <div className="row mb-15">
                    <div className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp2 animated" data-wow-delay='.1s'>
                        <div className="footer__widget mb-30">
                            <div className="footer-log mb-20">
                                <NavLink to="index.html" className="logo">
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
                                <li><NavLink to="contact.html">Contacts</NavLink></li>
                                <li><NavLink to="#">Our Careers</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp2 animated" data-wow-delay='.5s'>
                        <div className="footer__widget mb-25 pl-90 pl-md-0 pl-xs-0">
                            <h6 className="widget-title mb-35">Quick Links</h6>
                            <ul className="fot-list">
                                <li><NavLink to="about.html">About US</NavLink></li>
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
                                <li><NavLink to="index.html">Home Page</NavLink> </li>
                                <li><NavLink to="#">Testimonials</NavLink></li>
                                <li><NavLink to="blog.html">Latest News</NavLink></li>
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
                            <div className="copyright text-center">
                                <h5>Copyright@ 2021 <NavLink to="#">Zoomy</NavLink>. All Rights Reserved</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer