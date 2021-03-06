import styled from "styled-components";
import { Colors, Container } from "../../../globalStyle";

export const BlogContainer = styled(Container)`
	padding-top: 60px;
	padding-bottom: 60px;

	${Container}
`;

export const Title = styled.h2`
	font-size: 30px;
	color: ${Colors.darkBlue};
	margin-bottom: 15px;
	text-align: center;
`;

export const ArticleSection = styled.div`
	@media screen and (min-width: 760px) {
		display: flex;
		flex-wrap: wrap;
	}
`;
