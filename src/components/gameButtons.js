import pubsub from "../utils/pubsub";

export default () => {
  const _gameButtons = document.querySelector("#game-actions");
  let _startBtn;
  let _shuffleBtn;
  let _restartBtn;

  const initialise = () => {
    _startBtn = document.createElement("span");
    _startBtn.setAttribute("id", "start");
    _startBtn.classList.add("btn");
    _startBtn.textContent = "Start Game";

    _shuffleBtn = document.createElement("span");
    _shuffleBtn.setAttribute("id", "shuffle");
    _shuffleBtn.classList.add("btn");
    _shuffleBtn.textContent = "Shuffle Ships";

    _restartBtn = document.createElement("span");
    _restartBtn.setAttribute("id", "reset");
    _restartBtn.classList.add("btn");
    _restartBtn.textContent = "Reset";

    _gameButtons.appendChild(_startBtn);
    _gameButtons.appendChild(_shuffleBtn);
    _gameButtons.appendChild(_restartBtn);

    _startBtn.addEventListener("click", () => {
      pubsub.publish("START_GAME");
      _startBtn.style.display = "none";
      _shuffleBtn.style.display = "none";
      _restartBtn.style.display = "block";
    });

    _shuffleBtn.addEventListener("click", () =>
      pubsub.publish("SHUFFLE_SHIPS")
    );

    _restartBtn.addEventListener("click", () => {
      pubsub.publish("RESTART_GAME");
      _startBtn.style.display = "block";
      _shuffleBtn.style.display = "block";
      _restartBtn.style.display = "none";
    });
  };

  initialise();
};
