import React from 'react'

class ProfilePage extends React.Component {
    render() {
        return (
            <div className="profile-page">
                <div className="wrapper">
                    <div
                        className="page-header page-header-small"
                        filter-color="green"
                    >
                        <div
                            className="page-header-image"
                            data-parallax="true"
                            style={{backgroundImage: 'url("images/bg-image-1.png")'}}
                        ></div>
                        <div className="container">
                            <div className="content-center">
                                <div className="cc-profile-image">
                                    <a href="#">
                                        <img src={"images/pp-serhat.jpeg"} alt="Image"/>
                                    </a>
                                </div>
                                <div className="h2 title">Serhat Sait Pekediz</div>
                                <p className="category text-white">
                                    Web Developer, Mobile Developer
                                </p>
                                <a
                                    className="btn btn-primary smooth-scroll mr-2"
                                    href="#contact"
                                    data-aos="zoom-in"
                                    data-aos-anchor="data-aos-anchor"
                                >
                                    Hire Me
                                </a>
                                <a
                                    className="btn btn-primary"
                                    href="#"
                                    data-aos="zoom-in"
                                    data-aos-anchor="data-aos-anchor"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                        <div className="section">
                            <div className="container">
                                <div className="button-container">
                                    <a
                                        className="btn btn-default btn-round btn-lg btn-icon"
                                        href="https://www.linkedin.com/in/serhat-sait-pekediz-125634141/"
                                        rel="tooltip"
                                        title="Follow me on Linkedin"
                                    >
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                    <a
                                        className="btn btn-default btn-round btn-lg btn-icon"
                                        href="https://github.com/serhatsait"
                                        rel="tooltip"
                                        title="Follow me on Github"
                                    >
                                        <i className="fa fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfilePage
