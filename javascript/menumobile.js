/*function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
  
    function toggleMenu(event) {
      const isOpen = menuList.classList.contains('active');
      if (isOpen) {
        menuList.classList.remove('active');
        menuButton.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
      } else {
        menuList.classList.add('active');
        menuButton.classList.add('active');
        menuButton.setAttribute('aria-expanded', 'true');
      }
    }
  
    if (menuButton && menuList) {
      menuButton.addEventListener('click', toggleMenu);
    }
  }
  
  if (window.innerWidth < 1000) {
    initMenuMobile();
  }
  
  */

 
 
 

function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  
  function toggleMenu() {
      const isOpen = menuList.classList.toggle('active');
      menuButton.classList.toggle('active', isOpen);
      menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  if (menuButton && menuList) {
      menuButton.addEventListener('click', toggleMenu);
  }
}

function initTouchSlide() {
  let touchStartX = 0;
  const slider = document.querySelector('.programas-lista');

  slider.addEventListener('touchstart', function(event) {
      touchStartX = event.touches[0].clientX;
  });

  slider.addEventListener('touchend', function(event) {
      const touchEndX = event.changedTouches[0].clientX;
      const diffX = touchStartX - touchEndX;
      
      if (diffX > 50) {
          plusSlides(1); // Avançar para o próximo slide
      } else if (diffX < -50) {
          plusSlides(-1); // Retroceder para o slide anterior
      }
  });
}

// Verifique se a largura da janela é menor que 1000px e, se for, inicialize o menu móvel e o slide por touch
if (window.innerWidth < 1000) {
  initMenuMobile();
  initTouchSlide();
}




