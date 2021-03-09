import styled from "styled-components";
import { Colors } from "../../../globalStyle";

export const ArticleContainer = styled.div`
	padding: 15px;
	text-align: left;
	flex: 0 0 50%;
	margin: 8px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.05);
	}

	@media screen and (min-width: 930px) {
		flex: 1;
	}
`;

export const Img = styled.img`
	width: 100%;
	height: 200px;
	margin-bottom: 30px;
`;

export const Author = styled.p`
	color: ${Colors.grayishBlue};
	font-size: 15px;
	margin-bottom: 15px;
`;

export const ArticleTitle = styled.h4`
	margin-bottom: 15px;
`;

export const Summary = styled.p`
	color: ${Colors.grayishBlue};
	margin-bottom: 40px;
`;
