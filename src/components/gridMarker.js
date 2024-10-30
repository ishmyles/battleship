import pubsub from "../utils/pubsub";

export default () => {
  const initialise = () => {
    pubsub.subscribe("UPDATE_GRID", placeMarker);
  };

  const placeMarker = ({ targetGrid, coordinates, isHit }) => {
    const gridToMark = document.querySelector(
      `#${targetGrid}-grid .gameboard-markers [data-coordinates="${coordinates}"]`
    );

    const newMarker = document.createElement("div");
    newMarker.classList.add("marker");
    newMarker.classList.add("marked");
    newMarker.classList.add(isHit ? "marker-hit" : "marker-miss");

    gridToMark.classList.add("marked");
    gridToMark.appendChild(newMarker);
  };

  initialise();
};
