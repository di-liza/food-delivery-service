let offset = 0;
const sliderLine = document.querySelector(".slider-line");

let windowWidth = null;

document.getElementById("next-btn").addEventListener("click", () => {
  windowWidth = window.innerWidth;

  windowWidth >= 1280 ? (offset += 580) : (offset += 320);
  if (offset === 1740 || offset === 960) offset = 0;

  sliderLine.style.left = `-${offset}px`;
});

document.getElementById("prev-btn").addEventListener("click", () => {
  windowWidth = window.innerWidth;

  if (offset <= 0)
    offset = windowWidth >= 1280 ? (offset = 1740) : (offset += 960);

  windowWidth >= 1280 ? (offset -= 580) : (offset -= 320);
  sliderLine.style.left = `-${offset}px`;
});
