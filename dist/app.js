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
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todos */ "./src/components/Todos.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var deleteProject = function deleteProject() {
  var deleteBtns = document.querySelectorAll('.deleteProject');
  deleteBtns.forEach(function (deleteBtn) {
    deleteBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      _storage__WEBPACK_IMPORTED_MODULE_0__.store.forEach(function (obj, idx) {
        if (obj.projectName === deleteBtn.dataset.name) {
          _storage__WEBPACK_IMPORTED_MODULE_0__.store.splice(idx, 1);
          (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
          (0,_Todos__WEBPACK_IMPORTED_MODULE_1__.removeChildDOM)(deleteBtn.dataset.name.split(' ').join(''));
        }
      });
    });
  });
};

var Project = /*#__PURE__*/function () {
  function Project(projectName) {
    _classCallCheck(this, Project);

    this.projectName = projectName;
    this.projectContent = document.querySelector('.project-content');
  }

  _createClass(Project, [{
    key: "showName",
    get: function get() {
      return "\n              <li class=\"project list-group-item\">".concat(this.projectName, "</li>\n            ");
    }
  }, {
    key: "storeProjectName",
    value: function storeProjectName() {
      _storage__WEBPACK_IMPORTED_MODULE_0__.store.push({
        projectName: "".concat(this.projectName),
        id: _storage__WEBPACK_IMPORTED_MODULE_0__.store.length,
        todos: []
      });
    }
  }, {
    key: "renderProject",
    value: function renderProject() {
      this.projectContent.insertAdjacentHTML('afterbegin', this.showName);
      this.storeProjectName();
      (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
    }
  }]);

  return Project;
}();

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
/* harmony export */   "completedTask": () => (/* binding */ completedTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "deleteButton": () => (/* binding */ deleteButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var sanitizeName = function sanitizeName(text) {
  return text.split(' ').join('');
};
var removeChildDOM = function removeChildDOM(idx) {
  var child = document.querySelector("#".concat(idx));
  child.remove();
};

var editForm = function editForm() {
  return "\n          <form>\n            <label>title\n              <input type=\"text\" class=\"todo-title form-control edit-title\"></input>\n            </label>\n            <label>\n              description\n              <input type=\"text\" class=\"todo-title form-control edit-description\"></input>\n            </label>\n            <label> Due Date\n              <input type=\"date\" class=\"todo-title form-control edit-date\"></input>\n            </label>\n            <select name=\"edit-priority\" id=\"edit-priority\" class=\"form-control\">\n              <option value=\"high\">High</option>\n              <option value=\"medium\">medium</option>\n              <option value=\"low\">low</option>\n          </select>\n            <button type=\"submit\" class=\"edit-form-btn btn btn-primary\">Edit</button>\n          </form>\n          ";
};

var completedTask = function completedTask() {
  var btns = document.querySelectorAll('.complete-btn');
  btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var card = document.querySelector("#".concat(e.target.dataset.sucess));
      card.classList.toggle('border');
      card.classList.toggle('border-success');
    });
  });
};

var changeValues = function changeValues(projectIdx, idx) {
  var editBtn = document.querySelector('.edit-form-btn');
  editBtn.addEventListener('click', function () {
    var editedTitle = document.querySelector('.edit-title').value;
    var editedDescription = document.querySelector('.edit-description').value;
    var editedDate = document.querySelector('.edit-date').value;
    var editedPriority = document.querySelector('#edit-priority').value;
    _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx].todos[idx].title = editedTitle;
    _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx].todos[idx].description = editedDescription;
    _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx].todos[idx].dueDate = editedDate;
    _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx].todos[idx].priority = editedPriority;
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
  });
};

var editTask = function editTask(projectIdx) {
  var btns = document.querySelectorAll('.edit-btn');

  var editForms = _toConsumableArray(document.querySelectorAll('.edit-form')).reverse();

  btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var todoIndex = _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx].todos.findIndex(function (todo) {
        return sanitizeName(todo.title) === e.target.dataset.edit;
      });
      editForms[todoIndex].insertAdjacentHTML('afterbegin', editForm());
      changeValues(projectIdx, todoIndex);
    });
  });
};
var deleteButton = function deleteButton(projectIdx) {
  var data = document.querySelectorAll('.del-data');
  data.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var idxToDelete = _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx].todos.findIndex(function (td) {
        return td.title === e.target.dataset.name;
      });
      removeChildDOM(sanitizeName(e.target.dataset.name));
      _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx].todos.splice(idxToDelete, 1);
      (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
    });
  });
};

var Todo = /*#__PURE__*/function () {
  function Todo(title, description, dueDate, priority) {
    _classCallCheck(this, Todo);

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todoContent = document.querySelector('.todos-content');
  }

  _createClass(Todo, [{
    key: "showContent",
    get: function get() {
      return "\n    <div class=\"edit-form\"></div>\n      <div class=\"card border-primary row\" id=\"".concat(sanitizeName(this.title), "\">\n        <div class=\"card-body col-8\">\n          <ul class=\"list-group list-group-flush\">\n            <h1 class=\"list-group-item\">Title: ").concat(this.title, "</h1>\n            <li class=\"list-group-item\">Description: ").concat(this.description, "</li>\n            <li class=\"list-group-item\">Due_Date: ").concat(this.dueDate, "</li>\n            <li class=\"list-group-item\">Priority: ").concat(this.priority, "</li>\n          </ul>\n          <button class=\"btn btn-outline-danger del-data\" data-name=\"").concat(this.title, "\">Delete</button>\n          <button class=\"btn btn-outline-success complete-btn\" data-sucess=\"").concat(sanitizeName(this.title), "\">Completed task</button>\n          <button class=\"btn btn-outline-warning edit-btn\" data-edit=\"").concat(sanitizeName(this.title), "\">Edit</button>\n        </div>\n      </div>\n        ");
    }
  }, {
    key: "storeTodo",
    value: function storeTodo(projectIdx) {
      _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx].todos.push({
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
        priority: this.priority
      });
      (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();
    }
  }, {
    key: "renderTodo",
    value: function renderTodo(projectIdx) {
      this.todoContent.insertAdjacentHTML('afterbegin', this.showContent);
      this.storeTodo(projectIdx);
      deleteButton(projectIdx);
      editTask(projectIdx);
    }
  }]);

  return Todo;
}();

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var projectIdx = 0;

var Ui = /*#__PURE__*/function () {
  function Ui() {
    _classCallCheck(this, Ui);

    this.projectContent = document.querySelector('.project-content');
    this.todosConent = document.querySelector('.todos-content');
  }

  _createClass(Ui, [{
    key: "addBtn",
    value: function addBtn() {
      var _this = this;

      var addBtns = document.querySelectorAll('.addTodo');
      var todoForm = document.querySelector('.todo-form');
      addBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          todoForm.classList.remove('d-none');
          projectIdx = _storage__WEBPACK_IMPORTED_MODULE_0__.store.findIndex(function (pj) {
            return pj.projectName === e.target.dataset.name;
          });

          _this.displayTodos();
        });
      });
    }
  }, {
    key: "showTodos",
    value: function showTodos() {
      var _this2 = this;

      var projects = document.querySelectorAll('.project');
      projects.forEach(function (project) {
        project.addEventListener('click', function (e) {
          e.stopPropagation();
          projectIdx = _storage__WEBPACK_IMPORTED_MODULE_0__.store.findIndex(function (pj) {
            return (0,_Todos__WEBPACK_IMPORTED_MODULE_1__.sanitizeName)(pj.projectName) === e.target.id;
          });

          _this2.displayTodos();
        });
      });
    }
  }, {
    key: "displayTodos",
    value: function displayTodos() {
      var _this3 = this;

      this.todosConent.innerHTML = '';
      _storage__WEBPACK_IMPORTED_MODULE_0__.store[projectIdx].todos.forEach(function (todo) {
        var todoCard = "\n      <div class=\"edit-form\"></div>\n      <div class=\"card border-primary  row\" id=\"".concat((0,_Todos__WEBPACK_IMPORTED_MODULE_1__.sanitizeName)(todo.title), "\">\n        <div class=\"card-body col-8\">\n          <ul class=\"list-group list-group-flush\">\n            <h1 class=\"list-group-item\">Title:  ").concat(todo.title, "</h1>\n            <li class=\"list-group-item\">Description:  ").concat(todo.description, "</li>\n            <li class=\"list-group-item\">Due_date:  ").concat(todo.dueDate, "</li>\n            <li class=\"list-group-item\">priority: ").concat(todo.priority, "</li>\n          </ul>\n          <button class=\"btn btn-outline-danger del-data\" data-name=\"").concat(todo.title, "\">Delete</button>\n          <button class=\"btn btn-outline-success complete-btn\" data-sucess=\"").concat(todo.title, "\">Completed task</button>\n          <button class=\"btn btn-outline-warning edit-btn\" data-edit=\"").concat((0,_Todos__WEBPACK_IMPORTED_MODULE_1__.sanitizeName)(todo.title), "\">Edit</button>\n        </div>\n      </div>\n        ");

        _this3.todosConent.insertAdjacentHTML('afterbegin', todoCard);
      });
      (0,_Todos__WEBPACK_IMPORTED_MODULE_1__.deleteButton)(projectIdx);
      (0,_Todos__WEBPACK_IMPORTED_MODULE_1__.editTask)(projectIdx);
      (0,_Todos__WEBPACK_IMPORTED_MODULE_1__.completedTask)();
    }
  }, {
    key: "renderUi",
    value: function renderUi() {
      var _this4 = this;

      (0,_storage__WEBPACK_IMPORTED_MODULE_0__.populateStore)();
      _storage__WEBPACK_IMPORTED_MODULE_0__.store.forEach(function (project) {
        var li = "<li class=\"project list-group-item\"  id=\"".concat(project.projectName.split(' ').join(''), "\">").concat(project.projectName, "\n      <i class=\"fa fa-plus float-right addTodo\" aria-hidden=\"true\" data-name= \"").concat(project.projectName, "\"></i>\n      <i class=\"fas fa-times float-right mr-4 deleteProject\" aria-hidden=\"true\" data-name=\"").concat(project.projectName, "\"></i>\n      </li>");

        _this4.projectContent.insertAdjacentHTML('afterbegin', li);
      });
    }
  }]);

  return Ui;
}();



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
var store = [];

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
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Project */ "./src/components/Project.js");
/* harmony import */ var _components_Todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Todos */ "./src/components/Todos.js");
/* harmony import */ var _components_Ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Ui */ "./src/components/Ui.js");



var data = document.querySelector('.submit-btn');
data.addEventListener('click', function () {
  var ProjectTitle = document.querySelector('input').value;
  var newProject = new _components_Project__WEBPACK_IMPORTED_MODULE_0__.default(ProjectTitle);
  newProject.renderProject();
});
var todoBtm = document.querySelector('.hitme');
todoBtm.addEventListener('click', function (e) {
  var todoForm = document.querySelector('.todo-form');
  e.preventDefault();
  var title = document.querySelector('.todo-title').value;
  var description = document.querySelector('.todo-description').value;
  var dueDate = document.querySelector('.todo-due-date').value;
  var priority = document.querySelector('#priority').value;
  var todo = new _components_Todos__WEBPACK_IMPORTED_MODULE_1__.default(title, description, dueDate, priority);
  todoForm.classList.add('d-none');
  todo.renderTodo(_components_Ui__WEBPACK_IMPORTED_MODULE_2__.projectIdx);
});
document.addEventListener('DOMContentLoaded', function () {
  var UI = new _components_Ui__WEBPACK_IMPORTED_MODULE_2__.default();
  UI.renderUi(_components_Ui__WEBPACK_IMPORTED_MODULE_2__.projectIdx);
  (0,_components_Project__WEBPACK_IMPORTED_MODULE_0__.deleteProject)();
  UI.addBtn();
  UI.showTodos();
});
})();

/******/ })()
;
//# sourceMappingURL=app.js.map