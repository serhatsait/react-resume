import React from 'react'

class About extends React.Component {
    render() {
        return (
            <div className="section" id="about">
                <div className="container">
                    <div className="card" data-aos="fade-up" data-aos-offset="10">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="card-body">
                                    <div className="h4 mt-0 title">About</div>
                                    <p>
                                        Hello! I am Serhat Sait Pekediz.
                                    </p>
                                    <p>
                                        I have experience in Front-end and Back-end and Mobile development. I know
                                        Python, Php, C#
                                        and a few front-end libraries (React etc.). I did this website with React and
                                        Bootstrap.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="card-body">
                                    <div className="h4 mt-0 title">Basic Information</div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <strong className="text-uppercase">Age:</strong>
                                        </div>
                                        <div className="col-sm-8">30</div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-4">
                                            <strong className="text-uppercase">Email:</strong>
                                        </div>
                                        <div className="col-sm-8">
                                            <a href="mailto:serhatsaitpekediz@gmail.com"
                                               style={{color: '#2c2c2c'}}>
                                                serhatsaitpekediz@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-4">
                                            <strong className="text-uppercase">Phone:</strong>
                                        </div>
                                        <div className="col-sm-8">
                                            <a href="tel:+905455461934"
                                               style={{color: '#2c2c2c'}}>
                                                +90545-546-19-34
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-4">
                                            <strong className="text-uppercase">Address:</strong>
                                        </div>
                                        <div className="col-sm-8">
                                            Istanbul, Turkey
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-4">
                                            <strong className="text-uppercase">Language:</strong>
                                        </div>
                                        <div className="col-sm-8">Turkish, English</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
