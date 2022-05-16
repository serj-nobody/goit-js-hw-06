const refs = {
  dataInput: document.querySelector('input'),
  dataLength: document.querySelector('input').getAttribute('data-length'),
}

function onInputBlur() {
  if (refs.dataInput.value.length !== refs.dataLength) {
    refs.dataInput.classList.remove('valid');
    refs.dataInput.classList.add('invalid');
  }
  if (refs.dataInput.value.length == refs.dataLength) {
    refs.dataInput.classList.remove('invalid');
    refs.dataInput.classList.add('valid');
  }
}

refs.dataInput.addEventListener("blur", onInputBlur);

