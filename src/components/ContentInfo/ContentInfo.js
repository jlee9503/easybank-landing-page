import React, { useState } from "react";
import { ContentBackground, Button } from "../../globalStyle";
import {
	ContentWrapper,
	ContentContainer,
	ImgContainer,
	Title,
	Description,
} from "./ContentInfo.elements";

const Content = ({ title, desc, buttonInfo }) => {
	const [changeBackground, setChangeBackground] = useState(false);
	const handleBackground = () => {
		if (window.innerWidth < 930) {
			setChangeBackground(true);
		} else {
			setChangeBackground(false);
		}
	};

	window.addEventListener("resize", handleBackground);

	return (
		<>
			<ContentBackground>
				<ContentWrapper>
					<ImgContainer changeBackground={changeBackground} />
					<ContentContainer>
						<Title>{title}</Title>
						<Description>{desc}</Description>
						<Button>{buttonInfo}</Button>
					</ContentContainer>
				</ContentWrapper>
			</ContentBackground>
		</>
	);
};

export default Content;
