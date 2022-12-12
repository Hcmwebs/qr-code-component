import React from 'react'
import {
	GlobalStyles,
	Container,
	StyledCard,
	StyledCardHeader,
	StyledCardBody,
} from './Components/styled'

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Container>
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
			</Container>
		</>
	)
}

export default App
