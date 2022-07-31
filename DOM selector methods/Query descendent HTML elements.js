// assign the correct elements to the variables
  const buttonElem = document.querySelector("#wrapper button")
  const inputElem = document.querySelector("#wrapper input")

buttonElem.addEventListener('click', () => {
  const oldText = inputElem.value;
    return inputElem.value = oldText === "ON" ? "OFF" : "ON";
});
