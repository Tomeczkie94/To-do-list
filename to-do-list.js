const input = document.getElementById('text-field');
const storage = window.localStorage;
const createTask = function() {
  const liCreate = document.createElement('li');
  const spanCreate = document.createElement('span');
  spanCreate.classList.add('task-item');
  spanCreate.addEventListener('click', classCheck);
  const text = input.value;
  document.getElementById('checklist').appendChild(liCreate);
  const textNode = document.createTextNode(text);
  liCreate.appendChild(spanCreate);
  spanCreate.appendChild(textNode);
  input.value = '';
  storage.setItem('liCreate');
}

const classCheck = function() {
  if (this.classList.contains('task-item' && 'completed')) {
    this.classList.remove('completed');
  }
  else if (this.classList.contains('task-item')) {
    this.classList.add('completed');
  }
};

document.getElementById('submit-button').onclick = createTask;
input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    createTask();
  }
});
