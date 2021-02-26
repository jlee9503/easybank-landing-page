import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Colors, Button } from "../../globalStyle";

export const NavContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 35px;
	padding-bottom: 35px;

	@media screen and (max-width: 949px) {
		padding-top: 25px;
		padding-bottom: 25px;
	}

	${Container}
`;

export const Overlay = styled.div`
	display: none;
	@media screen and (max-width: 949px) {
		display: block;
		position: absolute;
		top: 70px;
		left: ${({ click }) => (click ? 0 : "-100%")};
		transition: all 0.5s ease;
		background: linear-gradient(${Colors.darkBlue}, ${Colors.veryLightGray});
		width: 100%;
		height: calc(100% - 70px);
		opacity: 0.7;
	}
`;

export const NavLogo = styled.img.attrs({
	src: `${process.env.PUBLIC_URL + "images/logo.svg"}`,
})`
	cursor: pointer;
`;

export const MobileToggle = styled.div`
	display: none;

	@media screen and (max-width: 949px) {
		display: block;
		cursor: pointer;
		width: 20px;
		height: 20px;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	flex-direction: row;
	list-style: none;
	background: ${Colors.white};

	@media screen and (max-width: 949px) {
		flex-direction: column;
		position: absolute;
		top: 70px;
		left: ${({ click }) => (click ? 0 : "-100%")};
		width: calc(100% - 48px);
		margin: 24px;
		padding: 30px 0;
		border-radius: 5px;
		transition: all 0.5s ease;
	}
`;

export const NavItem = styled.li`
	&:not(:last-child) {
		margin-right: 32px;
	}

	@media screen and (max-width: 949px) {
		&:not(:last-child) {
			margin-right: 0;
			width: 100%;
			text-align: center;
			padding: 20px 0;
			&:hover {
				background: linear-gradient(
					to right,
					${Colors.limeGreen},
					${Colors.brightCyan}
				);
				color: ${Colors.white};
			}
		}

		&:last-child {
			margin-top: 45px;
		}
	}
`;

export const NavLinks = styled(Link)`
	text-decoration: none;
	color: ${Colors.grayishBlue};
	position: relative;
	@media screen and (min-width: 950px) {
		&:hover::before {
			content: "";
			position: absolute;
			width: 100%;
			height: 5px;
			background: linear-gradient(
				to right,
				${Colors.limeGreen},
				${Colors.brightCyan}
			);
			bottom: -43px;
		}
	}

	@media screen and (max-width: 949px) {
		color: ${Colors.darkBlue};
		&:hover {
			color: ${Colors.white};
		}
	}
`;

export const NavButtonDesktop = styled(Button)`
	padding: 10px 30px;
	font-size: 15px;
	color: ${Colors.white};
	cursor: pointer;

	@media screen and (max-width: 949px) {
		display: none;
	}

	${Button}
`;

export const NavButtonMobile = styled(Button)`
	display: none;
	@media screen and (max-width: 949px) {
		display: block;
		padding: 10px 100px;
		font-size: 15px;
		color: ${Colors.white};
		cursor: pointer;
	}

	${Button}
`;
