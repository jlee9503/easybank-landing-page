import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, Container } from "../../globalStyle";

export const FooterContainer = styled.div`
	background-color: ${Colors.darkBlue};
	text-align: center;
	color: ${Colors.veryLightGray};
`;

export const FooterContent = styled(Container)`
	@media screen and (min-width: 930px) {
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(3, 1fr) 2fr;
		grid-template-areas:
			"logo columnleft columnright others"
			"socials columnleft columnright others";
		column-gap: 80px;
	}

	@media screen and (min-width: 930px) {
		padding-top: 30px;
		padding-bottom: 30px;
	}
	${Container};
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 60%;
	margin: 30px auto;

	@media screen and (min-width: 930px) {
		width: 95%;
		justify-content: space-between;
		margin: 0;
		grid-area: socials;
	}
`;

export const Logo = styled.img`
	margin-top: 30px;
	@media screen and (min-width: 930px) {
		display: block;
		grid-area: logo;
		align-self: center;
	}
`;

export const Icon = styled.img`
	&:hover {
		opacity: 0.8;
	}
`;

export const Links = styled.div`
	margin-bottom: 30px;
`;

export const LinkStyle = styled(Link)`
	color: ${Colors.white};
	text-decoration: none;
	line-height: 2;
	opacity: 0.9;

	&:hover {
		opacity: 0.7;
	}
`;

export const ColumnLeft = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 930px) {
		grid-area: columnleft;
		align-items: start;
	}
`;

export const ColumnRight = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 930px) {
		grid-area: columnright;
		align-items: start;
	}
`;

export const Others = styled.div`
	@media screen and (min-width: 930px) {
		text-align: right;
		grid-area: others;
	}
`;

export const Copyright = styled.p`
	opacity: 0.6;
	margin-top: 30px;
`;

export const Attribution = styled.p`
	padding: 18px 0;
	font-size: 11px;
	color: ${Colors.veryLightGray};
	opacity: 0.4;
`;
