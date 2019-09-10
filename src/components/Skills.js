import React from "react";
import styled from "styled-components";

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

import SkillModal from "./SkillModal";

function Skills() {
  return (
    <SkillsWrapper id="skills">
      <div className="internal-section-wrapper">
        <h3>Skills</h3>
        <div className="icons-wrapper">
          <div className="skill-wrapper">
            <FontAwesomeIcon icon={faHtml5} size="1x" className="card-icon" />
            <SkillModal
              title="HTML5"
              text="I deliver well-structured, semantic frontends that are easily readable by humans and assistive devices."
            />
          </div>

          <div className="skill-wrapper">
            <FontAwesomeIcon icon={faCss3Alt} size="1x" className="card-icon" />
            <SkillModal
              title="CSS3"
              text="I design cleanly-styled and fully responsive applications with vanilla CSS, or using a CSS preprocessor such as SASS."
            />
          </div>

          <div className="skill-wrapper">
            <FontAwesomeIcon
              icon={faBootstrap}
              size="1x"
              className="card-icon"
            />
            <SkillModal
              title="Design Frameworks"
              text="I create applications and websites using Bootstrap, Semantic UI, styled-components, Material UI, and more."
            />
          </div>

          <div className="skill-wrapper">
            <FontAwesomeIcon
              icon={faJsSquare}
              size="1x"
              className="card-icon"
            />
            <SkillModal
              title="JavaScript"
              text="I build applications to the latest ECMAScript standards for efficient, interactive front ends."
            />
          </div>

          <div className="skill-wrapper">
            <FontAwesomeIcon icon={faReact} size="1x" className="card-icon" />
            <SkillModal
              title="User Interfaces"
              text="I engineer engaging UIs using the React library with Redux & Hooks for state management."
            />
          </div>

          <div className="skill-wrapper">
            <FontAwesomeIcon icon={faCogs} size="1x" className="card-icon" />
            <SkillModal
              title="REST APIs"
              text="I create frontends that interface with and consume data from REST APIs, and I build flexible & secure APIs that provide data endpoints from the backend."
            />
          </div>

          <div className="skill-wrapper">
            <FontAwesomeIcon
              icon={faCodeBranch}
              size="1x"
              className="card-icon"
            />
            <SkillModal
              title="Version Control"
              text="I use Git & GitHub for smart version control to manage project tasks and effectively work with development teams."
            />
          </div>

          <div className="skill-wrapper">
            <FontAwesomeIcon
              icon={faDatabase}
              size="1x"
              className="card-icon"
            />
            <SkillModal
              title="Databases"
              text="I implement relational databases like SQLite and PostgreSQL to securely persist and deliver data."
            />
          </div>

          <div className="skill-wrapper">
            <FontAwesomeIcon icon={faNodeJs} size="1x" className="card-icon" />
            <SkillModal
              title="Node.js"
              text="I deliver modern & scalable backends built on JavaScript for a simplified full-stack development experience."
            />
          </div>

          <div className="skill-wrapper">
            <FontAwesomeIcon icon={faUpload} size="1x" className="card-icon" />
            <SkillModal
              title="Deployment"
              text="I deploy sites and applications to Heroku, Netlify, or private servers, quickly making them accessible to end users."
            />
          </div>

          <div className="skill-wrapper">
            <FontAwesomeIcon icon={faSearch} size="1x" className="card-icon" />
            <SkillModal
              title="SEO"
              text="I combine smart on-page and off-page search engine optimization to get sites indexed and ranked."
            />
          </div>

          <div className="skill-wrapper">
            <FontAwesomeIcon
              icon={faWordpress}
              size="1x"
              className="card-icon"
            />
            <SkillModal
              title="WordPress"
              text="When a website or blog with limited customization is needed, I can quickly deliver high-quality WordPress sites."
            />
          </div>
        </div>
      </div>
    </SkillsWrapper>
  );
}

export default Skills;

const SkillsWrapper = styled.section`
  width: 100%;
  background-color: black;
  .icons-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .card-icon {
      font-size: 5rem;
      transition: color 0.1s;
      &:hover {
        color: #67a6b5;
      }
    }
    .modal {
      display: none;
    }
  }
  .skill-wrapper {
    margin: 2rem;
    padding: none;
    &:hover {
      .modal {
        display: block;
      }
    }
  }
`;
