import React from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

html{
	height: 100%;
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
	height: 497px;
	${styledGrid};
	gap: 2rem;
	border-radius: 20px;
	background-color: #fff;
	box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.04);
`
const StyledCardHeader = styled.div`
	${styledGrid};
	width: 288px;
	height: 288px;
	padding-top: 1rem;

	img {
		width: 100%;
		height: 100%;
		display: block;
		border-radius: 5px;
		object-fit: cover;
		overflow: hidden;
	}
`
const StyledCardBody = styled.div`
	width: 288px;
	${styledGrid};
	gap: 1rem;
	padding: 0 1rem 1.5rem 1rem;

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
		line-height: 19px;
		margin: 0;
		padding-inline: 1rem;
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
						<img src='/Assets/image-qr-code.png' alt='qr-code' />
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
