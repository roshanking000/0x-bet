import isBrowser from "./is-browser";

function isSmallScreen() {
  return isBrowser() && window.innerWidth < 768;
}

export default isSmallScreen;
