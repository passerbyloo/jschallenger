const list = document.getElementById('list');

const handleHover = event => {
  event.target !== list && (event.target.style.visibility = 'hidden')
}
  
list.addEventListener('mouseover', handleHover)
