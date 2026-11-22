const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const roles = ["Data Analyst", "Python Developer", "Problem Solver"];
let roleIndex = 0;
const roleText = document.getElementById("roleText");

setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  roleText.textContent = roles[roleIndex];
}, 2400);
