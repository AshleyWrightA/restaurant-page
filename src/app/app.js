import { buildHomeContent } from "./homePage";
import { buildMenuContent } from "./menuPage";
import { buildAboutContent } from "./aboutPage";
import { buildContactContent } from "./contactPage";

function buildIntialDOM() {
  const initBody = document.body;

  const header = document.createElement("div");
  const buttonWrapper = document.createElement("div");
  const homeButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const aboutButton = document.createElement("button");
  const contactButton = document.createElement("button");
  const bodyContent = document.createElement("div");

  header.classList.add("header");
  bodyContent.classList.add("body-content");
  buttonWrapper.classList.add("button-wrapper");
  homeButton.classList.add("home-button");
  homeButton.classList.add("current");
  menuButton.classList.add("menu-button");
  aboutButton.classList.add("about-button");
  contactButton.classList.add("contact-button");

  header.style.backgroundColor = "var(--color-card-stock)";

  homeButton.textContent = "Home";
  menuButton.textContent = "Menu";
  aboutButton.textContent = "About";
  contactButton.textContent = "Contact";

  initBody.appendChild(header);
  initBody.appendChild(bodyContent);
  header.appendChild(buttonWrapper);
  buttonWrapper.appendChild(homeButton);
  buttonWrapper.appendChild(menuButton);
  buttonWrapper.appendChild(aboutButton);
  buttonWrapper.appendChild(contactButton);
}

function clearBodyContent() {
  const bodyContent = document.querySelector(".body-content");

  bodyContent.style.backgroundImage = "";
  bodyContent.style.filter = "";

  if (bodyContent.hasChildNodes() === true) {
    bodyContent.removeChild(bodyContent.lastChild);
  }
}

function setCurrentButton(e) {
  e.target.classList.add("current");
}

function clearCurrentButton(e) {
  const currentButton = document.querySelector(".current");
  if (currentButton !== e.target) {
    currentButton.classList.remove("current");
  }
}

function orderEvent() {
  const homeButton = document.querySelector(".home-button");
  const menuButton = document.querySelector(".menu-button");
  const orderButton = document.querySelector(".home-order-button");

  orderButton.addEventListener("click", () => {
    homeButton.classList.remove("current");
    menuButton.classList.add("current");
    clearBodyContent();
    buildMenuContent();
  });
}

function eventListeners() {
  const homeButton = document.querySelector(".home-button");
  const menuButton = document.querySelector(".menu-button");
  const aboutButton = document.querySelector(".about-button");
  const contactButton = document.querySelector(".contact-button");

  homeButton.addEventListener("click", (e) => {
    clearCurrentButton(e);
    setCurrentButton(e);
    clearBodyContent();
    buildHomeContent();
    orderEvent();
  });
  menuButton.addEventListener("click", (e) => {
    clearCurrentButton(e);
    setCurrentButton(e);
    clearBodyContent();
    buildMenuContent();
  });
  aboutButton.addEventListener("click", (e) => {
    clearCurrentButton(e);
    setCurrentButton(e);
    clearBodyContent();
    buildAboutContent();
  });
  contactButton.addEventListener("click", (e) => {
    clearCurrentButton(e);
    setCurrentButton(e);
    clearBodyContent();
    buildContactContent();
  });
}

export const initPage = () => {
  buildIntialDOM();
  buildHomeContent();
  eventListeners();
  orderEvent();
};

export default initPage;
