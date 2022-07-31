// assign the correct element to the variable
const buttonElem = document.getElementById('button')

buttonElem.addEventListener('click', () => {
  const oldText = buttonElem.innerText;
  return button.innerText = oldText === "ON" ? "OFF" : "ON";
});
