/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap';
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

const form = document.getElementById('registrationForm');
const modalHTML = document.getElementById('confirmModal');
const modal = new bootstrap.Modal(modalHTML);

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (form.checkValidity()) {
    modal.show();
    setTimeout(function () {
      form.submit();
    }, 5000);
    modalHTML.addEventListener('hidden.bs.modal', function () {
      form.submit();
    });
  } else {
    form.classList.add('was-validated');
  }
});
