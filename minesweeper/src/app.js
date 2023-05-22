import './style.scss';

const body = document.body;

const game = document.createElement('div');
game.classList.add('game-wrapper');
body.appendChild(game);

let fieldSize = 10;
const level = document.createElement('div');
level.classList.add('level');
const levels = [
  { name: 'easy', size: 10 },
  { name: 'medium', size: 15 },
  { name: 'hard', size: 25 },
];
const btns = levels.map((item) => {
  const { name, size } = item;
  const btn = document.createElement('button');
  btn.classList.add('level__btn');
  btn.innerText = `${name}: ${size}x${size}`;
  btn.addEventListener('click', () => {
    fieldSize = size;
    startNewGame();
    const btnSelect = document.querySelector('.level__btn--select');
    if (btnSelect) {
      btnSelect.classList.remove('level__btn--select');
    }
    btn.classList.add('level__btn--select');
    field.innerHTML = '';
    field.className = `field field--${size}`;
    items = [];
    setItems();
    field.append(...items, result);
  });
  return btn;
});
level.append(...btns);
game.appendChild(level);

const rangeWrapper = document.createElement('div');
rangeWrapper.classList.add('range-wrapper');
game.appendChild(rangeWrapper);
const range = document.createElement('input');
range.setAttribute('type', 'range');
range.setAttribute('min', '10');
range.setAttribute('max', '99');
range.setAttribute('value', '10');
range.classList.add('range');
const value = document.createElement('div');
value.innerText = `${range.value} mines`;
range.addEventListener('input', () => {
  value.innerText = `${range.value} mines`;
  mineCounterNum.innerText = range.value;
});
rangeWrapper.appendChild(range);
rangeWrapper.appendChild(value);

const counter = document.createElement('div');
counter.classList.add('counter');
game.appendChild(counter);
const mineCounter = document.createElement('div');
mineCounter.classList.add('counter__item');
const mineCounterText = document.createElement('div');
mineCounterText.classList.add('counter__text');
mineCounterText.innerText = 'Mines remaining:';
const mineCounterNum = document.createElement('div');
mineCounterNum.classList.add('counter__num');
mineCounterNum.innerText = range.value;
mineCounter.append(mineCounterText, mineCounterNum);
const flagCounter = document.createElement('div');
flagCounter.classList.add('counter__item');
const flagCounterText = document.createElement('div');
flagCounterText.classList.add('counter__text');
flagCounterText.innerText = 'Used flags:';
const flagCounterNum = document.createElement('div');
flagCounterNum.classList.add('counter__num');
flagCounterNum.innerText = 0;
flagCounter.append(flagCounterText, flagCounterNum);
counter.append(mineCounter, flagCounter);

const btnReload = document.createElement('button');
btnReload.classList.add('btn-reload');
btnReload.innerText = 'new game';
btnReload.addEventListener('click', startNewGame);
game.appendChild(btnReload);

const field = document.createElement('div');
field.className = 'field field--10';
game.appendChild(field);

const result = document.createElement('div');
result.classList.add('result');
field.appendChild(result);
const resultText = document.createElement('div');
resultText.classList.add('result__text');
result.appendChild(resultText);

let mines = [];

let items = [];

function setItems() {
  for (let i = 0; i < fieldSize ** 2; i += 1) {
    const item = document.createElement('div');
    item.classList.add('field__item', 'field-item');
    item.setAttribute('num', i);
    item.addEventListener('click', (e) => {
      const num = Number(item.getAttribute('num'));
      if (mines.length === 0) {
        setMines(num);
        setValue();
      }
      clickItem(item, num);
    });
    item.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      if (!item.classList.contains('field-item--open')) {
        const mineCount = Number(mineCounterNum.textContent);
        const flagCount = Number(flagCounterNum.textContent);
        if (item.classList.contains('field-item--flag')) {
          item.classList.remove('field-item--flag');
          mineCounterNum.innerText = mineCount + 1;
          flagCounterNum.innerText = flagCount - 1;
        } else {
          item.classList.add('field-item--flag');
          mineCounterNum.innerText = mineCount - 1;
          flagCounterNum.innerText = flagCount + 1;
        }
      }
    });
    items.push(item);
  }
}
setItems();
field.append(...items);

function setMines(num) {
  const count = Number(range.value);
  const size = fieldSize ** 2;
  while (mines.length < count) {
    const mine = Math.floor(Math.random() * size);
    if (mine !== num && !mines.includes(mine)) {
      mines.push(mine);
    }
  }
}

function setValue() {
  items.forEach((item, i) => {
    let value = '';
    if (mines.includes(i)) {
      value = 'mine';
    } else {
      value = getCount(i);
    }
    item.setAttribute('value', value);
    const itemNum = document.createElement('div');
    itemNum.classList.add('field-item__text');
    if (value !== 0 && value !== 'mine') {
      itemNum.innerHTML = value;
    }
    item.appendChild(itemNum);
  });
}

function clickItem(item, i) {
  if (item.classList.contains('field-item--flag')) {
    return;
  }
  item.classList.add('field-item--open');
  const value = item.getAttribute('value');
  if (value === 'mine') {
    result.classList.add('result--open');
    resultText.innerHTML = 'Game over. Try again';
    const mines = document.querySelectorAll('.field-item[value="mine"]');
    mines.forEach((mine) => mine.classList.add('field-item--open'));
  } else if (checkWin()) {
    result.classList.add('result--open');
    resultText.innerHTML = 'Hooray! You win! You found all mines';
  }
  if (Number(value) === 0) {
    openCell(i);
  }
}

function getCount(num) {
  let cells = getAdjacentCell(num);
  const count = cells.filter((cell) => mines.includes(cell)).length;
  return count;
}

function openCell(num) {
  let cells = getAdjacentCell(num);
  cells.forEach((cell) => {
    const el = items[cell];
    if (el.classList.contains('field-item--open')) {
      return;
    }
    el.classList.add('field-item--open');
    const value = Number(el.getAttribute('value'));
    if (value === 0) {
      openCell(cell);
    }
  });
}

function getAdjacentCell(num) {
  if (fieldSize === 10) {
    let cells = [num + 10, num - 10];
    if (num % 10 === 0) {
      cells = [...cells, num + 1, num + 11, num - 9];
    } else if (num % 10 === 9) {
      cells = [...cells, num - 1, num + 9, num - 11];
    } else {
      cells = [
        ...cells,
        num + 1,
        num - 1,
        num + 9,
        num + 11,
        num - 9,
        num - 11,
      ];
    }
    return cells.filter((cell) => cell >= 0 && cell < 100);
  } else if (fieldSize === 15) {
    let cells = [num + 15, num - 15];
    if (num % 15 === 0) {
      cells = [...cells, num + 1, num + 16, num - 14];
    } else if (num % 15 === 14) {
      cells = [...cells, num - 1, num + 14, num - 16];
    } else {
      cells = [
        ...cells,
        num + 1,
        num - 1,
        num + 14,
        num + 16,
        num - 14,
        num - 16,
      ];
    }
    return cells.filter((cell) => cell >= 0 && cell < 225);
  } else if (fieldSize === 25) {
    let cells = [num + 25, num - 25];
    if (num % 25 === 0) {
      cells = [...cells, num + 1, num + 26, num - 24];
    } else if (num % 25 === 24) {
      cells = [...cells, num - 1, num + 24, num - 26];
    } else {
      cells = [
        ...cells,
        num + 1,
        num - 1,
        num + 24,
        num + 26,
        num - 24,
        num - 26,
      ];
    }
    return cells.filter((cell) => cell >= 0 && cell < 625);
  }
}

function checkWin() {
  let win = true;
  const cells = items.filter((cell) => cell.getAttribute('value') !== 'mine');
  cells.forEach((cell) => {
    if (!cell.classList.contains('field-item--open')) {
      win = false;
    }
  });
  return win;
}

function startNewGame() {
  const openItems = document.querySelectorAll('.field-item--open');
  openItems.forEach((item) => {
    item.classList.remove('field-item--open');
  });
  const flagItems = document.querySelectorAll('.field-item--flag');
  flagItems.forEach((item) => {
    item.classList.remove('field-item--flag');
  });
  result.classList.remove('result--open');
  mineCounterNum.innerText = range.value;
  flagCounterNum.innerText = 0;
  mines = [];
  items.forEach((item) => {
    item.removeAttribute('value');
    item.innerHTML = '';
  });
}
