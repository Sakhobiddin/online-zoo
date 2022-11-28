window.addEventListener("DOMContentLoaded", function () {
  // SELLECTORS
  let navbar = document.querySelector(".navbar"),
    bars = document.querySelector(".menu-bars"),
    close = document.querySelector(".menu-x");

  // EVENTS
  bars.addEventListener("click", function () {
    navbar.classList.toggle("active");
    bars.style.display = "none";
    close.style.display = "block";
  });

   close.addEventListener("click", function () {
     navbar.classList.toggle("active");
     bars.style.display = "block";
     close.style.display = "none";
   });
});
