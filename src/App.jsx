import React from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

html{
	font-size:100%
}

body {
	min-height:100vh;
	font-family: 'Outfit', sans-serif;
	background: rgba(213, 225, 239, 1);
	display: grid;
	place-items: center;
	padding: 0;
	margin: 0;
	box-sizing:border-box
}

`

const styledGrid = css`
	display: grid;
	place-items: center;
`

const StyledCardWrapper = styled.main`
	width: min(100%, 1000px);
	margin-inline: auto;
	${styledGrid};
`

const StyledCard = styled.div`
	width: 320px;
	padding: 1rem 0 1.5rem 0;
	${styledGrid};
	gap: 1.5rem;
	border-radius: 20px;
	background-color: #fff;
	box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.04);
`
const StyledCardHeader = styled.div`
	${styledGrid};
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
	${styledGrid};
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
			<GlobalStyle />
			<StyledCardWrapper>
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
			</StyledCardWrapper>
		</>
	)
}

export default App
