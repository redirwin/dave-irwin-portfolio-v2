import React from "react";
import styled from "styled-components";

function SkillAbout({ title, text }) {
  return (
    <SkillAboutWrapper className="modal">
      <h3>Skills</h3>
      <p>
        A wizard is only as good as his latest spell, so I'm constantly learning
        and adding new technologies to my bag of tricks. Here are just a few.
      </p>
      <h4>{title}</h4>
      <p>{text}</p>
    </SkillAboutWrapper>
  );
}

export default SkillAbout;

const SkillAboutWrapper = styled.section`
  width: 30%;
  height: 27rem;

  h4 {
    line-height: 2rem;
    margin-bottom: 0;
  }
`;
