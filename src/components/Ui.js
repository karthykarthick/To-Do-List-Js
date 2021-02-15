/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable array-callback-return */
/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
import store from '../index';
import { populateStore, setLocalStorage } from './storage';
import Todo from './Todos';

export let projectIdx = 0;

export default class Ui {
  constructor() {
    this.projectContent = document.querySelector('.project-content');
    this.todosConent = document.querySelector('.todos-content');
  }

  removeChildDOM(idx) {
    const child = document.querySelector(`#${idx}`);
    child.remove();
  }

  addBtn() {
    const addBtns = document.querySelectorAll('.addTodo');
    const todoForm = document.querySelector('.todo-form');

    addBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        todoForm.classList.remove('d-none');
        projectIdx = store.findIndex(pj => pj.projectName == e.target.dataset.name);
        this.displayTodos();
      });
    });
  }

  showTodos() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
      project.addEventListener('click', e => {
        store.findIndex((pj, index) => {
          if (sanitizeName(pj.projectName) === e.target.id) {
            projectIdx = index;
            this.displayTodos();
          }
        });
      });
    });
  }

  displayTodos() {
    this.todosConent.innerHTML = '';
    store[projectIdx].todos.forEach(todo => {
      const todoCard = `
      <div class="card border-primary  row" id="${sanitizeName(todo.title)}">
        <div class="card-body col-8">
          <ul class="list-group list-group-flush">
            <h1 class="list-group-item">Title:  ${todo.title}</h1>
            <li class="list-group-item">Description:  ${todo.description}</li>
            <li class="list-group-item">Due_date:  ${todo.dueDate}</li>
            <li class="list-group-item">priority: ${todo.priority}</li>
          </ul>
          <button class="btn btn-outline-danger del-data" data-name="${todo.title}">Delete</button>
          <button class="btn btn-outline-success complete-btn" data-sucess="${todo.title}">Completed task</button>
        </div>
      </div>
        `;
      this.todosConent.insertAdjacentHTML('afterbegin', todoCard);
      // todos.completedTask()
    });
    const todos = new Todo();
    todos.deleteButton();
    todos.completedTask();
  }

  deleteProject() {
    const deleteBtns = document.querySelectorAll('.deleteProject');
    deleteBtns.forEach(deleteBtn => {
      deleteBtn.addEventListener('click', () => {
        store.some((obj, idx) => {
          if (obj.projectName == deleteBtn.dataset.name) {
            store.splice(idx, 1);
            setLocalStorage();
            this.removeChildDOM((deleteBtn.dataset.name).split(' ').join(''));
          }
        });
      });
    });
  }


  renderUi() {
    populateStore();
    store.forEach(project => {
      const li = `<li class="project list-group-item"  id="${project.projectName.split(' ').join('')}">${project.projectName}
      <i class="fa fa-plus float-right addTodo" aria-hidden="true" data-name= "${project.projectName}"></i>
      <i class="fas fa-times float-right mr-4 deleteProject" aria-hidden="true" data-name="${project.projectName}"></i>
      </li>`;
      this.projectContent.insertAdjacentHTML('afterbegin', li);
    });
  }
}

export const sanitizeName = (text) => text.split(' ').join('');
