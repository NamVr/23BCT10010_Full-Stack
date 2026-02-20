import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header Component", () => {
	test("renders EcoTrack brand name", () => {
		render(<Header />);
		// Check for the text defined in Header.jsx
		const brandElement = screen.getByText(/EcoTrack/i);
		expect(brandElement).toBeInTheDocument();
	});
});
