import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MoonPage from "./pages/MoonPage";

import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />
	},
	{
		path: "/moon",
		element: <MoonPage />
	}
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
