import { Stack, Typography } from "@mui/material";

import "./Loading.css";

const Loading = () => {
	return (
		<Stack direction="row" gap={2} alignItems="center" justifyContent="center" width={1} height={1}>
			<img
				className="loading-icon"
				src="https://img.icons8.com/color/452/moon-satellite.png"
				alt="loading icon"
				width={52}
			/>
			<Typography variant="h4">Loading...</Typography>
		</Stack>
	);
};

export default Loading;
