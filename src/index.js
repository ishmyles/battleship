import "./assets/styles/index.css";

import { default as GameboardGrid } from "./components/gameboardGrid";
import { default as GridMarker } from "./components/gridMarker";
import { default as GameController } from "./modules/gameController";

const gameController = GameController();

const playerGameboardDOM = GameboardGrid("player");
const enemyGameboardDOM = GameboardGrid("enemy");
GridMarker();

playerGameboardDOM.renderGrid();
enemyGameboardDOM.renderGrid();

gameController.setDefaultShips();

gameController.startGame();
