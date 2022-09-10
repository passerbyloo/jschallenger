const dragItem = document.querySelector('#dragItem');
const dropArea = document.querySelector('#dropArea');

// this allows for items to be dropped inside the dropArea
const handleDragOver = (event) => event.preventDefault();
dropArea.addEventListener('dragover', handleDragOver);

const handleDrop = () => {
  dropArea.append(dragItem);
};

// type in your code here
dropArea.addEventListener('drop', handleDrop)
