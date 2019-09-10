import React from "react";
import styled from "styled-components";

function About() {
  return (
    <AboutWrapper>
      <div className="internal-section-wrapper">
        <h3>About Me</h3>
        <p>
          Great developers aren't fairytales, but finding the knight in shining
          armor to help tackle your development dragons can feel like a hopeless
          quest. With almost ten years of industry experience, I'd like to be
          part of making your project a legendary success.
        </p>
        <p>
          I'm Dave Irwin, a developer skilled in the mystic arts of front and
          back-end technologies. Currently, I'm honing my craft through an
          intensive 9-month apprenticeship in software engineering with{" "}
          <a
            href="https://lambdaschool.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lambda School
          </a>
          . I'm also on the lookout for new opportunities.{" "}
        </p>
        <p>
          As a strong team player with business ownership and leadership
          abilities, I'm looking for mentorship and room to grow. Take a look at
          my skills and projects. Then grab a copy of my{" "}
          <a href="/resume.pdf">resume</a> and{" "}
          <a href="#contact">get in touch</a> to discuss your project needs.
        </p>
        <p>Together, we can work some real magic.</p>
      </div>
    </AboutWrapper>
  );
}

export default About;

const AboutWrapper = styled.section`
  width: 100%;
  background-color: #223f52;
`;
