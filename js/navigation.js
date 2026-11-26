const isLocal = window.location.protocol === "file:";

if (!isLocal) {
  document.getElementById("home-link").href = "/";
  document.getElementById("portfolio-link").href = "/";
}