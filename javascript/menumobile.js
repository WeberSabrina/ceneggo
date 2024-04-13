function initMenuMobile() {
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
  
  