const navbar = document.querySelector('.navbar');

window.onscroll = function() {
  // pageYOffset or scrollY
  if (window.pageYOffset > 265) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
