const refs = {
  body: document.querySelector('body'),
  backgroundColorCode: document.querySelector('.color'),
  changeColorButton: document.querySelector('.change-color'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColorButtonClick() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.backgroundColorCode.textContent = getRandomHexColor();
}

refs.changeColorButton.addEventListener('click', onChangeColorButtonClick);