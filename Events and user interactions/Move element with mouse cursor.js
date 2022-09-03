const element = document.querySelector('#element');
const wrapper = document.querySelector('#wrapper');

const moveRight = () => {
  const wrapperWidth = wrapper.getBoundingClientRect().width;
  const elementWidth = element.getBoundingClientRect().width;
  const currentPosition = parseInt(element.style.left || 0, 10);
  if (currentPosition <= wrapperWidth - elementWidth) {
    element.style.left = `${currentPosition + 1}px`;
  }
};

// type in your code here
element.addEventListener('mousemove', moveRight)
