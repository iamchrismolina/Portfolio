const myProjects = [
  {
    title: "TaskGenius",
    imageUrl: "/public/images/tasksgenius/Todo List - Tasks.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorem ea, perspiciatis ullam omnis sit pariatur ratione ducimus? Quaerat ea consequuntur hic neque. Nemo ducimus obcaecati unde ratione atque! Ad?",
    liveDemoLink: "https://example.com/live-demo",
    sourceCodeLink: "https://example.com/source-code",
  },
  {
    title: "Calculator",
    imageUrl: "/public/images/tasksgenius/Todo List - Tasks.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorem ea, perspiciatis ullam omnis sit pariatur ratione ducimus? Quaerat ea consequuntur hic neque. Nemo ducimus obcaecati unde ratione atque! Ad?",
    liveDemoLink: "https://example.com/live-demo",
    sourceCodeLink: "https://example.com/source-code",
  },
  {
    title: "Etch-a-sketch",
    imageUrl: "/public/images/tasksgenius/Todo List - Tasks.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorem ea, perspiciatis ullam omnis sit pariatur ratione ducimus? Quaerat ea consequuntur hic neque. Nemo ducimus obcaecati unde ratione atque! Ad?",
    liveDemoLink: "https://example.com/live-demo",
    sourceCodeLink: "https://example.com/source-code",
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

  const liveDemoBtn = document.createElement("li");
  liveDemoBtn.classList.add("btn");
  liveDemoBtn.textContent = "Live Demo";
  liveDemoBtn.addEventListener("click", () => {
    window.location.href = project.liveDemoLink;
  });

  const sourceCodeBtn = document.createElement("li");
  sourceCodeBtn.classList.add("btn");
  sourceCodeBtn.textContent = "Source Code";
  sourceCodeBtn.addEventListener("click", () => {
    window.location.href = project.sourceCodeLink;
  });

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
