import React from "react";
import useGameScreen from "./hooks/useSetGameScreen";

const ScreenC = () => {
	const { currentScreen, setScreen } = useGameScreen();
	if (currentScreen !== "C") return null;
	return (
		<div>
			ScreenC{" "}
			<button onClick={() => setScreen("A")}>Go to screen A</button>
		</div>
	);
};

export default ScreenC;
