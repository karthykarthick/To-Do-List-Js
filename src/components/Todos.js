/* eslint-disable class-methods-use-this */
import {
  getProjectIndex,
  deleteElementFromDOM,
  storeTodos,
  displayTodoForm,
  getTaskIndex,
  getBtns,
  renderTodos,
  updateTodo,
} from './common';
import { store, setLocalStorage, currentIndex } from './storage';

const editForm = () => (`
        <div class="container">
          <form>
            <label>title
              <input type="text" class="form-control edit-title"></input>
            </label>
            <label>
              description
              <input type="text" class="form-control edit-description"></input>
            </label>
            <label> Due Date
              <input type="date" class="form-control edit-date"></input>
            </label>
            <label class="form-label">
              <select name="edit-priority" id="edit-priority" class="form-control">
                <option value="high">High</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
            </select>
          </label>
            <button type="submit" class="edit-form-btn btn btn-success">Edit</button>
          </form>
        </div>
          `
);

const updateTask = () => {
  const editBtn = document.querySelector('.edit-form-btn');

  editBtn.addEventListener('click', () => {
    const editedTitle = document.querySelector('.edit-title').value;
    const editedDescription = document.querySelector('.edit-description').value;
    const editedDate = document.querySelector('.edit-date').value;
    const editedPriority = document.querySelector('#edit-priority').value;

    updateTodo(editedTitle, editedDescription, editedDate, editedPriority);
    setLocalStorage();
  });
};

const btnText = (text) => (text === 'Complete' ? 'Uncomplete' : 'Complete');

export default class Todos {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todoForm = document.querySelector('.todo-form-container');
    this.todos = document.querySelector('.todos-container');
    this.editformContainer = document.querySelector('.todo-edit-form-container');
  }

  showForm() {
    const addBtns = getBtns('.add-todo-btn');

    addBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        displayTodoForm(this.todoForm);
        currentIndex.id = getProjectIndex(e.target.dataset.id);
        renderTodos(this.todos);
        this.deleteTodo();
      });
    });
  }

  deleteTodo() {
    const deleteBtns = getBtns('.btn-delete-task');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const selectedTask = getTaskIndex(e.target.dataset.id);
        store[currentIndex.id].todos.splice(selectedTask, 1);
        deleteElementFromDOM(e.target.dataset.id);
        setLocalStorage();
      });
    });
  }

  completeTask() {
    const completeBtns = document.querySelectorAll('.btn-complete-task');
    completeBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        const card = document.querySelector(`#${e.target.dataset.id}`);
        card.classList.toggle('border-success');
        e.target.innerHTML = btnText(e.target.innerHTML);
      });
    });
  }

  saveTodo() {
    storeTodos(this.title, this.description, this.dueDate, this.priority, store, currentIndex.id);
    setLocalStorage();
  }

  showEditForm() {
    this.editformContainer.insertAdjacentHTML('afterbegin', editForm());
  }

  editform() {
    const editBtns = getBtns('.btn-edit-task');

    editBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        currentIndex.taskId = getTaskIndex(e.target.dataset.id);
        this.showEditForm();
        updateTask();
      });
    });
  }
}
