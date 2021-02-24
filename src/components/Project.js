/* eslint-disable class-methods-use-this */
import { setLocalStorage, store } from './storage';
import { storeProject, deleteElementFromDOM, getProjectIndex } from './common';

export default class Project {
  constructor(name) {
    this.name = name;
  }

  deleteProject() {
    const btns = document.querySelectorAll('.delete-pj-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectIndex = getProjectIndex(e.target.dataset.id);
        store.splice(projectIndex, 1);
        setLocalStorage();
        deleteElementFromDOM(e.target.dataset.id);
      });
    });
  }

  saveProject() {
    storeProject(this.name);
    setLocalStorage();
  }
}

module.exports = Project;