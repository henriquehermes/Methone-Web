module.exports = {
	roots: ["<rootDir>/"],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	snapshotSerializers: ["enzyme-to-json/serializer"],
	collectCoverage: false,
	collectCoverageFrom: [
		"**/*.{ts,tsx}",
		"!**/node_modules/**",
		"!**/coverage/**",
		"!**/serviceWorker.ts",
		"!**/index.ts",
		"!**/language/*.{ts,tsx}",
		"!**/styles/*.{ts,tsx}",
		"!**/assets/*.{ts,tsx}",
		"!**/config/*.{ts,tsx}",
		"!**/screens/**/*.{ts,tsx}",
		"!**/__mocks__/*.{ts,tsx}",
		"!**/routes.tsx",
		"!**/src/index.tsx",
	],
	coveragePathIgnorePatterns: ["src/assets"],
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/fileMock.js",
		"\\.(css|less)$": "<rootDir>/fileMock.js",
	},
};
