import React, { useState } from "react";
import styled from "styled-components";
import useSound from "use-sound";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 7rem;
  width: 10rem;
  border-radius: 5px;
  background-color: #a1b5cf;
  margin-bottom: 2rem;
	margin-right: 1rem;
	align-items: center;
`;

const PlayButton = styled.div`
  height: 2.5rem;
  width: 2.5rem;
	padding: 0.2rem;
  border-radius: 10px;
  background-color: #5dba6b;
  cursor: pointer;
	margin-bottom: 1rem;
`;

const SoundBox = ({ sound }) => {
  const soundPath = "/sounds/" + sound.file;

  const [volume, setVolume] = useState(5);

  const [play] = useSound(soundPath, { volume: volume });

  return (
    <>
      <Container>
        <p>{sound.name}</p>
        <PlayButton onMouseDown={() => play()}></PlayButton>
        <Slider
          defaultValue={0.5}
          startPoint={0}
          step={0.05}
          max={1}
          ariaValueTextFormatterForHandle={(value) => setVolume(value)}
        />
      </Container>
    </>
  );
};

export default SoundBox;
