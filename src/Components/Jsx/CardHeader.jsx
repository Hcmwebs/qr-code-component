import React from 'react'

import { StyledCardHeader } from '../Styled/index.jsx'

const CardHeader = () => {
	return (
		<>
			<StyledCardHeader>
				<a
					href='https://www.frontendmentor.io/'
					target='_blank'
					rel='noopener noreferrer'>
					<img src='./assets/image-qr-code.png' alt='qr-code' />
				</a>
			</StyledCardHeader>
		</>
	)
}

export default CardHeader
