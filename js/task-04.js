const refs = {
  decreaseButton: document.querySelector('[data-action="decrement"]'),
  increaseButton: document.querySelector('[data-action="increment"]'),
  counterValue: document.querySelector('#value'),
}

let initialNumber = 0;

function onDecreaseButtonClick() {
  initialNumber -= 1;
  refs.counterValue.textContent = initialNumber;
  
}

function onIncreaseButtonClick() {
  initialNumber += 1;
  refs.counterValue.textContent = initialNumber;
}

refs.decreaseButton.addEventListener("click", onDecreaseButtonClick);
refs.increaseButton.addEventListener("click", onIncreaseButtonClick);