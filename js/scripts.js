function navToggle() {
  const navBar = document.getElementById("navBar");
  const menuToggle = document.getElementById("menu-toggle");

  if (navBar.className === "nav-bar") {
    navBar.className += " responsive";
    menuToggle.setAttribute("aria-expanded", true);
  } else {
    navBar.className = "nav-bar";
    menuToggle.setAttribute("aria-expanded", false);
  }
}
