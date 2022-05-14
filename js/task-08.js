const refs = {
  form: document.querySelector('.login-form'),
}

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields');
  } else {
    console.log({ email: email.value, password: password.value });
    event.currentTarget.reset();
  }

  
}

refs.form.addEventListener('submit', onFormSubmit);
