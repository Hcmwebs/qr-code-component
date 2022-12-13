import React from 'react'
import GlobalStyles from './Components/Styled/GlobalStyles'
import Container from './Components/Styled/Container'

import { Card } from './Components/Jsx'

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Container>
				<Card />
			</Container>
		</>
	)
}

export default App
