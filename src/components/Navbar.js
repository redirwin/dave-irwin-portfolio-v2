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
      <div className="social-icons">
        <span>LI</span>
        <span>GH</span>
        <span>TW</span>
      </div>
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
  /* border: 1px solid white; */

  ul {
    height: 3rem;
    list-style: none;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin: 0;
    padding: 0;
    width: 50vw;
    /* border: 1px solid white; */
    a {
      text-decoration: none;
      color: white;
      margin: 0;
      padding: 1.5rem;
      /* border: 1px solid white; */
    }
  }
  .social-icons {
    display: none;
  }
`;
