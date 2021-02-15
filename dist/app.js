/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ src)
});

;// CONCATENATED MODULE: ./src/components/storage.js
/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */


const setLocalStorage = () => {
  window.localStorage.setItem('todos', JSON.stringify(src));
};

const populateStore = () => {
  const colletion = JSON.parse(window.localStorage.getItem('todos'));
  if (colletion) {
    colletion.forEach(el => {
      src.push(el);
    });
  }
};


;// CONCATENATED MODULE: ./src/components/Project.js
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */



class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.projectContent = document.querySelector('.project-content');
  }

  get showName() {
    return `
              <li class="project list-group-item">${this.projectName}</li>
            `;
  }


  storeProjectName() {
    src.push({
      projectName: `${this.projectName}`,
      id: src.length,
      todos: [],
    });
  }

  renderProject() {
    this.projectContent.insertAdjacentHTML('afterbegin', this.showName);
    this.storeProjectName();
    setLocalStorage();
  }
}

/* harmony default export */ const components_Project = (Project);

;// CONCATENATED MODULE: ./src/components/Ui.js
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




let projectIdx = 0;

class Ui {
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
        projectIdx = src.findIndex(pj => pj.projectName == e.target.dataset.name);
        this.displayTodos();
      });
    });
  }

  showTodos() {
    const projects = document.querySelectorAll('.project');


    projects.forEach(project => {
      project.addEventListener('click', e => {
        src.findIndex((pj, index) => {
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
    src[projectIdx].todos.forEach(todo => {
      const todoCard = `
      <div class="edit-form"></div>
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
          <button class="btn btn-outline-warning edit-btn" data-edit="${sanitizeName(todo.title)}">Edit</button>
        </div>
      </div>
        `;
      this.todosConent.insertAdjacentHTML('afterbegin', todoCard);
      // todos.completedTask()
    });
    const todos = new Todos();
    todos.deleteButton();
    todos.completedTask();
    todos.editTask();
  }

  deleteProject() {
    const deleteBtns = document.querySelectorAll('.deleteProject');
    deleteBtns.forEach(deleteBtn => {
      deleteBtn.addEventListener('click', () => {
        src.some((obj, idx) => {
          if (obj.projectName == deleteBtn.dataset.name) {
            src.splice(idx, 1);
            setLocalStorage();
            this.removeChildDOM((deleteBtn.dataset.name).split(' ').join(''));
          }
        });
      });
    });
  }


  renderUi() {
    populateStore();
    src.forEach(project => {
      const li = `<li class="project list-group-item"  id="${project.projectName.split(' ').join('')}">${project.projectName}
      <i class="fa fa-plus float-right addTodo" aria-hidden="true" data-name= "${project.projectName}"></i>
      <i class="fas fa-times float-right mr-4 deleteProject" aria-hidden="true" data-name="${project.projectName}"></i>
      </li>`;
      this.projectContent.insertAdjacentHTML('afterbegin', li);
    });
  }
}

const sanitizeName = (text) => text.split(' ').join('');

;// CONCATENATED MODULE: ./src/components/Todos.js
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */




class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todoContent = document.querySelector('.todos-content');
    this.index = projectIdx;
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

  get editForm() {
    return (`
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
  }

  editTask() {
    const btns = document.querySelectorAll('.edit-btn');
    const editForms = [...document.querySelectorAll('.edit-form')].reverse();

    btns.forEach(btn => {
      btn.addEventListener('click', e => {
        const todoIndex = src[this.index]
          .todos
          .findIndex(todo => sanitizeName(todo.title) === e.target.dataset.edit);
        editForms[todoIndex].insertAdjacentHTML('afterbegin', this.editForm);

        this.changeValues(todoIndex);
      });
    });
  }

  changeValues(idx) {
    const editBtn = document.querySelector('.edit-form-btn');
    editBtn.addEventListener('click', () => {
      // e.preventDefault();
      const editedTitle = document.querySelector('.edit-title').value;
      const editedDescription = document.querySelector('.edit-description').value;
      const editedDate = document.querySelector('.edit-date').value;
      const editedPriority = document.querySelector('#edit-priority').value;
      src[this.index].todos[idx].title = editedTitle;
      src[this.index].todos[idx].description = editedDescription;
      src[this.index].todos[idx].dueDate = editedDate;
      src[this.index].todos[idx].priority = editedPriority;
      setLocalStorage();
    });
  }

  completedTask() {
    const btns = document.querySelectorAll('.complete-btn');

    btns.forEach(btn => {
      btn.addEventListener('click', e => {
        const card = document.querySelector(`#${e.target.dataset.sucess}`);
        card.classList.toggle('border');
        card.classList.toggle('border-success');
      });
    });
  }

  deleteButton() {
    const data = document.querySelectorAll('.del-data');
    data.forEach(btn => {
      btn.addEventListener('click', e => {
        const idxToDelete = src[this.index].todos.findIndex(td => td.title === e.target.dataset.name);
        this.removeChildDOM(sanitizeName(e.target.dataset.name));
        src[this.index].todos.splice(idxToDelete, 1);
        setLocalStorage();
      });
    });
  }


  removeChildDOM(idx) {
    const child = document.querySelector(`#${idx}`);
    child.remove();
  }


  storeTodo() {
    src[this.index].todos.push({
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
    });
    setLocalStorage();
  }

  renderTodo() {
    this.todoContent.insertAdjacentHTML('afterbegin', this.showContent);
    this.storeTodo();
    this.deleteButton();
    // this.changeValues();
  }
}

/* harmony default export */ const Todos = (Todo);

;// CONCATENATED MODULE: ./src/index.js
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */





const store = [
];


const data = document.querySelector('.submit-btn');
data.addEventListener('click', (e) => {
  const ProjectTitle = document.querySelector('input').value;
  const newProject = new components_Project(ProjectTitle);
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
  const todo = new Todos(title, description, dueDate, priority);
  todoForm.classList.add('d-none');
  todo.renderTodo();
});


document.addEventListener('DOMContentLoaded', e => {
  const UI = new Ui();
  UI.renderUi();
  UI.deleteProject();
  UI.addBtn();
  UI.showTodos();
});

/* harmony default export */ const src = (store);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(350);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=app.js.map