$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// ---------------
imgIndex = 2;
function doi(x) {
  showSlides((imgIndex += x));
}
showSlides(2);
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("image");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (n > slides.length - 2) {
    imgIndex = 1;
  }
  if (n <= 0) {
    imgIndex = slides.length - 2;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[imgIndex - 1].style.display = "block";
  slides[imgIndex].style.display = "block";
  slides[imgIndex + 1].style.display = "block";
  dots[imgIndex - 1].className += " active";
}

let ev = document.querySelector(".even-btn");
ev.addEventListener("click", function () {
  let ctneve = document.querySelector(".container-img-even");
  ctneve.style.display = "flex";
  let ctnpromo = document.querySelector(".container-img");
  ctnpromo.style.display = "none";
  let btn = document.querySelector(".btn");
  btn.style.display = "none";
});

let pr = document.querySelector(".promo-btn");
pr.addEventListener("click", function () {
  let ctneve = document.querySelector(".container-img-even");
  ctneve.style.display = "none";
  let ctnpromo = document.querySelector(".container-img");
  ctnpromo.style.display = "flex";
  let btn = document.querySelector(".btn");
  btn.style.display = "flex";
});
