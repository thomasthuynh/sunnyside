const hamburgerMenu = document.querySelector(".hamburgerMenu");
const hamburgerDropdown = document.querySelector(".hamburgerDropdown");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  hamburgerDropdown.classList.toggle("active");
});
