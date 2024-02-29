import React from "react";

import { useSelector } from "react-redux";
import useGameStart from "./hooks/useGameStart";

const GameStart = () => {
	const { isGameStarted } = useSelector((state) => state.game);
	const { callback } = useGameStart();
	if (isGameStarted) return null;
	return (
		<div
			style={{
				display: "flex",
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100dvh",
				background: "skyblue",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<div
				style={{
					minWidth: "300px",
					maxWidth: "300px",
					height: "300px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					border: "2px solid red"
				}}
			>
				<button
					onClick={() => callback(true)}
					type="button"
					style={{
						border: "2px solid skyblue",
						borderRadius: "10px",
						padding: "5px 10px",
						cursor: "pointer"
					}}
				>
					START
				</button>
			</div>
		</div>
	);
};

export default GameStart;
