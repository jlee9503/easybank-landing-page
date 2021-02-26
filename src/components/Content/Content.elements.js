import styled from "styled-components";
import { Container, Colors, Button } from "../../globalStyle";
import { HomeData } from "../Pages/Home/Data";

export const ContentContainer = styled(Container)`
	${Container}
`;

export const ImgContainer = styled.div`
	background-image: url(${HomeData.backgroundImg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	min-height: 315px;
	position: relative;
	z-index: -999;

	&::before {
		background-image: url(${HomeData.img});
		background-size: 93%;
		background-repeat: no-repeat;
		background-position: center bottom;
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
	}
`;
