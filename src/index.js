import './style.css';

const contentContainer = document.getElementById("content");

const banner = document.createElement('div');
banner.id = "banner-box"

const headerLine = document.createElement('h1');
headerLine.textContent = "Gojo's Bistroe"

const paragraphOne = document.createElement('p');
paragraphOne.textContent = "Looking for a restaurant near you?";

const paragraphTwo = document.createElement('p');
paragraphTwo.textContent = "Look no further";

banner.appendChild(headerLine)
banner.appendChild(paragraphOne);
banner.appendChild(paragraphTwo);

contentContainer.appendChild(banner);
