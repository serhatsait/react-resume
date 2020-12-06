import React from 'react'

class Experience extends React.Component {
    render() {
        return (
            <div className="section" id="experience">
                <div className="container cc-experience">
                    <div className="h4 text-center mb-4 title">Work Experience</div>
                    <div className="card">
                        <div className="row">
                            <div
                                className="col-md-3 bg-primary"
                                data-aos="fade-right"
                                data-aos-offset="50"
                                data-aos-duration="500"
                            >
                                <div className="card-body cc-experience-header">
                                    <p>March 2019 - Present</p>
                                    <div className="h5">Social Lift</div>
                                </div>
                            </div>
                            <div
                                className="col-md-9"
                                data-aos="fade-left"
                                data-aos-offset="50"
                                data-aos-duration="500"
                            >
                                <div className="card-body">
                                    <div className="h5">Web Developer</div>
                                    <p>
                                        Front-end and Back-end development of many projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="row">
                            <div
                                className="col-md-3 bg-primary"
                                data-aos="fade-right"
                                data-aos-offset="50"
                                data-aos-duration="500"
                            >
                                <div className="card-body cc-experience-header">
                                    <p>October 2017 - January 2019</p>
                                    <div className="h5">ORGINO MEDYA A.Ş.
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-md-9"
                                data-aos="fade-left"
                                data-aos-offset="50"
                                data-aos-duration="500"
                            >
                                <div className="card-body">
                                    <div className="h5">SOFTWARE DEVELOPER
                                    </div>
                                    <p>
                                        Front-end and Back-end development of many projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience
