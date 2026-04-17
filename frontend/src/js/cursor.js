export function initCursor() {
  if (window.matchMedia("(pointer:coarse)").matches) return;

  const dot = document.createElement("div");
  dot.className = "cdot";
  document.body.appendChild(dot);

  let mx = 0, my = 0, cx = 0, cy = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
  }, { passive: true });

  (function loop() {
    cx += (mx - cx) * 0.16;
    cy += (my - cy) * 0.16;
    dot.style.transform = `translate(${cx}px,${cy}px)`;
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll("a,button,.svc-card,.test-card").forEach((el) => {
    el.addEventListener("mouseenter", () => dot.classList.add("grow"));
    el.addEventListener("mouseleave", () => dot.classList.remove("grow"));
  });
}