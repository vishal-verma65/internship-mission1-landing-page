export function initContactForm() {
  const form  = document.getElementById("cform");
  const toast = document.getElementById("toast");
  const nameInput = document.getElementById("fn");
  const emailInput = document.getElementById("fe");
  const serviceSelect = document.getElementById("fs");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const service = serviceSelect.value.trim();

    // Validation
    if (!name) {
      console.warn("Name is required");
      alert("Please enter your full name");
      nameInput.focus();
      return;
    }

    if (!email) {
      console.warn("Email is required");
      alert("Please enter your email address");
      emailInput.focus();
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn("Invalid email format");
      alert("Please enter a valid email address");
      emailInput.focus();
      return;
    }

    if (!service) {
      console.warn("Service selection is required");
      alert("Please select a service");
      serviceSelect.focus();
      return;
    }

    // If all validations pass, proceed with submission
    const btn = form.querySelector(".btn");
    btn.textContent = "Sending…";
    btn.disabled    = true;

    setTimeout(() => {
      btn.textContent = "Send Message →";
      btn.disabled    = false;
      form.reset();
      toast.classList.add("show");
      console.log("Form submitted successfully", { name, email, service });
      setTimeout(() => toast.classList.remove("show"), 3500);
    }, 1200);
  });
}