import React from "react";
import Content from "../../Content/Content";
import { HomeData } from './Data';

const Home = () => {
	return (
		<>
			<Content {...HomeData} />
		</>
	);
};

export default Home;
