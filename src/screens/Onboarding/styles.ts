import styled from "styled-components";
import Modal from "react-modal";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		background: "red",
		zIndex: 999,
	},
};

export const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px 16px 20px 16px;
`;

export const Box = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 50%;
	background: ${props => props.theme.white};
	border-radius: 6px;
	height: 80%;
	padding: 30px;
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

export const Header = styled.div`
	flex: 1;
	z-index: 99;
`;

export const Title = styled.h1`
	font-family: "Montserrat", sans-serif;
	margin-bottom: 40px;
`;

export const Description = styled.h2`
	font-family: "Montserrat", sans-serif;
	font-weight: 600;
	margin-bottom: 20px;
`;

export const ImageBackground = styled.img`
	height: 40%;
	position: absolute;
	bottom: 100px;
	right: 0px;
	bottom: 70px;
	z-index: 1;

	@media (min-width: 1024px) {
		height: 50%;
	}

	@media (max-width: 400px) {
		display: none;
	}
`;

export const CustomModal = styled(Modal).attrs({
	style: { customStyles },
	overlayClassName: "Overlay",
	className: "Modal",
})``;

export const ModalBody = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100%;
`;
