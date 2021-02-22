import { setLocalStorage, store } from './storage';
import { removeChildDOM } from './Todos';

export const deleteProject = () => {
  const deleteBtns = document.querySelectorAll('.deleteProject');
  deleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      store.forEach((obj, idx) => {
        if (obj.projectName === deleteBtn.dataset.name) {
          store.splice(idx, 1);
          setLocalStorage();
          removeChildDOM((deleteBtn.dataset.name).split(' ').join(''));
        }
      });
    });
  });
};

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

module.exports = Project