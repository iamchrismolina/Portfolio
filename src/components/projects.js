import { currentSlide, openModal, renderProjects } from "../utils/lightbox"

const myProjects = [
  {
    title: "Lindol.Live",
    logoUrl: "./icons/lindol-live.svg",
    imageUrl: "./images/projects/lindol.live.png",
    slides: [
      {
        image: "./images/projects/lindol.live.png",
        caption: "Earthquake coordinates",
      },
    ],
    techStacks: [
      {
        icon: "./icons/tech-stacks/svelte.svg",
        name: "Svelte",
      },
      {
        icon: "./icons/tech-stacks/typescript.svg",
        name: "Typescript",
      },
      {
        icon: "./icons/tech-stacks/leaflet.svg",
        name: "Leaflet",
      },
      {
        icon: "./icons/tech-stacks/tailwind.svg",
        name: "TailwindCSS",
      },
    ],
    description:
      "Developed with Svelte, Typescript, Node.js, TailwindCSS, with real data from PHIVOLCS.",
    liveDemoLink: "https://lindol-live.vercel.app/",
    sourceCodeLink: null,
  },
  {
    title: "Earthquake Scraper API",
    logoUrl: "./icons/earthquake-scraper.svg",
    imageUrl: "./images/projects/earthquake-scraper-api.png",
    slides: [
      {
        image: "./images/projects/earthquake-scraper-api.png",
        caption: "Api endpoints",
      },
      {
        image: "./images/projects/earthquake-scraper-api2.png",
        caption: "Postman query result",
      },
    ],
    techStacks: [
      {
        icon: "./icons/tech-stacks/node-js.svg",
        name: "Node.js",
      },
      {
        icon: "./icons/tech-stacks/express.svg",
        name: "Express.js",
      },
      {
        icon: "./icons/tech-stacks/axios.svg",
        name: "Axios",
      },
      {
        icon: "./icons/tech-stacks/node-cron.png",
        name: "Node-Cron",
      },
    ],
    description:
      "Developed with Node.js, Express, Axios, and Node-cron data scraped from web page.",
    liveDemoLink: "https://lindol-scraper-api.onrender.com/",
    sourceCodeLink: null,
  },
  {
    title: "BayanihanPH",
    logoUrl: "./icons/bayanihanph.svg",
    imageUrl: "./images/projects/bayanihanph.png",
    slides: [
      {
        image: "./images/projects/bayanihanph.png",
        caption: "BayanihanPH homepage",
      },
    ],
    techStacks: [
      {
        icon: "./icons/tech-stacks/next-js.svg",
        name: "Next.js",
      },
      {
        icon: "./icons/tech-stacks/react.svg",
        name: "React.js",
      },
      {
        icon: "./icons/tech-stacks/shadcn-ui.svg",
        name: "ShadcnUI",
      },
      {
        icon: "./icons/tech-stacks/node-js.svg",
        name: "Node.js",
      },
      {
        icon: "./icons/tech-stacks/zod.svg",
        name: "Zod",
      },
      {
        icon: "./icons/tech-stacks/supabase.svg",
        name: "Supabase",
      },
      {
        icon: "./icons/tech-stacks/leaflet.svg",
        name: "Leaflet",
      },
      {
        icon: "./icons/tech-stacks/tailwind.svg",
        name: "TailwindCSS",
      },
    ],
    description:
      "Developed with Next.js, ShadcnUI, Node.js, Zod, and supabase using map from leaflet.",
    liveDemoLink: "https://bayanihanph.vercel.app/ceb-PH",
    sourceCodeLink: null,
  },
  {
    title: "HealthFlow",
    logoUrl: "./icons/health-flow.svg",
    imageUrl: "./images/projects/health-flow-2.png",
    slides: [
      {
        image: "./images/projects/health-flow-2.png",
        caption: "Landing page",
      },
      {
        image: "./images/projects/health-flow-login.png",
        caption: "Login page",
      },
      {
        image: "./images/projects/health-flow-register.png",
        caption: "Register page",
      },
      {
        image: "./images/projects/health-flow-admin.png",
        caption: "Admin dashboard",
      },
      {
        image: "./images/projects/health-flow-provider.png",
        caption: "Provider dashboard",
      },
      {
        image: "./images/projects/health-flow-account-settings.png",
        caption: "Account settings",
      },
    ],
    techStacks: [
      {
        icon: "./icons/tech-stacks/react.svg",
        name: "React",
      },
      {
        icon: "./icons/tech-stacks/react-router.svg",
        name: "React Router",
      },
      {
        icon: "./icons/tech-stacks/react-query.svg",
        name: "React-Query",
      },
      {
        icon: "./icons/tech-stacks/typescript.svg",
        name: "Typescript",
      },
      {
        icon: "./icons/tech-stacks/shadcn-ui.svg",
        name: "ShadcnUI",
      },
      {
        icon: "./icons/tech-stacks/zod.svg",
        name: "Zod",
      },
      {
        icon: "./icons/tech-stacks/tailwind.svg",
        name: "TailwindCSS",
      },
      {
        icon: "./icons/tech-stacks/php.svg",
        name: "Php",
      },
      {
        icon: "./icons/tech-stacks/laravel.svg",
        name: "Laravel",
      },
    ],
    description:
      "Developed with Next.js, ShadcnUI, Node.js, Zod, and supabase using map from leaflet.",
    liveDemoLink: null,
    sourceCodeLink: null,
  },
  {
    title: "Store (Ecommerce)",
    logoUrl: "./icons/ds.ico",
    imageUrl: "./images/projects/ecommerce.png",
    slides: [
      {
        image: "./images/projects/ecommerce.png",
        caption: "Ecommerce homepage",
      },
    ],
    techStacks: [
      {
        icon: "./icons/tech-stacks/typescript.svg",
        name: "Typescript",
      },
      {
        icon: "./icons/tech-stacks/react.svg",
        name: "React.js",
      },
      {
        icon: "./icons/tech-stacks/node-js.svg",
        name: "Node.js",
      },
      {
        icon: "./icons/tech-stacks/tailwind.svg",
        name: "TailwindCSS",
      },
      {
        icon: "./icons/tech-stacks/mongodb.svg",
        name: "MongoDB",
      },
    ],
    description:
      "Developed with TypeScript, React.js, Node.js, TailwindCSS, and MongoDB simulating full production E-commerce app.",
    liveDemoLink: "https://dksuperstore.vercel.app/",
    sourceCodeLink: "https://github.com/iamchrismolina/E-commerce",
  },
  {
    title: "TaskGenius",
    logoUrl: "./icons/taskgenius.ico",
    imageUrl: "./images/projects/todolist.png",
    slides: [
      {
        image: "./images/projects/todolist.png",
        caption: "Todolist app",
      },
    ],
    techStacks: [
      {
        icon: "./icons/tech-stacks/typescript.svg",
        name: "Typescript",
      },
      {
        icon: "./icons/tech-stacks/react.svg",
        name: "React.js",
      },
      {
        icon: "./icons/tech-stacks/sass.svg",
        name: "Sass/Scss",
      },
    ],
    description:
      "Developed with TypeScript, React.js, and Sass/Scss, that reflects a Todo-list app.",
    liveDemoLink: "https://iamchrismolina.github.io/Todo-List/",
    sourceCodeLink: "https://github.com/iamchrismolina/Todo-List",
  },
  {
    title: "Portfolio",
    logoUrl: "./icons/dk.ico",
    imageUrl: "./images/projects/portfolio.png",
    slides: [
      {
        image: "./images/projects/portfolio.png",
        caption: "Portfolio showcase",
      },
    ],
    techStacks: [
      {
        icon: "./icons/tech-stacks/javascript.svg",
        name: "Javascript",
      },
      {
        icon: "./icons/tech-stacks/css3.svg",
        name: "CSS3",
      },
      {
        icon: "./icons/tech-stacks/html5.svg",
        name: "HTML5",
      },
    ],
    description:
      "Developed with JavaScript, CSS, and HTML, which serves as my Portfolio Website ",
    liveDemoLink: "https://iamchrismolina.github.io/Portfolio/",
    sourceCodeLink: "https://github.com/iamchrismolina/Portfolio",
  },
  {
    title: "Etch-a-sketch",
    logoUrl: null,
    imageUrl: "./images/projects/etchasketch.png",
    slides: [
      {
        image: "./images/projects/etchasketch.png",
        caption: "Etch a sketch app",
      },
    ],
    techStacks: [
      {
        icon: "./icons/tech-stacks/javascript.svg",
        name: "Javascript",
      },
      {
        icon: "./icons/tech-stacks/css3.svg",
        name: "CSS3",
      },
      {
        icon: "./icons/tech-stacks/html5.svg",
        name: "HTML5",
      },
    ],
    description:
      "Developed with JavaScript, CSS, and HTML, which represents a Etch-a-sketch model app",
    liveDemoLink: "https://iamchrismolina.github.io/etch-a-sketch/",
    sourceCodeLink: "https://github.com/iamchrismolina/etch-a-sketch",
  },
  {
    title: "Math Wizard",
    logoUrl: null,
    imageUrl: "./images/projects/mathwizard.png",
    slides: [
      {
        image: "./images/projects/mathwizard.png",
        caption: "Math Wizard app",
      },
    ],
    techStacks: [
      {
        icon: "./icons/tech-stacks/javascript.svg",
        name: "Javascript",
      },
      {
        icon: "./icons/tech-stacks/css3.svg",
        name: "CSS3",
      },
      {
        icon: "./icons/tech-stacks/html5.svg",
        name: "HTML5",
      },
    ],
    description:
      "Developed with JavaScript, CSS, and HTML, that constitutes a Calculator app",
    liveDemoLink: "https://iamchrismolina.github.io/Calculator/",
    sourceCodeLink: "https://github.com/iamchrismolina/Calculator",
  },
]

const projectsContainer = document.getElementById("projectsContainer")

myProjects.forEach((project, idx) => {
  const projectDiv = document.createElement("div")
  projectDiv.classList.add("projects__project")

  // project__left-container
  const leftContainer = document.createElement("div")
  leftContainer.classList.add("projects__left-container")
  leftContainer.addEventListener("click", () =>
    renderProjects(project.slides, idx)
  )

  // projects__photo
  const photoDiv = document.createElement("div")
  photoDiv.classList.add("projects__photo")

  const image = document.createElement("img")
  image.classList.add("projects__img")
  image.addEventListener("click", () => {
    openModal()
    currentSlide(1)
  })
  image.width = 400
  image.height = 400
  image.src = project.imageUrl
  image.alt = project.name + " Project being showcased"

  photoDiv.appendChild(image)

  const techStacksDiv = document.createElement("div")
  techStacksDiv.classList.add("projects__tech-stacks")
  project.techStacks.forEach((techSvg) => {
    const techIconContainer = document.createElement("div")
    techIconContainer.classList.add("projects__tech-stacks__icon")
    const image = document.createElement("img")
    image.width = "24"
    image.height = "24"
    image.src = techSvg.icon
    image.alt = "Technology used"

    const name = document.createElement("span")
    name.classList.add("projects__tech-stacks__name")
    name.textContent = techSvg.name

    techIconContainer.appendChild(image)
    techIconContainer.appendChild(name)
    techStacksDiv.appendChild(techIconContainer)
  })

  if (idx >= 1) {
    const separator = document.createElement("hr")
    separator.classList.add("projects__separator")
    leftContainer.appendChild(separator)
  }

  leftContainer.appendChild(photoDiv)
  leftContainer.appendChild(techStacksDiv)

  // projects__info
  const infoDiv = document.createElement("div")
  infoDiv.classList.add("projects__info")

  const title = document.createElement("div")
  title.classList.add("projects__title")
  if (project.logoUrl !== "" && project.logoUrl !== null) {
    const logo = document.createElement("img")
    logo.classList.add("projects_logo")
    logo.width = "24px"
    logo.height = "24px"
    logo.src = project.logoUrl
    logo.alt = project.name + " Project logo"
    title.innerHTML = project.title
    title.appendChild(logo)
  } else {
    title.innerHTML = project.title
  }

  const descContainer = document.createElement("div")
  descContainer.classList.add("projects__desc-container")

  const desc = document.createElement("p")
  desc.classList.add("projects__desc")
  desc.textContent = project.description

  // projects__buttons
  const btnsContainer = document.createElement("div")
  btnsContainer.classList.add("projects__btns-container")

  const btnsList = document.createElement("ul")
  btnsList.classList.add("projects__btns")

  // Live Demo Button
  const liveDemoBtn = document.createElement("li")

  const liveDemoLink = document.createElement("a")
  if (project.liveDemoLink) {
    liveDemoLink.classList.add("projects__live-demo")
    liveDemoLink.classList.add("projects__live-demo-link")
    liveDemoLink.classList.add("btn")
    liveDemoLink.target = "_blank"
    liveDemoLink.href = project.liveDemoLink
    liveDemoLink.textContent = "Live Demo"
  } else {
    liveDemoLink.classList.add("projects__no-demo")
    liveDemoLink.classList.add("btn-disabled")
    liveDemoLink.target = "_blank"
    liveDemoLink.textContent = "Live Demo"
  }
  liveDemoBtn.appendChild(liveDemoLink)

  // Source Code Button
  const sourceCodeBtn = document.createElement("li")

  const sourceCodeLink = document.createElement("a")
  if (project.sourceCodeLink) {
    sourceCodeLink.classList.add("projects__source-code")
    sourceCodeLink.classList.add("projects__source-code-link")
    sourceCodeLink.classList.add("btn")
    sourceCodeLink.target = "_blank"
    sourceCodeLink.href = project.sourceCodeLink
    sourceCodeLink.textContent = "Source Code"
  } else {
    sourceCodeLink.classList.add("projects__no-source-code")
    sourceCodeLink.classList.add("btn-disabled")
    sourceCodeLink.target = "_blank"
    sourceCodeLink.textContent = "Source Code"
  }
  sourceCodeBtn.appendChild(sourceCodeLink)

  btnsList.appendChild(liveDemoBtn)
  btnsList.appendChild(sourceCodeBtn)
  btnsContainer.appendChild(btnsList)

  descContainer.appendChild(desc)
  infoDiv.appendChild(title)
  infoDiv.appendChild(descContainer)
  infoDiv.appendChild(btnsContainer)

  projectDiv.appendChild(leftContainer)
  projectDiv.appendChild(infoDiv)

  projectsContainer.appendChild(projectDiv)
})
