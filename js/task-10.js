const refs = {
  numberInput: document.querySelector('input'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let boxWidth = 20;
  let boxHeight = 20;
  amount = refs.numberInput.value;

  if (refs.boxesContainer.hasChildNodes()) {
    const lastChildWidth = refs.boxesContainer.lastChild.style.width;
    const lastChildHeight = refs.boxesContainer.lastChild.style.height;
    boxWidth = Number.parseInt(lastChildWidth);
    boxHeight = Number.parseInt(lastChildHeight);
  } else {
    boxWidth = 20;
    boxHeight = 20;
  }

  for (let i = 1; i <= amount; i += 1) {
    boxWidth += 10;
    boxHeight += 10;
    const box = document.createElement('div');
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;
    box.style.backgroundColor = getRandomHexColor();
    refs.boxesContainer.append(box);
  }
}

function destroyBoxes(event) {
  refs.boxesContainer.innerHTML = '';
  refs.numberInput.value = '';
}

refs.createButton.addEventListener('click', createBoxes);
refs.destroyButton.addEventListener('click', destroyBoxes);
