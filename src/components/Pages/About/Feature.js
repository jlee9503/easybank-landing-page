import React from "react";
import { FeatureContainer, Img, Title, Desc } from "./Feature.elements";

const Feature = ({img, alt, title, desc}) => {
	return (
		<>
			<FeatureContainer>
				<Img src={img} alt={alt} />
				<Title>{title}</Title>
        <Desc>{desc}</Desc>
			</FeatureContainer>
		</>
	);
};

export default Feature;
