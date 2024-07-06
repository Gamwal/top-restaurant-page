

export default function contactUs() {
  const contactDiv = document.createElement('div');
  contactDiv.id = "contact-section"

  const opener = document.createElement('h2');
  opener.textContent = "Please feel free to reach out to us"

  const contactInfo = document.createElement('div');

  const contactAddress = document.createElement('p');
  contactAddress.textContent = "Address: 123 Abcdef ghij street, klmno state, pqrstu";

  const contactNumber = document.createElement('p');
  contactNumber.textContent = "Phone Number: +012-3456789";

  contactInfo.appendChild(contactAddress);
  contactInfo.appendChild(contactNumber);

  contactDiv.appendChild(opener);
  contactDiv.appendChild(contactInfo);
  return contactDiv
}