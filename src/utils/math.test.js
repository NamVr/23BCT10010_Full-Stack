import { calculateTotalEmissions } from "./math";

describe("calculateTotalEmissions Utility", () => {
	test("return 0 for empty array", () => {
		expect(calculateTotalEmissions([])).toBe(0);
	});

	test("should correctly sum emissions", () => {
		const mock = [{ emissions: 10 }, { emissions: 20 }];

		expect(calculateTotalEmissions(mock)).toEqual(30);
	});
});
