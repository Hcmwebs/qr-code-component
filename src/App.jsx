import React from 'react'
import GlobalStyle from './Components/Styled/GlobalStyle'
import Container from './Components/Styled/Container'

import { Card } from './Components/Jsx'

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Container>
				<Card />
			</Container>
		</>
	)
}

export default App
