import styled from "styled-components"
import Footer from "../components/footer"
import Header from "../components/header"
import Subscribe from "../components/subscribe"
import { NavLink } from "react-router-dom"

const Faq = () => {
    return (
        <Wrapper>
            <Header />
            <main>
                <section className="page-title-area d-flex align-items-end">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="page-title-wrapper mb-50">
                                    <h1 className="page-title mb-25">FAQ</h1>
                                    <div className="breadcrumb-list">
                                        <ul className="breadcrumb">
                                            <li><NavLink to="/">Home - Pages -</NavLink></li>
                                            <li><NavLink to="#">FAQ</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="faq-area pt-150 pb-120 pt-xs-95 pb-xs-90">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="faq-que-list mb-30">
                                    <div className="section-title text-center mb-45">
                                        <h2 className="mb-25">Frequently Asked Question</h2>
                                    </div>
                                    <div className="accordion accordion-two" id="accoedion-ex-two">
                                        <div className="accordion-item mb-30">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What is the best definition of education?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accoedion-ex-two">
                                                <div className="accordion-body">
                                                    <p>An attack of the ague sent him home, and on recovery, having resolved to attend NavLink high school and fit himself to become NavLink teacher, he passed the next four years in NavLink hard struggle with poverty and in an earnest effort to secure an education, studying for NavLink short time in the Geauga Seminary atChester, Ohio.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-30">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    What is the true meaning of education?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accoedion-ex-two">
                                                <div className="accordion-body">
                                                    <p>An attack of the ague sent him home, and on recovery, having resolved to attend NavLink high school and fit himself to become NavLink teacher, he passed the next four years in NavLink hard struggle with poverty and in an earnest effort to secure an education, studying for NavLink short time in the Geauga Seminary atChester, Ohio.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-30">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Why is education important?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accoedion-ex-two">
                                                <div className="accordion-body">
                                                    <p>An attack of the ague sent him home, and on recovery, having resolved to attend NavLink high school and fit himself to become NavLink teacher, he passed the next four years in NavLink hard struggle with poverty and in an earnest effort to secure an education, studying for NavLink short time in the Geauga Seminary atChester, Ohio.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-30">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    What are 3 types of education?
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accoedion-ex-two">
                                                <div className="accordion-body">
                                                    <p>An attack of the ague sent him home, and on recovery, having resolved to attend NavLink high school and fit himself to become NavLink teacher, he passed the next four years in NavLink hard struggle with poverty and in an earnest effort to secure an education, studying for NavLink short time in the Geauga Seminary atChester, Ohio.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-30">
                                            <h2 className="accordion-header" id="headingFive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    Who is the father of education?
                                                </button>
                                            </h2>
                                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="collapseFour" data-bs-parent="#accoedion-ex-two">
                                                <div className="accordion-body">
                                                    <p>An attack of the ague sent him home, and on recovery, having resolved to attend NavLink high school and fit himself to become NavLink teacher, he passed the next four years in NavLink hard struggle with poverty and in an earnest effort to secure an education, studying for NavLink short time in the Geauga Seminary atChester, Ohio.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="faq-btn text-center mt-50">
                                    <NavLink to="/faq" className="theme_btn faq_btn">Add Your Questions</NavLink>
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

export default Faq
const Wrapper = styled.div``