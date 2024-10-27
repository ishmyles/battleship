import { default as Gameboard } from "./gameboard";

export default (playerType) => {
  const _playerType = playerType;
  let gameboard;

  if (_playerType === "player") {
    gameboard = Gameboard();
  } else {
    gameboard = Gameboard();
    gameboard.setDefaultCoordinates();
  }

  const getPlayerType = () => _playerType;

  return { gameboard, getPlayerType };
};
