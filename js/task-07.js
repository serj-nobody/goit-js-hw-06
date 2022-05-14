const refs = {
  fontSizeControl: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
}

function onFontSizeControlInput() {
  refs.text.style.fontSize = `${refs.fontSizeControl.value}px`;
}

refs.fontSizeControl.addEventListener('input', onFontSizeControlInput);