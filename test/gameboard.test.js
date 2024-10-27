import { default as Gameboard } from "../src/modules/gameboard";

test("creates new gameboard", () => {
  const gameboard = Gameboard();

  expect(gameboard).toHaveProperty("receiveAttack");
  expect(gameboard).toHaveProperty("placeRandomShips");
});

// placeRandomShip()
describe("placeRandomShip function called", () => {
  const gameboard = Gameboard();
  const oceanGrid = gameboard.placeRandomShips();

  test("returns an array with a size of 5", () => {
    expect(oceanGrid).toBeInstanceOf(Array);
    expect(oceanGrid).toHaveLength(5);
  });

  // Carrier
  test("first array element has object with type property of carrier", () => {
    expect(oceanGrid[0]).toHaveProperty("type", "carrier");
  });

  test("first array element has object with coordinates property with a set size of 5", () => {
    expect(oceanGrid[0]).toHaveProperty("coordinates");
    expect([...oceanGrid[0].coordinates]).toHaveLength(5);
  });

  // Battleship
  test("second array element has object with type property of battleship", () => {
    expect(oceanGrid[1]).toHaveProperty("type", "battleship");
  });

  test("second array element has object with coordinates property with a set size of 4", () => {
    expect(oceanGrid[1]).toHaveProperty("coordinates");
    expect([...oceanGrid[1].coordinates]).toHaveLength(4);
  });

  // Cruiser
  test("third array element has object with type property of cruiser", () => {
    expect(oceanGrid[2]).toHaveProperty("type", "cruiser");
  });

  test("third array element has object with coordinates property with a set size of 3", () => {
    expect(oceanGrid[2]).toHaveProperty("coordinates");
    expect([...oceanGrid[2].coordinates]).toHaveLength(3);
  });

  // Submarine
  test("forth array element has object with type property of submarine", () => {
    expect(oceanGrid[3]).toHaveProperty("type", "submarine");
  });

  test("forth array element has object with coordinates property with a set size of 3", () => {
    expect(oceanGrid[3]).toHaveProperty("coordinates");
    expect([...oceanGrid[3].coordinates]).toHaveLength(3);
  });

  // Destroyer
  test("fifth array element has object with type property of destroyer", () => {
    expect(oceanGrid[4]).toHaveProperty("type", "destroyer");
  });

  test("fifth array element has object with coordinates property with a set size of 2", () => {
    expect(oceanGrid[4]).toHaveProperty("coordinates");
    expect([...oceanGrid[4].coordinates]).toHaveLength(2);
  });
});

// receiveAttack()
describe("receiveAttack function called by player", () => {
  const enemyboard = Gameboard();
  enemyboard.setDefaultCoordinates();

  enemyboard.receiveAttack([0, 0]);
  enemyboard.receiveAttack([1, 0]);
  enemyboard.receiveAttack([2, 0]);
  enemyboard.receiveAttack([3, 0]);
  enemyboard.receiveAttack([4, 0]);

  enemyboard.receiveAttack([1, 6]);
  enemyboard.receiveAttack([1, 7]);
  enemyboard.receiveAttack([1, 8]);

  enemyboard.receiveAttack([6, 8]);
  enemyboard.receiveAttack([7, 8]);
  enemyboard.receiveAttack([8, 8]);

  enemyboard.receiveAttack([8, 0]);
  enemyboard.receiveAttack([8, 1]);

  test("missed hitting a ship", () => {
    const attackResult = enemyboard.receiveAttack([0, 2]);

    expect(attackResult).toHaveProperty("result");
    expect(attackResult).toHaveProperty("gameover", false);

    expect(attackResult.result).toHaveProperty("coordinates");
    expect(attackResult.result).toHaveProperty("hit", false);
    expect(attackResult.result).toHaveProperty("type", "nothing");
    expect(attackResult.result).toHaveProperty("sunk", false);
  });

  test("destroyer ship hit and is not yet sunk", () => {
    const attackResult = enemyboard.receiveAttack([3, 3]);

    expect(attackResult).toHaveProperty("result");
    expect(attackResult).toHaveProperty("gameover", false);

    expect(attackResult.result).toHaveProperty("coordinates");
    expect(attackResult.result).toHaveProperty("hit", true);
    expect(attackResult.result).toHaveProperty("type", "destroyer");
    expect(attackResult.result).toHaveProperty("sunk", false);
  });

  test("destroyer ship hit again and is sunk", () => {
    const attackResult = enemyboard.receiveAttack([4, 3]);

    expect(attackResult).toHaveProperty("result");
    expect(attackResult).toHaveProperty("gameover", false);

    expect(attackResult.result).toHaveProperty("coordinates");
    expect(attackResult.result).toHaveProperty("hit", true);
    expect(attackResult.result).toHaveProperty("type", "destroyer");
    expect(attackResult.result).toHaveProperty("sunk", true);
  });

  test("battleship hit and is not yet sunk", () => {
    const attackResult = enemyboard.receiveAttack([8, 2]);

    expect(attackResult).toHaveProperty("result");
    expect(attackResult).toHaveProperty("gameover", false);

    expect(attackResult.result).toHaveProperty("coordinates");
    expect(attackResult.result).toHaveProperty("hit", true);
    expect(attackResult.result).toHaveProperty("type", "battleship");
    expect(attackResult.result).toHaveProperty("sunk", false);
  });

  test("battleship hit again, is sunk and game is over", () => {
    const attackResult = enemyboard.receiveAttack([8, 3]);

    expect(attackResult).toHaveProperty("result");
    expect(attackResult).toHaveProperty("gameover", true);

    expect(attackResult.result).toHaveProperty("coordinates");
    expect(attackResult.result).toHaveProperty("hit", true);
    expect(attackResult.result).toHaveProperty("type", "battleship");
    expect(attackResult.result).toHaveProperty("sunk", true);
  });
});
