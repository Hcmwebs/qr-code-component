import React from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import {GlobalStyles, StyledContainer,StyledCard} from './Components/styled'

const StyledCardHeader = styled.div`
	display: grid;
	place-items: center;
	width: 288px;
	height: 288px;


	a {
		text-decoration: none;
		display: block;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}

	img {
		width: 100%;
		height: 100%;
		display: block;
		border-radius: 10px;
		object-fit: cover;
		overflow: hidden;
	}
`
const StyledCardBody = styled.div`
	max-width: 288px;
	display: grid;
	place-items: center;
	gap:1rem;


	h1 {
		font-size: 22px;
		font-weight: 700;
		line-height: 28px;
		text-align: center;
		margin: 0;
		color: rgba(31, 49, 79, 1);
	}

	p {
		font-size: 15px;
		font-weight: 400;
		line-height: 19px;
		margin: 0;
		padding: 1rem;
		padding-top: 0;
		text-align: center;
		letter-spacing: 0.19px;
		color: rgba(125, 136, 158, 1);
	}
`

const App = () => {
	return (
		<>
			<GlobalStyles />
			<StyledContainer>
				<StyledCard>
					<StyledCardHeader>
						<a
							href='https://www.frontendmentor.io/'
							target='_blank'
							rel='noopener noreferrer'>
							<img src='/Assets/image-qr-code.png' alt='qr-code' />
						</a>
					</StyledCardHeader>
					<StyledCardBody>
						<h1>Improve your front-end skills by building projects</h1>
						<p>
							Scan the QR code to visit Frontend Mentor and take your coding
							skills to the next level
						</p>
					</StyledCardBody>
				</StyledCard>
			</StyledContainer>
		</>
	)
}

export default App
