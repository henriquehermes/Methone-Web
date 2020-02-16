import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    color: ${props => props.theme.black};
    font-family: "Montserrat", sans-serif;
    background-color: #ffffff;  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23000' fill-opacity='.1' points='120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }
  html,
body,
#root {
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
}
`;

export const theme = {
	ghostwhite: "#f7f8fc",
	royalblue: "#3751ff",
	white: "#fff",
	black: "#000",
};
