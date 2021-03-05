import styled from "styled-components";
import { Colors } from "../../../globalStyle";

export const FeatureContainer = styled.div`
	padding: 15px;
	flex: 0 0 50%;

	@media screen and (min-width: 930px) {
		flex: 1;
	}
`;

export const Img = styled.img``;

export const Title = styled.div`
	color: ${Colors.darkBlue};
	margin: 15px 0;
`;

export const Desc = styled.div`
	color: ${Colors.grayishBlue};
	line-height: 1.5;
`;
