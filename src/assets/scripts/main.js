/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import VanillaTilt from 'vanilla-tilt';

/**
 * Write any other JavaScript below
 */

document.addEventListener('DOMContentLoaded', function () {
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    if (currentLocation.includes(link.getAttribute('href'))) {
      link.classList.add('text-green');
      link.classList.remove('text-white');
      link.setAttribute('aria-current', 'page');
    }
  });
});


window.toggleMenu = () => {
  document.getElementById('navbarButton').classList.toggle('focus-white-border')
  document.getElementById('navbarNav').classList.toggle('hidden')
}
