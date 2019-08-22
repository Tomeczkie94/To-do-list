const input = document.getElementById('text-field');

const createTask = function() {
  const liCreate = document.createElement('li');
  const spanCreate = document.createElement('span');
  const classCheck = function(event) {
    if (spanCreate.classList.contains('uncompleted')) {
      spanCreate.classList.remove('uncompleted');
      spanCreate.classList.add('completed');
    }
    else if (spanCreate.classList.contains('completed')) {
      spanCreate.classList.remove('completed');
      spanCreate.classList.add('uncompleted');
    }
  };
  spanCreate.classList.add('uncompleted');
  spanCreate.addEventListener('click', classCheck);
  const { value: text } = input;
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
