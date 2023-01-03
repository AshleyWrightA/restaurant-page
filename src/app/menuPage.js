import { MenuItem, Menu } from "./menuObjects";
import { menuItemsData } from "./menuItemsData";

(function makeMenuItems() {
  // IIFE Function to initialize the menu, one time.
  menuItemsData.forEach((e) => {
    const menuItem = new MenuItem(e.title, "", e.iconName, e.iconStyle, e.image, e.price);
    Menu.addMenuItem(menuItem);
  });
})();

const createItemElements = () => {
  const itemsContainer = document.querySelector(".items-container");

  Menu.menuArray.forEach((e) => {
    const itemElement = document.createElement("div");
    const itemElementHeader = document.createElement("div");
    const itemName = document.createElement("h2");
    const itemHeaderWrapper = document.createElement("div");
    const itemIcon = document.createElement("i");
    const itemPrice = document.createElement("p");

    itemElement.classList.add("item-element");
    itemElementHeader.classList.add("item-element-header");
    itemName.classList.add("item-name");
    itemHeaderWrapper.classList.add("item-header-wrapper");
    itemIcon.classList.add(e.iconName);
    itemIcon.classList.add(e.iconStyle);
    itemPrice.classList.add("item-price");

    itemElement.style.backgroundImage = `url(${e.image})`;
    itemElement.style.backgroundSize = "100%";
    itemName.textContent = e.name;
    itemPrice.textContent = e.price;

    itemsContainer.appendChild(itemElement);
    itemElement.appendChild(itemElementHeader);
    itemElementHeader.appendChild(itemName);
    itemElementHeader.appendChild(itemHeaderWrapper);
    itemHeaderWrapper.appendChild(itemPrice);
    itemHeaderWrapper.appendChild(itemIcon);
  });
};

export const buildMenuContent = () => {
  const bodyContent = document.querySelector(".body-content");

  const menuContent = document.createElement("div");
  const itemsHeader = document.createElement("div");
  const itemsHeaderText = document.createElement("h1");
  const itemsContainerWrapper = document.createElement("div");
  const itemsContainer = document.createElement("div");

  menuContent.classList.add("menu-content");
  itemsHeader.classList.add("items-header");
  itemsHeaderText.classList.add("items-header-text");
  itemsContainerWrapper.classList.add("items-container-wrapper");
  itemsContainer.classList.add("items-container");

  itemsHeaderText.textContent = "MENU";

  bodyContent.appendChild(menuContent);
  menuContent.appendChild(itemsHeader);
  itemsHeader.appendChild(itemsHeaderText);
  menuContent.appendChild(itemsContainerWrapper);
  itemsContainerWrapper.appendChild(itemsContainer);

  createItemElements();
};

export const setMenuEventListeners = () => {};
