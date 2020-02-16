import styled, { css } from "styled-components";

const defaultShadow = css`
    background-color: ${props => props.theme.white};
    /* shadow-color: ${props => props.theme.black};
    shadow-offset: {width: 0px, height: 1px};
    shadow-opacity: 0.15;
    shadow-radius: 3.84;
    elevation: 1; */
`;

export const Container = styled.div`
	flex: 1;
	background-color: ${props => props.theme.ghostwhite};
	padding: 30px 16px 20px 16px;
`;

export const Header = styled.div`
	flex: 1;
`;

export const Title = styled.h1`
	font-family: "Montserrat-SemiBold";
`;

export const Description = styled.h1`
	font-family: "Montserrat-Black";
`;

export const QuestionNumber = styled.h1`
	font-family: "Montserrat-Regular";
	margin-top: 15px;
`;

export const Body = styled.div`
	flex: 2;
	justify-content: center;
	align-items: center;
`;

export const Box = styled.div`
	${defaultShadow};
	border-radius: 6px;
	height: 100%;
	width: 100%;
`;

export const Footer = styled.div`
	flex: 1;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

export const Button = styled.button`
	${defaultShadow};
	border-radius: 60px;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 100px;
`;

export const Question = styled.h1`
	font-family: "Montserrat-Regular";
`;

export const Like = styled.img`
	width: 50px;
	height: 50px;
`;

export const Dislike = styled.img`
	width: 50px;
	height: 50px;
`;

export const Content = styled.div`
	padding: 20px 15px;
`;

export const StepLevel = styled.div`
	background-color: ${props => props.theme.royalblue};
	height: 7px;
	width: 100%;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
`;

export const QuestionLevel = styled.h1`
	font-family: "Montserrat-SemiBold";
	color: red;
	margin-bottom: 5px;
	text-transform: capitalize;
`;
