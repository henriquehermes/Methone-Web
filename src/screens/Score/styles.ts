import styled, { css } from "styled-components";

const defaultIcon = css`
	width: 22px;
	height: 22px;
	margin-right: 10px;
`;

export const Container = styled.div`
	flex: 1;
	background-color: ${props => props.theme.ghostwhite};
	padding: 30px 16px 20px 16px;
`;

export const Header = styled.div``;

export const Title = styled.h1`
	font-family: "Montserrat-SemiBold";
`;

export const Description = styled.h1`
	font-family: "Montserrat-Black";
`;

export const Like = styled.img`
	${defaultIcon};
`;

export const Dislike = styled.img`
	${defaultIcon};
`;

// export const Questions = styled.FlatList.attrs({
// 	bounces: false,
// })``;

export const Question = styled.h1`
	font-family: "Montserrat-Regular";
`;

export const Row = styled.div`
	flex-direction: row;
	align-items: center;
	margin-bottom: 10px;
`;

export const Body = styled.div`
	flex: 1;
	padding: 15px 0px;
`;
