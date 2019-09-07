import React from "react";
import styled from "styled-components";

import About from "./About";

function Header() {
  return (
    <HeaderWrapper className="header-wrapper">
      <About />
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  /* background-image: url("../assets/excalibur2.jpg"); */
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
