import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import scroll from "../assests/scroll.png"
//import DesignServicesIcon from '@mui/icons-material/DesignServices'; // Using as Figma icon
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
    {/* Scroll to Top Icon */}
    <div className="scroll">
      <a href="#top">
        <img src={scroll} alt="Scroll to Top" className="scrollIcon" />
      </a>
    </div>

      {/* Social Icons */}
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/ektamulkalwar/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="https://github.com/EKTAMULKALWAR" target="_blank" rel="noopener noreferrer">
          <GitHubIcon fontSize="large" />
        </a>
        <a href="mailto:ektamulkalwar@gmail.com" target="_blank" rel="noopener noreferrer">
          <EmailIcon fontSize="large" />
        </a>
      </div>

      {/* Footer Text */}
      <p className="footerText">Ekta Mulkalwar ©2024</p>
    </div>
  );
}

export default Footer;
