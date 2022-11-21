const card = document.querySelector(".card");
const cardToggle = document.querySelector(".toggle");

cardToggle.addEventListener("click", (eo) => {
  card.classList.toggle("active");
});
