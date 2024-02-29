import React from "react";
import useGameScreen from "./hooks/useSetGameScreen";

const ScreenB = () => {
	const { currentScreen, setScreen } = useGameScreen();
	if (currentScreen !== "B") return null;
	return (
		<div>
			ScreenB{" "}
			<button onClick={() => setScreen("C")}>Go to screen C</button>
		</div>
	);
};

export default ScreenB;
