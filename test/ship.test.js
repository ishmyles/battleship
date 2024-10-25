import { default as Ship } from "../src/modules/ship";

test("creates new ship", () => {
  const shipTypes = [
    "carrier",
    "battleship",
    "cruiser",
    "submarine",
    "destroyer",
  ];

  shipTypes.forEach((type) => {
    const ship = Ship(type);

    expect(ship).toHaveProperty("hit");
  });
});

// Destroyer ship
describe("destroyer ship", () => {
  const destroyer = Ship("destroyer");

  test("is hit and is not yet sunk", () => {
    expect(destroyer.hit()).toBe(false);
  });

  test("is hit 2 times and is sunk", () => {
    expect(destroyer.hit()).toBe(true);
  });
});

// Submarine ship
describe("submarine ship", () => {
  const submarine = Ship("submarine");

  test("is hit and is not yet sunk", () => {
    expect(submarine.hit()).toBe(false);
  });

  test("is hit 2 times and is not yet sunk", () => {
    expect(submarine.hit()).toBe(false);
  });

  test("is hit 3 times and is sunk", () => {
    expect(submarine.hit()).toBe(true);
  });
});

// Cruiser ship
describe("cruiser ship", () => {
  const cruiser = Ship("cruiser");

  test("is hit and is not yet sunk", () => {
    expect(cruiser.hit()).toBe(false);
  });

  test("is hit 2 times and is not yet sunk", () => {
    expect(cruiser.hit()).toBe(false);
  });

  test("is hit 3 times and is sunk", () => {
    expect(cruiser.hit()).toBe(true);
  });
});

// Battleship
describe("battleship", () => {
  const battleship = Ship("battleship");

  test("is hit and is not yet sunk", () => {
    expect(battleship.hit()).toBe(false);
  });

  test("is hit 3 times and is not yet sunk", () => {
    battleship.hit();
    expect(battleship.hit()).toBe(false);
  });

  test("is hit 4 times and is sunk", () => {
    expect(battleship.hit()).toBe(true);
  });
});

//Carrier
describe("carrier ship", () => {
  const carrier = Ship("carrier");

  test("is hit and is not yet sunk", () => {
    expect(carrier.hit()).toBe(false);
  });

  test("is hit 4 times and is not yet sunk", () => {
    carrier.hit();
    carrier.hit();

    expect(carrier.hit()).toBe(false);
  });

  test("is hit 5 times and is sunk", () => {
    expect(carrier.hit()).toBe(true);
  });
});
