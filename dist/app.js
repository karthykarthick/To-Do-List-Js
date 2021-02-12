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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././index */ "./src/index.js");
/* harmony import */ var _components_Todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Todos */ "./src/components/Todos.js");



class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.projectContent = document.querySelector('.project-content')
  }

  get showName() {
    return  `
              <li>${this.projectName}</li>
            `
  }

  storeProjectName() {
    _index__WEBPACK_IMPORTED_MODULE_0__.default.push({
      projectName: `${this.projectName}`,
      id: _index__WEBPACK_IMPORTED_MODULE_0__.default.length,
      todos: []
    })
  }

  

  renderProject() {
    this.projectContent.insertAdjacentHTML('afterbegin', this.showName)
    this.storeProjectName()
    console.log(_index__WEBPACK_IMPORTED_MODULE_0__.default);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././index */ "./src/index.js");


class Todo{
    constructor (title,description,dueDate,priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todoContent = document.querySelector('.todos-content');
    }

    get showContent(){
        return (` <h1>${this.title}</h1>
          <p>${this.description}</p>
          <p>${this.dueDate}</p>
          <p>${this.priority}</p>
        `)
    }

    storeTodo(){
      _index__WEBPACK_IMPORTED_MODULE_0__.default[0].todos.push('hello');
      console.log(_index__WEBPACK_IMPORTED_MODULE_0__.default[0].todos);
    }

    renderTodo(){
        this.todoContent.insertAdjacentHTML("afterbegin",this.showContent);
        this.storeTodo();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Project */ "./src/components/Project.js");
/* harmony import */ var _components_Todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Todos */ "./src/components/Todos.js");




const store = []

const data = document.querySelector(".submit-btn");
data.addEventListener("click", (e) => {
  e.preventDefault();
  const ProjectTitle = document.querySelector("input").value;
  const newProject = new _components_Project__WEBPACK_IMPORTED_MODULE_1__.default(ProjectTitle);
  newProject.renderProject();
});

const todoBtm = document.querySelector(".hitme");
todoBtm.addEventListener("click",(e) =>{
    e.preventDefault();
    const title = document.querySelector('.todo-title').value;
    const description = document.querySelector(".todo-description").value;
    const dueDate = document.querySelector('.todo-due-date').value;
    const priority = document.querySelector('#priority').value;
    const todo = new _components_Todos__WEBPACK_IMPORTED_MODULE_2__.default(title,description,dueDate,priority);
    todo.renderTodo();
} )
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=app.js.map