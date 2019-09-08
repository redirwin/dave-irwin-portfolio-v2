import React from "react";
import {
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="http://github.com/redirwin">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a href="https://www.linkedin.com/in/redirwin/">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
      <a href="http://twitter.com/redirwin">
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </a>
    </div>
  );
}

export default SocialIcons;
