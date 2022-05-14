const refs = {
  decreaseButton: document.querySelector('[data-action="decrement"]'),
  increaseButton: document.querySelector('[data-action="increment"]'),
  counterValue: document.querySelector('#value'),
}

function onDecreaseButtonClick() {
  refs.counterValue.textContent -= 1;
}

function onIncreaseButtonClick() {
  refs.counterValue.textContent++;
}

refs.decreaseButton.addEventListener("click", onDecreaseButtonClick);
refs.increaseButton.addEventListener("click", onIncreaseButtonClick);