export const buildContactContent = () => {
  const bodyContent = document.querySelector(".body-content");

  const contactContent = document.createElement("div");
  const contactTitle = document.createElement("h2");
  const contactInfo = document.createElement("div");
  const mapEmbed = document.createElement("iframe");
  const phoneIcon = document.createElement("i");
  const locationIcon = document.createElement("i");
  const contactPhone = document.createElement("p");
  const contactLocation = document.createElement("p");
  const leftInfoDiv = document.createElement("div");
  const rightInfoDiv = document.createElement("div");

  contactContent.classList.add("contact-content");
  contactTitle.classList.add("contact-title");
  contactInfo.classList.add("contact-info");
  mapEmbed.classList.add("map-embed");
  phoneIcon.classList.add("fa-solid");
  phoneIcon.classList.add("fa-phone");
  locationIcon.classList.add("fa-solid");
  locationIcon.classList.add("fa-location-pin");
  contactPhone.classList.add("contact-phone");
  contactLocation.classList.add("contact-location");
  leftInfoDiv.classList.add("left-info-div");
  rightInfoDiv.classList.add("right-info-div");

  contactTitle.textContent = "Contact";
  mapEmbed.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5023.693737544078!2d-113.49523367910999!3d53.542275200537446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224580deff23%3A0x411fa00c4af6155d!2sEdmonton%2C%20AB!5e0!3m2!1sen!2sca!4v1673037140403!5m2!1sen!2sca";
  mapEmbed.width = "600";
  mapEmbed.height = "450";
  mapEmbed.style.border = "0";
  contactPhone.textContent = "012 345 6789";
  contactLocation.textContent = "10000 Jasper Ave\nEdmonton\nAB T5J 1R2";

  bodyContent.appendChild(contactContent);
  contactContent.appendChild(contactTitle);
  contactContent.appendChild(contactInfo);
  contactContent.appendChild(mapEmbed);
  contactInfo.appendChild(leftInfoDiv);
  contactInfo.appendChild(rightInfoDiv);
  leftInfoDiv.appendChild(phoneIcon);
  leftInfoDiv.appendChild(locationIcon);
  rightInfoDiv.appendChild(contactPhone);
  rightInfoDiv.appendChild(contactLocation);
};
