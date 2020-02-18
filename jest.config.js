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
		"!**/__mocks__/*.{ts,tsx}",
		"!**/routes.tsx",
		"!**/src/index.tsx",
	],
	coveragePathIgnorePatterns: ["src/assets"],
	moduleNameMapper: {
		".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
			"identity-obj-proxy",
	},
};
