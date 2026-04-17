import { SERVICES } from "./data.js";

const svcCard = ({ icon, title, desc }) => `
  <div class="svc-card reveal">
    <h3>${title}</h3>
    <p>${desc}</p>
  </div>`;

export function renderCards() {
  document.getElementById("servicesGrid").innerHTML = SERVICES.map(svcCard).join("");
}