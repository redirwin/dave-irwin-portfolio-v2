import React from "react";
import styled from "styled-components";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopLink() {
  return (
    <TopLinkWrapper>
      <a href="#top">
        <FontAwesomeIcon icon={faLongArrowAltUp} size="lg" />
        Top
      </a>
    </TopLinkWrapper>
  );
}

export default TopLink;

const TopLinkWrapper = styled.div`
  a {
    color: white;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    /* transform: rotate(-90deg); */
  }
`;
