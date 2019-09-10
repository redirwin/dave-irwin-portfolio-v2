import React from "react";
import styled from "styled-components";
import "./styles/App.scss";

import Top from "./components/TopLink";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <AppWrapper className="App">
      <Top />
      <Header />
      <About />
      <Skills />
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
