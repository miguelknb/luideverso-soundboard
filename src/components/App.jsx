import React from "react";
import styled from "styled-components";
import SoundPanel from './SoundPanel'
import { createGlobalStyle } from "styled-components";
import Footer from './Footer'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #4e4b47;
    padding: 0;
    margin: 0;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: .5rem;
  min-height: 900px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SoundPanel />
      </Container>
      <Footer/>
    </>
  );
};

export default App;
