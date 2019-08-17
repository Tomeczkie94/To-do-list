function createList(event) {
  const input = document.querySelector('#text-field').value;
  const newListItem = document.createElement('li');
  const newContent = document.createTextNode(input);
  const checklist = document.querySelector('#checklist');
  checklist.appendChild(newListItem);
}
