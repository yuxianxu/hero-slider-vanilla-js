const slides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('dot');

const arrowLeft = document.getElementsByClassName('arrow-left');
const arrowRight = document.getElementsByClassName('arrow-right');

//initialize state
let slideIndex = 0;

displaySlide(slideIndex);
displayDot(slideIndex);

//create display function
function displaySlide(n) {
  //corner cases
  if (n < 0) {
    slideIndex = slides.length - 1;
  } else if (n > slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex = n;
  }

  //initialize display to none
  for (const slide of slides) {
    slide.style.display = 'none';
  }

  //set target index element to display
  slides[slideIndex].style.display = 'block';
}

//set function for indicators events
function displayDot(n) {
  for (const dot of dots) {
    dot.classList.remove('active');
  }

  dots[n].classList.add('active');
}

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', () => {
    displaySlide(i);
    displayDot(i);
  });
}

//set function for arrow events
arrowRight[0].addEventListener('click', () => {
  slideIndex++;
  displaySlide(slideIndex);
  displayDot(slideIndex);
});

arrowLeft[0].addEventListener('click', () => {
  slideIndex--;
  displaySlide(slideIndex);
  displayDot(slideIndex);
});

setInterval(() => {
  slideIndex += 1;
  displaySlide(slideIndex);
  displayDot(slideIndex);
}, 5000);
