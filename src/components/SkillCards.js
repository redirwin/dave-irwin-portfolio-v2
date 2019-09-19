import React from "react";
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJsSquare,
  faReact,
  faNodeJs,
  faWordpress
} from "@fortawesome/free-brands-svg-icons";
import {
  faCogs,
  faDatabase,
  faCodeBranch,
  faSearch,
  faUpload
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillCards({ skillText, defaultText }) {
  return (
    <div className="icons-wrapper">
      <div
        className="card-wrapper"
        onMouseEnter={() => {
          skillText("HTML5");
        }}
        onMouseLeave={() => {
          defaultText();
        }}
      >
        <FontAwesomeIcon icon={faHtml5} size="1x" className="card-icon" />
        <p>HTML</p>
      </div>
      <div
        className="card-wrapper"
        onMouseEnter={() => {
          skillText("CSS3");
        }}
        onMouseLeave={() => {
          defaultText();
        }}
      >
        <FontAwesomeIcon icon={faCss3Alt} size="1x" className="card-icon" />
        <p>CSS</p>
      </div>
      <div
        className="card-wrapper"
        onMouseEnter={() => {
          skillText("Design");
        }}
        onMouseLeave={() => {
          defaultText();
        }}
      >
        <FontAwesomeIcon icon={faBootstrap} size="1x" className="card-icon" />
        <p>Design</p>
      </div>
      <div
        className="card-wrapper"
        onMouseEnter={() => {
          skillText("JavaScript");
        }}
        onMouseLeave={() => {
          defaultText();
        }}
      >
        <FontAwesomeIcon icon={faJsSquare} size="1x" className="card-icon" />
        <p>JavaScript</p>
      </div>
      <div
        className="card-wrapper"
        onMouseEnter={() => {
          skillText("React");
        }}
        onMouseLeave={() => {
          defaultText();
        }}
      >
        <FontAwesomeIcon icon={faReact} size="1x" className="card-icon" />
        <p>React</p>
      </div>
      <div
        className="card-wrapper"
        onMouseEnter={() => {
          skillText("REST APIs");
        }}
        onMouseLeave={() => {
          defaultText();
        }}
      >
        <FontAwesomeIcon icon={faCogs} size="1x" className="card-icon" />
        <p>APIs</p>
      </div>
      <div
        className="card-wrapper"
        onMouseEnter={() => {
          skillText("Version Control");
        }}
        onMouseLeave={() => {
          defaultText();
        }}
      >
        <FontAwesomeIcon icon={faCodeBranch} size="1x" className="card-icon" />
        <p>Git & GitHub</p>
      </div>

      <div
        className="card-wrapper"
        onMouseEnter={() => {
          skillText("Databases");
        }}
        onMouseLeave={() => {
          defaultText();
        }}
      >
        <FontAwesomeIcon icon={faDatabase} size="1x" className="card-icon" />
        <p>Databases</p>
      </div>

      <div
        className="card-wrapper"
        onMouseEnter={() => {
          skillText("Node.js");
        }}
        onMouseLeave={() => {
          defaultText();
        }}
      >
        <FontAwesomeIcon icon={faNodeJs} size="1x" className="card-icon" />
        <p>Node.js</p>
      </div>
      <div
        className="card-wrapper"
        onMouseEnter={() => {
          skillText("Deployment");
        }}
        onMouseLeave={() => {
          defaultText();
        }}
      >
        <FontAwesomeIcon icon={faUpload} size="1x" className="card-icon" />
        <p>Deployment</p>
      </div>

      <div
        className="card-wrapper"
        onMouseEnter={() => {
          skillText("SEO");
        }}
        onMouseLeave={() => {
          defaultText();
        }}
      >
        <FontAwesomeIcon icon={faSearch} size="1x" className="card-icon" />
        <p>SEO</p>
      </div>

      <div
        className="card-wrapper"
        onMouseEnter={() => {
          skillText("WordPress");
        }}
        onMouseLeave={() => {
          defaultText();
        }}
      >
        <FontAwesomeIcon icon={faWordpress} size="1x" className="card-icon" />
        <p>WordPress</p>
      </div>
    </div>
  );
}

export default SkillCards;
