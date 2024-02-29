import React from "react";
import useGameScreen from "./hooks/useSetGameScreen";
const ScreenA = () => {
	const { currentScreen, setScreen } = useGameScreen();
	if (currentScreen !== "A") return null;
	return (
		<div>
			ScreenA{" "}
			<button onClick={() => setScreen("B")}>Go to screen B</button>
		</div>
	);
};

export default ScreenA;
