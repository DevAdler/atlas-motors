const vehicles = [
  {
    name: "Lamborghini Gallardo",
    year: 2004,
    price: 89995,
    image: "assets/used-lambo-04.jpg",
  },

  {
    name: "Porsche 911 Carrera",
    year: 2016,
    price: 84995,
    image: "assets/used-porsche-16.jpg",
  },

  {
    name: "Nissan GT-R",
    year: 2015,
    price: 79995,
    image: "assets/used-gtr-15.jpg",
  },

  {
    name: "Audi RS7",
    year: 2017,
    price: 64995,
    image: "assets/used-audi-rs7-17.jpg",
  },

  {
    name: "Audi RS7",
    year: 2018,
    price: 69995,
    image: "assets/used-audi-rs7-17.jpg",
  },

  {
    name: "Mercedes-Benz AMG",
    year: 2019,
    price: 72995,
    image: "assets/used-benz-19.jpg",
  },

  {
    name: "Chevrolet Corvette",
    year: 2019,
    price: 68995,
    image: "assets/used-vette-19.jpg",
  },

  {
    name: "McLaren 720S",
    year: 2020,
    price: 229995,
    image: "assets/used-mclaren-20.jpg",
  },

  {
    name: "Ford Mustang GT500",
    year: 2020,
    price: 74995,
    image: "assets/used-mustang-20.jpg",
  },

  {
    name: "BMW M8 Competition",
    year: 2023,
    price: 94995,
    image: "assets/used-bmw-23.jpg",
  },

  {
    name: "Porsche Panamera",
    year: 2011,
    price: 39995,
    image: "assets/used-panamera-11.jpg",
  },

  {
    name: "Dodge Challenger Hellcat",
    year: 2016,
    price: 59995,
    image: "assets/used-hellcat-16.jpg",
  },
];

const inventoryGrid = document.getElementById("inventory-grid");
const sortCars = document.getElementById("sort-cars");

function renderVehicles(vehicleList) {
  inventoryGrid.innerHTML = "";

  vehicleList.forEach((vehicle) => {
    const vehicleCard = document.createElement("article");

    vehicleCard.classList.add("vehicle-card");

    vehicleCard.innerHTML = `
      <img src="${vehicle.image}" alt="${vehicle.name}" />

      <div class="vehicle-info">
        <p class="vehicle-year">${vehicle.year}</p>

        <h3>${vehicle.name}</h3>

        <p class="vehicle-price">$${vehicle.price.toLocaleString()}</p>
      </div>
    `;

    inventoryGrid.appendChild(vehicleCard);
  });
}

sortCars.addEventListener("change", () => {
  const selectedSort = sortCars.value;

  const sortedVehicles = [...vehicles];

  if (selectedSort === "az") {
    sortedVehicles.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (selectedSort === "za") {
    sortedVehicles.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (selectedSort === "low-high") {
    sortedVehicles.sort((a, b) => a.price - b.price);
  }

  if (selectedSort === "high-low") {
    sortedVehicles.sort((a, b) => b.price - a.price);
  }

  renderVehicles(sortedVehicles);
});

renderVehicles(vehicles);


const lookupForm = document.getElementById("lookup-form");
const makeInput = document.getElementById("make-input");
const lookupResults = document.getElementById("lookup-results");

lookupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const make = makeInput.value.trim();

  lookupResults.innerHTML = "<p>Loading vehicle data...</p>";

  try {
    const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`
    );

    const data = await response.json();

    if (data.Results.length === 0) {
      lookupResults.innerHTML =
        "<p>No vehicle models found for that manufacturer.</p>";
      return;
    }

    const models = data.Results.slice(0, 10);

    lookupResults.innerHTML = `
      <h3>Available Models</h3>
      <ul>
        ${models
          .map((model) => `<li>${model.Model_Name}</li>`)
          .join("")}
      </ul>
    `;
  } catch (error) {
    lookupResults.innerHTML =
      "<p>Unable to retrieve vehicle data at this time.</p>";

    console.error(error);
  }
});