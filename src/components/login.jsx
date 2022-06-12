import styled from 'styled-components'
import Footer from './footer'
import Header from './header'
import Subscribe from './subscribe'

const Login = () => {
    return (
        <Wrapper>
            <Header />
            <main>
                <section class="page-title-area d-flex align-items-end" >
                    <div class="container">
                        <div class="row align-items-end">
                            <div class="col-lg-12">
                                <div class="page-title-wrapper mb-50">
                                    <h1 class="page-title mb-25">Login</h1>
                                    <div class="breadcrumb-list">
                                        <ul class="breadcrumb">
                                            <li><a href="/">Home -</a></li>
                                            <li><a href="#">Login</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="contact-form-area pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
                    <div class="container">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-lg-6">
                                <div class="contact-form-wrapper text-center mb-30">
                                    <h2 class="mb-45">Login</h2>
                                    <form action="#" class="row gx-3 comments-form contact-form">
                                        <div class="col-lg-12 mb-30">
                                            <input type="text" placeholder="Username" />
                                        </div>
                                        <div class="col-lg-12 mb-30">
                                            <input type="password" placeholder="******" />
                                        </div>
                                    </form>
                                    <button class="theme_btn message_btn mt-20">Login</button>
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
