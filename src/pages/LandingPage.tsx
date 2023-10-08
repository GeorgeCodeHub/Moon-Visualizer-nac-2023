import { Box, Button, Stack, Typography } from "@mui/material";

import { Suspense, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import AboutDialog from "../components/AboutDialog";
import Loading from "../components/Loading";
import Moon from "../components/Moon";

const LandingPage = () => {
	const [isAboutOpen, setIsAboutOpen] = useState(false);

	const navigate = useNavigate();

	const onAboutOpen = useCallback(() => {
		setIsAboutOpen(true);
	}, []);

	const onAboutClose = useCallback(() => {
		setIsAboutOpen(false);
	}, []);

	const onLaunchClick = useCallback(() => {
		navigate("/moon");
	}, []);

	return (
		<Suspense fallback={<Loading />}>
			<Box>
				<Box width="100vw" height="100vh" position="absolute" zIndex={1} sx={{ backgroundColor: "#151f3c94" }} />
				<Stack
					direction="row"
					justifyContent="space-between"
					position="absolute"
					zIndex={2}
					p={5}
					width="calc(100% - 80px)"
				>
					<Typography variant="h4" color="#e5e5e5" borderBottom="2px solid">
						MOON RUNNERS
					</Typography>

					<Typography
						variant="h4"
						color="#e5e5e5"
						onClick={onAboutOpen}
						sx={{
							cursor: "pointer"
						}}
					>
						ABOUT
					</Typography>
				</Stack>
				<Stack
					position="absolute"
					alignItems="center"
					top="50%"
					left="50%"
					textAlign="center"
					zIndex={2}
					sx={{
						transform: "translate(-50%, -50%)"
					}}
				>
					<Typography
						variant="h2"
						borderBottom="1px solid"
						sx={{
							userSelect: "none"
						}}
					>
						MOONQUAKE VISUALIZER
					</Typography>
					<Typography
						variant="h5"
						sx={{
							userSelect: "none"
						}}
					>
						BRINGING THE MOON CLOSER TO YOU
					</Typography>
					<Button variant="text" sx={{ width: "fit-content" }}>
						<Typography variant="h6" color="#e5e5e5" onClick={onLaunchClick}>
							Launch
						</Typography>
					</Button>
				</Stack>
				<Moon enableRotation />
				<AboutDialog isOpen={isAboutOpen} onClose={onAboutClose} />
			</Box>
		</Suspense>
	);
};

export default LandingPage;
