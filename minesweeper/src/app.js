import './style.scss';

const body = document.body;
const field = document.createElement('div');
field.classList.add('field');
body.appendChild(field);
const result = document.createElement('div');
result.classList.add('result');
field.appendChild(result);
const resultText = document.createElement('div');
resultText.classList.add('result__text');
result.appendChild(resultText);

const mines = [];
while (mines.length < 10) {
  const mine = Math.floor(Math.random() * 100);
  if (!mines.includes(mine)) {
    mines.push(mine);
  }
}

const items = [];
for (let i = 0; i < 100; i += 1) {
  const item = document.createElement('div');
  item.classList.add('field__item');
  item.setAttribute('num', i);
  let value = '';
  if (mines.includes(i)) {
    value = 'mine';
  } else {
    value = getCount(i);
  }
  item.setAttribute('value', value);
  item.addEventListener('click', (e) => {
    if (item.classList.contains('field__item--flag')) {
      return;
    }
    item.classList.add('field__item--open');
    if (value === 'mine') {
      result.classList.add('result--open');
      resultText.innerHTML = 'Game over';
    } else if (value === 0) {
    } else {
      item.innerHTML = value;
    }
    if (checkWin()) {
      result.classList.add('result--open');
      resultText.innerHTML = 'You win!';
    }
  });
  item.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    item.classList.toggle('field__item--flag');
  });

  items.push(item);
}
field.append(...items);

const cells = items.filter((cell) => cell.getAttribute('value') !== 'mine');

function getCount(num) {
  let cells = [num + 10, num - 10];
  if (num % 10 === 0) {
    cells = [...cells, num + 1, num + 11, num - 9];
  } else if (num % 10 === 9) {
    cells = [...cells, num - 1, num + 9, num - 11];
  } else {
    cells = [...cells, num + 1, num - 1, num + 9, num + 11, num - 9, num - 11];
  }
  const count = cells.filter(
    (cell) => cell >= 0 && cell < 100 && mines.includes(cell)
  ).length;
  return count;
}

function checkWin() {
  let win = true;
  cells.forEach((cell) => {
    if (!cell.classList.contains('field__item--open')) {
      win = false;
    }
  });
  return win;
}
