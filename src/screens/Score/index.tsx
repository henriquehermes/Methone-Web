import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
	Container,
	Title,
	Description,
	Header,
	Like,
	Dislike,
	Questions,
	Body,
	Box,
} from "./styles";
import { SCORE_STRINGS } from "../../language";
import CustomButton from "../../components/Button";
import { playAgain } from "../../store/reducers/questions/actions";

import Images from "../../assets/images";
import { Question } from "../Questions/styles";

interface Question {
	question: string;
	isCorrect: boolean;
}

interface Score {
	scoreList: Question[];
	score: number;
}

interface RootState {
	questions: Score;
}

const Score: React.FC = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const scoreList = useSelector(
		(state: RootState) => state.questions.scoreList,
	);
	const score = useSelector((state: RootState) => state.questions.score);

	function goToQuestions() {
		dispatch(playAgain());

		return history.push("/questions");
	}

	return (
		<Container>
			<Box>
				<Header>
					<Title>{SCORE_STRINGS.title}</Title>
					<Description>{score}/10</Description>
				</Header>
				<Body>
					{scoreList.map((item, index) => (
						<Questions key={index}>
							{item.isCorrect ? (
								<Like src={Images.likeIcon} />
							) : (
								<Dislike src={Images.dislikeIcon} />
							)}
							<Question>{item.question}</Question>
						</Questions>
					))}
				</Body>
				<CustomButton
					onAction={goToQuestions}
					label={SCORE_STRINGS.buttonPrimary}
				/>
			</Box>
		</Container>
	);
};

export default Score;
