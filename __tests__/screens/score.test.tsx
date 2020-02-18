import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";

import Score from "../../src/screens/Score";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

const store = mockStore({
	general: {
		isLoading: false,
	},
});

const newWrapper = () => (
	<Provider store={store}>
		<Score />
	</Provider>
);

jest.mock("react-redux", () => ({
	useDispatch: jest.fn(fn => fn()),
	useHistory:  jest.fn(fn => fn()),
}));

describe("screens - Score", () => {
	it("renders correctly", () => {        
		const tree = renderer.create(newWrapper()).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
