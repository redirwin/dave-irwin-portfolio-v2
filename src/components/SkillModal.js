import React from "react";
import styled from "styled-components";

// import background from "../assets/excalibur2.jpg"

function SkillModal({ title, text }) {
  return (
    <SkillModalWrapper className="modal">
      <h3>{title}</h3>
      <p>{text}</p>
    </SkillModalWrapper>
  );
}

export default SkillModal;

const SkillModalWrapper = styled.section`
  text-align: center;
  position: fixed;
  bottom: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(34, 63, 82, 1);
  /* background-color: white; */
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);
  color: white;
  border: 1px solid white;
  width: 60%;
  padding: 2rem;
  border-radius: 5px;
`;
