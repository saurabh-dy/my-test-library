import { useEffect } from "react";

// Screens
import GameStart from "./screens/GameStart";
import ScreenA from "./screens/ScreenA";
import ScreenB from "./screens/ScreenB";
import ScreenC from "./screens/ScreenC";
export const Game = () => {
	useEffect(() => {
		console.log("sssss");
		window.addEventListener("beforeunload", function (e) {
			// Cancel the event
			e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
			// Chrome requires returnValue to be set
			alert("Hello");
			return;
		});
	}, []);
	return (
		<section>
			<GameStart />
			<ScreenA />
			<ScreenB />
			<ScreenC />
		</section>
	);
};

// export default Game;
