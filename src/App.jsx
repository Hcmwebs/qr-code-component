import React from 'react'
import {
	GlobalStyles,
	Container,
	StyledCard,
	StyledCardHeader,
	StyledCardBody,
} from './Components/Styled'

import {Card, CardHeader, CardBody} from './Components/Jsx'

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Container>
				<StyledCard>
					<Card />
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
