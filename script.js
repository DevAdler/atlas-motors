// ELEMENT REFERENCES

const enterBtn = document.getElementById("enter-btn");
const intro = document.querySelector(".intro");
const mainSite = document.querySelector(".main-site");
const introVideo = document.querySelector(".intro-video");

const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeMenuBtn = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");

const body = document.body;

// PREVENTS enterSite() FROM RUNNING MULTIPLE TIMES

let siteEntered = false;

// MOBILE MENU

function openMenu() {
  mobileMenu.classList.add("active");
  body.style.overflow = "hidden";
}

function closeMenu() {
  mobileMenu.classList.remove("active");
  body.style.overflow = "auto";
}

// HYPERCAR VIDEO HOVER EFFECTS

function initializeHypercarVideos() {
  const cards = document.querySelectorAll(".hyper-card");

  cards.forEach((card) => {
    const video = card.querySelector(".card-video");

    card.addEventListener("mouseenter", () => {
      video.play();
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });
}

// ENTER SITE

function enterSite() {
  if (siteEntered) return;

  siteEntered = true;

  intro.style.display = "none";
  mainSite.style.display = "block";

  requestAnimationFrame(() => {
    mainSite.style.opacity = "1";
  });
}

// EVENT LISTENERS

enterBtn.addEventListener("click", enterSite);

introVideo.addEventListener("ended", enterSite);

hamburgerBtn.addEventListener("click", openMenu);

closeMenuBtn.addEventListener("click", closeMenu);

// INITIALIZE HYPERCAR VIDEOS

initializeHypercarVideos();