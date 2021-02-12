import store from '.././index';
import Todo from '../components/Todos';
import {setLocalStorage} from './storage';

class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.projectContent = document.querySelector('.project-content')
  }

  get showName() {
    return  `
              <li class="project">${this.projectName}</li>
            `
  }

  // listenProject() {
  //   populateStore();
  //   const projects = document.querySelectorAll('.project');
  //   projects.forEach(pj => {
  //     pj.addEventListener('click', e => {
  //       console.log(e.target)
  //     })
  //   })
  // }

  storeProjectName() {
    store.push({
      projectName: `${this.projectName}`,
      id: store.length,
      todos: []
    })
    
  }

  

  renderProject() {
    this.projectContent.insertAdjacentHTML('afterbegin', this.showName)
    this.storeProjectName()
    setLocalStorage()
  }

}

export default Project