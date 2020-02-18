import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
	Container,
	Title,
	Description,
	Header,
	ImageBackground,
	Box,
	CustomModal,
	ModalBody,
} from "./styles";

import { ONBOARDING_STRINGS, ERROR_EXCEPTION_STRINGS } from "../../language";
import { setIsLoading } from "../../store/reducers/general/actions";
import { setQuestions } from "../../store/reducers/questions/actions";

import CustomButton from "../../components/Button";
import Images from "../../assets/images";
import getQuestions from "../../services/Onboarding";

const Onboarding: React.FC = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const [error, setError] = useState<Boolean | null>(null);

	async function goToQuestions() {
		try {
			dispatch(setIsLoading(true));

			const response = await getQuestions();

			dispatch(setQuestions(response));

			return history.push("/questions");
		} catch (e) {
			setError(true);
		} finally {
			dispatch(setIsLoading(false));
		}
	}

	function handleModal() {
		setError(null);
		goToQuestions();
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

			<CustomModal isOpen={!!error} onRequestClose={handleModal}>
				<ModalBody>
					<Header>
						<Title>{ERROR_EXCEPTION_STRINGS.title}</Title>
						<Description>{ERROR_EXCEPTION_STRINGS.description}</Description>
					</Header>
					<CustomButton
						label={ERROR_EXCEPTION_STRINGS.buttonPrimary}
						onAction={handleModal}
					/>
				</ModalBody>
			</CustomModal>
		</Container>
	);
};

export default Onboarding;
