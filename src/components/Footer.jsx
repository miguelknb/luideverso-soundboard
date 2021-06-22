import React from 'react';
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
	height: 4rem;
	padding: 1rem;
	background-color:#1c1c1c;
	align-items: center;
	color: white;
	bottom: 0;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 1.3rem;
	align-self: flex-end;
	justify-content: flex-start;

	p {
		margin-right: 2rem;
	}
`
const Logo = styled.img`
	height: 2rem;
	margin-right: .5rem;
`

const Footer = () => {
    return (
        <FooterContainer>
					<p>Developed by Miguel Sanseverino</p>
					<a href={"https://github.com/miguelknb"}>
						<Logo src={"/GitHub-Logo.png"}/>
					</a>
					<a href={"https://twitter.com/kcanibu"}>
						<Logo src={"https://logosmarcas.net/wp-content/uploads/2020/04/Twitter-Logo.png"}/>
					</a>
				</FooterContainer>
    );
}

export default Footer;