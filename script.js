
// Countdown Timer
const countdown = () => {
  const birthday = new Date("2026-04-23T00:00:00").getTime();
  const now = new Date().getTime();
  const gap = birthday - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  document.getElementById('days').innerText = Math.floor(gap / day);
  document.getElementById('hours').innerText = Math.floor((gap % day) / hour);
  document.getElementById('minutes').innerText = Math.floor((gap % hour) / minute);
  document.getElementById('seconds').innerText = Math.floor((gap % minute) / second);
};

setInterval(countdown, 1000);

// Memory Matching Game
const emojis = ["💖", "🎉", "😘", "🌈", "🎁", "🍰",];
let cards = [...emojis, ...emojis];
cards.sort(() => 0.5 - Math.random());

const grid = document.getElementById("card-grid");
let flippedCards = [];
let matchedCards = 0;

cards.forEach((emoji, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.emoji = emoji;
  card.dataset.index = index;
  card.innerText = "";
  card.addEventListener("click", () => flipCard(card));
  grid.appendChild(card);
});

function flipCard(card) {
  if (card.classList.contains("matched") || flippedCards.includes(card)) return;

  card.innerText = card.dataset.emoji;
  card.classList.add("flipped");
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 800);
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.emoji === card2.dataset.emoji) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchedCards += 2;
  } else {
    card1.innerText = "";
    card2.innerText = "";
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
  }

  flippedCards = [];

  if (matchedCards === cards.length) {
    setTimeout(() => alert("Yay! You matched all the cards and so you deserve 99999 kisses from Ish (Muah muah muah)!! 💞"), 300);
  }
}

// Click Me Button
function sayLove() {
  document.getElementById('love-message').innerText = "I Love You Soo Soo Sooooo Much My Pooku Baby! 💞 ";
}
