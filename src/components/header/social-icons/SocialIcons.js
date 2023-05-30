import React from "react";
import {
  TfiLinkedin,
  TfiGithub
} from "react-icons/tfi";
import "./social-icons.css";


const SocialIcons = () => {
  return (
    <div className="social-icons">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/recep-kardes/">
            <TfiLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/kardesrecep">
            <TfiGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
