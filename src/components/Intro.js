import React from "react";
import styled from "styled-components";

import dave from "../assets/dave4.jpg";
import HeroNav from "./HeroNav";

function Intro() {
  return (
    <IntroWrapper>
      <h2>Dave Irwin</h2>
      <div className="profile-image">
        <img src={dave} alt="Dave Irwin"></img>
      </div>
      <p>
        I'm a full-stack developer and web wizard.<br></br>I blend technologies
        into creative works of magic.
      </p>
      <HeroNav />
    </IntroWrapper>
  );
}

export default Intro;

const IntroWrapper = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 40%;
  padding: 2rem 2rem 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  @media (max-width: 992px) {
    width: 70%;
    height: 80%;
  }
  @media (max-width: 576px) {
    padding-top: 20%;
    width: 100%;
    height: 100%;
  }
  h2 {
    line-height: 2.25rem;
    font-size: 2rem;
    text-transform: uppercase;
    margin: 0;
  }
  p {
    display: flex;
    line-height: 2rem;
    margin-bottom: 3rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .profile-image {
    border-radius: 100%;
    width: 20%;
    margin: 2rem auto 0;
    min-width: 100px;
    img {
      border-radius: 100%;
    }
  }
`;
