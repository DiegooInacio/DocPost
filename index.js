let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 3500);

const controls = document.querySelectorAll(".control");
let currentCard = 1;
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
      block: "nearest",
    });

    cards[currentCard].classList.add("current-card");
  });
});

const elementosDuvida = document.querySelectorAll(".faq");

elementosDuvida.forEach(function (faq) {
  faq.addEventListener("click", function () {
    faq.classList.toggle("ativo");
  });
});
