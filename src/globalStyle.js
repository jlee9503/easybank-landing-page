import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Public Sans', sans-serif;
    font-size: 18px;
  }
`;

export const Container = styled.div`
	width: 100%;
	padding: 0 45px;

	@media screen and (max-width: 949px) {
		margin: 0 auto;
		padding: 0 25px;
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

export const Button = styled.button`
	background: linear-gradient(
		to right,
		${Colors.limeGreen},
		${Colors.brightCyan}
	);
	border: none;
	outline: none;
	border-radius: 20px;
	opacity: 0.8;
	&:hover {
		opacity: 1;
	}
`;

export default GlobalStyle;
