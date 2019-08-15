document.getElementById('submit-button').onclick = function() {
  const listItem = document.createElement('li');
  const text = document.getElementById('text-field').value;
  const textnode = document.createTextNode(text);
  listItem.appendChild(textnode);
  document.getElementById('checklist').appendChild(listItem);
  document.getElementById('my-form').reset();
}

const input = document.getElementById('text-field');
input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('submit-button').click();
  }
});
