import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.ts";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./styles/global";
import Router from "./routes"

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
        <GlobalStyle />
			<Router />
		</ThemeProvider>
	</Provider>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
