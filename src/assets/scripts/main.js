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
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    if (currentLocation.includes(link.getAttribute('href'))) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
});
