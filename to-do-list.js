function createList(event) {
  event.preventDefault();
  let input = document.querySelector('#text-field').value;
  let newListItem = document.createElement('li');
  let newContent = document.createTextNode(input);
  let checklist = document.querySelector('#checklist');
  checklist.appendChild(newListItem);
}
