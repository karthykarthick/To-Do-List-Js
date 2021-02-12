import store from '.././index';
import { populateStore } from './storage';

class Ui {
  constructor() {
    this.projectContent = document.querySelector('.project-content')
  }

  renderUi() { 
    populateStore()
    console.log.store
    store.forEach(project => {
      const li = `<li class="project">${project.projectName}</li>`
      this.projectContent.insertAdjacentHTML('afterbegin', li)
    })
  }

}

export default Ui;