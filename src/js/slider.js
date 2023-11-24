let offset = 0;
const sliderLine = document.querySelector(".slider-line");

document.getElementById("next-btn").addEventListener("click", () => {
  offset += 320;
  if (offset > 640) offset = 0;
  sliderLine.style.left = `-${offset}px`;
});
document.getElementById("prev-btn").addEventListener("click", () => {
  if (offset <= 0) offset = 960;
  offset -= 320;

  sliderLine.style.left = `-${offset}px`;
});
