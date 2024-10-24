let addToButton = document.getElementById('addToDo');

let container = document.getElementById('toDoContainer');

let inPutField =document.getElementById('inputField');

addToButton.addEventListener('click', function(){
  let paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText =inPutField.value;
  toDoContainer.appendChild(paragraph);

  inPutField.value = "";

  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";
  })
  paragraph.addEventListener('dblclick', function(){
    toDoContainer.removeChild(paragraph)
  })
})