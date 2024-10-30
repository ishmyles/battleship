import pubsub from "../utils/pubsub";

export default () => {
  const _turnHistory = document.querySelector("#turn-log");

  const initialise = () => {
    pubsub.subscribe("UPDATE_HISTORY", updateTurnHistory);
    pubsub.subscribe("RESET_HISTORY", resetTurnLog);
  };

  const updateTurnHistory = ({ player, result }) => {
    _turnHistory.innerHTML = `<strong>${player.toUpperCase()}: </strong> Hit ${
      result.type
    }. ${result.sunk ? "- sunk " + result.type : ""}`;
  };

  const resetTurnLog = () => {
    _turnHistory.innerHTML = "";
  };

  initialise();
};
