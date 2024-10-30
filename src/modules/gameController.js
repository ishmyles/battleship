import pubsub from "../utils/pubsub";
import { default as Player } from "./player";

export default () => {
  let player = Player("player");
  let enemy = Player("computer");
  let _gameover = false;
  let _isPlayerTurn;

  const initialise = () => {
    pubsub.subscribe("PLAY_TURN", playRound);
  };

  const setDefaultShips = () => {
    const shipCoordinates = player.gameboard.setDefaultCoordinates();
    pubsub.publish("SET_DEFAULT_SHIPS", shipCoordinates);
  };

  const startGame = () => {
    const enemyStarts = !!Math.floor(Math.random() * 2);
    enemy.gameboard.setDefaultCoordinates();

    if (enemyStarts) {
      _isPlayerTurn = false;
      playEnemyTurn();
    }
  };

  const playRound = (coordinates) => {
    if (!_isPlayerTurn || _gameover) return;
    playTurn(coordinates);

    if (enemy.getPlayerType() === "computer" && !_gameover)
      setTimeout(() => playEnemyTurn(), 1000);
  };

  const playTurn = (atkCoordinates) => {
    const turnResult = enemy.gameboard.receiveAttack(atkCoordinates.split(","));
    updateBoard(turnResult);
    checkOutcome(turnResult);
  };

  const playEnemyTurn = () => {
    const turnResult = player.gameboard.receiveAttack();
    updateBoard(turnResult);
    checkOutcome(turnResult);
  };

  const updateBoard = (turnOutcome) => {
    pubsub.publish("UPDATE_GRID", {
      targetGrid: _isPlayerTurn ? "enemy" : "player",
      coordinates: turnOutcome.result.coordinates,
      isHit: turnOutcome.result.hit,
    });
  };

  const checkOutcome = (turnOutcome) => {
    console.log(_isPlayerTurn ? "PLAYER" : "ENEMY", turnOutcome);
    // TODO: Gameover logic here?
    _isPlayerTurn = !_isPlayerTurn;
  };

  initialise();

  return { player, enemy, setDefaultShips, startGame };
};
