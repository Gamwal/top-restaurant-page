export default function homePage() {
  const homeContainer = document.createElement('div');
  homeContainer.id = "homepage"

  const paragraphOne = document.createElement('p');
  paragraphOne.textContent = "Ready to bring your taste buds to life?";
  const paragraphTwo = document.createElement('p');
  paragraphTwo.textContent = "Look no further";

  homeContainer.appendChild(paragraphOne);
  homeContainer.appendChild(paragraphTwo);

  return homeContainer;
}