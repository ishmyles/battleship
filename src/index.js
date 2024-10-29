import "./assets/styles/index.css";

import { default as GameboardGrid } from "./components/gameboardGrid";

const playerGameboard = GameboardGrid("player");
const enemyGameboard = GameboardGrid("enemy");

playerGameboard.renderGrid();
playerGameboard.renderShips();
enemyGameboard.renderGrid();
