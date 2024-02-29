import "./index.css";
import { Game } from "./components/Game";

import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
	return (
		<Provider store={store}>
			<div
				style={{ background: "white", width: "100%", height: "100dvh" }}
			>
				<Game />
			</div>
		</Provider>
	);
}

export default App;
