import { useRef, useEffect, FC, memo } from "react";

import Globe from "react-globe.gl";

import lunarSurface from "../assets/lunar_surface.png";
import lunarBump from "../assets/lunar_bump.png";

import { scaleLinear } from "d3";

const markerSvg = `<svg
		fill="currentColor"
		height="24px"
		width="24px"
		version="1.1"
		id="Layer_1"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M5.75 1C6.16421 1 6.5 1.33579 6.5 1.75V3.6L8.22067 3.25587C9.8712 2.92576 11.5821 3.08284 13.1449 3.70797L13.3486 3.78943C14.9097 4.41389 16.628 4.53051 18.2592 4.1227C19.0165 3.93339 19.75 4.50613 19.75 5.28669V12.6537C19.75 13.298 19.3115 13.8596 18.6864 14.0159L18.472 14.0695C16.7024 14.5119 14.8385 14.3854 13.1449 13.708C11.5821 13.0828 9.8712 12.9258 8.22067 13.2559L6.5 13.6V21.75C6.5 22.1642 6.16421 22.5 5.75 22.5C5.33579 22.5 5 22.1642 5 21.75V1.75C5 1.33579 5.33579 1 5.75 1Z" />
	</svg>`;

const weightColor = scaleLinear().domain([0, 500]).range(["orange", "darkred"]).clamp(true);

const colorInterpolator = (t: any) => `rgba(255,100,50,${Math.sqrt(1 - t)})`;

interface IMoon {
	enableRotation?: boolean;
	showRings?: boolean;
	dataset?: any[];
	moonLandingData?: any[];
}

const Moon: FC<IMoon> = ({ enableRotation = false, dataset = [], moonLandingData = [], showRings = [] }) => {
	const globeEl = useRef<any>();

	useEffect(() => {
		if (enableRotation) {
			globeEl.current.controls().autoRotate = true;
			globeEl.current.controls().autoRotateSpeed = 0.5;
		}
	}, [enableRotation]);

	const data = dataset?.map((item) => ({
		...item,
		labelSize: 1.2,
		ringRadius: (item.Depth ? item.Depth : 5) / 150,
		labelText: `Year: ${item.Year}, Day: ${item.Day} `,
		labelLabel: `<div>Depth: ${item.Depth}</div>`
	}));

	return (
		<Globe
			ref={globeEl}
			globeImageUrl={lunarSurface}
			bumpImageUrl={lunarBump}
			backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
			showGraticules={false}
			ringsData={showRings ? data : []}
			ringColor={() => colorInterpolator}
			ringMaxRadius="ringRadius"
			hexBinPointsData={data}
			hexBinPointWeight={(d: any) => d.Depth || 10}
			hexAltitude={({ sumWeight }) => sumWeight * 0.0005}
			hexTopColor={(d) => weightColor(d.sumWeight)}
			hexSideColor={(d) => weightColor(d.sumWeight)}
			hexLabel={(d: any) => {
				return `
				<div style="background-color: #e5e5e5; color: #000; z-index: 5000000; padding: 8px;">
				<b>${d.points[0].labelLabel}</b> recorded at ${d.points[0].labelText}
				</div>
			  `;
			}}
			htmlElementsData={moonLandingData}
			htmlElement={(d: any) => {
				const el = document.createElement("div");

				el.style.color = "#fff";
				el.style.width = "100px";
				el.style.paddingLeft = "24px";
				el.style.textAlign = "center";

				const icon = document.createElement("div");
				icon.innerHTML = markerSvg;

				// Append the paragraph element to the div element
				el.appendChild(icon);

				// Create a paragraph element and set its content
				const paragraph = document.createElement("div");
				paragraph.textContent = d.labelText;

				// Append the paragraph element to the div element
				el.appendChild(paragraph);

				return el;
			}}
		/>
	);
};

export default memo(Moon);
