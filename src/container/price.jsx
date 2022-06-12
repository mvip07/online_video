import React from 'react'
import styled from 'styled-components'
import Subscribe from '../components/subscribe'
import { NavLink } from "react-router-dom"
import Header from '../components/header'
import Footer from '../components/footer'
import Information from '../components/information'

const Price = () => {
    return (

        <Wrapper>
            <Header />
            <main>
                <section className="page-title-area d-flex align-items-end">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="page-title-wrapper mb-50">
                                    <h1 className="page-title mb-25">Pricing Table</h1>
                                    <div className="breadcrumb-list">
                                        <ul className="breadcrumb">
                                            <li><NavLink to="/">Home - Pages -</NavLink></li>
                                            <li><NavLink to="#">Price</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="plan-area pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-9">
                                <div className="section-title text-center mb-55">
                                    <h5 className="bottom-line mb-25">Pricing Table</h5>
                                    <h2>Explore our Popular Courses?</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="plan-tab mb-60">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button className="nav-link theme_btn active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Monthly</button>
                                            <button className="nav-link theme_btn" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Yearly</button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="plan text-center mb-30">
                                            <div className="pr__header mb-30">
                                                <h2>Basic</h2>
                                                <h5>Best Choice for individuals</h5>
                                                <img src="./assets/img/icon/writing.svg" alt="" className="pr-icon" />
                                            </div>
                                            <div className="pr__body">
                                                <h2 className="mb-30"><span className="old-price">$699</span> <b><sup>$</sup>399<span className="new-price">/ Monthly</span> </b></h2>
                                                <ul className="price-list">
                                                    <li>All Courses</li>
                                                    <li>For One Person Uses Only</li>
                                                    <li>25+ Article Free</li>
                                                    <li>No Social Media Activity</li>
                                                    <li>No Lifetime Access</li>
                                                    <li>Emergency Support Only</li>
                                                </ul>
                                            </div>
                                            <div className="pr__footer mt-50">
                                                <NavLink to="#" className="theme_btn price_btn">Buy Now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="plan plan-2 text-center mb-30">
                                            <div className="pr__header mb-30">
                                                <h2>Standard</h2>
                                                <h5>Best Choice for Yearly Access</h5>
                                                <img src="./assets/img/icon/test.svg" alt="" className="pr-icon" />
                                            </div>
                                            <div className="pr__body">
                                                <h2 className="mb-30"><span className="old-price">$899</span> <b><sup>$</sup>599<span className="new-price">/ Monthly</span> </b></h2>
                                                <ul className="price-list">
                                                    <li>All Courses</li>
                                                    <li>For One Person Uses Only</li>
                                                    <li>25+ Article Free</li>
                                                    <li>No Social Media Activity</li>
                                                    <li>No Lifetime Access</li>
                                                    <li>Emergency Support Only</li>
                                                </ul>
                                            </div>
                                            <div className="pr__footer mt-50">
                                                <NavLink to="#" className="theme_btn price_btn active">Buy Now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="plan plan-2a text-center mb-30">
                                            <div className="pr__header mb-30">
                                                <h2>Unlimited</h2>
                                                <h5>Billed once. Get lifetime access.</h5>
                                                <img src="./assets/img/icon/lifetime.svg" alt="" className="pr-icon" />
                                            </div>
                                            <div className="pr__body">
                                                <h2 className="mb-30"><span className="old-price">$1299</span> <b><sup>$</sup>799<span className="new-price">/ Monthly</span> </b></h2>
                                                <ul className="price-list">
                                                    <li>All Courses</li>
                                                    <li>For One Person Uses Only</li>
                                                    <li>25+ Article Free</li>
                                                    <li>No Social Media Activity</li>
                                                    <li>No Lifetime Access</li>
                                                    <li>Emergency Support Only</li>
                                                </ul>
                                            </div>
                                            <div className="pr__footer mt-50">
                                                <NavLink to="#" className="theme_btn price_btn">Buy Now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="plan text-center mb-30">
                                            <div className="pr__header mb-30">
                                                <h2>Basic</h2>
                                                <h5>Best Choice for individuals</h5>
                                                <img src="./assets/img/icon/writing.svg" alt="" className="pr-icon" />
                                            </div>
                                            <div className="pr__body">
                                                <h2 className="mb-30"><span className="old-price">$699</span> <b><sup>$</sup>399<span className="new-price">/ Monthly</span> </b></h2>
                                                <ul className="price-list">
                                                    <li>All Courses</li>
                                                    <li>For One Person Uses Only</li>
                                                    <li>25+ Article Free</li>
                                                    <li>No Social Media Activity</li>
                                                    <li>No Lifetime Access</li>
                                                    <li>Emergency Support Only</li>
                                                </ul>
                                            </div>
                                            <div className="pr__footer mt-50">
                                                <NavLink to="#" className="theme_btn price_btn">Buy Now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="plan plan-2 text-center mb-30">
                                            <div className="pr__header mb-30">
                                                <h2>Standard</h2>
                                                <h5>Best Choice for Yearly Access</h5>
                                                <img src="./assets/img/icon/test.svg" alt="" className="pr-icon" />
                                            </div>
                                            <div className="pr__body">
                                                <h2 className="mb-30"><span className="old-price">$899</span> <b><sup>$</sup>599<span className="new-price">/ Monthly</span> </b></h2>
                                                <ul className="price-list">
                                                    <li>All Courses</li>
                                                    <li>For One Person Uses Only</li>
                                                    <li>25+ Article Free</li>
                                                    <li>No Social Media Activity</li>
                                                    <li>No Lifetime Access</li>
                                                    <li>Emergency Support Only</li>
                                                </ul>
                                            </div>
                                            <div className="pr__footer mt-50">
                                                <NavLink to="#" className="theme_btn price_btn active">Buy Now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="plan plan-2a text-center mb-30">
                                            <div className="pr__header mb-30">
                                                <h2>Unlimited</h2>
                                                <h5>Billed once. Get lifetime access.</h5>
                                                <img src="./assets/img/icon/lifetime.svg" alt="" className="pr-icon" />
                                            </div>
                                            <div className="pr__body">
                                                <h2 className="mb-30"><span className="old-price">$1299</span> <b><sup>$</sup>799<span className="new-price">/ Monthly</span> </b></h2>
                                                <ul className="price-list">
                                                    <li>All Courses</li>
                                                    <li>For One Person Uses Only</li>
                                                    <li>25+ Article Free</li>
                                                    <li>No Social Media Activity</li>
                                                    <li>No Lifetime Access</li>
                                                    <li>Emergency Support Only</li>
                                                </ul>
                                            </div>
                                            <div className="pr__footer mt-50">
                                                <NavLink to="#" className="theme_btn price_btn">Buy Now</NavLink>
                                            </div>
                                        </div>
                                    </div>
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
export default Price
const Wrapper = styled.div``
