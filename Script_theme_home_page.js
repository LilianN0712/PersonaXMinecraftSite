const button = document.getElementById("theme-toggle");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const savedTheme = localStorage.getItem("theme");

function applyAlternativeTheme(enabled) {
  document.body.classList.toggle("alternative-theme", enabled);
  if (h1) h1.classList.toggle("alternative-theme", enabled);
  if (h2) h2.classList.toggle("alternative-theme", enabled);
}

if (savedTheme === "alternative-theme") {
  applyAlternativeTheme(true);
}

button.addEventListener("click", () => {
  const isAlternative = !document.body.classList.contains("alternative-theme");
  applyAlternativeTheme(isAlternative);
  localStorage.setItem("theme", isAlternative ? "alternative-theme" : "");
});