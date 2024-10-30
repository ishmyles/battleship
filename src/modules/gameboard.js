import randomCoordinates, {
  default as RandomCoordinates,
} from "../utils/randomCoordinates";
import { default as Ship } from "./ship";

export default () => {
  let _sunkCounter = 0;
  let _oceanGrid = [];
  let _hitShotList = new Set();
  let _missedShotList = new Set();
  let _ships = {
    carrier: Ship("carrier"),
    battleship: Ship("battleship"),
    cruiser: Ship("cruiser"),
    submarine: Ship("submarine"),
    destroyer: Ship("destroyer"),
  };

  const _createShipCoordinates = (type, startingCoordinate) => {
    const length =
      type === "carrier"
        ? 5
        : type === "battleship"
        ? 4
        : type === "cruiser" || type === "submarine"
        ? 3
        : 2;
    const isVertical = Math.floor(Math.random() * 2);
    const coordinates = [];

    if (!isVertical) {
      for (let i = 0; i < length; i++) {
        coordinates.push([startingCoordinate[0], startingCoordinate[1] + i]);
      }
      return coordinates; // Horizontal coordinates
    } else {
      for (let i = 0; i < length; i++) {
        coordinates.push([startingCoordinate[0] + i, startingCoordinate[1]]);
      }
      return coordinates; // Vertical coordinates
    }
  };

  const _coordinatesWithinBoard = (coordinates) => {
    for (let i = 0; i < coordinates.length; i++) {
      if (!coordinates[i].every((num) => num <= 9 && num >= 0)) return false;
    }
    return true;
  };

  const _coordinatesNotTaken = (coordinates, placedCoordinates) => {
    for (let i = 0; i < coordinates.length; i++) {
      if (placedCoordinates.has(coordinates[i].toString())) return false;
    }
    return true;
  };

  const placeRandomShips = () => {
    const placedCoordinates = new Set();

    const setShipCoordinates = (type) => {
      const shipHead = RandomCoordinates();
      const shipCoordinates = _createShipCoordinates(type, shipHead);

      if (
        _coordinatesWithinBoard(shipCoordinates) &&
        _coordinatesNotTaken(shipCoordinates, placedCoordinates)
      ) {
        const fullCoordinates = new Set();
        shipCoordinates.forEach((coordinates) => {
          placedCoordinates.add(coordinates.toString());
          fullCoordinates.add(coordinates.toString());
        });
        return fullCoordinates;
      } else {
        return setShipCoordinates(type);
      }
    };

    Object.keys(_ships).forEach((shipType) => {
      _oceanGrid.push({
        type: shipType,
        coordinates: setShipCoordinates(shipType),
      });
    });

    return _oceanGrid;
  };

  const receiveAttack = (atkCoordinates = randomCoordinates()) => {
    if (
      _hitShotList.has(atkCoordinates.toString()) ||
      _missedShotList.has(atkCoordinates.toString())
    )
      return receiveAttack();

    const atkOutcome = {
      result: {
        coordinates: atkCoordinates.toString(),
        hit: false,
        type: "nothing",
        sunk: false,
      },
      gameover: false,
    };

    for (const ship of _oceanGrid) {
      if (ship.coordinates.has(atkCoordinates.toString())) {
        atkOutcome.result.hit = true;
        atkOutcome.result.type = ship.type;
        atkOutcome.result.sunk = _ships[ship.type].hit();
        _hitShotList.add(atkCoordinates.toString());

        atkOutcome.result.sunk && _sunkCounter++;
        if (_sunkCounter === 5) atkOutcome.gameover = true;
        break;
      }
    }

    if (!atkOutcome.result.hit) _missedShotList.add(atkCoordinates.toString());
    return atkOutcome;
  };

  const setDefaultCoordinates = () => {
    _oceanGrid.push({
      type: "carrier",
      coordinates: new Set(["0,0", "1,0", "2,0", "3,0", "4,0"]),
    });
    _oceanGrid.push({
      type: "battleship",
      coordinates: new Set(["8,0", "8,1", "8,2", "8,3"]),
    });
    _oceanGrid.push({
      type: "cruiser",
      coordinates: new Set(["1,6", "1,7", "1,8"]),
    });
    _oceanGrid.push({
      type: "submarine",
      coordinates: new Set(["6,8", "7,8", "8,8"]),
    });
    _oceanGrid.push({
      type: "destroyer",
      coordinates: new Set(["3,3", "4,3"]),
    });

    return _oceanGrid;
  };

  return { placeRandomShips, receiveAttack, setDefaultCoordinates };
};
