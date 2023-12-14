let draggedFIle;

function dragStart(event) {
  draggedFIle = event.dataTransfer.files;
}

function dragOver(e) {
  e.preventDefault();
}

function drop(event) {
  event.preventDefault();
  document.getElementById("file").files = draggedFIle;
}
