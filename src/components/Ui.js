import store from '.././index';
import { populateStore } from './storage';
import Todo from './Todos';

export default class Ui {
  constructor() {
    this.projectContent = document.querySelector('.project-content')
  }

  renderUi() { 
    populateStore()
    store.forEach(project => {
      const li = `<li class="project list-group-item"  id="${project.id}">${project.projectName}
      <i class="fa fa-plus float-right addTodo" aria-hidden="true"></i>
      <i class="fas fa-times float-right mr-4 deleteProject" aria-hidden="true"></i>
      </li>`
      this.projectContent.insertAdjacentHTML('afterbegin', li)
    })
    
  }

}
