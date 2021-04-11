const logo = document.getElementById('logo');
const heroImg = document.getElementById('heroImg');
const heroHeading = document.getElementById('heroHeading');
const heroText = document.getElementById('heroText');
const heroBtn = document.getElementById('heroBtn');
const navList = document.getElementById('navList');
const dlIcon = document.getElementById('dlIcon');

//function for changes on resize
function renderHeroElements() {
  if (window.innerWidth > 1024) {
    logo.style.opacity = 1;
    navList.style.opacity = 1;
    heroHeading.textContent = 'instock program';
    heroText.innerHTML = `<span class="hero__text--d">d</span> series
    <span class="hero--margin-left">by</span>
    <span class="hero__text--name">Carl Gustav Magnusson</span>`;
    dlIcon.style.display = 'none';
  } else if (window.innerWidth > 480 && window.innerWidth <= 1024) {
    logo.style.opacity = 1;
    navList.style.opacity = 0;
    heroHeading.textContent = 'an instock solution coming soon';
    heroText.textContent = 'new website is under construction';
    dlIcon.style.display = 'none';
  } else if (window.innerWidth <= 480) {
    logo.style.opacity = 0;
    navList.style.opacity = 1;
    heroHeading.textContent = '';
    heroText.textContent = '';
    dlIcon.style.display = 'block';
  }
}

//initial load of hero
renderHeroElements();

//if window size is desktop
//tablet
//phone
window.addEventListener('resize', renderHeroElements);
