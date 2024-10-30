import pubsub from "../utils/pubsub";

export default () => {
  const _turnHistory = document.querySelector("#turn-log");

  const initialise = () => {
    pubsub.subscribe("UPDATE_HISTORY", updateTurnHistory);
    pubsub.subscribe("RESET_HISTORY", resetTurnLog);
  };

  const updateTurnHistory = ({ player, result, gameover }) => {
    _turnHistory.innerHTML =
      gameover && player === "player"
        ? "<strong>GAMEOVER:</strong> You win!"
        : gameover && player === "enemy"
        ? "<strong>GAMEOVER:</strong> You Lose!"
        : `<strong>${player.toUpperCase()}: </strong> Hit ${result.type} ${
            result.sunk ? "- sunk " + result.type : ""
          }`;
  };

  const resetTurnLog = () => {
    _turnHistory.innerHTML = "";
  };

  initialise();
};
