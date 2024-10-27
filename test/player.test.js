import { default as Player } from "../src/modules/player";

test("creates new player", () => {
  const player = Player("player");

  expect(player).toBeInstanceOf(Object);
  expect(player).toHaveProperty("getPlayerType");
  expect(player).toHaveProperty("gameboard");
});

test("creates new cpu player", () => {
  const player = Player("computer");

  expect(player).toBeInstanceOf(Object);
  expect(player).toHaveProperty("getPlayerType");
  expect(player).toHaveProperty("gameboard");
});
