import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px 16px 20px 16px;
`;

export const Header = styled.div`
	flex: 1;
	padding: 30px 30px 0px 30px;
`;

export const Title = styled.h2`
	font-family: "Montserrat";
	font-weight: 600;
`;

export const Description = styled.h1`
	font-family: "Montserrat";
`;

export const QuestionNumber = styled.h3`
	font-family: "Montserrat";
	text-align: center;
	margin-top: 15px;
	font-weight: normal;
`;

export const Body = styled.div`
	flex: 2;
	justify-content: center;
	align-items: center;
	padding: 0px 30px 0px 30px;
`;

export const Footer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	padding: 30px;
`;

export const Button = styled.button`
	border-radius: 60px;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 100px;
	box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.1);
	border: none;
	cursor: pointer;
`;

export const Question = styled.h2`
	font-family: "Montserrat";
	font-weight: 600;
`;

export const Like = styled.img`
	width: 50px;
	height: 50px;
`;

export const Dislike = styled.img`
	width: 50px;
	height: 50px;
`;

export const StepLevel = styled.div`
	background-color: ${props => props.theme.royalblue};
	height: 7px;
	width: 100%;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
`;

export const QuestionLevel = styled.h3`
	font-family: "Montserrat";
	font-weight: 600;
	color: red;
	margin-bottom: 5px;
	text-transform: capitalize;
`;

export const Box = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 50%;
	background: ${props => props.theme.white};
	border-radius: 6px;
	height: 80%;
	padding: 0px 0px 30px 0px;
	box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.15);
	overflow: hidden;

	@media (max-width: 1128px) {
		width: 80%;
		height: 100%;
	}
	@media (max-width: 578px) {
		width: 100%;
		height: 100%;
	}
`;
