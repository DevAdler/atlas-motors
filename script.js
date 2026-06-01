const enterBtn = document.getElementById("enter-btn");

const intro = document.querySelector(".intro");

const mainSite = document.querySelector(".main-site");

const introVideo = document.querySelector(".intro-video");

const hamburgerBtn = document.querySelector(".hamburger-btn");

const closeMenu = document.querySelector(".close-menu");

const mobileMenu = document.querySelector(".mobile-menu");

const body = document.body;

// FUNCTION TO OPEN MOBILE MENU

function openMenu() {
  mobileMenu.classList.add("active");
  body.style.overflow = "hidden";
}

function closeMobileMenu() {
  mobileMenu.classList.remove("active");
  body.style.overflow = "auto";
}

// FUNCTION TO ENTER SITE

function enterSite() {
  intro.style.display = "none";

  mainSite.style.display = "block";

  // ALLOW DISPLAY TO APPLY

  setTimeout(() => {
    mainSite.style.opacity = "1";
  }, 50);

  setTimeout(() => {
    intro.style.display = "none";

    mainSite.style.display = "block";

    // HYPERCAR VIDEO HOVER EFFECTS

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
  }, 1500);
}

// BUTTON SKIP

enterBtn.addEventListener("click", enterSite);

// HAMBURGER MENU

hamburgerBtn.addEventListener("click", openMenu);

closeMenu.addEventListener("click", closeMobileMenu);

// AUTO ENTER WHEN VIDEO ENDS

introVideo.addEventListener("ended", enterSite);

// FEATURED INVENTORY DATA

/*const cars = [
 {
    brand: "Lamborghini Aventador",
    price: "$550,000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  },

  {
    brand: "Ferrari SF90",
    price: "$625,000",
    image: "https://images.unsplash.com/photo-1494905998402-395d579af36f",
  },

  {
    brand: "McLaren 720S",
    price: "$410,000",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
  },
];

// CREATE INVENTORY CARDS

const carContainer = document.querySelector(".car-container");

cars.forEach((car) => {
  const carCard = document.createElement("div");

  carCard.classList.add("car-card");

  carCard.innerHTML = `

    <img src="${car.image}" alt="${car.brand}">

    <div class="car-info">

      <h3>${car.brand}</h3>

      <p>${car.price}</p>

      <button>View Details</button>

    </div>

  `;

  carContainer.appendChild(carCard);
});*/
