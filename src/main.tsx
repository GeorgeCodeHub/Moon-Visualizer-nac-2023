import React from "react";
import ReactDOM from "react-dom/client";

import { store } from "./store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";

import spaceTheme from "./config/mui/theme";

import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={spaceTheme}>
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
