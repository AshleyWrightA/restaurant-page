import aboutImage1 from "../assets/images/aboutImage1.jpg";

export const aboutSuccess = () => console.log("Loaded About");

export const buildAboutContent = () => {
  const bodyContent = document.querySelector(".body-content");

  const aboutContent = document.createElement("div");
  const aboutImage = document.createElement("img");
  const aboutH1 = document.createElement("h1");
  const aboutTextDiv = document.createElement("div");
  const aboutTextH1 = document.createElement("h1");
  const aboutText = document.createElement("p");
  const aboutStoryDiv = document.createElement("div");
  const aboutStoryText = document.createElement("p");

  aboutContent.classList.add("about-content");
  aboutImage.classList.add("about-image");
  aboutH1.classList.add("about-h1");
  aboutTextDiv.classList.add("about-text-div");
  aboutTextH1.classList.add("about-text-h1");
  aboutText.classList.add("about-text");
  aboutStoryDiv.classList.add("about-story-div");
  aboutStoryText.classList.add("about-story-text");

  aboutImage.src = aboutImage1;
  aboutH1.textContent = "ABOUT US";
  aboutTextH1.textContent = "Tarot Café is Divine!";
  aboutText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a lacus ut nunc posuere pellentesque. Sed luctus mauris non purus pellentesque, id viverra est suscipit. Proin a porta neque. Fusce lobortis dignissim dui, id consectetur nibh pulvinar sit amet. Proin gravida ante tellus, vel pulvinar nunc dapibus quis. Suspendisse scelerisque felis urna, id mollis est aliquet eget. Aenean nulla arcu, pharetra ut euismod tempus, feugiat quis dolor. Vestibulum at consectetur diam, quis rhoncus nisi. Mauris eget bibendum augue, vitae tempor purus. Donec eu risus sit amet nisi dictum congue. Fusce tincidunt at mi ut suscipit. Phasellus a nibh augue. Quisque et rhoncus quam. Nunc eget justo urna. Morbi vitae tempus eros, ut ullamcorper dolor.";

  bodyContent.appendChild(aboutContent);
  aboutContent.appendChild(aboutH1);
  aboutContent.appendChild(aboutTextDiv);
  aboutTextDiv.appendChild(aboutTextH1);
  aboutTextDiv.appendChild(aboutText);
  aboutContent.appendChild(aboutImage);
  aboutContent.appendChild(aboutStoryDiv);
  aboutStoryDiv.appendChild(aboutStoryText);
};
