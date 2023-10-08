import { createTheme } from "@mui/material";

// Define your custom theme
const spaceTheme = createTheme({
	palette: {
		primary: {
			main: "#151f3c" // Deep blue for the primary color
		},
		secondary: {
			main: "#ffcc00" // Bright yellow for the secondary color
		},
		background: {
			default: "#000000", // Black background
			paper: "#0a0a0a" // A slightly lighter black for paper surfaces
		},
		text: {
			primary: "#ffffff", // White text
			secondary: "#999999" // Light gray text for secondary content
		},
		divider: "#e5e5e5"
	},
	shape: {
		borderRadius: 8 // Rounded corners for elements
	},
	spacing: 8 // Define the spacing unit (8 pixels by default)
});

export default spaceTheme;
