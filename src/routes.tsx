import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Onboarding from "./screens/Onboarding";
import Questions from "./screens/Questions";
import Score from "./screens/Score";

interface Question {
	category: string;
	type: string;
	difficulty: string;
	question: string;
	correct_answer: string;
	incorrect_answers: Array<string>;
}
interface Questions {
	list: Question[];
	position: number;
	score: number;
}

interface RootState {
	questions: Questions;
}


function PrivateRoute({ children, ...rest }: any) {
	const list = useSelector((state: RootState) => state.questions.list);

	return (
		<Route
			{...rest}
			render={({ location }) =>
				list.length > 1 ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Onboarding />
				</Route>
				<PrivateRoute path="/questions">
					<Questions />
				</PrivateRoute>
				<PrivateRoute path="/score">
					<Score />
				</PrivateRoute>
			</Switch>
		</Router>
	);
}
