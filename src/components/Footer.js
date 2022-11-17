import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/shyam-raj-652b55198/")} />
                <EmailIcon onClick={() => { window.open("mailto:shyamraj0805@gmail.com"); window.alert("Email: shyamraj0805@gmail.com"); }} />
                <GitHubIcon onClick={() => window.open("https://github.com/sraj2279")} />
            </div>
            <p>&copy; 2022 benraj.com</p>
        </div>
    )
}

export default Footer