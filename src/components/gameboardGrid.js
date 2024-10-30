import pubsub from "../utils/pubsub";

export default (type) => {
  const playerType = type === "player" ? "player" : "enemy";

  // Cache DOM elements
  const gameboardCells = document.querySelector(
    `#${playerType}-grid .gameboard-cells`
  );
  const gameboardShips = document.querySelector(
    `#${playerType}-grid .gameboard-ships`
  );
  const gameboardMarkers = document.querySelector(
    `#${playerType}-grid .gameboard-markers`
  );

  const initialise = () => {
    // Render the axis labels
    const xAxis = document.querySelector(`#${playerType}-grid .x-axis`);
    const yAxis = document.querySelector(`#${playerType}-grid .y-axis`);

    const xAxisLabel = new DocumentFragment();
    const yAxisLabel = new DocumentFragment();

    for (let i = 0; i < 10; i++) {
      const newGridLabel = document.createElement("div");
      newGridLabel.textContent = String.fromCharCode(65 + i);
      xAxisLabel.appendChild(newGridLabel);
    }

    for (let i = 1; i <= 10; i++) {
      const newGridLabel = document.createElement("div");
      newGridLabel.textContent = i;
      yAxisLabel.appendChild(newGridLabel);
    }

    xAxis.appendChild(xAxisLabel);
    yAxis.appendChild(yAxisLabel);

    const subheading = document.createElement("h2");
    subheading.textContent = `${playerType} Grid`;
    document.querySelector(`.board.${playerType}board`).appendChild(subheading);

    if (playerType === "player") {
      pubsub.subscribe("SET_DEFAULT_SHIPS", renderShips);
      pubsub.subscribe("RESET_SHIPS", resetShips);
      pubsub.subscribe("SET_RANDOM_SHIPS", renderShips);
    }
    pubsub.subscribe("RESET_GAME", renderGrid);
  };

  const renderGrid = () => {
    // Resets the grids
    gameboardCells.innerHTML = "";
    gameboardShips.innerHTML = "";
    gameboardMarkers.innerHTML = "";

    // Render the playerboard
    const gridCells = new DocumentFragment();

    // Renders the base layer of the board, giving the grid look
    for (let i = 0; i < 100; i++) {
      const newGrid = document.createElement("div");
      newGrid.classList.add("grid");
      gridCells.appendChild(newGrid);
    }
    gameboardCells.appendChild(gridCells);

    if (playerType === "enemy") {
      document
        .querySelector(`#${playerType}-grid`)
        .addEventListener("click", (e) => {
          if (e.target.classList.contains("marked")) return;
          pubsub.publish("PLAY_TURN", e.target.dataset.coordinates);
        });
    }

    // Renders the layer for the hit markers
    const gridMarkers = new DocumentFragment();

    let row = 0;
    for (let col = 0; col < 100; col++) {
      if (col % 10 === 0) row++;
      const newGrid = document.createElement("div");
      newGrid.classList.add("marker-grid");
      newGrid.setAttribute(
        "data-coordinates",
        `${row - 1},${col > 9 ? col % 10 : col}`
      );
      gridMarkers.appendChild(newGrid);
    }
    gameboardMarkers.appendChild(gridMarkers);
  };

  const renderShips = (fleetCoordinates) => {
    fleetCoordinates.forEach((ship) => {
      const coordinates = [...ship.coordinates];
      // Since coordinates are based of zero-based index, we need to add 1 for CSS Grid
      const shipHead = coordinates[0].split(",");
      const shipTail = coordinates[coordinates.length - 1].split(",");

      // Ship width takes up 1 row/column of the CSS Grid (depends if ship is vertical/horizontal)
      const shipWidth =
        +shipTail[0] > +shipHead[0]
          ? "span " + (+shipTail[0] - +shipHead[0] + 1)
          : +shipTail[0] + 1;

      // Ship length spans over rows/columns of the CSS Grid (depends if ship is vertical/horizontal)
      const shipLength =
        +shipTail[1] > +shipHead[1]
          ? "span " + (+shipTail[1] - +shipHead[1] + 1)
          : +shipTail[1] + 1;

      const newShip = document.createElement("div");
      newShip.setAttribute("id", ship.type);
      newShip.classList.add("ship");
      newShip.style.gridArea = `${+shipHead[0] + 1} / ${
        +shipHead[1] + 1
      } / ${shipWidth} / ${shipLength}`;

      gameboardShips.appendChild(newShip);
    });
  };

  const resetShips = () => {
    gameboardShips.innerHTML = "";
  };

  initialise();

  return { renderGrid, renderShips };
};
