import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import configureStore from "redux-mock-store";
import Dashboard from "./Dashboard";

const mockStore = configureStore([]);

describe("Dashboard Component", () => {
	test("renders dashboard and checks for log data", () => {
		const store = mockStore({
			logs: {
				logs: [{ id: 1, activity: "Walking", emissions: 2 }],
			},
		});

		render(
			<AuthProvider>
				<Provider store={store}>
					<BrowserRouter>
						<Dashboard />
					</BrowserRouter>
				</Provider>
			</AuthProvider>,
		);

		expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
	});
});
