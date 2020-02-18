import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";

import Questions from "../../src/screens/Questions";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

const store = mockStore({
	general: {
		isLoading: false,
	},
});

const newWrapper = () => (
	<Provider store={store}>
		<Questions />
	</Provider>
);

jest.mock("react-redux", () => ({
	useDispatch: jest.fn(fn => fn()),
	useHistory:  jest.fn(fn => fn()),
}));

describe("screens - Questions", () => {
	it("renders correctly", () => {        
		const tree = renderer.create(newWrapper()).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
