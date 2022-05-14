const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

function onNameInput(event) {
  if (refs.nameInput.value === '') {
    refs.nameOutput.textContent = "Anonymus"
  } else {
    refs.nameOutput.textContent = event.currentTarget.value;
  }
  
}

refs.nameInput.addEventListener("input", onNameInput);