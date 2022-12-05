import React from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
html{
	height: 100%;
	font-size:100%
}

body {
	min-height:100vh;
	font-family: 'Poppins', sans-serif;
	background: #2980B9;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to bottom, #FFFFFF, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to bottom, #FFFFFF, #6DD5FA, #2980B9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
const styledFlex = css`
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledCardWrapper = styled.main`
	width: min(100%, 1000px);
	margin-inline: auto;
	border: 4px solid red;
	${styledGrid};
`

const StyledCard = styled.div`
	width: min(100%, 320px);
	padding: 1rem;
	${styledGrid};
	justify-content: space-between;
	flex-direction: column;
	gap: 2rem;
	border-radius: 10px;
	border: 1px solid red;
	box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.2);
`
const StyledCardHeader = styled.div`
	${styledGrid};
	width: 100%;
	height: 288px;

	img {
		max-width: 100%;
		height: 100%;
		display: block;
		border-radius: 5px;
		object-fit: cover;
		overflow: hidden;
	}
`
const StyledCardBody = styled.div`
	${styledGrid};
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
						<h3>Lorem ipsum dolor sit amet.</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
							quia totam asperiores quaerat blanditiis, consectetur nihil
							voluptatum explicabo, magni id similique aut qui illum facilis
							nulla possimus. Nam, id doloribus!
						</p>
					</StyledCardBody>
				</StyledCard>
			</StyledCardWrapper>
		</>
	)
}

export default App
