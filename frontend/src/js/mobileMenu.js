export function initMobileMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const mobMenu = document.getElementById("mobMenu");

  menuBtn.addEventListener("click", () => {
    const open = mobMenu.classList.toggle("open");
    menuBtn.textContent = open ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", open);
  });

  mobMenu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mobMenu.classList.remove("open");
      menuBtn.textContent = "☰";
    })
  );
}