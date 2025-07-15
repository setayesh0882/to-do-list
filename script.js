document.getElementById('add-task').addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        li.appendChild(document.createTextNode(taskText));
        li.appendChild(checkbox);

        document.getElementById('task-list').appendChild(li);
        taskInput.value = '';

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                li.style.textDecoration = 'line-through';
            } else {
                li.style.textDecoration = 'none';
            }
        });
    }
});
