const input = document.getElementById('text-field');

const createListItem = function() {
  const listItem = document.createElement('li');
  const listItemSpan = document.createElement('span');
  const listItemInput = document.createElement('input');
  listItemInput.type = 'checkbox';
  const { value: text } = input;
  document.getElementById('checklist').appendChild(listItem);
  const textNode = document.createTextNode(text);
  listItem.appendChild(listItemSpan);
  listItem.appendChild(listItemInput);
  listItemSpan.appendChild(textNode);
  input.value = '';
}

document.getElementById('submit-button').onclick = createListItem;

input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    createListItem();
  }
});
