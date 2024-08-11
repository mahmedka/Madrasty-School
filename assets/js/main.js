let nav = document.querySelector("nav");
function navBackground() {
  if (window.scrollY > 10) {
  nav.style.backgroundColor="#fff"
  } else {
  nav.style.backgroundColor = "none";
  }
}
document.onscroll= function() {
  if (window.scrollY > 200) {
  nav.style.backgroundColor="#67bfa3"
  } else {
  nav.style.backgroundColor = "rgba(0,0,0,0)";
  }
}
