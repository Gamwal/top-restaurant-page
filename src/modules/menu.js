import menuItems from "./menu.json";

export default function restaurantMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.id = 'menu-container';

  Object.keys(menuItems).forEach(section => {
    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add('menu-section');

    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = section;
    sectionDiv.appendChild(sectionTitle);

    const ul = document.createElement('ul');
    menuItems[section].forEach(item => {
      const li = document.createElement('li');

      const dishName = document.createElement('span');
      dishName.textContent = item[0];

      const dishPrice = document.createElement('span');
      dishPrice.textContent = item[1];

      li.appendChild(dishName);
      li.appendChild(dishPrice);
      ul.appendChild(li);
    });
    sectionDiv.appendChild(ul);
    menuContainer.appendChild(sectionDiv);
  })
  return menuContainer;
};
