import "./assets/styles/index.css";

import { default as Topbar } from "./components/topbar";
import { default as GameboardGrid } from "./components/gameboardGrid";
import { default as TurnLog } from "./components/turnLog";
import { default as GameButtons } from "./components/gameButtons";
import { default as GridMarker } from "./components/gridMarker";
import { default as GameController } from "./modules/gameController";

const gameController = GameController();

Topbar();
const playerGameboardDOM = GameboardGrid("player");
const enemyGameboardDOM = GameboardGrid("enemy");

TurnLog();
GameButtons();
GridMarker();

playerGameboardDOM.renderGrid();
enemyGameboardDOM.renderGrid();

gameController.setDefaultShips();
