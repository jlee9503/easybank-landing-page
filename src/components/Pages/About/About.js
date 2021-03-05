import React from "react";
import Feature from "./Feature";
import { banking, budget, onboarding, api } from "./FeatureData";
import { AboutData } from "./Data";
import {
	AboutContainer,
	TopSection,
	Title,
	Desc,
	BottomSection,
} from "./About.elements";
import { Colors, ContentBackground } from "../../../globalStyle";

const About = () => {
	return (
		<>
			<ContentBackground style={{ backgroundColor: Colors.lightGrayishBlue }}>
				<AboutContainer>
					<TopSection>
						<Title>{AboutData.title}</Title>
						<Desc>{AboutData.desc}</Desc>
					</TopSection>
					<BottomSection>
						<Feature {...banking} />
						<Feature {...budget} />
						<Feature {...onboarding} />
						<Feature {...api} />
					</BottomSection>
				</AboutContainer>
			</ContentBackground>
		</>
	);
};

export default About;
