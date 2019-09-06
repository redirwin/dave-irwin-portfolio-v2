import React from "react";
import styled from "styled-components";
import "./styles/App.scss";

import sword from "./assets/excalibur2.jpg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AppWrapper className="App">
      <Navbar />
      <img src={sword} alt="excalibur"></img>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100vw;
  img {
    width: 100%;
  }
`;
