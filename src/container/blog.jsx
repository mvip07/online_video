import { NavLink } from "react-router-dom"
import styled from "styled-components"
import Footer from "../components/footer"
import Header from "../components/header"
import Subscribe from "../components/subscribe"

const Blog = () => {
    return (
        <Wrapper>
            <Header />
            <main>
                <section className="page-title-area d-flex align-items-end">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="page-title-wrapper mb-50">
                                    <h1 className="page-title mb-25">Blog</h1>
                                    <div className="breadcrumb-list">
                                        <ul className="breadcrumb">
                                            <li><NavLink to="index.html">Home - Pages -</NavLink></li>
                                            <li><NavLink to="#">Blog</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-area">
                    <div className="blog-bg pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="section-title text-center mb-60">
                                        <h2 className="mb-25">Lots of new Blogs & News</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="z-blogs mb-30">
                                        <div className="z-blogs__thumb mb-30">
                                            <NavLink to="blog-details.html"><img src="./assets/img/blog/01.jpg" alt="blog-img" /></NavLink>
                                        </div>
                                        <div className="z-blogs__content">
                                            <h5 className="mb-25">Online . School . Skill</h5>
                                            <h4 className="sub-title mb-15"><NavLink to="blog-details.html">5 Ways to Use Padlet in -Ed Online Classroom</NavLink></h4>
                                            <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                                                <span>Date : June 15 , 2021</span>
                                                <span>By Guest Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="z-blogs mb-30">
                                        <div className="z-blogs__thumb mb-30">
                                            <NavLink to="blog-details.html"><img src="./assets/img/blog/02.jpg" alt="blog-img" /></NavLink>
                                        </div>
                                        <div className="z-blogs__content">
                                            <h5 className="mb-25">Education . Expert</h5>
                                            <h4 className="sub-title mb-15"><NavLink to="blog-details.html">4 New Zoom Enhance Virtual Learning</NavLink></h4>
                                            <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                                                <span>Date : June 15 , 2021</span>
                                                <span>By Guest Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="z-blogs mb-30">
                                        <div className="z-blogs__thumb mb-30">
                                            <NavLink to="blog-details.html"><img src="./assets/img/blog/03.jpg" alt="blog-img" /></NavLink>
                                        </div>
                                        <div className="z-blogs__content">
                                            <h5 className="mb-25">Creative . Programmer</h5>
                                            <h4 className="sub-title mb-15"><NavLink to="blog-details.html">Using Media to Support Online Teaching</NavLink></h4>
                                            <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                                                <span>Date : June 15 , 2021</span>
                                                <span>By Guest Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="z-blogs mb-30">
                                        <div className="z-blogs__thumb mb-30">
                                            <NavLink to="blog-details.html"><img src="./assets/img/blog/10.jpg" alt="blog-img" /></NavLink>
                                        </div>
                                        <div className="z-blogs__content">
                                            <h5 className="mb-25">Online . School . Skill</h5>
                                            <h4 className="sub-title mb-15"><NavLink to="blog-details.html">5 Ways to Use Padlet in -Ed Online Classroom</NavLink></h4>
                                            <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                                                <span>Date : June 15 , 2021</span>
                                                <span>By Guest Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="z-blogs mb-30">
                                        <div className="z-blogs__thumb mb-30">
                                            <NavLink to="blog-details.html"><img src="./assets/img/blog/11.jpg" alt="blog-img" /></NavLink>
                                        </div>
                                        <div className="z-blogs__content">
                                            <h5 className="mb-25">Education . Expert</h5>
                                            <h4 className="sub-title mb-15"><NavLink to="blog-details.html">4 New Zoom Enhance Virtual Learning</NavLink></h4>
                                            <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                                                <span>Date : June 15 , 2021</span>
                                                <span>By Guest Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="z-blogs mb-30">
                                        <div className="z-blogs__thumb mb-30">
                                            <NavLink to="blog-details.html"><img src="./assets/img/blog/12.jpg" alt="blog-img" /></NavLink>
                                        </div>
                                        <div className="z-blogs__content">
                                            <h5 className="mb-25">Creative . Programmer</h5>
                                            <h4 className="sub-title mb-15"><NavLink to="blog-details.html">Using Media to Support Online Teaching</NavLink></h4>
                                            <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                                                <span>Date : June 15 , 2021</span>
                                                <span>By Guest Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="z-blogs mb-30">
                                        <div className="z-blogs__thumb mb-30">
                                            <NavLink to="blog-details.html"><img src="./assets/img/blog/13.jpg" alt="blog-img" /></NavLink>
                                        </div>
                                        <div className="z-blogs__content">
                                            <h5 className="mb-25">Online . School . Skill</h5>
                                            <h4 className="sub-title mb-15"><NavLink to="blog-details.html">5 Ways to Use Padlet in -Ed Online Classroom</NavLink></h4>
                                            <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                                                <span>Date : June 15 , 2021</span>
                                                <span>By Guest Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="z-blogs mb-30">
                                        <div className="z-blogs__thumb mb-30">
                                            <NavLink to="blog-details.html"><img src="./assets/img/blog/14.jpg" alt="blog-img" /></NavLink>
                                        </div>
                                        <div className="z-blogs__content">
                                            <h5 className="mb-25">Education . Expert</h5>
                                            <h4 className="sub-title mb-15"><NavLink to="blog-details.html">4 New Zoom Enhance Virtual Learning</NavLink></h4>
                                            <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                                                <span>Date : June 15 , 2021</span>
                                                <span>By Guest Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="z-blogs mb-30">
                                        <div className="z-blogs__thumb mb-30">
                                            <NavLink to="blog-details.html"><img src="./assets/img/blog/15.jpg" alt="blog-img" /></NavLink>
                                        </div>
                                        <div className="z-blogs__content">
                                            <h5 className="mb-25">Creative . Programmer</h5>
                                            <h4 className="sub-title mb-15"><NavLink to="blog-details.html">Using Media to Support Online Teaching</NavLink></h4>
                                            <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                                                <span>Date : June 15 , 2021</span>
                                                <span>By Guest Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-center mt-20 mb-30">
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

export default Blog
const Wrapper = styled.div``