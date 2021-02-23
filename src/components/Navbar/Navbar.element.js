import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Colors } from "../../globalStyle";

export const NavContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 35px;
	padding-bottom: 35px;

	@media screen and (max-width: 950px) {
		padding-top: 25px;
		padding-bottom: 25px;
	}

	${Container}
`;

export const Overlay = styled.div`
	position: absolute;
	top: 76px;
	left: 0;
	right: 0;
	background: linear-gradient(${Colors.darkBlue}, ${Colors.veryLightGray});
	width: 100%;
	height: 100%;
`;

export const NavLogo = styled.img.attrs({
	src: `${process.env.PUBLIC_URL + "images/logo.svg"}`,
})`
	cursor: pointer;
`;

export const MobileToggle = styled.div`
	display: none;

	@media screen and (max-width: 950px) {
		display: block;
		cursor: pointer;
		width: 26px;
		height: 26px;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	flex-direction: row;
	list-style: none;
	background: ${Colors.white};
	border-radius: 5px;

	@media screen and (max-width: 950px) {
		width: auto;
		flex-direction: column;
		position: absolute;
		top: 76px;
		left: 0;
		right: 0;
		margin: 24px;
		padding: 20px 0;
	}
`;

export const NavItem = styled.li`
	&:not(:last-child) {
		margin-bottom: 15px;
	}
`;

export const NavLinks = styled(Link)`
	text-decoration: none;
	color: ${Colors.black};
`;
