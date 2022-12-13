import styled from 'styled-components'


const StyledCardHeader = styled.div`
	display: grid;
	place-items: center;
	width: 288px;
	height: 288px;


	a {
		text-decoration: none;
		display: block;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}

	img {
		width: 100%;
		height: 100%;
		display: block;
		border-radius: 10px;
		object-fit: cover;
		overflow: hidden;
	}
`

export default StyledCardHeader