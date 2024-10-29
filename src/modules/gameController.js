import { default as Player } from "./player";

export default () => {
  let player = Player("player");
  let enemy = Player("computer");

  return { player, enemy };
};
