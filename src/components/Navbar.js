import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <NavbarWrapper>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </NavbarWrapper>
  );
}

export default Navbar;

const NavbarWrapper = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  position: absolute;
  top: 0;
  z-index: 2;
  justify-content: space-between;
  align-items: center;
  color: white;

  ul {
    height: 3rem;
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 50vw;
    a {
      text-decoration: none;
      color: white;
      margin: 0;
      padding: 1.5rem;
      font-size: 1.25rem;
    }
  }
`;
