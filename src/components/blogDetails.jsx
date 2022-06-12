import { NavLink } from "react-router-dom"
import styled from "styled-components"
import Footer from "./footer"
import Header from "./header"
import Subscribe from "./subscribe"

const BlogDetails = () => {
    // style
    return (
        <Wrapper>

            <Header />
            <main>
                <section className="page-title-area d-flex align-items-end">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="page-title-wrapper mb-50">
                                    <h1 className="page-title mb-25">Blog Details</h1>
                                    <div className="breadcrumb-list">
                                        <ul className="breadcrumb">
                                            <li><NavLink to="/">Home - Pages -</NavLink></li>
                                            <li><NavLink to="#">Blog Details</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-details-area pt-150 pb-105 pt-md-100 pb-md-55 pt-xs-100 pb-xs-55">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="blog-details-box mb-45">
                                    <h2>Unlock possibilities at colleges and universities</h2>
                                    <ul className="blogs__meta mb-30">
                                        <li><span className="blog-author">By Jason Momoa</span></li>
                                        <li><span><img src="./assets/img/icon/material-date-range.svg" alt="mate-date" /> April 21 , 2021</span></li>
                                        <li><span><img src="./assets/img/icon/material-access-time.svg" alt="mate-date" /> 03</span></li>
                                        <li> <span><img src="./assets/img/icon/material-comment.svg" alt="mate-date" /> 5 Min</span></li>
                                        <li>
                                            <div className="social-media blog-details-social">
                                                <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                                <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
                                                <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                                <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                            </div>
                                        </li>
                                    </ul>
                                    <img className="img-fluid blog-details-img mb-35" src="./assets/img/blog/16.jpg" alt="blog-details-img" />
                                    <h3 className="blog-details-title mb-30">University Admissions Could Face Emergency Controls</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.There are many variations of passages of Lorem Ipsum available.</p>
                                </div>
                                <div className="blog-quote-box mb-45">
                                    <div className="quote-icon">
                                        <img src="./assets/img/icon/quote.svg" alt="quote-icon" />
                                    </div>
                                    <div className="quote__text">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are passage of Lorem Ipsum.</p>
                                        <h6>- Jason Statham</h6>
                                    </div>
                                </div>
                                <div className="blog-details-text mb-30">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use NavLink passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use NavLink passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.</p>
                                </div>
                                <div className="blog-details-text row gx-2 mb-45">
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="blog-details-img-box mb-30">
                                            <img className="img-fluid" src="./assets/img/blog/17.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="blog-details-img-box mb-30">
                                            <img className="img-fluid" src="./assets/img/blog/18.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="blog-details-img-box mb-30">
                                            <img className="img-fluid" src="./assets/img/blog/18.jpg" alt="" />
                                        </div>
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use NavLink passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidde.</p>
                                </div>
                                <div className="blog-details-video">
                                    <h3 className="blog-details-title mb-30">10 Common Educations Questions and Answers</h3>
                                    <p className="mb-30">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use NavLink passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use NavLink passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.</p>
                                    <div className="video-details-area mb-30" >
                                        <NavLink to="https://www.youtube.com/watch?v=7omGYwdcS04" className="popup-video"><i className="fas fa-play"></i></NavLink>
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.There are many variations of passages of Lorem Ipsum available.</p>
                                    <ul className="blog-details-list mt-30">
                                        <li>There are many variations of passages of Lorem Ipsum available, but the majority have
                                            ration in some form, by injected humour, or randomised words which don't look even slightly believable.</li>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the majority have
                                            ration in some form, by injected humour, or randomised words which don't look even slightly believable.</li>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the majority have
                                            ration in some form, by injected humour, or randomised words which don't look even slightly believable.</li>
                                    </ul>
                                </div>
                                <div className="blog-details-gallery row gx-2 mb-45">
                                    <div className="col-lg-8 col-md-8">
                                        <div className="blog-details-img-box mb-30">
                                            <img className="img-fluid" src="./assets/img/blog/21.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="blog-details-img-box mb-30">
                                            <img className="img-fluid" src="./assets/img/blog/22.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-details-author row gx-2 align-items-center mb-45">
                                    <div className="col-lg-6">
                                        <div className="author__box mb-30">
                                            <img className="author-img" src="./assets/img/blog/23.jpg" alt="" />
                                            <div className="author__box-text">
                                                <h4 className="sub-tilte">Jason Momoa</h4>
                                                <p>Admin</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="social-media blog-details-social mb-30">
                                            <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                            <NavLink to="#"><i className="fas fa-basketball-ball"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-pinterest-p"></i></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 text-center mb-40">
                                        <button className="theme_btn comment_btn">View Comments (05)</button>
                                    </div>
                                </div>
                                <div className="comments-area">
                                    <ul className="latest-commmnet">
                                        <li>
                                            <div className="single-comments mb-30">
                                                <div className="comments__author">
                                                    <img src="./assets/img/blog/comment/01.jpg" alt="" />
                                                </div>
                                                <div className="comments__text">
                                                    <h4 className="sub-title mb-10">Kavin Petersen <span className="float-end date-text">21 July , 2021</span></h4>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to.</p>
                                                    <NavLink to="#" className="reply mt-10">Reply</NavLink>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-comments">
                                                <div className="comments__author">
                                                    <img src="./assets/img/blog/comment/02.jpg" alt="" />
                                                </div>
                                                <div className="comments__text">
                                                    <h4 className="sub-title mb-10">Lebron James <span className="float-end date-text">21 July , 2021</span></h4>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to.</p>
                                                    <NavLink to="#" className="reply mt-10">Reply</NavLink>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-comments mb-30">
                                                <div className="comments__author ml-90 ml-md-0 ml-xs-0">
                                                    <img src="./assets/img/blog/comment/03.jpg" alt="" />
                                                </div>
                                                <div className="comments__text">
                                                    <h4 className="sub-title mb-10">Jason Momoa <span className="float-end date-text">21 July , 2021</span></h4>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to.</p>
                                                    <NavLink to="#" className="reply mt-10">Reply</NavLink>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="comments-form-area mb-45">
                                    <h2>Leave NavLink comment</h2>
                                    <form action="#" className="row comments-form">
                                        <div className="col-lg-6 mb-20">
                                            <input type="text" placeholder="Full Name" />
                                        </div>
                                        <div className="col-lg-6 mb-20">
                                            <input type="text" placeholder="Email Name" />
                                        </div>
                                        <div className="col-lg-12 mb-20">
                                            <textarea name="commnent" id="commnent" cols="30" rows="10" placeholder="Write Your Comments"></textarea>
                                        </div>
                                    </form>
                                    <button className="theme_btn comment_btn">Submit Comment</button>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog-widget-area">
                                    <div className="widget mb-50">
                                        <div className="blog-search-widget">
                                            <form action="#" className="comments-form mb-20">
                                                <input type="text" placeholder="Type To Search" />
                                            </form>
                                            <button className="theme_btn comment_btn">Search Now</button>
                                        </div>
                                    </div>
                                    <div className="widget mb-50">
                                        <div className="blog-categories-widget">
                                            <h4 className="sub-title pb-20 mb-25 pt-25">Categories</h4>
                                            <div className="courses-tag-btn cat-btn">
                                                <NavLink to="#">Online School</NavLink>
                                                <NavLink to="#">Technology(36)</NavLink>
                                                <NavLink to="#">Product Design(36)</NavLink>
                                                <NavLink to="#">Business(16)</NavLink>
                                                <NavLink to="#">Programming(21)</NavLink>
                                                <NavLink to="#">Web Development(17)</NavLink>
                                                <NavLink to="#">Digital Marketing(07)</NavLink>
                                                <NavLink to="#">Content Writer(06)</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget mb-50">
                                        <div className="blog-categories-widget">
                                            <h4 className="sub-title pb-20 mb-25 pt-25">Recent Post</h4>
                                            <ul className="blog-recent-post">
                                                <li>
                                                    <div className="posts mb-20">
                                                        <img src="./assets/img/blog/24.jpg" alt="" className="posts__thumb mb-15" />
                                                        <p>1st July , 2021</p>
                                                        <h6><NavLink to="blog-details.html">Lorem Ipsum is simply dummy text</NavLink></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="posts mb-20">
                                                        <img src="./assets/img/blog/25.jpg" alt="" className="posts__thumb mb-15" />
                                                        <p>1st July , 2021</p>
                                                        <h6><NavLink to="blog-details.html">Ipsum Lorem is simply dummy text</NavLink></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="posts mb-20">
                                                        <img src="./assets/img/blog/26.jpg" alt="" className="posts__thumb mb-15" />
                                                        <p>1st July , 2021</p>
                                                        <h6><NavLink to="blog-details.html">Lorem Ipsum is simply dummy text</NavLink></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="posts mb-20">
                                                        <img src="./assets/img/blog/27.jpg" alt="" className="posts__thumb mb-15" />
                                                        <p>1st July , 2021</p>
                                                        <h6><NavLink to="blog-details.html">Ipsum Lorem is simply dummy text</NavLink></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="posts mb-20">
                                                        <img src="./assets/img/blog/28.jpg" alt="" className="posts__thumb mb-15" />
                                                        <p>1st July , 2021</p>
                                                        <h6><NavLink to="blog-details.html">Lorem Ipsum is simply dummy text</NavLink></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="posts mb-20">
                                                        <img src="./assets/img/blog/29.jpg" alt="" className="posts__thumb mb-15" />
                                                        <p>1st July , 2021</p>
                                                        <h6><NavLink to="blog-details.html">Ipsum Lorem is simply dummy text</NavLink></h6>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget mb-50">
                                        <h4 className="sub-title pb-20 mb-25 pt-25">Social Media</h4>
                                        <div className="blog-social-widget">
                                            <div className="social-media mb-30">
                                                <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                                                <NavLink to="#"><i className="fas fa-basketball-ball"></i></NavLink>
                                                <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
                                                <NavLink to="#"><i className="fab fa-pinterest-p"></i></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget mb-50">
                                        <div className="blog-categories-widget">
                                            <h4 className="sub-title pb-20 mb-25 pt-25">Popular Post</h4>
                                            <ul className="blog-recent-post">
                                                <li>
                                                    <div className="posts mb-20">
                                                        <img src="./assets/img/blog/30.jpg" alt="" className="posts__thumb mb-15" />
                                                        <p>1st July , 2021</p>
                                                        <h6><NavLink to="blog-details.html">Lorem Ipsum is simply dummy text</NavLink></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="posts mb-20">
                                                        <img src="./assets/img/blog/31.jpg" alt="" className="posts__thumb mb-15" />
                                                        <p>1st July , 2021</p>
                                                        <h6><NavLink to="blog-details.html">Ipsum Lorem is simply dummy text</NavLink></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="posts mb-20">
                                                        <img src="./assets/img/blog/32.jpg" alt="" className="posts__thumb mb-15" />
                                                        <p>1st July , 2021</p>
                                                        <h6><NavLink to="blog-details.html">Lorem Ipsum is simply dummy text</NavLink></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="posts mb-20">
                                                        <img src="./assets/img/blog/33.jpg" alt="" className="posts__thumb mb-15" />
                                                        <p>1st July , 2021</p>
                                                        <h6><NavLink to="blog-details.html">Ipsum Lorem is simply dummy text</NavLink></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="posts mb-20">
                                                        <img src="./assets/img/blog/34.jpg" alt="" className="posts__thumb mb-15" />
                                                        <p>1st July , 2021</p>
                                                        <h6><NavLink to="blog-details.html">Lorem Ipsum is simply dummy text</NavLink></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="posts mb-20">
                                                        <img src="./assets/img/blog/35.jpg" alt="" className="posts__thumb mb-15" />
                                                        <p>1st July , 2021</p>
                                                        <h6><NavLink to="blog-details.html">Ipsum Lorem is simply dummy text</NavLink></h6>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget mb-50">
                                        <div className="blog-categories-widget">
                                            <h4 className="sub-title pb-20 mb-25 pt-25">Tags</h4>
                                            <div className="courses-tag-btn cat-btn tag-btn">
                                                <NavLink to="#">Online Class</NavLink>
                                                <NavLink to="#">Skill Share</NavLink>
                                                <NavLink to="#">Web Learn</NavLink>
                                                <NavLink to="#">Development</NavLink>
                                                <NavLink to="#">Direction</NavLink>
                                                <NavLink to="#">Certificate</NavLink>
                                            </div>
                                        </div>
                                    </div>
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
export default BlogDetails
const Wrapper = styled.div`
    .video-details-area {
        background-image: url("./assets/img/blog/20.jpg");
    }
`