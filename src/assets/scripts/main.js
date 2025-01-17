/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import VanillaTilt from 'vanilla-tilt';
import { speakers } from './speakers';
import { activities } from './activities';

/**
 * Write any other JavaScript below
 */

document.addEventListener('DOMContentLoaded', function () {
  setCurrentPage();
  loadSpeakers();
  loadActivities();
});


window.toggleMenu = () => {
  document.getElementById('navbarButton').classList.toggle('focus-white-border')
  document.getElementById('navbarNav').classList.toggle('hidden')
}

function loadSpeakers() {
  const container = document.getElementById('speakers-list');
  const templateCard = document.getElementById('speaker');

  if (container) {
    speakers.forEach(speaker => {
      const cardClone = templateCard.cloneNode(true);

      cardClone.querySelector('img').src = speaker.image;
      cardClone.querySelector('img').alt = speaker.name;
      cardClone.querySelector('h3').textContent = speaker.name;
      cardClone.querySelector('p').textContent = speaker.quote;

      container.appendChild(cardClone);
    });
    templateCard.remove();
  }
}

function loadActivities() {
  const container = document.getElementById("activities-list");
  const templateActivity = document.getElementById("activity");

  if (container) {
    activities.forEach(activity => {
      const activityClone = templateActivity.cloneNode(true);
      activityClone.style.display = "";
      activityClone.classList.remove("hidden");

      activityClone.querySelector("h5").textContent = activity.title;
      activityClone.querySelector("p").textContent = activity.description;

      container.appendChild(activityClone);
    });

    templateActivity.remove();
  }
}

function setCurrentPage() {
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    if (currentLocation.includes(link.getAttribute('href'))) {
      link.classList.add('text-green');
      link.classList.remove('text-white');
      link.setAttribute('aria-current', 'page');
    }
  });
}
