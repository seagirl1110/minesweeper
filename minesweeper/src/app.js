import './style.scss';

const body = document.body;
const field = document.createElement('div');
field.classList.add('field');
body.appendChild(field);

const items = [];
for (let i = 0; i < 100; i += 1) {
  const item = document.createElement('div');
  item.classList.add('field__item');
  item.setAttribute('num', i);
  item.addEventListener('click', (e) => {
    item.classList.add('field__item--open');
    item.innerText = i;
    console.log(e.target.getAttribute('num'));
  })
  items.push(item);
}
field.append(...items);
