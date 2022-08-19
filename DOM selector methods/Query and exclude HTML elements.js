// assign the correct elements to the variable
const listItems = document.querySelectorAll('#list li:not(#disabled)')

const button = document.getElementById('button');

const handleClick = () => {
  listItems.forEach(item => {
  const oldText = item.innerText;
    return item.innerText = oldText === 'ON' ? 'OFF' : 'ON';
  })
};
if(listItems.length > 1) {
  button.addEventListener('click', handleClick);
}