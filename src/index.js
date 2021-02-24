import './scss/styles.scss';
import Project from './components/Project';
import Ui from './components/Ui';
import Todos from './components/Todos';
import { populateStore } from './components/storage';
import { hideTodoForm } from './components/common';

const UI = new Ui();

const newProjectBtn = document.querySelector('#project-form__btn');
const projectName = document.querySelector('#project-form__name');
const todoSubmit = document.querySelector('.submit-todo');
const todoForm = document.querySelector('.todo-form-container');


newProjectBtn.addEventListener('click', e => {
  e.preventDefault();
  const newProject = new Project(projectName.value);
  newProject.saveProject();
  UI.renderProject();
});

todoSubmit.addEventListener('click', () => {
  // e.preventDefault();
  const title = document.querySelector('.todo-title').value;
  const description = document.querySelector('.todo-description').value;
  const dueDate = document.querySelector('.todo-due-date').value;
  const priority = document.querySelector('#priority').value;

  const Todo = new Todos(title, description, dueDate, priority);
  Todo.saveTodo();
  hideTodoForm(todoForm);
});

document.addEventListener('DOMContentLoaded', () => {
  populateStore();
  UI.renderProject();
  UI.showTodos();
});