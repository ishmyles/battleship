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
test("destroyer is hit and is not yet sunk", () => {
  const destroyer = Ship("destroyer");

  expect(destroyer.hit()).toBe(false);
});

test("destroyer is hit 2 times and is sunk", () => {
  const destroyer = Ship("destroyer");
  destroyer.hit();

  expect(destroyer.hit()).toBe(true);
});

// Submarine ship
test("submarine is hit and is not yet sunk", () => {
  const submarine = Ship("submarine");

  expect(submarine.hit()).toBe(false);
});

test("submarine is hit 2 times and is not yet sunk", () => {
  const submarine = Ship("submarine");
  submarine.hit();

  expect(submarine.hit()).toBe(false);
});

test("submarine is hit 3 times and is sunk", () => {
  const submarine = Ship("submarine");
  let i = 0;

  while (i < 2) {
    submarine.hit();
    i++;
  }

  expect(submarine.hit()).toBe(true);
});

// Cruiser ship
test("cruiser is hit and is not yet sunk", () => {
  const cruiser = Ship("cruiser");

  expect(cruiser.hit()).toBe(false);
});

test("cruiser is hit 2 times and is not yet sunk", () => {
  const cruiser = Ship("cruiser");
  cruiser.hit();

  expect(cruiser.hit()).toBe(false);
});

test("cruiser is hit 3 times and is sunk", () => {
  const cruiser = Ship("cruiser");
  let i = 0;

  while (i < 2) {
    cruiser.hit();
    i++;
  }

  expect(cruiser.hit()).toBe(true);
});

// Battleship
test("battleship is hit and is not yet sunk", () => {
  const battleship = Ship("battleship");

  expect(battleship.hit()).toBe(false);
});

test("battleship is hit 3 times and is not yet sunk", () => {
  const battleship = Ship("battleship");
  let i = 0;

  while (i < 2) {
    battleship.hit();
    i++;
  }

  expect(battleship.hit()).toBe(false);
});

test("battleship is hit 4 times and is sunk", () => {
  const battleship = Ship("battleship");
  let i = 0;

  while (i < 3) {
    battleship.hit();
    i++;
  }

  expect(battleship.hit()).toBe(true);
});

//Carrier
test("carrier is hit and is not yet sunk", () => {
  const carrier = Ship("carrier");

  expect(carrier.hit()).toBe(false);
});

test("carrier is hit 4 times and is not yet sunk", () => {
  const carrier = Ship("carrier");
  let i = 0;

  while (i < 3) {
    carrier.hit();
    i++;
  }

  expect(carrier.hit()).toBe(false);
});

test("ship is hit 5 times and is sunk", () => {
  const carrier = Ship("carrier");
  let i = 0;

  while (i < 4) {
    carrier.hit();
    i++;
  }

  expect(carrier.hit()).toBe(true);
});
