import { ArrowBackIos } from "@mui/icons-material";
import { Stack, Typography, Button, MenuItem, Select, SelectChangeEvent, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setSelectedDataset, setShowMoonLandings, setShowQuakeRadius } from "../store/datasetSlice";

import { dataMerged } from "../data/dataMerged";

const yearOptions = [...new Set(dataMerged.map((item) => item.Year))];

const PanelSettings = () => {
	const [selectedYear, setSelectedYear] = useState(yearOptions[0]);

	const { showMoonLandings, showQuakeRadius } = useSelector((state: RootState) => state.dataset);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const onReturnHomeClick = () => {
		navigate("/");
	};

	const onMoonLandingsClick = () => {
		dispatch(setShowMoonLandings());
	};

	const onQuakeRadiusClick = () => {
		dispatch(setShowQuakeRadius());
	};

	const onYearChange = (event: SelectChangeEvent) => {
		setSelectedYear(Number(event.target.value));
	};

	useEffect(() => {
		const newData = dataMerged.filter((item) => {
			return item.Year === selectedYear;
		});

		dispatch(setSelectedDataset(newData));
	}, [selectedYear]);

	return (
		<Stack position="absolute" zIndex={2} m={1} gap={1} width={350}>
			<IconButton onClick={onReturnHomeClick} aria-label="delete" sx={{ width: "fit-content", color: "#ffffffde" }}>
				<ArrowBackIos />
			</IconButton>
			<Stack p={2} gap={2} bgcolor="#313747" border="1px solid #e5e5e5" borderRadius={1}>
				<Stack direction="row" justifyContent="space-between" alignItems="center">
					<Typography>Moon Landings</Typography>
					<Button variant="contained" onClick={onMoonLandingsClick}>
						{showMoonLandings ? "Show" : "Hide"}
					</Button>
				</Stack>
				<Stack direction="row" justifyContent="space-between" alignItems="center">
					<Typography>Quake Radius</Typography>
					<Button variant="contained" onClick={onQuakeRadiusClick}>
						{showQuakeRadius ? "Show" : "Hide"}
					</Button>
				</Stack>
			</Stack>
			<Stack direction="row" gap={1}>
				<Select
					sx={{
						backgroundColor: "#313747",
						width: 100,
						"svg:not(:root)": {
							color: "#ffffff8a"
						}
					}}
					value={selectedYear.toString()}
					label=""
					onChange={onYearChange}
				>
					{yearOptions.map((year) => (
						<MenuItem key={year} value={year}>
							{year}
						</MenuItem>
					))}
				</Select>
			</Stack>
		</Stack>
	);
};

export default PanelSettings;
