import { useDispatch, useSelector } from "react-redux";

import { setGameScreen } from "../../../app/features/gameSlice";

const useGameScreen = () => {
	const { currentScreen } = useSelector((state) => state.game);
	const dispatch = useDispatch();

	const setScreen = (arg) => {
		dispatch(setGameScreen(arg));
	};

	return {
		setScreen,
		currentScreen
	};
};

export default useGameScreen;
