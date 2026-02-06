import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./routes/ProtectedRoute";

import Header from "./components/Header.jsx";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Logs from "./pages/Logs.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import useTrigger from "./triggers/useTrigger.jsx";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					>
						<Route index element={<Overview />} />
						<Route path="reports/" element={<Reports />} />
						<Route path="settings/" element={<Settings />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
