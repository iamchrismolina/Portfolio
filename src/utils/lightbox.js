const myModalElem = document.getElementById("myModal")
const closeModalElem = document.getElementById("closeModal")
const body = document.querySelector("body")

closeModalElem.addEventListener("click", closeModal)

function openModal() {
  if (myModalElem) {
    myModalElem.style.display = "block"
    body.classList.add("modal-open", "viewport-lg")
  } else {
    console.log("Open Modal is not defined.")
  }
}

function closeModal() {
  if (myModalElem) {
    myModalElem.style.display = "none"
    body.classList.remove("modal-open", "viewport-lg")
  } else {
    console.error("Close Modal is not defined.")
  }
}

var slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  const slides = document.getElementsByClassName("mySlides")
  const dots = document.getElementsByClassName("demo")
  const captionText = document.getElementById("caption")

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  if (slides && dots && captionText) {
    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].className += " active"
    captionText.innerHTML = dots[slideIndex - 1].alt
  }
}

const modalContent = document.getElementById("modalContent")
function renderProjects(slides, idx) {
  modalContent.innerHTML = ""

  slides.forEach((slide, idx) => {
    // preview slides
    const slideDiv = document.createElement("div")
    slideDiv.classList.add("mySlides")

    if (slides.length > 1) {
      const slideCount = document.createElement("div")
      const slidesLength = slides.length
      slideCount.classList.add("numbertext")
      slideCount.textContent = `${idx + 1} / ${slidesLength}`
      slideDiv.appendChild(slideCount)
    }

    const slideImage = document.createElement("img")
    slideImage.src = slide.image
    slideImage.style.objectFit = "contain"
    slideImage.style.width = "100%"
    slideImage.style.height = "100%"

    slideDiv.appendChild(slideImage)

    modalContent.appendChild(slideDiv)
  })

  // Run only once
  // Prev / Next
  const prevSlide = document.createElement("a")
  prevSlide.classList.add("prev")
  prevSlide.addEventListener("click", () => plusSlides(-1))
  prevSlide.textContent = "<"
  const nextSlide = document.createElement("a")
  nextSlide.classList.add("next")
  nextSlide.addEventListener("click", () => plusSlides(1))
  nextSlide.textContent = ">"

  if (slides.length <= 1) {
    prevSlide.classList.add("hidden")
    nextSlide.classList.add("hidden")
  }

  // Caption
  const captionDiv = document.createElement("div")
  captionDiv.classList.add("caption-container")
  const captionContent = document.createElement("p")
  captionContent.setAttribute("id", "caption")

  captionDiv.appendChild(captionContent)
  modalContent.appendChild(prevSlide)
  modalContent.appendChild(nextSlide)
  modalContent.appendChild(captionDiv)

  const imagePreviewContainer = document.createElement("div")
  imagePreviewContainer.classList.add("image-preview")
  slides.forEach((slide, idx) => {
    const columnDiv = document.createElement("div")
    columnDiv.classList.add("column")
    const columnImage = document.createElement("img")
    columnImage.src = slide.image
    columnImage.classList.add("demo", "cursor")
    columnImage.style.width = "100%"
    columnImage.style.height = "10rem"
    columnImage.alt = slide.caption
    columnImage.addEventListener("click", () => currentSlide(idx + 1))

    columnDiv.appendChild(columnImage)

    imagePreviewContainer.appendChild(columnDiv)
    if (slides.length <= 1) {
      columnDiv.classList.add("hidden")
    }
  })
  modalContent.appendChild(imagePreviewContainer)

  myModalElem.appendChild(modalContent)
  currentSlide(1)
}

export {
  closeModal,
  currentSlide,
  openModal,
  plusSlides,
  renderProjects,
  showSlides,
}
