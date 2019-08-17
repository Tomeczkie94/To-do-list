const input = document.getElementById('text-field');

const createListItem = function() {
  const listItem = document.createElement('li');
  const { value: text } = input;
  const textNode = document.createTextNode(text);
  listItem.appendChild(textNode);
  document.getElementById('checklist').appendChild(listItem);
  input.value = '';
}

document.getElementById('submit-button').onclick = createListItem;

input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    createListItem();
  }
});
