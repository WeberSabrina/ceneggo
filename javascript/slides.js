/*let slideIndex = 0;

function plusSlides(n) {
  const slides = document.querySelectorAll('.slides li');
  
  if (slideIndex === 0 && n === -1) {
    slideIndex = slides.length - 1; // Se estivermos no primeiro slide e clicarmos para voltar, vamos para o último
  } else {
    slideIndex = (slideIndex + n) % slides.length;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1; // Se chegarmos ao início, vamos para o último
    }
  }
  
  showSlides();
}

function currentSlide(n) {
  showSlides(slideIndex = n - 1);
}

function showSlides() {
  let i;
  const slides = document.querySelectorAll('.slides li');
  const dots = document.querySelectorAll('.dot');
  
  // Oculta todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Define os slides a serem exibidos com base no tamanho da tela
  if (window.innerWidth < 600) {
    slides[slideIndex % slides.length].style.display = "block";
  } else {
    for (i = slideIndex; i < slideIndex + 3; i++) {
      slides[i % slides.length].style.display = "block";
    }
  }
  
  // Remove a classe 'active' de todas as bolinhas
  dots.forEach(dot => dot.classList.remove('active'));

  // Adiciona 'active' apenas à bolinha correspondente ao slide atual
  dots[slideIndex % dots.length].classList.add('active');
}

function updateDots(n) {
  currentSlide(n);
}

// Inicia a exibição dos slides
showSlides();*/



let slideIndex = 0;

function plusSlides(n) {
  slideIndex = (slideIndex + n) % slides.length;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1; // Se chegarmos ao início, vamos para o último
  }
  showSlides();
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

function showSlides() {
  slides.forEach(slide => {
    slide.style.display = "none";
  });
  
  if (window.innerWidth < 600) {
    slides[slideIndex % slides.length].style.display = "block";
  } else {
    for (let i = slideIndex; i < slideIndex + 3; i++) {
      slides[i % slides.length].style.display = "block";
    }
  }
  
  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex % dots.length].classList.add('active');
}

function updateDots(n) {
  currentSlide(n);
}

const slides = document.querySelectorAll('.slides li');
const dots = document.querySelectorAll('.dot');

showSlides();




