import React from 'react'
import{ Container, GlobalStyle }from './Styled'


import { Card } from './Components'

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
