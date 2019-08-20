const input = document.getElementById('text-field');

const createListItem = function() {
  const listItem = document.createElement('li');
  const listItemSpan = document.createElement('span');
  listItemSpan.classList.add('uncompleted');
  listItemSpan.addEventListener('click', function(event) {
    if (listItemSpan.classList.contains('uncompleted')) {
      listItemSpan.classList.remove('uncompleted');
      listItemSpan.classList.add('completed');
    }
    else if (listItemSpan.classList.contains('completed')) {
      listItemSpan.classList.remove('completed');
      listItemSpan.classList.add('uncompleted');
    }
  });
  const { value: text } = input;
  document.getElementById('checklist').appendChild(listItem);
  const textNode = document.createTextNode(text);
  listItem.appendChild(listItemSpan);
  listItemSpan.appendChild(textNode);
  input.value = '';
}

document.getElementById('submit-button').onclick = createListItem;
input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    createListItem();
  }
});
