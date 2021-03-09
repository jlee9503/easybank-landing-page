import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Public Sans', sans-serif;
    font-size: 18px;
  }

  body {
    overflow-x: hidden;
  }
`;

export const Colors = {
	darkBlue: "#333366",
	limeGreen: "#31D35C",
	brightCyan: "#2BB7DA",
	grayishBlue: "#9698A6",
	lightGrayishBlue: "#F3F4F6",
	veryLightGray: "#FAFAFA",
	white: "#fff",
	black: "#000",
};

export const ContentBackground = styled.div`
	background-color: ${Colors.veryLightGray};
	z-index: -999;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1300px;
	margin: 0 auto;
`;

export const Container = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	padding: 0 45px;

	@media screen and (max-width: 929px) {
		padding: 0 25px;
	}
`;

export const Button = styled.button`
	background: linear-gradient(
		to right,
		${Colors.limeGreen},
		${Colors.brightCyan}
	);
	cursor: pointer;
	color: ${Colors.white};
	padding: 10px 30px;
	font-size: 15px;
	border: none;
	outline: none;
	border-radius: 20px;
	opacity: 1;
	&:hover {
		opacity: 0.85;
	}
`;

export default GlobalStyle;
