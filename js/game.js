//CODIGO ANTIGO SEM O SISTEMA DE VIDA
// const grid = document.querySelector('.grid');
// const spanPlayer = document.querySelector('.player');
// const timer = document.querySelector('.timer');

// const characters = [
//   'beth',
//   'jerry',
//   'jessica',
//   'morty',
//   'pessoa-passaro',
//   'pickle-rick',
//   'rick',
//   'summer',
//   'meeseeks',
//   'scroopy',
// ];

// const createElement = (tag, className) => {
//   const element = document.createElement(tag);
//   element.className = className;
//   return element;
// };

// let firstCard = '';
// let secondCard = '';

// const checkEndGame = () => {
//   const disabledCards = document.querySelectorAll('.disabled-card');

//   if (disabledCards.length === 20) {
//     clearInterval(this.loop);
//     alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML} segundos`);
//     location.reload();
//   }
// };

// const checkCards = () => {
//   const firstCharacter = firstCard.getAttribute('data-character');
//   const secondCharacter = secondCard.getAttribute('data-character');

//   if (firstCharacter === secondCharacter) {
//     firstCard.firstChild.classList.add('disabled-card');
//     secondCard.firstChild.classList.add('disabled-card');

//     firstCard = '';
//     secondCard = '';

//     checkEndGame();
//   } else {
//     setTimeout(() => {
//       firstCard.classList.remove('reveal-card');
//       secondCard.classList.remove('reveal-card');

//       firstCard = '';
//       secondCard = '';
//     }, 500);
//   }
// };

// const revealCard = (event) => {
//   const target = event.target;
//   const parentNode = target.parentNode;

//   if (parentNode.classList.contains('reveal-card')) {
//     return;
//   }

//   if (firstCard === '') {
//     parentNode.classList.add('reveal-card');
//     firstCard = parentNode;
//   } else if (secondCard === '') {
//     parentNode.classList.add('reveal-card');
//     secondCard = parentNode;

//     checkCards();
//   }
// };

// const createCard = (character) => {
//   const card = createElement('div', 'card');
//   const front = createElement('div', 'face front');
//   const back = createElement('div', 'face back');

//   front.style.backgroundImage = `url('../images/${character}.png')`;

//   card.appendChild(front);
//   card.appendChild(back);

//   card.addEventListener('click', revealCard);
//   card.setAttribute('data-character', character);

//   return card;
// };

// const shuffleArray = (array) => {
//   const newArray = [...array];
//   for (let i = newArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
//   }
//   return newArray;
// };

// const loadGame = () => {
//   const duplicateCharacters = [...characters, ...characters];

//   const shuffledArray = shuffleArray(duplicateCharacters);

//   shuffledArray.forEach((character) => {
//     const card = createCard(character);
//     grid.appendChild(card);
//   });
// };

// const startTimer = () => {
//   this.loop = setInterval(() => {
//     timer.innerHTML = +timer.innerHTML + 1;
//   }, 1000);
// };

// window.onload = () => {
//   spanPlayer.innerHTML = localStorage.getItem('player');
//   startTimer();
//   loadGame();
// };

//  CODIGO NOVO COM O SISTEMA DE VIDA
const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');
const livesDisplay = document.querySelector('.lives');

const characters = [
  'beth',
  'jerry',
  'jessica',
  'morty',
  'pessoa-passaro',
  'pickle-rick',
  'rick',
  'summer',
  'meeseeks',
  'scroopy',
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let firstCard = '';
let secondCard = '';
let lives = 5;

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 20) {
    clearInterval(this.loop);
    alert(` Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML} segundos`);
    location.reload();
  }
};

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secondCharacter) {
    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();

    // Ganha uma vida
    lives++;
    updateLives();
  } else {
    setTimeout(() => {
      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

      // Subtrai uma vida
      lives--;
      updateLives();

      if (lives === 0) {
        clearInterval(this.loop);
        alert(`💔 Sinto muito, ${spanPlayer.innerHTML} Você perdeu todas as vidas! Tente novamente.`);
        location.reload();
      }
    }, 500);
  }
};

const revealCard = (event) => {
  const target = event.target;
  const parentNode = target.parentNode;

  if (parentNode.classList.contains('reveal-card')) {
    return;
  }

  if (firstCard === '') {
    parentNode.classList.add('reveal-card');
    firstCard = parentNode;
  } else if (secondCard === '') {
    parentNode.classList.add('reveal-card');
    secondCard = parentNode;

    checkCards();
  }
};

const createCard = (character) => {
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../images/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character);

  return card;
};

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];

  const shuffledArray = shuffleArray(duplicateCharacters);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
};

const startTimer = () => {
  this.loop = setInterval(() => {
    timer.innerHTML = +timer.innerHTML + 1;
  }, 1000);
};

const updateLives = () => {
  livesDisplay.textContent = lives;
};

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player');
  updateLives();
  startTimer();
  loadGame();
};
