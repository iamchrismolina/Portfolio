import svgIcons from "./svgIcons";

const skillsContainer = document.getElementById("skillsContainer");

svgIcons.forEach((svgIcon) => {
  const skillCard = document.createElement("div");
  skillCard.classList.add("skills__item");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("skills__img-container");

  imgContainer.innerHTML = svgIcon.svg;

  const technologyContainer = document.createElement("span");
  technologyContainer.textContent = svgIcon.technology;
  technologyContainer.classList.add("skills__text-container");

  skillCard.appendChild(imgContainer);
  skillCard.appendChild(technologyContainer);

  skillsContainer.appendChild(skillCard);
});
