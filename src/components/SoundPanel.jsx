import React from "react";
import styled from "styled-components";
import {sounds} from '../soundMap'
import SoundBox from './SoundBox'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;
`;

const SoundPanel = () => {
  return (
    <>
      <Container>
        {sounds.map( (sound) => {
            return <SoundBox sound={sound}/>
        })}
      </Container>
    </>
  );
};

export default SoundPanel;
