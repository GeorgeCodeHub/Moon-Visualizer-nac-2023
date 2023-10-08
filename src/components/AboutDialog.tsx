import { Dialog, DialogTitle, IconButton, DialogContent, DialogContentText, Typography } from "@mui/material";

import { Close } from "@mui/icons-material";

const AboutDialog = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
	return (
		<Dialog open={isOpen} onClose={onClose} aria-labelledby="responsive-dialog-title">
			<DialogTitle>About Moon Runners Space App</DialogTitle>
			<IconButton
				aria-label="close"
				onClick={onClose}
				sx={{
					position: "absolute",
					right: 8,
					top: 8,
					color: (theme) => theme.palette.grey[500]
				}}
			>
				<Close />
			</IconButton>
			<DialogContent>
				<DialogContentText>
					<Typography gutterBottom>
						Moon Runners Space App, born from the Space Apps Challenge, is your gateway to the cosmos. Our dedicated
						team, the Moon Runners, developed this app to bring space data to both scientists and the general public.
					</Typography>
					<Typography gutterBottom>
						Our goal? To make space data accessible and comprehensible. Space exploration generates vast, often complex
						data. We believe this knowledge should be for everyone, not just experts. With our app, we've transformed
						raw data into engaging visuals.
					</Typography>
					<Typography gutterBottom>
						But we go a step further. We're all about open knowledge. Our tools and data are open-source. Join us in our
						mission to demystify space. Explore our codebase, contribute, and be part of the cosmic journey.
					</Typography>
					<br />
					<Typography gutterBottom>
						Thank you for choosing Moon Runners Space App. Together, we'll unravel the mysteries of the universe.
					</Typography>
				</DialogContentText>
			</DialogContent>
		</Dialog>
	);
};

export default AboutDialog;
