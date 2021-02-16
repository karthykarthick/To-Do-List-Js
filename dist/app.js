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
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todos */ "./src/components/Todos.js");



const deleteProject = () => {
  const deleteBtns = document.querySelectorAll('.deleteProject');
  deleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      _storage__WEBPACK_IMPORTED_MODULE_0__.store.forEach((obj, idx) => {
        if (obj.projectName === deleteBtn.dataset.name) {
          _storage__WEBPACK_IMPORTED_MODULE_0__.store.splice(idx, 1);
          (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
          (0,_Todos__WEBPACK_IMPORTED_MODULE_1__.removeChildDOM)((deleteBtn.dataset.name).split(' ').join(''));
        }
      });
    });
  });
};

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
    _storage__WEBPACK_IMPORTED_MODULE_0__.store.push({
      projectName: `${this.projectName}`,
      id: _storage__WEBPACK_IMPORTED_MODULE_0__.store.length,
      todos: [],
    });
  }

  renderProject() {
    this.projectContent.insertAdjacentHTML('afterbegin', this.showName);
    this.storeProjectName();
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/components/Todos.js":
/*!*********************************!*\
  !*** ./src/components/Todos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sanitizeName": () => (/* binding */ sanitizeName),
/* harmony export */   "removeChildDOM": () => (/* binding */ removeChildDOM),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "deleteButton": () => (/* binding */ deleteButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");

// import { projectIdx } from './Ui';

const sanitizeName = (text) => text.split(' ').join('');

const removeChildDOM = (idx) => {
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

// const completedTask = () => {
//   const btns = document.querySelectorAll('.complete-btn');

//   btns.forEach(btn => {
//     btn.addEventListener('click', e => {
//       const card = document.querySelector(`#${e.target.dataset.sucess}`);
//       card.classList.toggle('border');
//       card.classList.toggle('border-success');
//     });
//   });
// };

const changeValues = (projectIdx, idx) => {
  const editBtn = document.querySelector('.edit-form-btn');
  editBtn.addEventListener('click', () => {
    const editedTitle = document.querySelector('.edit-title').value;
    const editedDescription = document.querySelector('.edit-description').value;
    const editedDate = document.querySelector('.edit-date').value;
    const editedPriority = document.querySelector('#edit-priority').value;
    _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx].todos[idx].title = editedTitle;
    _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx].todos[idx].description = editedDescription;
    _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx].todos[idx].dueDate = editedDate;
    _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx].todos[idx].priority = editedPriority;
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
  });
};

const editTask = (projectIdx) => {
  const btns = document.querySelectorAll('.edit-btn');
  const editForms = [...document.querySelectorAll('.edit-form')].reverse();

  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      const todoIndex = _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx]
        .todos
        .findIndex(todo => sanitizeName(todo.title) === e.target.dataset.edit);
      editForms[todoIndex].insertAdjacentHTML('afterbegin', editForm());

      changeValues(projectIdx, todoIndex);
    });
  });
};

const deleteButton = (projectIdx) => {
  const data = document.querySelectorAll('.del-data');
  data.forEach(btn => {
    btn.addEventListener('click', e => {
      const idxToDelete = _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx]
        .todos.findIndex(td => td.title === e
          .target.dataset.name);
      removeChildDOM(sanitizeName(e.target.dataset.name));
      _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx].todos.splice(idxToDelete, 1);
      (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
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
    // this.index = projectIdx;
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
    _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx].todos.push({
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
    });
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
  }

  renderTodo(projectIdx) {
    this.todoContent.insertAdjacentHTML('afterbegin', this.showContent);
    this.storeTodo(projectIdx);
    deleteButton(projectIdx);
    editTask(projectIdx);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/components/Ui.js":
/*!******************************!*\
  !*** ./src/components/Ui.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectIdx": () => (/* binding */ projectIdx),
/* harmony export */   "default": () => (/* binding */ Ui)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todos */ "./src/components/Todos.js");



let projectIdx = 0;

class Ui {
  constructor() {
    this.projectContent = document.querySelector('.project-content');
    this.todosConent = document.querySelector('.todos-content');
  }

  addBtn() {
    const addBtns = document.querySelectorAll('.addTodo');
    const todoForm = document.querySelector('.todo-form');

    addBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        todoForm.classList.remove('d-none');
        projectIdx = _storage__WEBPACK_IMPORTED_MODULE_0__.store.findIndex(pj => pj.projectName === e.target.dataset.name);
        this.displayTodos();
      });
    });
  }

  showTodos() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
      project.addEventListener('click', e => {
        e.stopPropagation();
        projectIdx = _storage__WEBPACK_IMPORTED_MODULE_0__.store.findIndex(pj => (0,_Todos__WEBPACK_IMPORTED_MODULE_1__.sanitizeName)(pj.projectName) === e.target.id);
        this.displayTodos();
      });
    });
  }

  displayTodos() {
    this.todosConent.innerHTML = '';
    _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx].todos.forEach(todo => {
      const todoCard = `
      <div class="edit-form"></div>
      <div class="card border-primary  row" id="${(0,_Todos__WEBPACK_IMPORTED_MODULE_1__.sanitizeName)(todo.title)}">
        <div class="card-body col-8">
          <ul class="list-group list-group-flush">
            <h1 class="list-group-item">Title:  ${todo.title}</h1>
            <li class="list-group-item">Description:  ${todo.description}</li>
            <li class="list-group-item">Due_date:  ${todo.dueDate}</li>
            <li class="list-group-item">priority: ${todo.priority}</li>
          </ul>
          <button class="btn btn-outline-danger del-data" data-name="${todo.title}">Delete</button>
          <button class="btn btn-outline-success complete-btn" data-sucess="${todo.title}">Completed task</button>
          <button class="btn btn-outline-warning edit-btn" data-edit="${(0,_Todos__WEBPACK_IMPORTED_MODULE_1__.sanitizeName)(todo.title)}">Edit</button>
        </div>
      </div>
        `;
      this.todosConent.insertAdjacentHTML('afterbegin', todoCard);
    });
    (0,_Todos__WEBPACK_IMPORTED_MODULE_1__.deleteButton)(projectIdx);
    (0,_Todos__WEBPACK_IMPORTED_MODULE_1__.editTask)(projectIdx);
    // todos.completedTask();
  }


  renderUi() {
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.populateStore)();
    _storage__WEBPACK_IMPORTED_MODULE_0__.store.forEach(project => {
      const li = `<li class="project list-group-item"  id="${project.projectName.split(' ').join('')}">${project.projectName}
      <i class="fa fa-plus float-right addTodo" aria-hidden="true" data-name= "${project.projectName}"></i>
      <i class="fas fa-times float-right mr-4 deleteProject" aria-hidden="true" data-name="${project.projectName}"></i>
      </li>`;
      this.projectContent.insertAdjacentHTML('afterbegin', li);
    });
  }
}


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
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
const store = [
];

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
/* harmony import */ var _components_Todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Todos */ "./src/components/Todos.js");
/* harmony import */ var _components_Ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Ui */ "./src/components/Ui.js");






const data = document.querySelector('.submit-btn');
data.addEventListener('click', () => {
  const ProjectTitle = document.querySelector('input').value;
  const newProject = new _components_Project__WEBPACK_IMPORTED_MODULE_1__.default(ProjectTitle);
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
  const todo = new _components_Todos__WEBPACK_IMPORTED_MODULE_2__.default(title, description, dueDate, priority);
  todoForm.classList.add('d-none');
  todo.renderTodo(_components_Ui__WEBPACK_IMPORTED_MODULE_3__.projectIdx);
});


document.addEventListener('DOMContentLoaded', () => {
  const UI = new _components_Ui__WEBPACK_IMPORTED_MODULE_3__.default();
  UI.renderUi(_components_Ui__WEBPACK_IMPORTED_MODULE_3__.projectIdx);
  (0,_components_Project__WEBPACK_IMPORTED_MODULE_1__.deleteProject)();
  UI.addBtn();
  UI.showTodos();
});

})();

/******/ })()
;
//# sourceMappingURL=app.js.map