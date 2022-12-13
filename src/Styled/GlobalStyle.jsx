import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

*, *::before, *::after{
  padding: 0;
	margin: 0;
	box-sizing:border-box;
  font: inherit;
}

html{
	font-size:100%;
  color-scheme:dark light;
}

body {
	min-height:100vh;
	font-family: 'Outfit', sans-serif;
  line-height: 1.75;
  font-weight:400;
	background: rgba(213, 225, 239, 1);
	display: grid;
	place-items: center;

}

p {margin: 0;}

h1, h2, h3, h4, h5 {
  margin:0;
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  line-height: 1.3;
}

h1 {

  font-size: 3.052rem;
}

h2 {font-size: 2.441rem;}

h3 {font-size: 1.953rem;}

h4 {font-size: 1.563rem;}

h5 {font-size: 1.25rem;}

small, .text_small {font-size: 0.8rem;}



img, picture, svg, video {
  display: block;
  max-width:100%;
}
`

export default GlobalStyle
