import React from "react";
import styled from "styled-components";

function About() {
  return (
    <AboutWrapper>
      <h2>Dave Irwin</h2>
      <p>
        As a full-stack developer and web wizard I believe finding<br></br> a
        great developer doesn't have to be a fairytale.
      </p>
      <button>Learn More</button>
    </AboutWrapper>
  );
}

export default About;

const AboutWrapper = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 40%;
  /* height: 50%; */
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  /* border: 1px solid black; */
  h2 {
    line-height: 2.25rem;
    text-transform: uppercase;
    margin: 0;
  }
  p {
    line-height: 2rem;
  }
  button {
    background-color: #43697a;
    color: white;
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
    border: none;
    transition: background-color 0.2s;
    &:hover {
      background-color: #223f52;
      cursor: pointer;
    }
    &:focus {
      outline: 0;
    }
  }
`;
