import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Overview = lazy(() => import("./pages/Overview"));
const Reports = lazy(() => import("./pages/Reports"));
const Settings = lazy(() => import("./pages/Settings"));

const App = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Suspense
					fallback={
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							minHeight="100vh"
						>
							<CircularProgress />
						</Box>
					}
				>
					<Routes>
						<Route
							path="/"
							element={<Navigate to="/login" replace />}
						/>
						<Route path="/login" element={<Login />} />

						<Route
							path="/dashboard"
							element={
								<ProtectedRoute>
									<Dashboard />
								</ProtectedRoute>
							}
						>
							<Route index element={<Overview />} />
							<Route path="reports" element={<Reports />} />
							<Route path="settings" element={<Settings />} />
						</Route>
					</Routes>
				</Suspense>
			</BrowserRouter>
		</AuthProvider>
	);
};

export default App;
