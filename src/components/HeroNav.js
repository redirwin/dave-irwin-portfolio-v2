import React from "react";
import styled from "styled-components";

import PageLinks from "./PageLinks";
import SocialIcons from "./SocialIcons";

function HeroNav() {
  return (
    <HeroNavWrapper>
      <PageLinks />
      <SocialIcons />
    </HeroNavWrapper>
  );
}

export default HeroNav;
const HeroNavWrapper = styled.div`
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 992px) {
    flex-direction: column;
  }
  a {
    color: white;
    padding: 0.5rem;
  }
  .social-icons {
    width: 25%;
    display: flex;
    justify-content: space-between;
    a:hover {
      color: #67a6b5;
    }
    @media (max-width: 992px) {
      margin-top: 1rem;
      width: 30%;
    }
    @media (max-width: 768px) {
      width: 50%;
    }
  }
`;
