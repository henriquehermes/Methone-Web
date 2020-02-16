import styled, { css } from "styled-components";

const defaultIcon = css`
	width: 22px;
	height: 22px;
	margin-right: 10px;
`;

export const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px 16px 20px 16px;
`;

export const Header = styled.div``;

export const Title = styled.h2`
	font-family: "Montserrat", sans-serif;
	font-weight: 600;
`;

export const Description = styled.h1`
	font-family: "Montserrat", sans-serif;
`;

export const Like = styled.img`
	${defaultIcon};
`;

export const Dislike = styled.img`
	${defaultIcon};
`;

export const Questions = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 15px;
`;

export const Question = styled.h5`
	font-family: "Montserrat", sans-serif;
	font-weight: normal;
`;

export const Row = styled.div`
	flex-direction: row;
	align-items: center;
`;

export const Body = styled.div`
	flex: 1;
	overflow: auto;
	padding: 20px 0px 20px 0px;
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
	padding: 30px;

	@media (max-width: 1128px) {
		width: 80%;
		height: 100%;
	}
	@media (max-width: 578px) {
		width: 100%;
		height: 100%;
	}
`;
