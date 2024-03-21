/*let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n - 1);
}

function showSlides() {
  let i;
  const slides = document.querySelectorAll('.slides li');
  const dots = document.querySelectorAll('.dot');
  
  if (slideIndex >= slides.length) {slideIndex = 0}
  if (slideIndex < 0) {slideIndex = slides.length - 1}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
  }
  for (i = slideIndex; i < slideIndex + 3; i++) {
    slides[i % slides.length].style.display = "block";
  }
  

  dots[slideIndex].classList.add('active');
}

function updateDots(n) {
  currentSlide(n);
} */


let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n - 1);
}

function showSlides() {
  let i;
  const slides = document.querySelectorAll('.slides li');
  const dots = document.querySelectorAll('.dot');
  
  if (window.innerWidth < 600) {
    // Se a largura da tela for menor que 600px, mostrar apenas 1 imagem
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex % slides.length].style.display = "block";
  } else {
    // Se a largura da tela for maior ou igual a 600px, mostrar 3 imagens
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = slideIndex; i < slideIndex + 3; i++) {
      slides[i % slides.length].style.display = "block";
    }
  }
  
  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

function updateDots(n) {
  currentSlide(n);
}








