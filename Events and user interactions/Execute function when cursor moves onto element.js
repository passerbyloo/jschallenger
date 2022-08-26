const element = document.getElementById('element');

const changeText = () => {
  element.innerText = 'Thanks!';
};

// type in your code here
element.addEventListener('mouseover', changeText)

