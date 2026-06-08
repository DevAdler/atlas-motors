// ELEMENT REFERENCES

const enterBtn = document.getElementById("enter-btn");
const intro = document.querySelector(".intro");
const mainSite = document.querySelector(".main-site");
const introVideo = document.querySelector(".intro-video");

const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeMenuBtn = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuLinks = document.querySelectorAll(".menu-card");

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

// TRANSITION FROM INTRO SCREEN TO MAIN SITE

function enterSite() {
  if (siteEntered) return;

  siteEntered = true;

  intro.style.display = "none";

  mainSite.hidden = false;
  mainSite.style.display = "block";

  requestAnimationFrame(() => {
    mainSite.style.opacity = "1";
  });
}

// INITIALIZE SITE INTERACTIONS

enterBtn.addEventListener("click", enterSite);

introVideo.addEventListener("ended", enterSite);

hamburgerBtn.addEventListener("click", openMenu);

closeMenuBtn.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// INITIALIZE HYPERCAR CARD PREVIEW VIDEOS

initializeHypercarVideos();





// MODAL FUNCTIONALITY (SHARED BETWEEN HURACAN AND OTHER SUPERCAR PAGES)

const modal = document.getElementById("contact-modal");

const modalBtns = document.querySelectorAll(
  ".cta-section button"
);

const closeModal = document.querySelector(".close-modal");

const form = document.querySelector(".modal-content form");

const statusContainer =
  document.getElementById("submission-status");

const spinner =
  document.querySelector(".spinner");

const successMessage =
  document.querySelector(".success-message");

// OPEN MODAL

modalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("active");

  });
});

// CLOSE MODAL

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");

  form.reset();

  form.style.display = "flex";

  statusContainer.style.display = "none";

  spinner.style.display = "block";

  successMessage.style.display = "none";
});

// FORM SUBMISSION

form.addEventListener("submit", (e) => {
  e.preventDefault();

  form.style.display = "none";

  statusContainer.style.display = "flex";

  spinner.style.display = "block";

  successMessage.style.display = "none";

  setTimeout(() => {
    spinner.style.display = "none";

    successMessage.style.display = "block";
  }, 1500);

});

// THIS IS SO THAT THE NAV BAR ALSO OPENS THE MODAL.

const navbarModalBtn = document.querySelector('.modal-btn');
if (navbarModalBtn) {
  navbarModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
  });
}

// THIS IS SO THE HAMBURGER MENU LINK ALSO OPENS THE MODAL.
const mobileModalBtn = document.querySelector('.menu-card.modal-btn');
if (mobileModalBtn) {
  mobileModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
  });
}