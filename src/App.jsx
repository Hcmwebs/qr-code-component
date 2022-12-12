import React from 'react'
import { GlobalStyles, Container, StyledCard } from './Components/Styled/index'

import { Card } from './Components/Jsx'

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
