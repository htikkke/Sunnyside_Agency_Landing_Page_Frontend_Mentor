import "./style.css";

const menuIcon = document.getElementById("menu-icon");
const popupMenu = document.getElementById("popup-menu");
menuIcon.addEventListener("click", (e) => {
  popupMenu.classList.remove("hidden");
  popupMenu.classList.add("flex");

  e.stopPropagation();
});

window.addEventListener("click", (e) => {
  if (
    !popupMenu.classList.contains("hidden") &&
    !popupMenu.contains(e.target)
  ) {
    popupMenu.classList.remove("flex");
    popupMenu.classList.add("hidden");
  }
});
