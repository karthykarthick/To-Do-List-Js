import './scss/styles.scss';
import Project, { deleteProject } from './components/Project';
import Todo from './components/Todos';
import Ui from './components/Ui';

const store = [
];


const data = document.querySelector('.submit-btn');
data.addEventListener('click', () => {
  const ProjectTitle = document.querySelector('input').value;
  const newProject = new Project(ProjectTitle);
  newProject.renderProject();
});

const todoBtm = document.querySelector('.hitme');
todoBtm.addEventListener('click', (e) => {
  const todoForm = document.querySelector('.todo-form');
  e.preventDefault();
  const title = document.querySelector('.todo-title').value;
  const description = document.querySelector('.todo-description').value;
  const dueDate = document.querySelector('.todo-due-date').value;
  const priority = document.querySelector('#priority').value;
  const todo = new Todo(title, description, dueDate, priority);
  todoForm.classList.add('d-none');
  todo.renderTodo();
});


document.addEventListener('DOMContentLoaded', () => {
  const UI = new Ui();
  UI.renderUi();
  deleteProject();
  UI.addBtn();
  UI.showTodos();
});

export default store;