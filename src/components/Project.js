import store from '.././index'

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
    store.push({
      projectName: `${this.projectName}`,
      id: store.length,
      todos: []
    })
  }

  renderProject() {
    this.projectContent.insertAdjacentHTML('afterbegin', this.showName)
    this.storeProjectName()
    console.log(store)
  }

}

export default Project