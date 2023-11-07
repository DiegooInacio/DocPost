let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 3500);

const controls = document.querySelectorAll(".control");
let currentCard = 0;
const cards = document.querySelectorAll(".card");
const maxCards = cards.length;

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("setaE");
    if (isLeft) {
      currentCard -= 1;
    } else {
      currentCard += 1;
    }

    if (currentCard >= maxCards) {
      currentCard = 0;
    }

    if (currentCard < 0) {
      currentCard = maxCards - 1;
    }

    cards.forEach((card) => card.classList.remove("current-card"));

    cards[currentCard].scrollIntoView({
      inline: "center",
      behavior: "smooth",
    });

    cards[currentCard].classList.add("current-card");
  });
});

// const elementosCard = document.querySelectorAll(".card");

// elementosCard.forEach(function (card) {
//   card.addEventListener("click", function () {
//     card.classList.add("ativo");
//   });
// });

// let slideIndex = 0;
// showSlides(slideIndex);

// function changeSlide(n) {
//   showSlides((slideIndex += n));
// }

// function showSlides(n) {
//   const slides = document.getElementsByClassName("slide");

//   if (n >= slides.length) {
//     slideIndex = 0;
//   } else if (n < 0) {
//     slideIndex = slides.length - 1;
//   }
// }

// const section = document.querySelectorAll(".navigation-auto");
// const buttons = document.querySelectorAll("input");
// if (section.length && buttons.length) {
//   section[0].classList.add("active");
//   buttons[0].classList.add("active");

//   function activeSection(index) {
//     section.forEach((div) => div.classList.remove("active"));
//     section[index].classList.add("active");

//     buttons.forEach((button) => button.classList.remove("active"));
//     buttons[index].classList.add("active");
//   }
//   buttons.forEach((button, index) => {
//     button.addEventListener("click", () => {
//       activeSection(index);
//     });
//   });
// }
