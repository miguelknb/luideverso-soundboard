import React from 'react'
import ReactHowler from 'react-howler'
import styled from "styled-components";

import {PauseCircle} from "@styled-icons/boxicons-regular/PauseCircle"
import {PlayCircle} from "@styled-icons/boxicons-regular/PlayCircle"
import {StopCircle} from "@styled-icons/boxicons-regular/StopCircle"

import raf from 'raf' // requestAnimationFrame polyfill
// import button from '../components/button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  /* height: 12rem; */
  width: 10rem;
  border-radius: 5px;
  background-color: #211F1C;
  margin-bottom: 2rem;
	margin-right: 1rem;
	align-items: center;
  text-align: center;
  justify-content: space-evenly;

  /* border: ${props=> props.isPlaying ? "solid 5px #D5A021" : "none"}; */
  box-shadow: ${props=> props.isPlaying ? "5px 5px #D5A021" : "none"};
  transition: box-shadow ease-in-out .5s;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const PlayButton = styled(PlayCircle)`
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  color: ${props => props.isPlaying ? "#5397d4" : "#65e688"};
  transition: color .3s ease-in;
`;

const PauseButton = styled(PauseCircle)`
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  color: ${props => props.isPlaying ? "#5397d4" : "#65e688"};
  transition: color .3s ease-in;
`;


const Label = styled.p`
  font-size: .8rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #EDE7D9;
`;

const StopButton = styled(StopCircle)`
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  color: #e66b65;
`;

const VolumeInput = styled.input`
	color: blue;
`

const NameContainer = styled.div`
  display: flex;
  height: 5rem;
  align-items: flex-start;
`

const Name = styled.p`
  font-size: 1.3rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #EDE7D9;
`;


class NewSoundBox extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false,
      loaded: false,
      loop: false,
      mute: false,
      volume: 0.5,
      seek: 0.0,
      isSeeking: false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleOnLoad = this.handleOnLoad.bind(this)
    this.handleOnEnd = this.handleOnEnd.bind(this)
    this.handleOnPlay = this.handleOnPlay.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.renderSeekPos = this.renderSeekPos.bind(this)
    this.handleMouseDownSeek = this.handleMouseDownSeek.bind(this)
    this.handleMouseUpSeek = this.handleMouseUpSeek.bind(this)
    this.handleSeekingChange = this.handleSeekingChange.bind(this)
  }

  componentWillUnmount () {
    this.clearRAF()
  }

  handleToggle () {
    this.setState({
      playing: !this.state.playing
    })
  }

  handleOnLoad () {
		if (!this.player) return null;
    this.setState({
      loaded: true,
      duration: this.player.duration()
    })
  }

  handleOnPlay () {
    this.setState({
      playing: true
    })
    this.renderSeekPos()
  }

  handleOnEnd () {
    this.setState({
      playing: false
    })
    this.clearRAF()
  }

  handleStop () {
    this.player.stop()
    this.setState({
      playing: false
    })
    this.renderSeekPos()
  }

  handleMouseDownSeek () {
    this.setState({
      isSeeking: true
    })
  }

  handleMouseUpSeek (e) {
    this.setState({
      isSeeking: false
    })

    this.player.seek(e.target.value)
  }

  handleSeekingChange (e) {
    this.setState({
      seek: parseFloat(e.target.value)
    })
  }

  renderSeekPos () {
    if (!this.state.isSeeking) {
      this.setState({
        seek: this.player.seek()
      })
    }
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos)
    }
  }

  clearRAF () {
    raf.cancel(this._raf)
  }

  render () {
    return (
      <Container isPlaying={this.state.playing}>
				<NameContainer>
          <Name>{this.props.soundName.name}</Name>
        </NameContainer>
        <ReactHowler
          src={"/sounds/" + this.props.soundName.file}
          playing={this.state.playing}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          onEnd={this.handleOnEnd}
          loop={this.state.loop}
          mute={this.state.mute}
          volume={this.state.volume}
          ref={(ref) => (this.player = ref)}
        />

        <div>
          <Label>
            Volume
            <span>
              <VolumeInput
                type='range'
                min='0'
                max='1'
                step='.05'
                value={this.state.volume}
                onChange={e => this.setState({ volume: parseFloat(e.target.value) })}
              />
            </span>
          </Label>
        </div>
				<ButtonsContainer>
					{this.state.playing ? <PauseButton isPlaying={this.state.playing} onClick={this.handleToggle} /> : <PlayButton onClick={this.handleToggle}/>}
					<StopButton onClick={this.handleStop}/>
				</ButtonsContainer>
        <div>
          <Label>
            Seek
            <span>
              <input
                type='range'
                min='0'
                max={this.state.duration ? this.state.duration.toFixed(2) : 0}
                step='.01'
                value={this.state.seek}
                onChange={this.handleSeekingChange}
                onMouseDown={this.handleMouseDownSeek}
                onMouseUp={this.handleMouseUpSeek}
              />
            </span>
          </Label>
        </div>
      </Container>
    )
  }
}

export default NewSoundBox