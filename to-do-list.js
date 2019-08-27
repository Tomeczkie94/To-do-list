const input = document.getElementById('text-field');

const createTask = function() {
  const liCreate = document.createElement('li');
  const spanCreate = document.createElement('span');
  const classCheck = function(event) {
    if (spanCreate.classList.contains('task-item' && 'completed')) {
      spanCreate.classList.remove('completed');
    }
    else if (spanCreate.classList.contains('task-item')) {
      spanCreate.classList.add('completed');
    }
  };
  spanCreate.classList.add('task-item');
  spanCreate.addEventListener('click', classCheck);
  const text = input.value;
  document.getElementById('checklist').appendChild(liCreate);
  const textNode = document.createTextNode(text);
  liCreate.appendChild(spanCreate);
  spanCreate.appendChild(textNode);
  input.value = '';
}

document.getElementById('submit-button').onclick = createTask;
input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    createTask();
  }
});
