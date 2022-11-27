// if (
//   localStorage.theme === "dark" ||
//   (!("theme" in localStorage) &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//   document.documentElement.classList.add("dark");
//   localStorage.setItem("theme", "dark");
// } else {
//   document.documentElement.classList.remove("dark");
//   localStorage.removeItem("theme");
// }
// function toggleDarkmode() {
//   if (localStorage.getItem("theme") === null) {
//     localStorage.setItem("theme", "dark");
//     document.documentElement.classList.add("dark");
//   } else {
//     localStorage.removeItem("theme");
//     document.documentElement.classList.remove("dark");
//   }
// }

var toggle = document.getElementById("theme-toggle");

var storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (storedTheme)
  document.documentElement.setAttribute("data-theme", storedTheme);

function toggleDarkmode() {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
  }
  console.log(targetTheme);
  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
}
