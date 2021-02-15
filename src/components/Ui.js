import store from '.././index';
import { populateStore, setLocalStorage } from './storage';
import Todo from './Todos';

let projectIdx = 0

export default class Ui {
  constructor() {
    this.projectContent = document.querySelector('.project-content');
    this.todosConent = document.querySelector('.todos-content');
  }

  removeChildDOM(idx) {
    const child = document.querySelector(`#${idx}`);
    child.remove()
  }

  addBtn() {
    const addBtns = document.querySelectorAll('.addTodo');
    const todoForm = document.querySelector('.todo-form');
    
    addBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        todoForm.classList.remove('d-none');
        store.findIndex((pj, idx) => {
          if (pj.projectName == e.target.dataset.name) projectIdx = idx;
        })
        console.log(projectIdx)
      })
    })
  }

  showTodos() {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
      project.addEventListener('click', e => {
        store.findIndex((pj, index) => {
          if(sanitizeName(pj.projectName) === e.target.id) {
            projectIdx = index;
            console.log(projectIdx)
            this.displayTodos()
          }
        })
      })
    })
  }

  displayTodos() {
    this.todosConent.innerHTML = '';
    store[projectIdx].todos.forEach(todo => {
      const todoCard = ` <h1>${todo.title}</h1>
          <p>${todo.description}</p>
          <p>${todo.dueDate}</p>
          <p>${todo.priority}</p>
        `
      this.todosConent.insertAdjacentHTML('afterbegin', todoCard)
    })
  }

  deleteProject() {
    const deleteBtns = document.querySelectorAll('.deleteProject')
    deleteBtns.forEach(deleteBtn => {
      deleteBtn.addEventListener('click', () => {
        store.some((obj, idx) => {
          if(obj.projectName == deleteBtn.dataset.name) {
            store.splice(idx, 1)
            setLocalStorage()
            this.removeChildDOM((deleteBtn.dataset.name).split(' ').join(''))
          }
        })
      })
    })
  }

  

  renderUi() { 
    populateStore()
    store.forEach(project => {
      const li = `<li class="project list-group-item"  id="${project.projectName.split(' ').join('')}">${project.projectName}
      <i class="fa fa-plus float-right addTodo" aria-hidden="true" data-name= "${project.projectName}"></i>
      <i class="fas fa-times float-right mr-4 deleteProject" aria-hidden="true" data-name="${project.projectName}"></i>
      </li>`
      this.projectContent.insertAdjacentHTML('afterbegin', li)
   
    })
    
  }

}

const sanitizeName = (text) => text.split(' ').join('')
// arr.some((el,idx) =>{ 
//   if(el.title == 'title2') {
//       index = idx
//   }
// })