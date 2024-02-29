import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isGameStarted: false,
	currentScreen: "A",
	isGameEnded: false
};

export const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		startGame: (state, action) => {
			state.isGameStarted = action.payload;
		},
		setGameScreen: (state, action) => {
			state.currentScreen = action.payload;
		}
	}
});

// Action creators are generated for each case reducer function
export const { startGame, setGameScreen } = gameSlice.actions;

export default gameSlice.reducer;
