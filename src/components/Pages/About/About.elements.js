import styled from "styled-components";
import { Colors, Container } from "../../../globalStyle";

export const AboutContainer = styled(Container)`
	text-align: center;
	margin-top: 60px;
	margin-bottom: 60px;

	@media screen and (min-width: 930px) {
		text-align: left;
	}
	${Container}
`;

export const TopSection = styled.div``;

export const Title = styled.h2`
	font-size: 30px;
	color: ${Colors.darkBlue};
	margin-bottom: 15px;
	padding: 0 25px;

	@media screen and (min-width: 930px) {
		font-size: 35px;
		padding: 0;
	}
`;

export const Desc = styled.p`
	color: ${Colors.grayishBlue};
	line-height: 1.5;
`;

export const BottomSection = styled.div`
	margin: 40px 0;

	@media screen and (min-width: 760px) {
		display: flex;
		flex-wrap: wrap;
	}
`;
