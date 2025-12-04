const btn = document.getElementById("toggle-theme");

// Load saved theme on page load
if (localStorage.getItem("qikjs-theme") === "dark") {
  document.body.classList.add("dark");
  btn.textContent = "☀️";
} else {
  btn.textContent = "🌙";
}

// Toggle theme
btn.onclick = () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("qikjs-theme", isDark ? "dark" : "light");
  btn.textContent = isDark ? "☀️" : "🌙";
};
