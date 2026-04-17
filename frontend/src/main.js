import { renderCards }      from "./js/render.js";
import { initScrollReveal } from "./js/scrollReveal.js";
import { initNavbar }       from "./js/navbar.js";
import { initTheme }        from "./js/theme.js";
import { initMobileMenu }   from "./js/mobileMenu.js";
import { initTypewriter }   from "./js/typeWriter.js";
import { initCursor }       from "./js/cursor.js";
import { initContactForm }  from "./js/contactForm.js";

// 1. Render dynamic content first so .reveal elements exist before the observer runs
renderCards();

// 2. Observe newly rendered .reveal elements
initScrollReveal();

// 3. UI behaviour
initNavbar();
initTheme();
initMobileMenu();
initTypewriter();
initCursor();
initContactForm();