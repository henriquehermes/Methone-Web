import React from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
	Container,
	Title,
	Description,
	Header,
	ImageBackground,
	Box,
} from "./styles";

import { ONBOARDING_STRINGS } from "../../language";
import { setIsLoading } from "../../store/reducers/general/actions";
import { setQuestions } from "../../store/reducers/questions/actions";

import CustomButton from "../../components/Button";
import Images from "../../assets/images";
import getQuestions from "../../services/Onboarding";

const Onboarding: React.FC = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	async function goToQuestions() {
		try {
			dispatch(setIsLoading(true));

			const response = await getQuestions();

			dispatch(setQuestions(response));

			return history.push("/questions") 
		} catch (e) {
			console.log(e);
		} finally {
			dispatch(setIsLoading(false));
		}
	}

	return (
		<Container>
			<Box>
				<Header>
					<Title>{ONBOARDING_STRINGS.title}</Title>
					<Description>{ONBOARDING_STRINGS.description}</Description>
					<Description>{ONBOARDING_STRINGS.description2}</Description>
				</Header>
				<ImageBackground src={Images.onboardingBackground} />
				<CustomButton
					label={ONBOARDING_STRINGS.buttonPrimary}
					onAction={goToQuestions}
				/>
			</Box>
		</Container>
	);
};

export default Onboarding;
