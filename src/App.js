import React from "react";
import styled from "styled-components";
import "./styles/App.scss";

import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <AppWrapper className="App">
      <Navbar />
      <Header />
      <p>
        Duis sint adipisicing elit et anim tempor irure. Culpa reprehenderit ea
        labore consectetur Lorem duis et. Proident dolore cillum sunt aliquip
        fugiat cupidatat quis id do elit labore velit non. Tempor proident
        proident aute mollit eu est mollit magna ut est.
      </p>
      <p>
        Duis sint adipisicing elit et anim tempor irure. Culpa reprehenderit ea
        labore consectetur Lorem duis et. Proident dolore cillum sunt aliquip
        fugiat cupidatat quis id do elit labore velit non. Tempor proident
        proident aute mollit eu est mollit magna ut est.
      </p>
      <p>
        Duis sint adipisicing elit et anim tempor irure. Culpa reprehenderit ea
        labore consectetur Lorem duis et. Proident dolore cillum sunt aliquip
        fugiat cupidatat quis id do elit labore velit non. Tempor proident
        proident aute mollit eu est mollit magna ut est.
      </p>
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
