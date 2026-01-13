const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".modal-close");

// Для обычных карточек
document.querySelectorAll(".gallery-card").forEach((card) => {
  // Игнорируем portfolio-card
  if (card.classList.contains("portfolio-card")) return;

  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    modal.style.display = "flex";
    modalImg.src = img.src;

    // Блокируем скролл
    document.body.classList.add("no-scroll");
  });
});

// Закрытие модалки
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.classList.remove("no-scroll");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
});

const modalText = document.getElementById("modal-text");
const modalFullText = document.getElementById("modal-full-text");
const closeTextModal = document.querySelector(".close-text-modal");

document.querySelectorAll(".show-more-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const productText = btn.closest(".product-info").querySelector(".product-info__text");
    if (!productText) return;

    modalText.style.display = "flex";
    modalFullText.innerHTML = productText.innerHTML;
    document.body.classList.add("no-scroll");
  });
});

closeTextModal.addEventListener("click", () => {
  modalText.style.display = "none";
  document.body.classList.remove("no-scroll");
});

modalText.addEventListener("click", (e) => {
  if (e.target === modalText) {
    modalText.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
});