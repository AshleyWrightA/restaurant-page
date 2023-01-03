import ImageFour from "../assets/images/ImageFour.jpg";

export const buildHomeContent = () => {
  const bodyContent = document.querySelector(".body-content");

  const homeContent = document.createElement("div");
  const homeTitle = document.createElement("h1");
  const homeText = document.createElement("p");
  const homeOrderButton = document.createElement("button");
  const homeInfo = document.createElement("div");
  const infoLocation = document.createElement("div");
  const infoLocationTitle = document.createElement("h2");
  const infoLocationIcon = document.createElement("i");
  const infoLocationText = document.createElement("pre");
  const infoHours = document.createElement("div");
  const infoHoursTitle = document.createElement("h2");
  const infoHoursIcon = document.createElement("i");
  const infoHoursText = document.createElement("pre");

  homeContent.classList.add("home-content");
  homeTitle.classList.add("home-title");
  homeText.classList.add("home-text");
  homeInfo.classList.add("home-info");
  homeOrderButton.classList.add("home-order-button");
  infoLocation.classList.add("info-location");
  infoLocationTitle.classList.add("info-location-title");
  infoLocationIcon.classList.add("info-location-icon");
  infoLocationIcon.classList.add("fa-solid");
  infoLocationIcon.classList.add("fa-location-pin");
  infoLocationText.classList.add("info-location-text");
  infoHours.classList.add("info-hours");
  infoHoursTitle.classList.add("info-hours-title");
  infoHoursIcon.classList.add("info-hours-icon");
  infoHoursIcon.classList.add("fa-solid");
  infoHoursIcon.classList.add("fa-clock");
  infoHoursText.classList.add("info-hours-text");

  homeContent.style.backgroundImage = `url(${ImageFour})`;
  homeTitle.textContent = "Tarot Café";
  homeText.textContent = "Come join us and enjoy Hot & Cold drinks and tasty delights.";
  homeOrderButton.textContent = "Order Now!";
  infoLocationTitle.textContent = "Location";
  infoHoursTitle.textContent = "Hours";
  infoLocationText.textContent = "10000 Jasper Ave\nEdmonton\nAB T5J 1R2";
  infoHoursText.textContent = "Mon: Closed\nTue-Thur: 9AM-6PM\nFri-Sun: 9AM-9PM";

  bodyContent.appendChild(homeContent);
  homeContent.appendChild(homeTitle);
  homeContent.appendChild(homeText);
  homeContent.appendChild(homeOrderButton);
  homeContent.appendChild(homeInfo);
  homeInfo.appendChild(infoLocation);
  homeInfo.appendChild(infoHours);
  infoLocation.appendChild(infoLocationIcon);
  infoLocation.appendChild(infoLocationTitle);
  infoLocation.appendChild(infoLocationText);
  infoHours.appendChild(infoHoursIcon);
  infoHours.appendChild(infoHoursTitle);
  infoHours.appendChild(infoHoursText);
};
