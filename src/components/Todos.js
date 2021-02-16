import { setLocalStorage, store } from './storage';

export const sanitizeName = (text) => text.split(' ').join('');

export const removeChildDOM = (idx) => {
  const child = document.querySelector(`#${idx}`);
  child.remove();
};

const editForm = () => (`
          <form>
            <label>title
              <input type="text" class="todo-title form-control edit-title"></input>
            </label>
            <label>
              description
              <input type="text" class="todo-title form-control edit-description"></input>
            </label>
            <label> Due Date
              <input type="date" class="todo-title form-control edit-date"></input>
            </label>
            <select name="edit-priority" id="edit-priority" class="form-control">
              <option value="high">High</option>
              <option value="medium">medium</option>
              <option value="low">low</option>
          </select>
            <button type="submit" class="edit-form-btn btn btn-primary">Edit</button>
          </form>
          `
);

export const completedTask = () => {
  const btns = document.querySelectorAll('.complete-btn');

  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      const card = document.querySelector(`#${e.target.dataset.sucess}`);
      card.classList.toggle('border');
      card.classList.toggle('border-success');
    });
  });
};

const changeValues = (projectIdx, idx) => {
  const editBtn = document.querySelector('.edit-form-btn');
  editBtn.addEventListener('click', () => {
    const editedTitle = document.querySelector('.edit-title').value;
    const editedDescription = document.querySelector('.edit-description').value;
    const editedDate = document.querySelector('.edit-date').value;
    const editedPriority = document.querySelector('#edit-priority').value;
    store[projectIdx].todos[idx].title = editedTitle;
    store[projectIdx].todos[idx].description = editedDescription;
    store[projectIdx].todos[idx].dueDate = editedDate;
    store[projectIdx].todos[idx].priority = editedPriority;
    setLocalStorage();
  });
};

export const editTask = (projectIdx) => {
  const btns = document.querySelectorAll('.edit-btn');
  const editForms = [...document.querySelectorAll('.edit-form')].reverse();

  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      const todoIndex = store[projectIdx]
        .todos
        .findIndex(todo => sanitizeName(todo.title) === e.target.dataset.edit);
      editForms[todoIndex].insertAdjacentHTML('afterbegin', editForm());

      changeValues(projectIdx, todoIndex);
    });
  });
};

export const deleteButton = (projectIdx) => {
  const data = document.querySelectorAll('.del-data');
  data.forEach(btn => {
    btn.addEventListener('click', e => {
      const idxToDelete = store[projectIdx]
        .todos.findIndex(td => td.title === e
          .target.dataset.name);
      removeChildDOM(sanitizeName(e.target.dataset.name));
      store[projectIdx].todos.splice(idxToDelete, 1);
      setLocalStorage();
    });
  });
};

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todoContent = document.querySelector('.todos-content');
  }

  get showContent() {
    return `
    <div class="edit-form"></div>
      <div class="card border-primary row" id="${sanitizeName(this.title)}">
        <div class="card-body col-8">
          <ul class="list-group list-group-flush">
            <h1 class="list-group-item">Title: ${this.title}</h1>
            <li class="list-group-item">Description: ${this.description}</li>
            <li class="list-group-item">Due_Date: ${this.dueDate}</li>
            <li class="list-group-item">Priority: ${this.priority}</li>
          </ul>
          <button class="btn btn-outline-danger del-data" data-name="${this.title}">Delete</button>
          <button class="btn btn-outline-success complete-btn" data-sucess="${sanitizeName(this.title)}">Completed task</button>
          <button class="btn btn-outline-warning edit-btn" data-edit="${sanitizeName(this.title)}">Edit</button>
        </div>
      </div>
        `;
  }

  storeTodo(projectIdx) {
    store[projectIdx].todos.push({
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
    });
    setLocalStorage();
  }

  renderTodo(projectIdx) {
    this.todoContent.insertAdjacentHTML('afterbegin', this.showContent);
    this.storeTodo(projectIdx);
    deleteButton(projectIdx);
    editTask(projectIdx);
  }
}

export default Todo;
