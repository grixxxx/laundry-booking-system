const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  currentScroll === 0
    ? body.classList.remove("scroll-down")
    : body.classList.add("scroll-down");
});

const contactButton = document
  .querySelector(".contact-button")
  .addEventListener("click", () => {
    const contactModal = document.querySelector(".contact-modal");

    contactModal.showModal();
  });

const loginButton = document
  .querySelector(".login-btn")
  .addEventListener("click", () => {
    const loginModal = document.querySelector(".login-modal");

    loginModal.showModal();
  });
