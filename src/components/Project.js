/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
import store from '../index';
import { setLocalStorage, populateStore } from './storage';

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
    store.push({
      projectName: `${this.projectName}`,
      id: store.length,
      todos: [],
    });
  }

  renderProject() {
    this.projectContent.insertAdjacentHTML('afterbegin', this.showName);
    this.storeProjectName();
    setLocalStorage();
  }
}

export default Project;
