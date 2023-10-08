import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IDatasetState } from "./models/datasetModels";

const initialState: IDatasetState = {
	selectedDataset: [],
	showMoonLandings: true,
	showQuakeRadius: true
};

export const datasetSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		setShowMoonLandings: (state) => {
			state.showMoonLandings = !state.showMoonLandings;
		},
		setShowQuakeRadius: (state) => {
			state.showQuakeRadius = !state.showQuakeRadius;
		},
		setSelectedDataset: (state, action: PayloadAction<any[]>) => {
			state.selectedDataset = action.payload;
		}
	}
});

// Action creators are generated for each case reducer function
export const { setSelectedDataset, setShowMoonLandings, setShowQuakeRadius } = datasetSlice.actions;

export default datasetSlice.reducer;
