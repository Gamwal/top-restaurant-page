import reviews from "./jsonfiles/reviews.json";

export default function homePage() {
  const homeContainer = document.createElement('div');
  homeContainer.id = "homepage";

  const introDiv = document.createElement('div');
  introDiv.id = "introduction";

  const introText = document.createElement('div');
  introText.id = "introductionText";

  const paragraphOne = document.createElement('h3');
  paragraphOne.textContent = "BRING YOUR TASTE BUDS TO LIFE...";

  const paragraphTwo = document.createElement('p');
  paragraphTwo.textContent = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet";

  const paragraphThree = document.createElement('p');
  paragraphThree.textContent = "Open Everyday - 8AM to 8PM";


  introText.appendChild(paragraphOne);
  introText.appendChild(paragraphTwo);
  introText.appendChild(paragraphThree);
  introDiv.appendChild(introText);

  const aboutDiv = document.createElement('div');
  aboutDiv.id = 'about-div'

  const aboutTitleDiv = document.createElement('h2');
  aboutTitleDiv.textContent = "ABOUT US";

  const aboutParagraphOne = document.createElement('p');
  aboutParagraphOne.textContent= "Welcome to Gojo's Bistroe, your go-to destination for delightful culinary experiences. At Gojo's, we are passionate about creating dishes that are both delicious and memorable, using the freshest ingredients to ensure every bite is a treat. Whether you're here for a quick lunch or a leisurely dinner, our cozy atmosphere and friendly staff will make you feel right at home."

  const aboutParagraphTwo = document.createElement('p');
  aboutParagraphTwo.textContent = "Our menu offers a variety of options to satisfy every palate, from classic comfort foods to innovative new dishes. We take pride in our commitment to quality and customer satisfaction, making sure each visit to Gojo's Bistroe is a pleasant one. Join us and enjoy a meal that’s prepared with love and served with a smile."

  const aboutParagraphDiv = document.createElement('div');

  aboutParagraphDiv.appendChild(aboutParagraphOne)
  aboutParagraphDiv.appendChild(aboutParagraphTwo)

  aboutDiv.appendChild(aboutTitleDiv);
  aboutDiv.appendChild(aboutParagraphDiv);

  const reviewsDiv = document.createElement('div');
  reviewsDiv.id = 'reviews';

  const reviewsTitleDiv = document.createElement('h2');
  reviewsTitleDiv.textContent = "WHAT OUR CUSTOMERS SAY";

  reviewsDiv.appendChild(reviewsTitleDiv);

  Object.keys(reviews).forEach(item => {
    const para = document.createElement('p');
    Object.keys(reviews[item]).forEach(review => {
      para.textContent = review;
    });
    reviewsDiv.appendChild(para);
  })


  homeContainer.appendChild(introDiv);
  homeContainer.appendChild(aboutDiv);
  homeContainer.appendChild(reviewsDiv);

  return homeContainer;
}