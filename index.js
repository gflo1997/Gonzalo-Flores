const scaleFactor = 1 / 20

function moveBackground (event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)` 
    }
}

let contrastToggle
function toggleContrast () {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classList += " dark-theme"
    } 
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
      .sendForm(
        "service_s19nd71",
        "template_0goieha",
        event.target,
        "zuWOLMQYKNr4AFj4-"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on gonzalo.fj@hotmail.com"
        );
      });
  }

  let isModalOpen = false;
  function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
  }

  // Show More Button

  const showMoreButton = document.getElementById("show-more-button");
  const projects = document.querySelectorAll(".project");
  
  showMoreButton.addEventListener("click", () => {
    projects.forEach((project) => {
      const show = project.getAttribute("data-show");
      if (show === "false") {
        project.setAttribute("data-show", "true");
        project.classList.remove("hide");
        project.classList.add("show");
      }
    });
    showMoreButton.parentNode.removeChild(showMoreButton);
  });