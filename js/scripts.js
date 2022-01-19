const error2 = document.getElementById('alert2');
const red = document.getElementById('email');

const validateEmail = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(email)) {
    error2.classList.add('alert');
    red.classList.remove('alert2');
    red.value = '';
  } else {
    error2.classList.remove('alert');
    red.classList.add('alert2');
  }
};

const getValueInput = () => {
  let inputValue = document.getElementById('email').value;
  validateEmail(inputValue);
};

