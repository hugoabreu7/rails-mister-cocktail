function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar-wagon');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if ($(document).scrollTop() > 60) {
        navbar.classList.add('navbar-wagon-white');
      } else {
        navbar.classList.remove('navbar-wagon-white');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
