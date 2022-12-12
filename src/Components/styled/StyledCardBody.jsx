import styled from 'styled-components'

const StyledCardBody = styled.div`
	width: min(100%, 288px);
	display: grid;
	place-items: center;
	gap: 1rem;

	h1 {
		font-size: 22px;
		font-weight: 700;
		line-height: 28px;
		text-align: center;
		margin: 0;
		color: rgba(31, 49, 79, 1);
	}

	p {
		font-size: 15px;
		font-weight: 400;
		line-height: 19px;
		margin: 0;
		padding: 1rem;
		padding-top: 0;
		text-align: center;
		letter-spacing: 0.19px;
		color: rgba(125, 136, 158, 1);
	}
`
export default StyledCardBody
