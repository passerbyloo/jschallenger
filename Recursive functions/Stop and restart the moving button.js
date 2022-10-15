const button = document.getElementById('button');
let stopped = false;
 
function move(isReturning) {
 const width = button.parentNode.clientWidth;
 const left = parseInt(button.style.left , 10) || 0;
 if (!stopped) {
    button.style.left = (isReturning ? left - 1 : left + 1) + 'px';
    setTimeout(() => move ((isReturning && left > 0) || left === width - button.clientWidth ), 10);
 };
};
 
move();
 
button.addEventListener('click', () => {
  stopped = !stopped
  move()
});
Javascript