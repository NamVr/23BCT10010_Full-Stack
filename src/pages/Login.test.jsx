import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext"; // Import provider
import Login from "./Login";

describe("Login Page", () => {
	test("matches snapshot", () => {
		const { asFragment } = render(
			<AuthProvider>
				<BrowserRouter>
					<Login />
				</BrowserRouter>
			</AuthProvider>,
		);
		expect(asFragment()).toMatchSnapshot();
	});

	test("renders login button asynchronously", async () => {
		render(
			<AuthProvider>
				<BrowserRouter>
					<Login />
				</BrowserRouter>
			</AuthProvider>,
		);
		const loginBtn = await screen.findByRole("button", { name: /login/i });
		expect(loginBtn).toBeInTheDocument();
	});
});
