import React from "react";
import styled from "styled-components";

function PageLinks() {
  return (
    <LinkList>
      <li>
        <a href="#about">ABOUT</a>
      </li>
      <li>
        <a href="#skills">SKILLS</a>
      </li>
      <li>
        <a href="#projects">PROJECTS</a>
      </li>
      <li>
        <a href="#contact">CONTACT</a>
      </li>
    </LinkList>
  );
}

export default PageLinks;

const LinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    justify-content: center;
    width: 80%;
    justify-content: space-between;
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: white;
    padding-right: 1rem;
    &:hover {
      color: #67a6b5;
    }
    @media (max-width: 768px) {
      text-align: center;
      padding: 0;
    }
  }
`;
