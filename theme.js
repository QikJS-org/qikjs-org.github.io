const btn = document.getElementById("toggle-theme");
btn.onclick = () => {
  document.body.classList.toggle("dark");
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};
