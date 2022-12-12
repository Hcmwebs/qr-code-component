import styled from 'styled-components'

const StyledCard = styled.div`
	width: 320px;
	padding: 1rem 0 1.5rem 0;
	display: grid;
	place-items: center;
	gap: 1.5rem;
	border-radius: 20px;
	background-color: #fff;
	box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.2);
	transition: all 0.8s linear ease-in-out;

	&:hover {
		box-shadow: 0px 20px 25px 2px rgba(0, 0, 0, 0.25);
	}
`

export default StyledCard
