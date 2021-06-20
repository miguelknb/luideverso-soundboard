import React from "react";
import styled from "styled-components";
import {keyframes} from "styled-components"

const BarContainer = styled.div`
  display: flex;
	width: 100%;
  flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
`;

const MainContainer = styled.div`
  display: flex;
	width: 100%;
	height: 100%;
  flex-direction: column;
`;

const Line = styled.div`
	display: flex;
	background-color: white;
	width: 100%;
	height: .2rem;
`

const Flicker = (y) => keyframes`
		0% {
			height: 5px;
		}
		100% {
			height: ${y};
		}
`

const Bar = styled.div`

	display: flex;
	background-color: white;
	border-radius: 5px;
	/* height: ${props => props.height + "px"}; */
	/* height: 50px; */
	width: .2rem;

	animation: ${props => Flicker(props.height)} 1s alternate infinite;
`

const Wave = ({ isPlaying }) => {
	// if (!isPlaying) {
	// 	return (
	// 		<MainContainer>
	// 			<Line/>
	// 		</MainContainer>
	// 	)
	// }

	const heights = [...Array(20)].map(() => Math.floor(Math.random() * 25));

	return (
		<>
			<MainContainer>
				<BarContainer>
					{
						heights.map( () => {
							return(
								<Bar height={Math.floor(Math.random() * 50)}/>
							)
						} )
					}
				</BarContainer>
			</MainContainer>
		</>
	);
};

export default Wave;
