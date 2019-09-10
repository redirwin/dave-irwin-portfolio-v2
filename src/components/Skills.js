import React, { useState } from "react";
import styled from "styled-components";

import SkillAbout from "./SkillAbout";
import SkillCards from "./SkillCards";

function Skills() {
  const [title, updateTitle] = useState("");
  const [text, updateText] = useState("");

  function skillText(skill) {
    updateTitle(skill);
    switch (skill) {
      case "HTML5":
        updateText(
          "I deliver well-structured, semantic frontends that are easily readable by humans and assistive devices."
        );
        break;

      case "CSS3":
        updateText(
          "I design cleanly-styled and fully responsive applications with vanilla CSS, or using a CSS preprocessor such as SASS."
        );
        break;

      case "Design":
        updateTitle("Design Frameworks");
        updateText(
          "I create applications and websites using Bootstrap, Semantic UI, styled-components, & Material UI."
        );
        break;

      case "JavaScript":
        updateText(
          "I build applications to the latest ECMAScript standards for efficient, interactive front ends."
        );
        break;

      case "React":
        updateTitle("User Interfaces");
        updateText(
          "I engineer engaging UIs using the React library with Redux & Hooks for state management."
        );
        break;

      case "REST APIs":
        updateText(
          "I create frontends that interface with and consume data from REST APIs, and I build flexible & secure APIs that provide data endpoints from the backend."
        );
        break;

      case "Version Control":
        updateText(
          "I use Git & GitHub for smart version control to manage project tasks and effectively work with development teams."
        );
        break;

      case "Databases":
        updateTitle("SQL Databases");
        updateText(
          "I implement relational databases like SQLite and PostgreSQL to securely persist and deliver data."
        );
        break;

      case "Node.js":
        updateText(
          "I deliver modern & scalable backends built on JavaScript for a simplified full-stack development experience."
        );
        break;

      case "Deployment":
        updateText(
          "I deploy sites and applications to Heroku, Netlify, or private servers, quickly making them accessible for testing or end users."
        );
        break;

      case "SEO":
        updateText(
          "I combine smart on-page and off-page search engine optimization to get sites indexed and ranked."
        );
        break;

      case "WordPress":
        updateText(
          "When a website or blog with limited customization is needed, I can quickly deliver high-quality WordPress sites."
        );
        break;

      default:
        break;
    }
  }

  function defaultText() {
    updateTitle("");
    updateText("");
  }

  return (
    <SkillsWrapper id="skills">
      <div className="internal-section-wrapper">
        <SkillCards skillText={skillText} defaultText={defaultText} />
        <SkillAbout title={title} text={text} />
      </div>
    </SkillsWrapper>
  );
}

export default Skills;

const SkillsWrapper = styled.section`
  .internal-section-wrapper {
    margin-top: 0;
    display: flex;
    justify-content: space-between;
    .icons-wrapper {
      width: 65%;
      font-size: 5rem;
      text-align: center;
      margin-left: -1.5rem;
      margin-bottom: -1.5rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .card-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 2rem;
      /* color:  */
      &:hover {
        color: #43697a;
        font-weight: bold;
        p {
          text-shadow: 5px 5px 10px #43697a;
        }
      }
      .card-icon {
        width: 4rem;
      }
    }
  }
`;
