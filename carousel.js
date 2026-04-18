


let carousel = document.querySelector(".carousel");
let slides = document.querySelectorAll(".carousel img");
let totalSlides = slides.length;

//carousel work
let currentSlide = 0;

  setInterval(() => {
    changeSlide(1);
  }, 3000);
  showSlide(currentSlide);

//functions for carousel work
function showSlide(index) {

  if (index >= totalSlides) {
    currentSlide = 0
  } else if (index <0) {
    currentSlide = totalSlides - 1
  } else {
    currentSlide = index
  }
  const offset = -currentSlide * 100;
  carousel.style.transform = `translateX(${offset}%)`;
  console.log(index)
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}