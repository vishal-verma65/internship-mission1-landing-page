export function initNavbar() {
  const navbar = document.getElementById("navbar");

  window.addEventListener(
    "scroll",
    () => navbar.classList.toggle("scrolled", scrollY > 36),
    { passive: true }
  );
}