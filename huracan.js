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