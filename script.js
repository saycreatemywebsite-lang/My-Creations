document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! We will contact you soon 😊");
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });
});
