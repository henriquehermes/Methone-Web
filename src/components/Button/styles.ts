import styled from "styled-components";

export const Container = styled.button`
	display: flex;
	width: 100%;
	height: 50px;
	border-radius: 6px;
	background-color: ${props => props.theme.royalblue};
	justify-content: center;
	align-items: center;
	cursor: pointer;
	z-index: 99;
`;

export const ButtonText = styled.h1`
	font-size: 20px;
	font-family: "Montserrat" sans-serif;
	color: ${props => props.theme.white};
	width: 100%;
	text-align: center;
`;

export const Loader = styled.div`
	border: 2px solid ${props => props.theme.white};
	border-top: 2px solid ${props => props.theme.royalblue};
	border-radius: 50%;
	width: 25px;
	height: 25px;
	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
