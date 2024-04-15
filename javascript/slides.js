let slideIndex = 0;

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
showSlides();


