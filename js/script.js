const hamburger = document.querySelector("#toggle-btn");

hamburger.addEventListener("click", function () {
  console.log("Hamburger clicked");
  document.querySelector("#sidebar").classList.toggle("expand");
});
