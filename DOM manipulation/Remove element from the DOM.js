const button = document.querySelector('#button');

const removeRedCircle = () => {
  document.querySelector('#red').remove()
};

button.addEventListener('click', removeRedCircle);
