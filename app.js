const logo = document.getElementById('logo');
const heroImg = document.getElementById('heroImg');
const heroHeading = document.getElementById('heroHeading');
const heroHeading2 = document.getElementById('heroHeading2');

//function for changes on resize
function renderHeroElements() {
  if (window.innerWidth < 1440) {
    heroHeading.textContent = 'an instock solution coming soon';
    heroHeading2.textContent = 'an instock solution coming soon';
  } else {
    heroHeading.textContent = 'instock solution coming soon';
    heroHeading2.textContent = 'instock solution coming soon';
  }
}

//initial load of hero
renderHeroElements();

window.addEventListener('resize', renderHeroElements);
