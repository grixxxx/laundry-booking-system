const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  currentScroll === 0
    ? body.classList.remove("scroll-down")
    : body.classList.add("scroll-down");
});
