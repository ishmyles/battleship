import pubsub from "../utils/pubsub";
import { default as Player } from "./player";

export default () => {
  let player = Player("player");
  let enemy = Player("computer");

  const setDefaultShips = () => {
    const shipCoordinates = player.gameboard.setDefaultCoordinates();
    pubsub.publish("SET_DEFAULT_SHIPS", shipCoordinates);
  };

  return { player, enemy, setDefaultShips };
};
