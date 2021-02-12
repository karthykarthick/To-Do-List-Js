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
      const li = `<li class="project" id="${project.id}">${project.projectName}</li>`
      this.projectContent.insertAdjacentHTML('afterbegin', li)
    })
    
  }

}
