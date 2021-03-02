import React from "react";
import HomeInfo from "./HomeInfo";
import { HomeData } from "./Data";

const Home = () => {
	return (
		<>
			<HomeInfo {...HomeData} />
		</>
	);
};

export default Home;
