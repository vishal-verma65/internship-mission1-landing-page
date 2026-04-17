export function initTheme() {
  try {
    console.log("DEBUG: initTheme() called");
    
    const themeBtn = document.getElementById("themeBtn");
    const root = document.documentElement;

    console.log("DEBUG: themeBtn found?", themeBtn ? "YES" : "NO");
    console.log("DEBUG: root element", root.tagName);

    if (!themeBtn) {
      console.error("ERROR: Theme button with id 'themeBtn' not found in DOM");
      return;
    }
    const saved = localStorage.getItem("theme") || "light";
    console.log("DEBUG: Saved theme from localStorage:", saved);
    
    root.setAttribute("data-theme", saved);
    console.log("DEBUG: Set data-theme attribute to:", root.getAttribute("data-theme"));

    themeBtn.textContent = saved === "dark" ? "☀️" : "🌙";
    console.log("SUCCESS: Theme initialized to:", saved);

    themeBtn.addEventListener("click", function(e) {
      e.preventDefault();
      
      const current = root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      
      root.setAttribute("data-theme", next);
      themeBtn.textContent = next === "dark" ? "☀️" : "🌙";
      localStorage.setItem("theme", next);
      
      console.log("SUCCESS: Theme toggled from", current, "to", next);
    });
    
  } catch (error) {
    console.error("ERROR in initTheme:", error.message, error);
  }
}