const navbar = document.querySelector('.navbar');

window.onscroll = function() {
  // pageYOffset or scrollY
  if (window.pageYOffset > 265) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

// Cache Buster

(function() {
  const rep = /.*\?.*/;
  const links = document.getElementsByTagName('link');
  const scripts = document.getElementsByTagName('script');
  const process_scripts = false;
  for (var i = 0; i < links.length; i++) {
    const link = links[i];
    const { href } = link;
    if (rep.test(href)) {
      link.href = `${href}&${Date.now()}`;
    } else {
      link.href = `${href}?${Date.now()}`;
    }
  }
  if (process_scripts) {
    for (var i = 0; i < scripts.length; i++) {
      const script = scripts[i];
      const { src } = script;
      if (rep.test(src)) {
        script.src = `${src}&${Date.now()}`;
      } else {
        script.src = `${src}?${Date.now()}`;
      }
    }
  }
})();

localStorage.clear();
