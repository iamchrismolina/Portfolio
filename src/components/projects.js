const myProjects = [
  {
    title: "TaskGenius",
    imageUrl: "/images/projects/todo-list.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorem ea, perspiciatis ullam omnis sit pariatur ratione ducimus? Quaerat ea consequuntur hic neque. Nemo ducimus obcaecati unde ratione atque! Ad?",
    liveDemoLink: "https://iamchrismolina.github.io/Todo-List/",
    sourceCodeLink: "https://github.com/iamchrismolina/Todo-List",
  },
  {
    title: "Math Wizard",
    imageUrl: "/images/projects/mathwizard.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorem ea, perspiciatis ullam omnis sit pariatur ratione ducimus? Quaerat ea consequuntur hic neque. Nemo ducimus obcaecati unde ratione atque! Ad?",
    liveDemoLink: "https://iamchrismolina.github.io/Calculator/",
    sourceCodeLink: "https://github.com/iamchrismolina/Calculator",
  },
  {
    title: "Etch-a-sketch",
    imageUrl: "/images/projects/etch-a-sketch.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorem ea, perspiciatis ullam omnis sit pariatur ratione ducimus? Quaerat ea consequuntur hic neque. Nemo ducimus obcaecati unde ratione atque! Ad?",
    liveDemoLink: "https://iamchrismolina.github.io/etch-a-sketch/",
    sourceCodeLink: "https://github.com/iamchrismolina/etch-a-sketch",
  },
  {
    title: "Portfolio",
    imageUrl: "/images/projects/portfolio.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorem ea, perspiciatis ullam omnis sit pariatur ratione ducimus? Quaerat ea consequuntur hic neque. Nemo ducimus obcaecati unde ratione atque! Ad?",
    liveDemoLink: "https://example.com/live-demo",
    sourceCodeLink: "https://github.com/iamchrismolina/Portfolio",
  },
];

const projectsContainer = document.getElementById("projectsContainer");

myProjects.forEach((project, id) => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("projects__project");

  // projects__photo
  const photoDiv = document.createElement("div");
  photoDiv.classList.add("projects__photo");

  const image = document.createElement("img");
  image.classList.add("projects__img");
  image.width = 400;
  image.height = 400;
  image.src = project.imageUrl;
  image.alt = project.name + " Project being showcased";

  photoDiv.appendChild(image);

  // projects__info
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("projects__info");

  const title = document.createElement("h3");
  title.classList.add("projects__title");
  title.textContent = project.title;

  const descContainer = document.createElement("div");
  descContainer.classList.add("projects__desc-container");

  const desc = document.createElement("p");
  desc.classList.add("projects__desc");
  desc.textContent = project.description;

  // projects__buttons
  const btnsContainer = document.createElement("div");
  btnsContainer.classList.add("projects__btns-container");

  const btnsList = document.createElement("ul");
  btnsList.classList.add("projects__btns");

  // Live Demo Button
  const liveDemoBtn = document.createElement("li");

  const liveDemoLink = document.createElement("a");
  liveDemoLink.classList.add("projects__live-demo");
  liveDemoLink.classList.add("projects__live-demo-link");
  liveDemoLink.classList.add("btn");
  liveDemoLink.target = "_blank";
  liveDemoLink.href = project.liveDemoLink;
  liveDemoLink.textContent = "Live Demo";
  liveDemoBtn.appendChild(liveDemoLink);

  // Source Code Button
  const sourceCodeBtn = document.createElement("li");

  const sourceCodeLink = document.createElement("a");
  sourceCodeLink.classList.add("projects__source-code");
  sourceCodeLink.classList.add("projects__source-code-link");
  sourceCodeLink.classList.add("btn");
  sourceCodeLink.target = "_blank";
  sourceCodeLink.href = project.sourceCodeLink;
  sourceCodeLink.textContent = "Source Code";
  sourceCodeBtn.appendChild(sourceCodeLink);

  btnsList.appendChild(liveDemoBtn);
  btnsList.appendChild(sourceCodeBtn);
  btnsContainer.appendChild(btnsList);

  descContainer.appendChild(desc);
  infoDiv.appendChild(title);
  infoDiv.appendChild(descContainer);
  infoDiv.appendChild(btnsContainer);

  projectDiv.appendChild(photoDiv);
  projectDiv.appendChild(infoDiv);

  projectsContainer.appendChild(projectDiv);
});
