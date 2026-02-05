import { useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import Logs from "./pages/Logs.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import useTrigger from "./triggers/useTrigger.jsx";

function App() {
	const { width, height } = useTrigger();

	return (
		<>
			<Header title="Ecotrack"></Header>
			<Dashboard />
			<Logs />

			<p>
				Window Size: {width}px - {height}px
			</p>
		</>
	);
}

export default App;
