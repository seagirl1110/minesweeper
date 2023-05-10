import './style.scss';

const body = document.body;
const field = document.createElement('div');
field.classList.add('field');
body.appendChild(field);

const mines = [];
while (mines.length < 10) {
  const mine = Math.floor(Math.random() * 100);
  if (!mines.includes(mine)) {
    mines.push(mine);
  }
}

console.log(mines);

const items = [];
for (let i = 0; i < 100; i += 1) {
  const item = document.createElement('div');
  item.classList.add('field__item');
  item.setAttribute('num', i);
  let value = '';
  if (mines.includes(i)) {
    value = 'mine';
  } else {
    value = i;
  }
  item.setAttribute('value', value);
  item.addEventListener('click', (e) => {
    item.classList.add('field__item--open');
  });
  item.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    item.classList.toggle('field__item--flag');
  });

  items.push(item);
}
field.append(...items);
