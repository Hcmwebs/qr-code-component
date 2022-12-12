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
				</StyledCard>
			</Container>
		</>
	)
}

export default App
