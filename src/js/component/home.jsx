import React from "react";
import { SecondsCounter } from "./SecondsCounter";

//create your first component
const Home = () => {
	return (
		<div className="container text-center mt-2">
			<h1>Second Counter</h1>
		<SecondsCounter />
		</div>
	);
};

export default Home;
