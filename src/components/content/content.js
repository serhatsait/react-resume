import React from 'react'
import ProfilePage from "./profile-page";
import About from "./about";
import Skill from "./skill";
import Portfolio from "./portfolio";
import Experience from "./experience";
import Education from "./education";
import Contact from "./contact";

class HomeContent extends React.Component {
    render() {
        return (
            <div className="page-content">
                <div>
                    <ProfilePage/>
                    <About/>
                    <Skill/>
                    <Portfolio/>
                    <Experience/>
                    <Education/>
                    {/*<Reference/>*/}
                    <Contact/>
                </div>
            </div>
        )
    }
}

export default HomeContent
