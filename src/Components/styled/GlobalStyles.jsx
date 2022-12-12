
import { createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');
*{
  padding: 0;
	margin: 0;
	box-sizing:border-box
}

html{
	font-size:100%
}

body {
	min-height:100vh;
	font-family: 'Outfit', sans-serif;
  line-height: 1.75;
  line-height:400;
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
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {font-size: 2.441rem;}

h3 {font-size: 1.953rem;}

h4 {font-size: 1.563rem;}

h5 {font-size: 1.25rem;}

small, .text_small {font-size: 0.8rem;}

`

export default GlobalStyles;