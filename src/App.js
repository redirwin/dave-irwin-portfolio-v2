import React from "react";
import styled from "styled-components";
import "./styles/App.scss";

import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <About />
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
