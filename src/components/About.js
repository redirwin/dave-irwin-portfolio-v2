import React from "react";
import styled from "styled-components";

function About() {
  return (
    <AboutWrapper>
      <div>
        <h3>About Me</h3>
        <p>
          With almost ten years of development experience, I especially enjoy
          the user-facing aspect of website and software creation, but I'm also
          a pro with back-end technologies. Currently, I'm a student finishing
          up an intensive 9-month software development program with{" "}
          <a
            href="https://lambdaschool.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lambda School
          </a>
          .
        </p>
        <p>
          I'm a team player with business ownership and leadership abilities.
          I'm looking for mentorship and room to grow. Contact me today to
          discuss your project needs. Together, we can work some real magic.
        </p>
      </div>
    </AboutWrapper>
  );
}

export default About;

const AboutWrapper = styled.section`
  width: 60%;
  margin: 3rem auto 0;
  p {
    font-size: 1.15rem;
    a {
      text-decoration: none;
      color: white;
      &:hover {
        /* text-decoration: underline; */
        color: #67a6b5;
      }
    }
  }
`;
