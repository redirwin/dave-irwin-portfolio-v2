import React from "react";
import styled from "styled-components";

import Intro from "./Intro";

function Header() {
  return (
    <HeaderWrapper className="header-wrapper">
      <Intro />
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
