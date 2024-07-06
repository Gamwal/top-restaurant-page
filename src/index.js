import './style.css';
import homePage from './modules/home';
import restaurantMenu from './modules/menu';
import contactUs from './modules/contact-us';

const headerSection = document.getElementById('header');
const restaurantName = document.createElement('h1');
restaurantName.textContent = "Gojo's Bistroe"
document.body.insertBefore(restaurantName, headerSection);

function resetPage(){
  const contentSection = document.getElementById('content');
  contentSection.textContent = "";

  const navButtons = document.querySelectorAll('#navbar button');
  navButtons.forEach(button => {
    button.classList.remove('active-tab');
  });
}

function highlightTab(button) {
  button.classList.add('active-tab');
}

const contentContainer = document.getElementById('content');

const navBar= document.getElementById('navbar');
navBar.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    resetPage();
    highlightTab(event.target);
    if (event.target.textContent === 'HOME'){
      contentContainer.appendChild(homePage());
    } else if (event.target.textContent === 'MENU') {
      contentContainer.appendChild(restaurantMenu());
    } else if (event.target.textContent === 'CONTACT US') {
      contentContainer.appendChild(contactUs());
    }
  }
})

// To load homepage by default
window.addEventListener('load', () => {
  const homeButton = document.querySelector('#navbar button:first-child');
  homeButton.click();
})