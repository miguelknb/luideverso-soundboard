import React from "react";
import styled from "styled-components";
import { sounds } from '../soundMap'
import SoundBox from './SoundBox'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;
`;

const SearchBox = styled.div`
  display: flex;
`
const SearchInput = styled.input`
  display: flex;
`


const SoundPanel = () => {
  return (
    <>
      <MainContainer>
        {/* <SearchBox>
          <SearchInput>
          </SearchInput>
        </SearchBox> */}
        <Container>
          {sounds.map((sound) => {
            return <SoundBox soundName={sound} />
          })}
        </Container>
      </MainContainer>
    </>
  );
};

export default SoundPanel;
