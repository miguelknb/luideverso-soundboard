import React from "react";
import styled from "styled-components";
import SoundPanel from './SoundPanel'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #4B4237;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SoundPanel />
      </Container>
    </>
  );
};

export default App;
