  const todoList = document.getElementById('todo-list');

    function addItem() {
        const newItemInput = document.getElementById('new-item');
        const newItemText = newItemInput.value.trim();
        if (newItemText !== '') {
            const li = document.createElement('li');
            li.className = 'todo-item';
            li.innerHTML = `
                <span>${newItemText}</span>
                <span class="edit-btn" onclick="editItem(this)">✎</span>
                <span class="delete-btn" onclick="deleteItem(this)">❌</span>
            `;
            todoList.appendChild(li);
            newItemInput.value = '';
        }
    }

    function deleteItem(item) {
        const listItem = item.parentElement;
        listItem.remove();
    }

    function editItem(item) {
        const listItem = item.parentElement;
        const textSpan = listItem.querySelector('span:first-child');
        const newText = prompt('Edit item:', textSpan.textContent);
        if (newText !== null) {
            textSpan.textContent = newText.trim();
        }
    }