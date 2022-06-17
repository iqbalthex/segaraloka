const theta = [
	"N", "NNE", "NE", "ENE",
	"E", "ESE", "SE", "SSE",
	"S", "SSW", "SW", "WSW",
	"W", "WNW", "NW", "NNW"
];

// const rose = (v, col, lis) => {return {
	// r: lis,
	// theta: theta,
	// name: `${v} m/s)`,
	// marker: {color: `rgb(${col})`},
	// type: "barpolar"
// }}

/*const data = [
	rose(2, "99,190,123", [0, 2, 2, 2, 2, 1, 1, 0, 4, 3, 1, 3, 8, 1, 2, 0]),
	rose(3, "143,202,125", [0, 2, 1, 2, 2, 1, 1, 0, 4, 3, 1, 3, 8, 3, 2, 9]),
	rose(4, "188,215,128", [0, 2, 1, 2, 2, 1, 1, 0, 4, 3, 1, 3, 8, 3, 2, 0]),
	rose(5, "232,228,130", [0, 2, 1, 2, 2, 1, 1, 0, 4, 3, 1, 2, 7, 1, 2, 0]),
	rose(6, "255,217,129", [0, 2, 1, 2, 2, 1, 1, 0, 4, 3, 1, 1, 7, 7, 2, 0]),
	rose(7, "252,180,122", [0, 2, 1, 2, 1, 1, 1, 0, 4, 3, 1, 1, 4, 3, 1, 0]),
	rose(8, "250,143,115", [0, 2, 1, 1, 0, 1, 0, 0, 4, 2, 1, 1, 2, 3, 1, 0]),
	rose(9, "248,105,107", [0, 0, 1, 1, 0, 0, 0, 0, 4, 2, 0, 1, 1, 2, 0, 0]),
];*/

const layout = {
	font: { size: 14 },
	legend: { font: { size: 12 } },
	polar: {
		barmode: "overlay",
		bargap: .15,
		radialaxis: {ticksuffix: "%", angle: 45},
		angularaxis: {direction: "clockwise"}
	}
}

// Plotly.newPlot("plot", data, layout, { responsive: true });
