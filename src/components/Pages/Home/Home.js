import React from "react";
import ContentInfo from "../../ContentInfo/ContentInfo";
import { HomeData } from "./Data";

const Home = () => {
	return (
		<>
			<ContentInfo {...HomeData} />
		</>
	);
};

export default Home;
