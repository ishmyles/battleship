import "./assets/styles/index.css";

// Render the axis labels
const xAxis = document.querySelector(".x-axis");
const yAxis = document.querySelector(".y-axis");

const xAxisLabel = new DocumentFragment();

for (let i = 0; i < 10; i++) {
  const newGridLabel = document.createElement("div");
  newGridLabel.textContent = String.fromCharCode(65 + i);
  xAxisLabel.appendChild(newGridLabel);
}

xAxis.appendChild(xAxisLabel);

const yAxisLabel = new DocumentFragment();

for (let i = 1; i <= 10; i++) {
  const newGridLabel = document.createElement("div");
  newGridLabel.textContent = i;
  yAxisLabel.appendChild(newGridLabel);
}

yAxis.appendChild(yAxisLabel);

// Render the playerboard
const playerboard = document.querySelector("#player-grid .gameboard-cells");
const grid = document.querySelector("#player-grid .gameboard-ships");
const markers = document.querySelector("#player-grid .gameboard-markers");

const gridItems = new DocumentFragment();

// Renders the base layer of the board, giving the grid look
for (let i = 0; i < 100; i++) {
  const newGrid = document.createElement("div");
  newGrid.classList.add("grid");
  //   newGrid.textContent = i;
  gridItems.appendChild(newGrid);
}

playerboard.appendChild(gridItems);

// Renders the layer for the ship placement
const newShip = document.createElement("div");
newShip.classList.add("ship");
grid.appendChild(newShip);

// document.querySelector("#player-grid").addEventListener("click", (e) => {
//   console.log(e.target.dataset.coordinates);
// });

// Renders the layer for the hit markers
const gridMarkers = new DocumentFragment();

let row = 0;
for (let col = 0; col < 100; col++) {
  if (col % 10 === 0) row++;
  const newGrid = document.createElement("div");
  newGrid.setAttribute(
    "data-coordinates",
    `${row - 1},${col > 9 ? col % 10 : col}`
  );
  gridMarkers.appendChild(newGrid);
}

markers.appendChild(gridMarkers);
