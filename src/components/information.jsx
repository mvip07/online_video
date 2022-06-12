import { NavLink } from "react-router-dom"

const Information = () => {
    return (
        <section className="what-looking-for pos-rel">
            <div className="what-blur-shape-one"></div>
            <div className="what-blur-shape-two"></div>
            <div className="what-look-bg gradient-bg pt-145 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-55">
                                <h5 className="bottom-line mb-25">Teachers & Students</h5>
                                <h2>What you Looking For?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-85">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="what-box text-center mb-35 wow fadeInUp2 animated" data-wow-delay='.3s'>
                                <div className="what-box__icon mb-30">
                                    <img src="./assets/img/icon/phone-operator.svg" alt="" />
                                </div>
                                <h3>Do you want to teach here?</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.</p>
                                <NavLink to="contact.html" className="theme_btn border_btn">Register Now</NavLink>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="what-box text-center mb-35 wow fadeInUp2 animated" data-wow-delay='.3s'>
                                <div className="what-box__icon mb-30">
                                    <img src="./assets/img/icon/graduate.svg" alt="" />
                                </div>
                                <h3>Do you want to learn here?</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.</p>
                                <NavLink to="contact.html" className="theme_btn border_btn active">Register Now</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="categoris-container">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-55">
                                <h5 className="bottom-line mb-25">Browse Categories</h5>
                                <h2>Explore our Online Subjects</h2>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5">
                            <div className="col">
                                <div className="single-category text-center mb-30 wow fadeInUp2 animated" data-wow-delay='.1s'>
                                    <img className="mb-30" src="./assets/img/category-icon/atom.svg" alt="" />
                                    <h4 className="sub-title mb-10"><NavLink to="course-details.html">Science</NavLink></h4>
                                    <p>126+ Courses Available</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="single-category text-center mb-30 wow fadeInUp2 animated" data-wow-delay='.2s'>
                                    <img className="mb-30" src="./assets/img/category-icon/web-development.svg" alt="" />
                                    <h4 className="sub-title mb-10"><NavLink to="course-details.html">Development</NavLink></h4>
                                    <p>325+ Courses Available</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="single-category text-center mb-30 wow fadeInUp2 animated" data-wow-delay='.3s'>
                                    <img className="mb-30" src="./assets/img/category-icon/atom.svg" alt="" />
                                    <h4 className="sub-title mb-10"><NavLink to="course-details.html">Science</NavLink></h4>
                                    <p>95+ Courses Available</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="single-category text-center mb-30 wow fadeInUp2 animated" data-wow-delay='.4s'>
                                    <img className="mb-30" src="./assets/img/category-icon/career-path.svg" alt="" />
                                    <h4 className="sub-title mb-10"><NavLink to="course-details.html">Career</NavLink></h4>
                                    <p>156+ Courses Available</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="single-category text-center mb-30 wow fadeInUp2 animated" data-wow-delay='.5s'>
                                    <img className="mb-30" src="./assets/img/category-icon/graphic-tool.svg" alt="" />
                                    <h4 className="sub-title mb-10"><NavLink to="course-details.html">Arts & Design</NavLink></h4>
                                    <p>136+ Courses Available</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-12 mt-20 text-center mb-20 wow fadeInUp2 animated" data-wow-delay='.6s'>
                                <NavLink to="courses.html" className="theme_btn">All Categories</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Information