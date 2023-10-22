const myProjects = [
  {
    title: "TaskGenius",
    imageUrl: "/images/projects/todo-list.png",
    description:
      "A web application that helps users stay organized by managing their tasks and to-do lists. It provides a user-friendly interface for adding, removing and tracking history through report logs which makes it easy to prioritize and complete daily and long-term goals.",
    liveDemoLink: "https://iamchrismolina.github.io/Todo-List/",
    sourceCodeLink: "https://github.com/iamchrismolina/Todo-List",
  },
  {
    title: "Math Wizard",
    imageUrl: "/Portfolio/public/images/projects/mathwizard.png",
    description:
      "A web application design to assist users with mathematical calculations. This user-friendly tool offers arithmetic operations, such as addition, subtraction, multiplication, division and as well as decimal calculations. Users can also easily input numbers and perform calculations, which makes it a handy tool for daily calculation/math tasks.",
    liveDemoLink: "https://iamchrismolina.github.io/Calculator/",
    sourceCodeLink: "https://github.com/iamchrismolina/Calculator",
  },
  {
    title: "Etch-a-sketch",
    imageUrl: "./public/images/projects/etch-a-sketch.png",
    description:
      "Inspired by the iconic Etch-a-Sketch item. This allows users to create and draw their own digital art by moving the cursor over the squares of the drawing area. This also provides a blank canvas where users can fill up with colors of the rainbow.",
    liveDemoLink: "https://iamchrismolina.github.io/etch-a-sketch/",
    sourceCodeLink: "https://github.com/iamchrismolina/etch-a-sketch",
  },
  {
    title: "Portfolio",
    imageUrl: "./images/projects/portfolio.png",
    description:
      "My Portfolio Website is a creatively crafted page to showcase my professional journey, skills, and achievements. It serves as a place for potential employers, clients, and collaborators to gain insights into my expertise and experience.",
    liveDemoLink: "https://iamchrismolina.github.io/Portfolio/",
    sourceCodeLink: "https://github.com/iamchrismolina/Portfolio",
  },
  {
    title: "Portfolio",
    imageUrl: "/public/images/projects/portfolio.png",
    description:
      "My Portfolio Website is a creatively crafted page to showcase my professional journey, skills, and achievements. It serves as a place for potential employers, clients, and collaborators to gain insights into my expertise and experience.",
    liveDemoLink: "https://iamchrismolina.github.io/Portfolio/",
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
