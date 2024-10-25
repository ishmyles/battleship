export default (shipType) => {
  let _length;
  let _hitCounter = 0;

  const initialise = (type) => {
    switch (type) {
      case "carrier":
        _length = 5;
        break;
      case "battleship":
        _length = 4;
        break;
      case "cruiser":
      case "submarine":
        _length = 3;
        break;
      case "destroyer":
        _length = 2;
        break;
      default:
        _length = 1;
    }
  };

  const _hasSunk = () => _length === _hitCounter;

  const hit = () => {
    _hitCounter++;

    return _hasSunk();
  };

  initialise(shipType);

  return { hit };
};
