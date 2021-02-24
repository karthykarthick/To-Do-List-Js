/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Project.js":
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./src/components/common.js");
/* eslint-disable class-methods-use-this */



class Project {
  constructor(name) {
    this.name = name;
  }

  deleteProject() {
    const btns = document.querySelectorAll('.delete-pj-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectIndex = (0,_common__WEBPACK_IMPORTED_MODULE_1__.getProjectIndex)(e.target.dataset.id);
        _storage__WEBPACK_IMPORTED_MODULE_0__.store.splice(projectIndex, 1);
        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
        (0,_common__WEBPACK_IMPORTED_MODULE_1__.deleteElementFromDOM)(e.target.dataset.id);
      });
    });
  }

  saveProject() {
    (0,_common__WEBPACK_IMPORTED_MODULE_1__.storeProject)(this.name);
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
  }
}


/***/ }),

/***/ "./src/components/Todos.js":
/*!*********************************!*\
  !*** ./src/components/Todos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todos)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/components/common.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");
/* eslint-disable class-methods-use-this */



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

    (0,_common__WEBPACK_IMPORTED_MODULE_0__.updateTodo)(editedTitle, editedDescription, editedDate, editedPriority);
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();
  });
};

const btnText = (text) => (text === 'Complete' ? 'Uncomplete' : 'Complete');

class Todos {
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
    const addBtns = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getBtns)('.add-todo-btn');

    addBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        (0,_common__WEBPACK_IMPORTED_MODULE_0__.displayTodoForm)(this.todoForm);
        _storage__WEBPACK_IMPORTED_MODULE_1__.currentIndex.id = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getProjectIndex)(e.target.dataset.id);
        (0,_common__WEBPACK_IMPORTED_MODULE_0__.renderTodos)(this.todos);
        this.deleteTodo();
      });
    });
  }

  deleteTodo() {
    const deleteBtns = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getBtns)('.btn-delete-task');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const selectedTask = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getTaskIndex)(e.target.dataset.id);
        _storage__WEBPACK_IMPORTED_MODULE_1__.store[_storage__WEBPACK_IMPORTED_MODULE_1__.currentIndex.id].todos.splice(selectedTask, 1);
        (0,_common__WEBPACK_IMPORTED_MODULE_0__.deleteElementFromDOM)(e.target.dataset.id);
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();
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
    (0,_common__WEBPACK_IMPORTED_MODULE_0__.storeTodos)(this.title, this.description, this.dueDate, this.priority);
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();
  }

  showEditForm() {
    this.editformContainer.insertAdjacentHTML('afterbegin', editForm());
  }

  editform() {
    const editBtns = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getBtns)('.btn-edit-task');

    editBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        _storage__WEBPACK_IMPORTED_MODULE_1__.currentIndex.taskId = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getTaskIndex)(e.target.dataset.id);
        this.showEditForm();
        updateTask();
      });
    });
  }
}


/***/ }),

/***/ "./src/components/Ui.js":
/*!******************************!*\
  !*** ./src/components/Ui.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ui)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./src/components/common.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./src/components/Project.js");
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Todos */ "./src/components/Todos.js");





const pj = new _Project__WEBPACK_IMPORTED_MODULE_2__.default();
const newTodo = new _Todos__WEBPACK_IMPORTED_MODULE_3__.default();

class Ui {
  constructor() {
    this.projectContainer = document.querySelector('.project-list');
    this.todos = document.querySelector('.todos-container');
  }

  showTodos() {
    const projects = document.querySelectorAll('ul li');

    projects.forEach(project => {
      project.addEventListener('click', e => {
        e.stopPropagation();
        _storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.id = (0,_common__WEBPACK_IMPORTED_MODULE_1__.getProjectIndex)(e.target.id);
        (0,_common__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(this.todos);
        newTodo.deleteTodo();
        newTodo.editform();
        newTodo.completeTask();
      });
    });
  }

  renderProject() {
    this.projectContainer.textContent = '';
    (0,_common__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(this.projectContainer);
    pj.deleteProject();
    newTodo.showForm();
  }
}

/***/ }),

/***/ "./src/components/common.js":
/*!**********************************!*\
  !*** ./src/components/common.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storeProject": () => (/* binding */ storeProject),
/* harmony export */   "storeTodos": () => (/* binding */ storeTodos),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "sanitizeId": () => (/* binding */ sanitizeId),
/* harmony export */   "getProjectIndex": () => (/* binding */ getProjectIndex),
/* harmony export */   "deleteElementFromDOM": () => (/* binding */ deleteElementFromDOM),
/* harmony export */   "displayTodoForm": () => (/* binding */ displayTodoForm),
/* harmony export */   "hideTodoForm": () => (/* binding */ hideTodoForm),
/* harmony export */   "renderTodos": () => (/* binding */ renderTodos),
/* harmony export */   "getBtns": () => (/* binding */ getBtns),
/* harmony export */   "getTaskIndex": () => (/* binding */ getTaskIndex),
/* harmony export */   "updateTodo": () => (/* binding */ updateTodo)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");


const storeProject = (projectName) => {
  _storage__WEBPACK_IMPORTED_MODULE_0__.store.push({
    projectName,
    todos: [],
  });
};

const storeTodos = (title, description, date, priority) => _storage__WEBPACK_IMPORTED_MODULE_0__.store[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.id]
  .todos
  .push(
    {
      title,
      description,
      date,
      priority,
    },
  );

const sanitizeId = (text) => text.split(' ').join('');

const updateTodo = (newTitle, newDescription, newDate, newPriority) => {
  _storage__WEBPACK_IMPORTED_MODULE_0__.store[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.id].todos[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.taskId].title = newTitle;
  _storage__WEBPACK_IMPORTED_MODULE_0__.store[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.id].todos[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.taskId].description = newDescription;
  _storage__WEBPACK_IMPORTED_MODULE_0__.store[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.id].todos[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.taskId].date = newDate;
  _storage__WEBPACK_IMPORTED_MODULE_0__.store[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.id].todos[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.taskId].priority = newPriority;
};

const renderProjects = (container) => {
  _storage__WEBPACK_IMPORTED_MODULE_0__.store.forEach(project => {
    const li = `
                <li class="list-group-item" id="${sanitizeId(project.projectName)}">${project.projectName}
                  <span class="float-right">
                    <i class="fa fa-times mr-2 delete-pj-btn" data-id="${sanitizeId(project.projectName)}"></i>
                    <i class="fas fa-plus mr-4 add-todo-btn" data-id="${sanitizeId(project.projectName)}"></i>

                  </span>
                </li>
                `;
    container.insertAdjacentHTML('afterbegin', li);
  });
};

const renderTodos = (container) => {
  container.innerHTML = '';
  _storage__WEBPACK_IMPORTED_MODULE_0__.store[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.id].todos.forEach(todo => {
    const card = `
      <div class="card" id="${sanitizeId(todo.title)}">
        <h2 class="h2">${todo.title}</h2>
        <p>${todo.description}</p>
        <p>Due Date: ${todo.date}</p>
        <span>priority: ${todo.priority}</span>
        <div>
          <div class="btn btn-success btn-complete-task" data-id="${sanitizeId(todo.title)}">Complete</div>
          <div class="btn btn-warning btn-edit-task" data-id="${sanitizeId(todo.title)}">Edit</div>
          <div class="btn btn-danger btn-delete-task" data-id="${sanitizeId(todo.title)}">Delete</div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('afterbegin', card);
  });
};

const deleteElementFromDOM = (id) => document.querySelector(`#${id}`).remove();

const getProjectIndex = (id) => _storage__WEBPACK_IMPORTED_MODULE_0__.store.findIndex(pj => sanitizeId(pj.projectName) === id);
const getTaskIndex = (id) => _storage__WEBPACK_IMPORTED_MODULE_0__.store[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.id]
  .todos
  .findIndex(task => sanitizeId(task.title) === id);

const displayTodoForm = (element) => element.classList.add('show');
const hideTodoForm = (element) => element.classList.remove('show');
const getBtns = (classElemnt) => document.querySelectorAll(`${classElemnt}`);



/***/ }),

/***/ "./src/components/storage.js":
/*!***********************************!*\
  !*** ./src/components/storage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setLocalStorage": () => (/* binding */ setLocalStorage),
/* harmony export */   "populateStore": () => (/* binding */ populateStore),
/* harmony export */   "store": () => (/* binding */ store),
/* harmony export */   "currentIndex": () => (/* binding */ currentIndex)
/* harmony export */ });
const store = [
];

const currentIndex = { id: 0, taskId: 0 };

const setLocalStorage = () => {
  window.localStorage.setItem('todos', JSON.stringify(store));
};

const populateStore = () => {
  const colletion = JSON.parse(window.localStorage.getItem('todos'));
  if (colletion) {
    colletion.forEach(el => {
      store.push(el);
    });
  }
};



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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Project */ "./src/components/Project.js");
/* harmony import */ var _components_Ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Ui */ "./src/components/Ui.js");
/* harmony import */ var _components_Todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Todos */ "./src/components/Todos.js");
/* harmony import */ var _components_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/storage */ "./src/components/storage.js");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/common */ "./src/components/common.js");







const UI = new _components_Ui__WEBPACK_IMPORTED_MODULE_2__.default();

const newProjectBtn = document.querySelector('#project-form__btn');
const projectName = document.querySelector('#project-form__name');
const todoSubmit = document.querySelector('.submit-todo');
const todoForm = document.querySelector('.todo-form-container');


newProjectBtn.addEventListener('click', e => {
  e.preventDefault();
  const newProject = new _components_Project__WEBPACK_IMPORTED_MODULE_1__.default(projectName.value);
  newProject.saveProject();
  UI.renderProject();
});

todoSubmit.addEventListener('click', () => {
  // e.preventDefault();
  const title = document.querySelector('.todo-title').value;
  const description = document.querySelector('.todo-description').value;
  const dueDate = document.querySelector('.todo-due-date').value;
  const priority = document.querySelector('#priority').value;

  const Todo = new _components_Todos__WEBPACK_IMPORTED_MODULE_3__.default(title, description, dueDate, priority);
  Todo.saveTodo();
  (0,_components_common__WEBPACK_IMPORTED_MODULE_5__.hideTodoForm)(todoForm);
});

document.addEventListener('DOMContentLoaded', () => {
  (0,_components_storage__WEBPACK_IMPORTED_MODULE_4__.populateStore)();
  UI.renderProject();
  UI.showTodos();
});
})();

/******/ })()
;
//# sourceMappingURL=app.js.map