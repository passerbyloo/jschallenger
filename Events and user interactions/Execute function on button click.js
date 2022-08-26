const button = document.getElementById('button');
const input = document.getElementById('input');

const handleClick = () => {
  input.value = 'Hello World';
};

// type in your code here
button.addEventListener('click', handleClick)
