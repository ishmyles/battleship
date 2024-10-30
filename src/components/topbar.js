export default () => {
  const topbar = document.querySelector(".topbar");

  const appName = document.createElement("h1");
  appName.textContent = "Battleship";

  topbar.appendChild(appName);
};
