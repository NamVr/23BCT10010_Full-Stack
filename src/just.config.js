export default {
	testEnvironment: "jest-environment-jsdom",
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
	},
	moduleNameMapper: {
		// Handles CSS imports and Assets which Jest can't parse
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
		"\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js",
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
