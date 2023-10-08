import { Suspense } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import PanelSettings from "../components/PanelSettings";
import Loading from "../components/Loading";
import Moon from "../components/Moon";

import { moon_landings } from "../data/moon_landings";

function MoonPage() {
	const { showMoonLandings, showQuakeRadius, selectedDataset } = useSelector((state: RootState) => state.dataset);

	return (
		<Suspense fallback={<Loading />}>
			<PanelSettings />
			<Moon
				dataset={selectedDataset}
				moonLandingData={showMoonLandings ? moon_landings : []}
				showRings={showQuakeRadius}
			/>
		</Suspense>
	);
}

export default MoonPage;
