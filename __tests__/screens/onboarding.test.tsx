import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";

import Onboarding from "../../src/screens/Onboarding";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

const store = mockStore({
  general: {
    isLoading: false,
  },
});

const newWrapper = () => (
  <Provider store={store}>
    <Onboarding />
  </Provider>
);

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(fn => fn()),
  useHistory: jest.fn(fn => fn()),
}));

describe("screens - Onboarding", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Onboarding />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
