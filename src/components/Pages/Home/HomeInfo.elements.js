import styled from "styled-components";
import { Wrapper, Container, Colors } from "../../../globalStyle";
import { HomeData } from "./Data";

export const ContentWrapper = styled(Wrapper)`
	@media screen and (min-width: 930px) {
		flex-direction: row-reverse;
		justify-concent: center;
		align-items: center;
	}
	${Wrapper}
`;

export const ContentContainer = styled(Container)`
	margin-top: 30px;
	margin-bottom: 60px;
	text-align: center;
	flex: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: 930px) {
		height: 655px;
		text-align: left;
		align-items: flex-start;
		margin-top: 0;
		margin-bottom: 0;
	}
	${Container};
`;

export const ImgContainer = styled.div`
	background-image: url(${HomeData.MobileBackground});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	min-height: 315px;
	position: relative;
	width: 100%;
	flex: 3;

	&::before {
		background-image: url(${HomeData.img});
		background-size: 97%;
		background-repeat: no-repeat;
		background-position: center center;
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
	}

	@media screen and (min-width: 760px) {
		min-height: 600px;
	}

	@media screen and (min-width: 930px) {
		height: 655px;
		background-image: none;

		&::before {
			background-image: url(${HomeData.DesktopBackground});
			background-size: 135%;
			background-position: left 81%;
			width: 130%;
			left: 8%;
		}

		&::after {
			background-image: url(${HomeData.img});
			background-size: 100%;
			background-repeat: no-repeat;
			background-position: center 80%;
			content: "";
			position: absolute;
			left: 32%;
			width: 105%;
			height: 110%;
		}
	}
`;

export const Title = styled.div`
	color: ${Colors.darkBlue};
	font-size: 36px;
	line-height: 1.15;

	@media screen and (min-width: 930px) {
		font-size: 52px;
	}
`;

export const Description = styled.div`
	color: ${Colors.grayishBlue};
	margin: 30px 0 37px 0;
	line-height: 1.5;
`;
