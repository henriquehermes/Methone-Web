import React from "react";
import renderer from "react-test-renderer";

import QuestionStep from "../../src/screens/Questions/QuestionStep";

const questions = {
	category: "Entertainment",
	subcategory: "Video Games",
	type: "boolean",
	difficulty: "hard",
	question: "Unturned originally started as a Roblox game.",
	correct_answer: "True",
	incorrect_answers: ["False"],
};

const newWrapper = () => (
	<QuestionStep data={questions} nextStep={jest.fn()} position={5} />
);

describe("screens - QuestionStep", () => {
	it("renders correctly", () => {
		const tree = renderer.create(newWrapper()).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
