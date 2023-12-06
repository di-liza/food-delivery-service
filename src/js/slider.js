let offset = 0;
const sliderLine = document.querySelector(".slider-line");

let windowWidth = null;

const startInterval = () =>
  setInterval(() => {
    nextSlider();
  }, 3000);
let intervalId = startInterval();

const nextSlider = () => {
  clearInterval(intervalId);
  windowWidth = window.innerWidth;

  windowWidth >= 1280 ? (offset += 580) : (offset += 320);
  if (offset === 1740 || offset === 960) offset = 0;

  sliderLine.style.left = `-${offset}px`;
  intervalId = startInterval();
};

document.getElementById("next-btn").addEventListener("click", nextSlider);

document.getElementById("prev-btn").addEventListener("click", () => {
  clearInterval(intervalId);
  windowWidth = window.innerWidth;

  if (offset <= 0)
    offset = windowWidth >= 1280 ? (offset = 1740) : (offset += 960);

  windowWidth >= 1280 ? (offset -= 580) : (offset -= 320);
  sliderLine.style.left = `-${offset}px`;
  intervalId = startInterval();
});
