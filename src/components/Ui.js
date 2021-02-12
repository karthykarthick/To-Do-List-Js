import store from '.././index';
import { populateStore, setLocalStorage } from './storage';
import Todo from './Todos';

export default class Ui {
  constructor() {
    this.projectContent = document.querySelector('.project-content')
  }

  removeChildDOM(idx) {
    const child = document.querySelector(`#${idx}`);
    child.remove()
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
      <i class="fa fa-plus float-right addTodo" aria-hidden="true"></i>
      <i class="fas fa-times float-right mr-4 deleteProject" aria-hidden="true" data-name="${project.projectName}"></i>
      </li>`
      this.projectContent.insertAdjacentHTML('afterbegin', li)
   
    })
    
  }

}

// arr.some((el,idx) =>{ 
//   if(el.title == 'title2') {
//       index = idx
//   }
// })