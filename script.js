const btnMobile = document.querySelector("#hamburger");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.querySelector(".nav-container");
  nav.classList.toggle("active");
  const active = nav.classList.contains('active')
  event.currentTarget.setAttribute('aria-expanded', active)
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
