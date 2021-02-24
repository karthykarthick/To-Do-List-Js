/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable class-methods-use-this */



var Project = /*#__PURE__*/function () {
  function Project(name) {
    _classCallCheck(this, Project);

    this.name = name;
  }

  _createClass(Project, [{
    key: "deleteProject",
    value: function deleteProject() {
      var btns = document.querySelectorAll('.delete-pj-btn');
      btns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          var projectIndex = (0,_common__WEBPACK_IMPORTED_MODULE_1__.getProjectIndex)(e.target.dataset.id);
          _storage__WEBPACK_IMPORTED_MODULE_0__.store.splice(projectIndex, 1);
          (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
          (0,_common__WEBPACK_IMPORTED_MODULE_1__.deleteElementFromDOM)(e.target.dataset.id);
        });
      });
    }
  }, {
    key: "saveProject",
    value: function saveProject() {
      (0,_common__WEBPACK_IMPORTED_MODULE_1__.storeProject)(this.name);
      (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
    }
  }]);

  return Project;
}();



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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable class-methods-use-this */



var editForm = function editForm() {
  return "\n        <div class=\"container\">\n          <form>\n            <label>title\n              <input type=\"text\" class=\"form-control edit-title\"></input>\n            </label>\n            <label>\n              description\n              <input type=\"text\" class=\"form-control edit-description\"></input>\n            </label>\n            <label> Due Date\n              <input type=\"date\" class=\"form-control edit-date\"></input>\n            </label>\n            <label class=\"form-label\">\n              <select name=\"edit-priority\" id=\"edit-priority\" class=\"form-control\">\n                <option value=\"high\">High</option>\n                <option value=\"medium\">medium</option>\n                <option value=\"low\">low</option>\n            </select>\n          </label>\n            <button type=\"submit\" class=\"edit-form-btn btn btn-success\">Edit</button>\n          </form>\n        </div>\n          ";
};

var updateTask = function updateTask() {
  var editBtn = document.querySelector('.edit-form-btn');
  editBtn.addEventListener('click', function () {
    var editedTitle = document.querySelector('.edit-title').value;
    var editedDescription = document.querySelector('.edit-description').value;
    var editedDate = document.querySelector('.edit-date').value;
    var editedPriority = document.querySelector('#edit-priority').value;
    (0,_common__WEBPACK_IMPORTED_MODULE_0__.updateTodo)(editedTitle, editedDescription, editedDate, editedPriority);
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();
  });
};

var btnText = function btnText(text) {
  return text === 'Complete' ? 'Uncomplete' : 'Complete';
};

var Todos = /*#__PURE__*/function () {
  function Todos(title, description, dueDate, priority) {
    _classCallCheck(this, Todos);

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todoForm = document.querySelector('.todo-form-container');
    this.todos = document.querySelector('.todos-container');
    this.editformContainer = document.querySelector('.todo-edit-form-container');
  }

  _createClass(Todos, [{
    key: "showForm",
    value: function showForm() {
      var _this = this;

      var addBtns = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getBtns)('.add-todo-btn');
      addBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          (0,_common__WEBPACK_IMPORTED_MODULE_0__.displayTodoForm)(_this.todoForm);
          _storage__WEBPACK_IMPORTED_MODULE_1__.currentIndex.id = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getProjectIndex)(e.target.dataset.id);
          (0,_common__WEBPACK_IMPORTED_MODULE_0__.renderTodos)(_this.todos);

          _this.deleteTodo();
        });
      });
    }
  }, {
    key: "deleteTodo",
    value: function deleteTodo() {
      var deleteBtns = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getBtns)('.btn-delete-task');
      deleteBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          var selectedTask = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getTaskIndex)(e.target.dataset.id);
          _storage__WEBPACK_IMPORTED_MODULE_1__.store[_storage__WEBPACK_IMPORTED_MODULE_1__.currentIndex.id].todos.splice(selectedTask, 1);
          (0,_common__WEBPACK_IMPORTED_MODULE_0__.deleteElementFromDOM)(e.target.dataset.id);
          (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();
        });
      });
    }
  }, {
    key: "completeTask",
    value: function completeTask() {
      var completeBtns = document.querySelectorAll('.btn-complete-task');
      completeBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          var card = document.querySelector("#".concat(e.target.dataset.id));
          card.classList.toggle('border-success');
          e.target.innerHTML = btnText(e.target.innerHTML);
        });
      });
    }
  }, {
    key: "saveTodo",
    value: function saveTodo() {
      (0,_common__WEBPACK_IMPORTED_MODULE_0__.storeTodos)(this.title, this.description, this.dueDate, this.priority);
      (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();
    }
  }, {
    key: "showEditForm",
    value: function showEditForm() {
      this.editformContainer.insertAdjacentHTML('afterbegin', editForm());
    }
  }, {
    key: "editform",
    value: function editform() {
      var _this2 = this;

      var editBtns = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getBtns)('.btn-edit-task');
      editBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          _storage__WEBPACK_IMPORTED_MODULE_1__.currentIndex.taskId = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getTaskIndex)(e.target.dataset.id);

          _this2.showEditForm();

          updateTask();
        });
      });
    }
  }]);

  return Todos;
}();



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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var pj = new _Project__WEBPACK_IMPORTED_MODULE_2__.default();
var newTodo = new _Todos__WEBPACK_IMPORTED_MODULE_3__.default();

var Ui = /*#__PURE__*/function () {
  function Ui() {
    _classCallCheck(this, Ui);

    this.projectContainer = document.querySelector('.project-list');
    this.todos = document.querySelector('.todos-container');
  }

  _createClass(Ui, [{
    key: "showTodos",
    value: function showTodos() {
      var _this = this;

      var projects = document.querySelectorAll('ul li');
      projects.forEach(function (project) {
        project.addEventListener('click', function (e) {
          e.stopPropagation();
          _storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.id = (0,_common__WEBPACK_IMPORTED_MODULE_1__.getProjectIndex)(e.target.id);
          (0,_common__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(_this.todos);
          newTodo.deleteTodo();
          newTodo.editform();
          newTodo.completeTask();
        });
      });
    }
  }, {
    key: "renderProject",
    value: function renderProject() {
      this.projectContainer.textContent = '';
      (0,_common__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(this.projectContainer);
      pj.deleteProject();
      newTodo.showForm();
    }
  }]);

  return Ui;
}();



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


var storeProject = function storeProject(projectName) {
  _storage__WEBPACK_IMPORTED_MODULE_0__.store.push({
    projectName: projectName,
    todos: []
  });
};

var storeTodos = function storeTodos(title, description, date, priority) {
  return _storage__WEBPACK_IMPORTED_MODULE_0__.store[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.id].todos.push({
    title: title,
    description: description,
    date: date,
    priority: priority
  });
};

var sanitizeId = function sanitizeId(text) {
  return text.split(' ').join('');
};

var updateTodo = function updateTodo(newTitle, newDescription, newDate, newPriority) {
  _storage__WEBPACK_IMPORTED_MODULE_0__.store[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.id].todos[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.taskId].title = newTitle;
  _storage__WEBPACK_IMPORTED_MODULE_0__.store[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.id].todos[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.taskId].description = newDescription;
  _storage__WEBPACK_IMPORTED_MODULE_0__.store[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.id].todos[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.taskId].date = newDate;
  _storage__WEBPACK_IMPORTED_MODULE_0__.store[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.id].todos[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.taskId].priority = newPriority;
};

var renderProjects = function renderProjects(container) {
  _storage__WEBPACK_IMPORTED_MODULE_0__.store.forEach(function (project) {
    var li = "\n                <li class=\"list-group-item\" id=\"".concat(sanitizeId(project.projectName), "\">").concat(project.projectName, "\n                  <span class=\"float-right\">\n                    <i class=\"fa fa-times mr-2 delete-pj-btn\" data-id=\"").concat(sanitizeId(project.projectName), "\"></i>\n                    <i class=\"fas fa-plus mr-4 add-todo-btn\" data-id=\"").concat(sanitizeId(project.projectName), "\"></i>\n\n                  </span>\n                </li>\n                ");
    container.insertAdjacentHTML('afterbegin', li);
  });
};

var renderTodos = function renderTodos(container) {
  container.innerHTML = '';
  _storage__WEBPACK_IMPORTED_MODULE_0__.store[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.id].todos.forEach(function (todo) {
    var card = "\n      <div class=\"card\" id=\"".concat(sanitizeId(todo.title), "\">\n        <h2 class=\"h2\">").concat(todo.title, "</h2>\n        <p>").concat(todo.description, "</p>\n        <p>Due Date: ").concat(todo.date, "</p>\n        <span>priority: ").concat(todo.priority, "</span>\n        <div>\n          <div class=\"btn btn-success btn-complete-task\" data-id=\"").concat(sanitizeId(todo.title), "\">Complete</div>\n          <div class=\"btn btn-warning btn-edit-task\" data-id=\"").concat(sanitizeId(todo.title), "\">Edit</div>\n          <div class=\"btn btn-danger btn-delete-task\" data-id=\"").concat(sanitizeId(todo.title), "\">Delete</div>\n        </div>\n      </div>\n    ");
    container.insertAdjacentHTML('afterbegin', card);
  });
};

var deleteElementFromDOM = function deleteElementFromDOM(id) {
  return document.querySelector("#".concat(id)).remove();
};

var getProjectIndex = function getProjectIndex(id) {
  return _storage__WEBPACK_IMPORTED_MODULE_0__.store.findIndex(function (pj) {
    return sanitizeId(pj.projectName) === id;
  });
};

var getTaskIndex = function getTaskIndex(id) {
  return _storage__WEBPACK_IMPORTED_MODULE_0__.store[_storage__WEBPACK_IMPORTED_MODULE_0__.currentIndex.id].todos.findIndex(function (task) {
    return sanitizeId(task.title) === id;
  });
};

var displayTodoForm = function displayTodoForm(element) {
  return element.classList.add('show');
};

var hideTodoForm = function hideTodoForm(element) {
  return element.classList.remove('show');
};

var getBtns = function getBtns(classElemnt) {
  return document.querySelectorAll("".concat(classElemnt));
};

 // module.exports = {
//   storeProject: storeProject,
//   storeTodos: storeTodos,
//   renderProjects: renderProjects,
//   sanitizeId: sanitizeId,
//   getProjectIndex: getProjectIndex,
//   deleteElementFromDOM: deleteElementFromDOM,
//   displayTodoForm: displayTodoForm,
//   hideTodoForm: hideTodoForm,
//   renderTodos: renderTodos,
//   getBtns: getBtns,
//   getTaskIndex: getTaskIndex,
//   updateTodo: updateTodo,
// };

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
var store = [];
var currentIndex = {
  id: 0,
  taskId: 0
};

var setLocalStorage = function setLocalStorage() {
  window.localStorage.setItem('todos', JSON.stringify(store));
};

var populateStore = function populateStore() {
  var colletion = JSON.parse(window.localStorage.getItem('todos'));

  if (colletion) {
    colletion.forEach(function (el) {
      store.push(el);
    });
  }
};



/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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






var UI = new _components_Ui__WEBPACK_IMPORTED_MODULE_2__.default();
var newProjectBtn = document.querySelector('#project-form__btn');
var projectName = document.querySelector('#project-form__name');
var todoSubmit = document.querySelector('.submit-todo');
var todoForm = document.querySelector('.todo-form-container');
newProjectBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var newProject = new _components_Project__WEBPACK_IMPORTED_MODULE_1__.default(projectName.value);
  newProject.saveProject();
  UI.renderProject();
});
todoSubmit.addEventListener('click', function () {
  // e.preventDefault();
  var title = document.querySelector('.todo-title').value;
  var description = document.querySelector('.todo-description').value;
  var dueDate = document.querySelector('.todo-due-date').value;
  var priority = document.querySelector('#priority').value;
  var Todo = new _components_Todos__WEBPACK_IMPORTED_MODULE_3__.default(title, description, dueDate, priority);
  Todo.saveTodo();
  (0,_components_common__WEBPACK_IMPORTED_MODULE_5__.hideTodoForm)(todoForm);
});
document.addEventListener('DOMContentLoaded', function () {
  (0,_components_storage__WEBPACK_IMPORTED_MODULE_4__.populateStore)();
  UI.renderProject();
  UI.showTodos();
});
})();

/******/ })()
;
//# sourceMappingURL=app.js.map