import pubsub from "../utils/pubsub";
import { default as Player } from "./player";

export default () => {
  let player = Player("player");
  let enemy = Player("computer");
  let _gameover = false;
  let _isPlayerTurn;

  const initialise = () => {
    pubsub.subscribe("START_GAME", startGame);
    pubsub.subscribe("SHUFFLE_SHIPS", setRandomShips);
    pubsub.subscribe("RESTART_GAME", restartGame);
    pubsub.subscribe("PLAY_TURN", playRound);
  };

  const setDefaultShips = () => {
    const shipCoordinates = player.gameboard.setDefaultCoordinates();
    pubsub.publish("SET_DEFAULT_SHIPS", shipCoordinates);
  };

  const setRandomShips = () => {
    const shipCoordinates = player.gameboard.placeRandomShips();
    pubsub.publish("RESET_SHIPS");
    pubsub.publish("SET_RANDOM_SHIPS", shipCoordinates);
  };

  const startGame = () => {
    const enemyStarts = !!Math.floor(Math.random() * 2);
    enemy.gameboard.placeRandomShips();

    if (enemyStarts) {
      _isPlayerTurn = false;
      playEnemyTurn();
    } else {
      pubsub.publish("PLAYER_START");
      _isPlayerTurn = true;
    }
  };

  const restartGame = () => {
    player = Player("player");
    enemy = Player("computer");
    _gameover = false;
    _isPlayerTurn;
    pubsub.publish("RESET_GAME");
    pubsub.publish("RESET_HISTORY");
    setDefaultShips();
  };

  const playRound = (coordinates) => {
    if (!_isPlayerTurn || _gameover) return;
    playTurn(coordinates);

    if (enemy.getPlayerType() === "computer" && !_gameover) {
      setTimeout(() => playEnemyTurn(), 2000);
    }
  };

  const playTurn = (atkCoordinates) => {
    const turnResult = enemy.gameboard.receiveAttack(atkCoordinates.split(","));
    updateBoard(turnResult);
    updateTurnHistory(turnResult);
    checkOutcome(turnResult);
  };

  const playEnemyTurn = () => {
    const turnResult = player.gameboard.receiveAttack();
    updateBoard(turnResult);
    updateTurnHistory(turnResult);
    checkOutcome(turnResult);
  };

  const updateBoard = (turnOutcome) => {
    pubsub.publish("UPDATE_GRID", {
      targetGrid: _isPlayerTurn ? "enemy" : "player", // Reversed logic for targetgrid
      coordinates: turnOutcome.result.coordinates,
      isHit: turnOutcome.result.hit,
    });
  };

  const updateTurnHistory = (turnOutcome) => {
    pubsub.publish("UPDATE_HISTORY", {
      player: _isPlayerTurn ? "player" : "enemy",
      result: turnOutcome.result,
      gameover: turnOutcome.gameover,
    });
  };

  const checkOutcome = (turnOutcome) => {
    if (turnOutcome.gameover) _gameover = !_gameover;
    _isPlayerTurn = !_isPlayerTurn;
  };

  initialise();

  return { player, enemy, setDefaultShips, startGame };
};
