const navButton = document.getElementById("nav-button");
const navItems = document.getElementsByClassName("nav-items")[0];

navButton.addEventListener("click", () => {
  if (!navButton.classList.contains("active")) {
    navButton.classList.add("active");
    navItems.classList.add("active");
  } else {
    navButton.classList.remove("active");
    navItems.classList.remove("active");
  }
});
