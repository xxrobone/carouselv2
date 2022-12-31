const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');
const slideContainer = document.querySelector('.slide_container');
const slide = document.querySelector('.slide');

function nextItem() {
  const slideWidth = slide.clientWidth;
  slideContainer.scrollLeft += slideWidth;
}

console.log(slide.clientWidth)

function prevItem() {
  const slideWidth = slide.clientWidth;
  slideContainer.scrollLeft -= slideWidth;
}

prevBtn.addEventListener('click', prevItem);
nextBtn.addEventListener('click', nextItem);
