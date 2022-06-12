import { useState } from "react"

const GreatOffers = () => {
    const [owlStage, setOwlStage] = useState(0)
    const [owlStageLoad, setOwlStageLoad] = useState(true)


    if (owlStageLoad === true) {
        setTimeout(() => {
            setOwlStage(owlStage + 270)
            if (owlStage >= 2700) setOwlStage(0)
        }, 3000)
    }

    return (
        <section className="great-deal-area pt-150 pb-90 pt-md-100 pb-md-40 pt-xs-100 pb-xs-40">
            <div className="container">
                <div className="row justify-content-lg-center justify-content-start">
                    <div className="col-xl-3 col-lg-8">
                        <div className="deal-box mb-30 text-center text-xl-start">
                            <h2 className="mb-20"><b>Great</b> Deals For You</h2>
                            <p>There are many variations of passa of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                    </div>
                    {/* tabindex */}
                    <div className="col-xl-8">
                        <div className="deal-active owl-carousel mb-30 owl-loaded owl-drag">
                            <div className="owl-stage-outer">
                                <div className="owl-stage" style={{ transform: `translate3d(-${owlStage}px, 0px, 0px)`, transition: "all 2s ease 0s", width: "3300px" }}>
                                    <div className="owl-item cloned" >
                                        <div className="single-item mr30" style={{ width: "270px" }}>
                                            <div className="single-box s-box3 mb-30">
                                                <div className="single-box__icon mb-25">
                                                    <img src="./assets/img/icon/notepad.svg" alt="" />
                                                </div>
                                                <h4 className="sub-title mb-20">Free Trial Lesson1</h4>
                                                <p>There are many variations of pas of Lorm Ipsum available.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned">
                                        <div className="single-item mr30" style={{ width: " 270px" }}>
                                            <div className="single-box mb-30">
                                                <div className="single-box__icon mb-25">
                                                    <img src="./assets/img/icon/puzzle.svg" alt="" />
                                                </div>
                                                <h4 className="sub-title mb-20">Learn New Skills</h4>
                                                <p>There are many variations of pas of Lorm Ipsum available.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned">
                                        <div className="single-item mr30" style={{ width: " 270px" }}>
                                            <div className="single-box s-box2 mb-30">
                                                <div className="single-box__icon mb-25">
                                                    <img src="./assets/img/icon/manager.svg" alt="" />
                                                </div>
                                                <h4 className="sub-title mb-20">Expert Trainers</h4>
                                                <p>There are many variations of pas of Lorm Ipsum available.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item">
                                        <div className="single-item mr30" style={{ width: " 270px" }}>
                                            <div className="single-box mb-30">
                                                <div className="single-box__icon mb-25">
                                                    <img src="./assets/img/icon/puzzle.svg" alt="" />
                                                </div>
                                                <h4 className="sub-title mb-20">Learn New Skills</h4>
                                                <p>There are many variations of pas of Lorm Ipsum available.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item">
                                        <div className="single-item mr30" style={{ width: " 270px" }}>
                                            <div className="single-box s-box2 mb-30">
                                                <div className="single-box__icon mb-25">
                                                    <img src="./assets/img/icon/manager.svg" alt="" />
                                                </div>
                                                <h4 className="sub-title mb-20">Expert Trainers</h4>
                                                <p>There are many variations of pas of Lorm Ipsum available.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item">
                                        <div className="single-item mr30" style={{ width: " 270px" }}>
                                            <div className="single-box s-box3 mb-30">
                                                <div className="single-box__icon mb-25">
                                                    <img src="./assets/img/icon/notepad.svg" alt="" />
                                                </div>
                                                <h4 className="sub-title mb-20">Free Trial Lesson</h4>
                                                <p>There are many variations of pas of Lorm Ipsum available.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item">
                                        <div className="single-item mr30" style={{ width: " 270px" }}>
                                            <div className="single-box mb-30">
                                                <div className="single-box__icon mb-25">
                                                    <img src="./assets/img/icon/puzzle.svg" alt="" />
                                                </div>
                                                <h4 className="sub-title mb-20">Learn New Skills</h4>
                                                <p>There are many variations of pas of Lorm Ipsum available.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item ">
                                        <div className="single-item mr30" style={{ width: " 270px" }}>
                                            <div className="single-box s-box2 mb-30">
                                                <div className="single-box__icon mb-25">
                                                    <img src="./assets/img/icon/manager.svg" alt="" />
                                                </div>
                                                <h4 className="sub-title mb-20">Expert Trainers</h4>
                                                <p>There are many variations of pas of Lorm Ipsum available.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned ">
                                        <div className="single-item mr30" style={{ width: " 270px" }}>
                                            <div className="single-box mb-30">
                                                <div className="single-box__icon mb-25">
                                                    <img src="./assets/img/icon/puzzle.svg" alt="" />
                                                </div>
                                                <h4 className="sub-title mb-20">Learn New Skills</h4>
                                                <p>There are many variations of pas of Lorm Ipsum available.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned ">
                                        <div className="single-item mr30" style={{ width: " 270px" }}>
                                            <div className="single-box s-box2 mb-30">
                                                <div className="single-box__icon mb-25">
                                                    <img src="./assets/img/icon/manager.svg" alt="" />
                                                </div>
                                                <h4 className="sub-title mb-20">Expert Trainers</h4>
                                                <p>There are many variations of pas of Lorm Ipsum available.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-item cloned">
                                        <div className="single-item mr30" style={{ width: " 270px" }}>
                                            <div className="single-box s-box3 mb-30">
                                                <div className="single-box__icon mb-25">
                                                    <img src="./assets/img/icon/notepad.svg" alt="" />
                                                </div>
                                                <h4 className="sub-title mb-20">Free Trial Lesson</h4>
                                                <p>There are many variations of pas of Lorm Ipsum available.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-nav">
                                <button type="button" role="presentation" className="owl-prev" onClick={() => { setOwlStageLoad(false); owlStage <= 0 ? setOwlStage(0) : setOwlStage(owlStage - 270) }}><i className="fal fa-long-arrow-left"></i></button>
                                <button type="button" role="presentation" className="owl-next" onClick={() => { setOwlStageLoad(false); owlStage >= 2700 ? setOwlStage(0) : setOwlStage(owlStage + 270) }}><i className="fal fa-long-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GreatOffers