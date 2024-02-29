import { useDispatch } from "react-redux";

import { startGame } from "../../../app/features/gameSlice";

const useGameStart = () => {
	const dispatch = useDispatch();

	const callback = (arg) => {
		dispatch(startGame(arg));
	};

	return {
		callback
	};
};

export default useGameStart;
