import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './footer'
import Header from './header'
import Subscribe from './subscribe'

const Login = () => {
    return (
        <Wrapper>
            <Header />
            <main>
                <section className="page-title-area d-flex align-items-end" >
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="page-title-wrapper mb-50">
                                    <h1 className="page-title mb-25">Login</h1>
                                    <div className="breadcrumb-list">
                                        <ul className="breadcrumb">
                                            <li><NavLink href="/">Home -</NavLink></li>
                                            <li><NavLink href="#">Login</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-form-area pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6">
                                <div className="contact-form-wrapper text-center mb-30">
                                    <h2 className="mb-45">Login</h2>
                                    <form action="#" className="row gx-3 comments-form contact-form">
                                        <div className="col-lg-12 mb-30">
                                            <input type="text" placeholder="Username" />
                                        </div>
                                        <div className="col-lg-12 mb-30">
                                            <input type="password" placeholder="******" />
                                        </div>
                                    </form>
                                    <button className="theme_btn message_btn mt-20">Login</button>
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
export default Login
const Wrapper = styled.div``
