function content() {
  const content_menu = document.getElementsByClassName("content-menu");
  const content = document.querySelectorAll(".content-menu div");
  const content_icon = document.getElementById("content-icon");

  if (content_menu[0].classList[1] === "expanded") {
    content_menu[0].classList.add("collapsed");
    content_menu[0].classList.remove("expanded");
    content_menu[0].style.overflow = "hidden";
    content_icon.innerHTML = "&equiv;";
  } else {
    content_menu[0].classList.remove("collapsed");
    content_menu[0].classList.add("expanded");
    content_menu[0].style.overflow = "visible";
    content_icon.innerHTML = "&times;";
  }
}

let c = 0;
const cont = document.getElementsByClassName("projects-container");
const bull = document.getElementsByClassName("bull");
bull[0].style.color = "#0a0285";
bull[0].style.scale = 1.5;
const n = cont.length;
function bullClick(id) {
  currentSlide(id);
}
function currentSlide(C) {
  for (let i = 0; i < n; i++) {
    if (i === C) {
      cont[i].style.display = "grid";
      bull[i].style.color = "#0a0285";
      bull[i].style.scale = 1.5;
    } else {
      cont[i].style.display = "none";
      bull[i].style.color = "black";
      bull[i].style.scale = 1;
    }
  }
}
function next() {
  c++;
  c = c % n;
  currentSlide(c);
}
function prev() {
  c--;
  if (c === -1) {
    c = n - 1;
  }
  c = c % n;
  currentSlide(c);
}

const progressBar = document.getElementsByClassName("bar");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      Add();
    } else {
      Remove();
    }
  });
});
observer.observe(document.querySelector(".bar"));
function Add() {
  for (let i = 0; i < progressBar.length; i++) {
    progressBar[i].classList.add("Animation");
  }
}
function Remove() {
  for (let i = 0; i < progressBar.length; i++) {
    progressBar[i].classList.remove("Animation");
  }
}

const x = window.matchMedia("(min-width: 768px)");

function hover(id) {
  const logo = id.previousElementSibling;
  if (x.matches) {
    logo.style.color = "#c0c0c0";
  }
}
function notHover(id) {
  const logo = id.previousElementSibling;
  if (x.matches) {
    logo.style.color = "var(--contact-color)";
  }
}
