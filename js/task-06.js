const inputRef = document.querySelector('input');
const dataLength = inputRef.getAttribute('data-length');

function onInputBlur() {
  if (inputRef.value.length !== dataLength) {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
  if (inputRef.value.length == dataLength) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
}

inputRef.addEventListener("blur", onInputBlur);




// ---- не можу зрозуміти чому такий варіант коду нижче не працює? ------

// const refs = {
//   dataInput: document.querySelector('input'),
//   dataLength: dataInput.getAttribute('data-length'),
// }

// function validateInputHandler() {
//   if (refs.dataInput.value.length !== refs.dataLength) {
//     refs.dataInput.classList.remove('valid');
//     refs.dataInput.classList.add('invalid');
//   }
//   if (refs.dataInput.value.length == refs.dataLength) {
//     refs.dataInput.classList.remove('invalid');
//     refs.dataInput.classList.add('valid');
//   }
// }

// refs.dataInput.addEventListener("blur", validateInputHandler);

