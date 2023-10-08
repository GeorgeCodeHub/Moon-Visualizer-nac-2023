import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MoonPage from "./pages/MoonPage";

import "./App.css";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <LandingPage />
		},
		{
			path: "/moon",
			element: <MoonPage />
		}
	],
	{ basename: "/Moon-Visualizer-nac-2023/" }
);

console.log(import.meta.env.DEV);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
