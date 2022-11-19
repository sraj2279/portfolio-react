import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Home.css'
import { NameAnimation } from "../components/TypeAnimations"

function Home() {
    return (
        <div className="home">
            <div className="about">
                <NameAnimation />
                <div className="prompt">
                    <p>A computer science graduate with a passion for learning and creating.</p>
                    <LinkedInIcon className="icon" onClick={() => window.open("https://www.linkedin.com/in/shyam-raj-652b55198/")} />
                    <EmailIcon className="icon" onClick={() => { window.open("mailto:shyamraj0805@gmail.com"); window.alert("Email: shyamraj0805@gmail.com"); }} />
                    <GitHubIcon className="icon" onClick={() => window.open("https://github.com/sraj2279")} />
                </div>
            </div>
            <div className="skills">
                <h1> Skills </h1>
                <ol className="list">
                    <li className="item1">
                        <h2>Front-End</h2>
                        <span>ReactJS, HTML, CSS, JavaScript</span>
                    </li>
                    <li className="item2">
                        <h2>Back-End</h2>
                        <span>NodeJS, Python Django, PostgreSQL, AWS</span>
                    </li>
                    <li className="item3">
                        <h2>Languages</h2>
                        <span>Java, Python, C, C++</span>
                    </li>
                    <li className="item4">
                        <h2>Software</h2>
                        <span>Git, Bitbucket, Jira, Trello, Slack</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home