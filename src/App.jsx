import React from 'react'
import { GlobalStyles, Container, StyledCard } from './Components/Styled/index.jsx'

import { Card } from './Components/Jsx/index.jsx'

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
